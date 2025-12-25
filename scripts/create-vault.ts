/**
 * Create a new vault with automatic metadata creation
 * 
 * Usage: npx ts-node scripts/create-vault.ts <AssetId> [--demo]
 * Example: npx ts-node scripts/create-vault.ts NVDAx3
 *          npx ts-node scripts/create-vault.ts DemoNVDAx5 --demo
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
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { BorshCoder } from "@coral-xyz/anchor";
import * as fs from "fs";
import * as path from "path";

// Program IDs
const VAULT_PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

const UTILIZATION_CAP_BPS = 8000; // 80%

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
        console.log("Usage: npx ts-node scripts/create-vault.ts <AssetId> [--demo]");
        console.log("Example: npx ts-node scripts/create-vault.ts NVDAx3");
        process.exit(1);
    }

    const ASSET_ID = args[0];
    const isDemo = args.includes("--demo");

    console.log(`\n=== Creating ${isDemo ? "Demo" : "Production"} Vault: ${ASSET_ID} ===\n`);

    // Load wallet
    const walletPath = process.env.WALLET_PATH || path.join(process.env.HOME!, ".config/solana/id.json");
    const walletData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const payer = Keypair.fromSecretKey(Uint8Array.from(walletData));

    console.log("Authority:", payer.publicKey.toBase58());

    // Load mint addresses from .env.mints
    const envPath = path.join(__dirname, ".env.mints");
    if (!fs.existsSync(envPath)) {
        console.error("Error: .env.mints not found. Run create-nvdax.ts and create-usdc.ts first.");
        process.exit(1);
    }
    const envContent = fs.readFileSync(envPath, "utf-8");
    const nvdaxMatch = envContent.match(/NVDAX_MINT=(\w+)/);
    const usdcMatch = envContent.match(/USDC_MINT=(\w+)/);

    if (!nvdaxMatch || !usdcMatch) {
        console.error("Error: Missing NVDAX_MINT or USDC_MINT in .env.mints");
        process.exit(1);
    }

    const nvdaxMint = new PublicKey(nvdaxMatch[1]);
    const usdcMint = new PublicKey(usdcMatch[1]);

    console.log("NVDAx Mint:", nvdaxMint.toBase58());
    console.log("USDC Mint:", usdcMint.toBase58());

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

    // Generate new keypairs for accounts
    const shareMintKeypair = Keypair.generate();
    const vaultTokenAccountKeypair = Keypair.generate();
    const premiumTokenAccountKeypair = Keypair.generate();

    console.log("Share Mint:", shareMintKeypair.publicKey.toBase58());
    console.log("Vault Token Account:", vaultTokenAccountKeypair.publicKey.toBase58());
    console.log("Premium Token Account:", premiumTokenAccountKeypair.publicKey.toBase58());

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
            utilization_cap_bps: UTILIZATION_CAP_BPS,
        });
    } catch {
        initData = coder.instruction.encode("initializeVault", {
            assetId: ASSET_ID,
            utilizationCapBps: UTILIZATION_CAP_BPS,
        });
    }

    const initKeys = [
        { pubkey: vaultPda, isSigner: false, isWritable: true },
        { pubkey: nvdaxMint, isSigner: false, isWritable: false },
        { pubkey: usdcMint, isSigner: false, isWritable: false },
        { pubkey: shareMintKeypair.publicKey, isSigner: true, isWritable: true },
        { pubkey: vaultTokenAccountKeypair.publicKey, isSigner: true, isWritable: true },
        { pubkey: premiumTokenAccountKeypair.publicKey, isSigner: true, isWritable: true },
        { pubkey: shareEscrowPda, isSigner: false, isWritable: true },
        { pubkey: payer.publicKey, isSigner: true, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
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
            [payer, shareMintKeypair, vaultTokenAccountKeypair, premiumTokenAccountKeypair],
            { commitment: "confirmed" }
        );

        console.log("✅ Vault initialized:", signature);

        // Step 2: Create Metadata
        console.log("\n--- Step 2: Creating Metadata ---");
        const tokenName = isDemo ? `Demo v${ASSET_ID.replace(/[^0-9]/g, '') || 'NVDAx'}` : "vNVDAx";
        const tokenSymbol = "vNVDAx";
        const tokenUri = "https://raw.githubusercontent.com/feeniks01/optionsfi/main/app/public/metadata/vnvdax.json";

        await createMetadata(
            connection,
            coder,
            payer,
            vaultPda,
            shareMintKeypair.publicKey,
            tokenName,
            tokenSymbol,
            tokenUri
        );

        // Save addresses
        const prefix = ASSET_ID.toUpperCase().replace(/[^A-Z0-9]/g, "_");
        fs.appendFileSync(envPath, `\n# ${ASSET_ID} Vault\n`);
        fs.appendFileSync(envPath, `${prefix}_VAULT_PDA=${vaultPda.toBase58()}\n`);
        fs.appendFileSync(envPath, `${prefix}_SHARE_MINT=${shareMintKeypair.publicKey.toBase58()}\n`);
        fs.appendFileSync(envPath, `${prefix}_VAULT_TOKEN_ACCOUNT=${vaultTokenAccountKeypair.publicKey.toBase58()}\n`);
        fs.appendFileSync(envPath, `${prefix}_PREMIUM_TOKEN_ACCOUNT=${premiumTokenAccountKeypair.publicKey.toBase58()}\n`);
        fs.appendFileSync(envPath, `${prefix}_SHARE_ESCROW=${shareEscrowPda.toBase58()}\n`);

        console.log("\n========================================");
        console.log(`✅ ${ASSET_ID} Vault Created Successfully!`);
        console.log("========================================");
        console.log("\nVault Address:", vaultPda.toBase58());
        console.log("Share Mint:", shareMintKeypair.publicKey.toBase58());
        console.log("\nNext steps:");
        console.log(`1. Add '${ASSET_ID.toLowerCase()}' to vault-config.ts`);
        console.log(`2. Add '${ASSET_ID}' to keeper PYTH_FEED_IDS`);
        console.log("3. Deploy keeper: cd infra/keeper && railway up --service keeper");

    } catch (error: any) {
        console.error("Error:", error.message);
        if (error.logs) {
            console.error("Logs:", error.logs);
        }
    }
}

main().catch(console.error);
