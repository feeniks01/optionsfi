/**
 * Initialize DemoNVDAx4 Vault (with Virtual Offset security mechanism)
 * 
 * Creates a new demo vault using the updated program with virtual_offset
 */

import {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
    SystemProgram,
    SYSVAR_RENT_PUBKEY,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Program, AnchorProvider, Wallet } from "@coral-xyz/anchor";
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
    console.log("Security: Virtual Offset mechanism (no dead shares burned)");

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const wallet = new Wallet(payer);
    const provider = new AnchorProvider(connection, wallet, { commitment: "confirmed" });

    // Load IDL
    const idlPath = path.join(__dirname, "../target/idl/vault.json");
    const idl = JSON.parse(fs.readFileSync(idlPath, "utf-8"));
    const program = new Program(idl, provider);

    // Derive vault PDA
    const [vaultPda, vaultBump] = PublicKey.findProgramAddressSync(
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

    // Derive share escrow PDA (auto-initialized by program)
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

    // Initialize vault
    console.log("\nInitializing vault...");

    // Debug: List available methods
    console.log("Available methods:", Object.keys(program.methods));

    try {
        // Debug: Inspect how Anchor sees the instruction
        console.log("IDL Instructions:", idl.instructions.map((i: any) => i.name));
        const initVaultIx = idl.instructions.find((i: any) => i.name === 'initialize_vault' || i.name === 'initializeVault');
        console.log("InitializeVault instruction accounts:", initVaultIx?.accounts?.map((a: any) => a.name));

        // Build the instruction manually to debug
        const methodBuilder = program.methods.initializeVault(ASSET_ID, UTILIZATION_CAP_BPS);

        console.log("Building accounts...");
        // NOTE: Omitting 'vault' to let Anchor auto-derive from arg seed
        const accountsBuilder = methodBuilder.accountsPartial({
            // vault: vaultPda,  // Let Anchor derive from asset_id arg
            underlying_mint: nvdaxMint,
            premium_mint: usdcMint,
            share_mint: shareMintKeypair.publicKey,
            vault_token_account: vaultTokenAccountKeypair.publicKey,
            premium_token_account: premiumTokenAccountKeypair.publicKey,
            // share_escrow: shareEscrowPda, // this depends on vault, let Anchor derive too
            authority: payer.publicKey,
            system_program: SystemProgram.programId,
            token_program: TOKEN_PROGRAM_ID,
            rent: SYSVAR_RENT_PUBKEY,
        });

        console.log("Adding signers...");
        const signedBuilder = accountsBuilder.signers([shareMintKeypair, vaultTokenAccountKeypair, premiumTokenAccountKeypair]);

        // Debug: try to build instruction first to see the error
        console.log("Building instruction to debug...");
        try {
            const ix = await signedBuilder.instruction();
            console.log("Instruction keys:", ix.keys.map(k => k.pubkey.toBase58()));
        } catch (ixErr: any) {
            console.log("Instruction error:", ixErr.message);
        }

        console.log("Sending transaction...");
        const tx = await signedBuilder.rpc();

        console.log("Vault initialized:", tx);
        console.log("\n✅ DemoNVDAx4 Vault is ready!");
        console.log("\nVault Address:", vaultPda.toBase58());
        console.log("Share Mint:", shareMintKeypair.publicKey.toBase58());
        console.log("\nNote: This vault uses virtual_offset for first-depositor protection.");
        console.log("First depositor gets FULL value - no shares are 'burned'.");

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
