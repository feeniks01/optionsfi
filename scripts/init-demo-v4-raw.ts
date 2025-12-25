/**
 * Initialize DemoNVDAx4 Vault (with Virtual Offset security mechanism)
 * 
 * Uses raw transaction building with BorshCoder to work around Anchor SDK account resolution issues
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

// Load program ID
const VAULT_PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");

// DemoNVDAx4 - with virtual offset security mechanism
const ASSET_ID = "DemoNVDAx4";
const UTILIZATION_CAP_BPS = 8000; // 80%

async function main() {
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

    console.log("NVDAx Mint (shared):", nvdaxMint.toBase58());
    console.log("USDC Mint:", usdcMint.toBase58());
    console.log("\nCreating DemoNVDAx4 vault with assetId:", ASSET_ID);

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Derive vault PDA
    const [vaultPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(ASSET_ID)],
        VAULT_PROGRAM_ID
    );
    console.log("\nVault PDA:", vaultPda.toBase58());

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

    // Check if vault already exists
    const vaultAccount = await connection.getAccountInfo(vaultPda);
    if (vaultAccount) {
        console.log("\nVault already exists!");
        process.exit(0);
    }

    // Load IDL for encoder
    const idlPath = path.join(__dirname, "../target/idl/vault.json");
    const idl = JSON.parse(fs.readFileSync(idlPath, "utf-8"));

    // Use BorshCoder to properly encode instruction data
    const coder = new BorshCoder(idl);

    // Try snake_case first (matching IDL), then camelCase as fallback
    let instructionData: Buffer;
    try {
        instructionData = coder.instruction.encode("initialize_vault", {
            asset_id: ASSET_ID,
            utilization_cap_bps: UTILIZATION_CAP_BPS,
        });
    } catch {
        // Try camelCase
        instructionData = coder.instruction.encode("initializeVault", {
            assetId: ASSET_ID,
            utilizationCapBps: UTILIZATION_CAP_BPS,
        });
    }

    console.log("\nInstruction data:", Buffer.from(instructionData).toString("hex"));

    // Build accounts list in order from IDL
    const keys = [
        { pubkey: vaultPda, isSigner: false, isWritable: true },                    // vault
        { pubkey: nvdaxMint, isSigner: false, isWritable: false },                  // underlying_mint
        { pubkey: usdcMint, isSigner: false, isWritable: false },                   // premium_mint
        { pubkey: shareMintKeypair.publicKey, isSigner: true, isWritable: true },   // share_mint
        { pubkey: vaultTokenAccountKeypair.publicKey, isSigner: true, isWritable: true }, // vault_token_account
        { pubkey: premiumTokenAccountKeypair.publicKey, isSigner: true, isWritable: true }, // premium_token_account
        { pubkey: shareEscrowPda, isSigner: false, isWritable: true },              // share_escrow
        { pubkey: payer.publicKey, isSigner: true, isWritable: true },              // authority
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },    // system_program
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },           // token_program
        { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },         // rent
    ];

    const instruction = new TransactionInstruction({
        keys,
        programId: VAULT_PROGRAM_ID,
        data: instructionData,
    });

    console.log("\nSending transaction...");

    const tx = new Transaction().add(instruction);

    try {
        const signature = await sendAndConfirmTransaction(
            connection,
            tx,
            [payer, shareMintKeypair, vaultTokenAccountKeypair, premiumTokenAccountKeypair],
            { commitment: "confirmed" }
        );

        console.log("Vault initialized:", signature);
        console.log("\n✅ DemoNVDAx4 Vault is ready!");
        console.log("\nVault Address:", vaultPda.toBase58());
        console.log("Share Mint:", shareMintKeypair.publicKey.toBase58());

        // Save addresses
        fs.appendFileSync(envPath, `\n# DemoNVDAx4 Vault (Virtual Offset)\n`);
        fs.appendFileSync(envPath, `DEMO_V4_VAULT_PDA=${vaultPda.toBase58()}\n`);
        fs.appendFileSync(envPath, `DEMO_V4_SHARE_MINT=${shareMintKeypair.publicKey.toBase58()}\n`);
        fs.appendFileSync(envPath, `DEMO_V4_VAULT_TOKEN_ACCOUNT=${vaultTokenAccountKeypair.publicKey.toBase58()}\n`);
        fs.appendFileSync(envPath, `DEMO_V4_PREMIUM_TOKEN_ACCOUNT=${premiumTokenAccountKeypair.publicKey.toBase58()}\n`);
        fs.appendFileSync(envPath, `DEMO_V4_SHARE_ESCROW=${shareEscrowPda.toBase58()}\n`);
    } catch (error: any) {
        console.error("Error initializing vault:", error.message);
        if (error.logs) {
            console.error("Logs:", error.logs);
        }
    }
}

main().catch(console.error);
