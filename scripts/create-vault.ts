/**
 * Create a new vault with automatic metadata creation
 * 
 * Usage: npx ts-node scripts/create-vault.ts <AssetId|Id> [--config path]
 * Example: npx ts-node scripts/create-vault.ts NVDAx
 *          npx ts-node scripts/create-vault.ts nvdax --config ./config/vaults.json
 */

import {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
    SystemProgram,
    SYSVAR_RENT_PUBKEY,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from "@solana/spl-token";
import { BorshCoder } from "@coral-xyz/anchor";
import * as fs from "fs";
import * as path from "path";

// Program IDs
const VAULT_PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

type VaultConfigEntry = {
    id: string;
    assetId: string;
    name: string;
    symbol: string;
    strategy: string;
    logo: string;
    accentColor: string;
    strikeOffset: number;
    premiumRange: [number, number];
    isDemo: boolean;
    decimals: number;
    pythFeedId: string;
    underlyingMint: string;
    premiumMint: string;
    oracleTicker?: string;
    utilizationCapBps?: number;
    minEpochDuration?: number;
    enabled?: boolean;
    shareMetadata?: {
        name: string;
        symbol: string;
        uri: string;
    };
};

async function createMetadata(
    connection: Connection,
    coder: BorshCoder,
    payer: Keypair,
    vaultPda: PublicKey,
    shareMint: PublicKey,
    name: string,
    symbol: string,
    uri: string
): Promise<void> {
    // Derive metadata PDA
    const [metadataPda] = PublicKey.findProgramAddressSync(
        [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            shareMint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
    );

    // Check if metadata already exists
    const metadataInfo = await connection.getAccountInfo(metadataPda);
    if (metadataInfo) {
        console.log("✓ Metadata already exists");
        return;
    }

    console.log("\nCreating share token metadata...");

    // Encode instruction
    let instructionData: Buffer;
    try {
        instructionData = coder.instruction.encode("create_share_metadata", {
            name,
            symbol,
            uri,
        });
    } catch {
        instructionData = coder.instruction.encode("createShareMetadata", {
            name,
            symbol,
            uri,
        });
    }

    const keys = [
        { pubkey: vaultPda, isSigner: false, isWritable: false },
        { pubkey: shareMint, isSigner: false, isWritable: false },
        { pubkey: metadataPda, isSigner: false, isWritable: true },
        { pubkey: payer.publicKey, isSigner: true, isWritable: true },
        { pubkey: payer.publicKey, isSigner: true, isWritable: false },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: TOKEN_METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
    ];

    const instruction = new TransactionInstruction({
        keys,
        programId: VAULT_PROGRAM_ID,
        data: instructionData,
    });

    const tx = new Transaction().add(instruction);
    const signature = await sendAndConfirmTransaction(connection, tx, [payer], { commitment: "confirmed" });
    console.log("✅ Metadata created:", signature);
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log("Usage: npx ts-node scripts/create-vault.ts <AssetId|Id> [--config path]");
        console.log("Example: npx ts-node scripts/create-vault.ts NVDAx");
        process.exit(1);
    }

    const configFlagIndex = args.indexOf("--config");
    const configPath = configFlagIndex >= 0 && args[configFlagIndex + 1]
        ? path.resolve(process.cwd(), args[configFlagIndex + 1])
        : path.resolve(__dirname, "../config/vaults.json");

    const configRaw = fs.readFileSync(configPath, "utf-8");
    const vaultConfigs = JSON.parse(configRaw) as VaultConfigEntry[];

    const inputId = args[0].toLowerCase();
    const vaultConfig = vaultConfigs.find(v => v.assetId.toLowerCase() === inputId || v.id.toLowerCase() === inputId);

    if (!vaultConfig) {
        console.error(`Vault config not found for '${args[0]}' in ${configPath}`);
        console.log("Available IDs:", vaultConfigs.map(v => `${v.id} (${v.assetId})`).join(", "));
        process.exit(1);
    }

    const ASSET_ID = vaultConfig.assetId;
    const isDemo = vaultConfig.isDemo;
    const utilizationCapBps = vaultConfig.utilizationCapBps ?? 8000;
    const minEpochDuration = vaultConfig.minEpochDuration ?? (isDemo ? 900 : 604800);

    console.log(`\n=== Creating ${isDemo ? "Demo" : "Production"} Vault: ${ASSET_ID} ===\n`);

    // Load wallet
    const walletPath = process.env.WALLET_PATH || path.join(process.env.HOME!, ".config/solana/id.json");
    const walletData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const payer = Keypair.fromSecretKey(Uint8Array.from(walletData));

    console.log("Authority:", payer.publicKey.toBase58());

    const underlyingMint = new PublicKey(vaultConfig.underlyingMint);
    const premiumMint = new PublicKey(vaultConfig.premiumMint);

    console.log("Underlying Mint:", underlyingMint.toBase58());
    console.log("Premium Mint:", premiumMint.toBase58());

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Derive vault PDA
    const [vaultPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(ASSET_ID)],
        VAULT_PROGRAM_ID
    );
    console.log("\nVault PDA:", vaultPda.toBase58());

    // Check if vault already exists
    const vaultAccount = await connection.getAccountInfo(vaultPda);
    if (vaultAccount) {
        console.log("Vault already exists!");
        process.exit(0);
    }

    // Derive PDAs and ATAs for vault-owned accounts
    const [shareMintPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("share_mint"), vaultPda.toBuffer()],
        VAULT_PROGRAM_ID
    );
    const vaultTokenAccount = await getAssociatedTokenAddress(
        underlyingMint,
        vaultPda,
        true
    );
    const premiumTokenAccount = await getAssociatedTokenAddress(
        premiumMint,
        vaultPda,
        true
    );

    console.log("Share Mint PDA:", shareMintPda.toBase58());
    console.log("Vault Token Account:", vaultTokenAccount.toBase58());
    console.log("Premium Token Account:", premiumTokenAccount.toBase58());

    // Derive share escrow PDA
    const [shareEscrowPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("share_escrow"), vaultPda.toBuffer()],
        VAULT_PROGRAM_ID
    );
    console.log("Share Escrow PDA:", shareEscrowPda.toBase58());

    // Load IDL for encoder
    const idlPath = path.join(__dirname, "../target/idl/vault.json");
    const idl = JSON.parse(fs.readFileSync(idlPath, "utf-8"));
    const coder = new BorshCoder(idl);

    // Step 1: Initialize Vault
    console.log("\n--- Step 1: Initializing Vault ---");

    let initData: Buffer;
    try {
        initData = coder.instruction.encode("initialize_vault", {
            asset_id: ASSET_ID,
            utilization_cap_bps: utilizationCapBps,
            min_epoch_duration: minEpochDuration,
        });
    } catch {
        initData = coder.instruction.encode("initializeVault", {
            assetId: ASSET_ID,
            utilizationCapBps: utilizationCapBps,
            minEpochDuration: minEpochDuration,
        });
    }

    const initKeys = [
        { pubkey: vaultPda, isSigner: false, isWritable: true },
        { pubkey: underlyingMint, isSigner: false, isWritable: false },
        { pubkey: premiumMint, isSigner: false, isWritable: false },
        { pubkey: shareMintPda, isSigner: false, isWritable: true },
        { pubkey: vaultTokenAccount, isSigner: false, isWritable: true },
        { pubkey: premiumTokenAccount, isSigner: false, isWritable: true },
        { pubkey: shareEscrowPda, isSigner: false, isWritable: true },
        { pubkey: payer.publicKey, isSigner: true, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ];

    const initInstruction = new TransactionInstruction({
        keys: initKeys,
        programId: VAULT_PROGRAM_ID,
        data: initData,
    });

    const initTx = new Transaction().add(initInstruction);

    try {
        const signature = await sendAndConfirmTransaction(
            connection,
            initTx,
            [payer],
            { commitment: "confirmed" }
        );

        console.log("✅ Vault initialized:", signature);

        // Step 2: Create Metadata
        console.log("\n--- Step 2: Creating Metadata ---");
        const tokenName = vaultConfig.shareMetadata?.name || `v${vaultConfig.symbol}`;
        const tokenSymbol = vaultConfig.shareMetadata?.symbol || `v${vaultConfig.symbol}`;
        const tokenUri = vaultConfig.shareMetadata?.uri || "https://raw.githubusercontent.com/feeniks01/optionsfi/main/app/public/metadata/vnvdax.json";

        await createMetadata(
            connection,
            coder,
            payer,
            vaultPda,
            shareMintPda,
            tokenName,
            tokenSymbol,
            tokenUri
        );

        console.log("\n========================================");
        console.log(`✅ ${ASSET_ID} Vault Created Successfully!`);
        console.log("========================================");
        console.log("\nVault Address:", vaultPda.toBase58());
        console.log("Share Mint:", shareMintPda.toBase58());
        console.log("\nNext steps:");
        console.log("1. Ensure config/vaults.json has correct metadata and feed IDs");
        console.log("2. Deploy keeper: cd infra/keeper && npm run dev");
        console.log("3. Deploy frontend: cd app && npm run dev");

    } catch (error: any) {
        console.error("Error:", error.message);
        if (error.logs) {
            console.error("Logs:", error.logs);
        }
    }
}

main().catch(console.error);
