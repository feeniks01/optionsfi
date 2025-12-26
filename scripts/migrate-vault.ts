#!/usr/bin/env npx ts-node
/**
 * Vault Migration Script
 * 
 * Migrates from old vault (pre-security-update) to new vault.
 * Uses force_close_vault to recover rent from incompatible vault,
 * then creates a new vault with the same asset ID.
 * 
 * Usage: npx ts-node scripts/migrate-vault.ts <assetId>
 * Example: npx ts-node scripts/migrate-vault.ts DemoNVDAx6
 * 
 * WARNING: This will DESTROY the old vault. Any tokens in it will be lost.
 * Make sure to withdraw all funds before running this script.
 */

import * as anchor from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress, createAssociatedTokenAccountInstruction } from "@solana/spl-token";
import fs from "fs";
import path from "path";

// Configuration
const RPC_URL = process.env.RPC_URL || "https://api.devnet.solana.com";
const WALLET_PATH = process.env.WALLET_PATH || process.env.ANCHOR_WALLET || "~/.config/solana/id.json";
const PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");

// Devnet mints
const UNDERLYING_MINT = new PublicKey("DemoNVDAMint11111111111111111111111111111111"); // Mock NVDAx
const USDC_MINT = new PublicKey("5z8s3k7mkmH1DKFPvjkVd8PxapEeYaPJjqQTJeUEN1i4"); // Mock USDC

function loadWallet(): Keypair {
    const resolvedPath = WALLET_PATH.replace("~", process.env.HOME || "");
    const keypairData = JSON.parse(fs.readFileSync(resolvedPath, "utf-8"));
    return Keypair.fromSecretKey(Uint8Array.from(keypairData));
}

function deriveVaultPda(assetId: string): [PublicKey, number] {
    return PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(assetId)],
        PROGRAM_ID
    );
}

async function main() {
    const assetId = process.argv[2];

    if (!assetId) {
        console.log("Usage: npx ts-node scripts/migrate-vault.ts <assetId>");
        console.log("Example: npx ts-node scripts/migrate-vault.ts DemoNVDAx6");
        process.exit(1);
    }

    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║              OptionsFi Vault Migration Script              ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log();
    console.log(`Asset ID: ${assetId}`);
    console.log(`RPC: ${RPC_URL}`);
    console.log();

    // Load wallet
    const wallet = loadWallet();
    console.log(`Authority: ${wallet.publicKey.toBase58()}`);

    // Setup connection and provider
    const connection = new Connection(RPC_URL, "confirmed");
    const provider = new anchor.AnchorProvider(
        connection,
        new anchor.Wallet(wallet),
        { commitment: "confirmed" }
    );
    anchor.setProvider(provider);

    // Load IDL
    const idlPath = path.join(__dirname, "../target/idl/vault.json");
    const idl = JSON.parse(fs.readFileSync(idlPath, "utf-8"));
    const program = new anchor.Program(idl, provider);

    // Derive vault PDA
    const [vaultPda, bump] = deriveVaultPda(assetId);
    console.log(`Vault PDA: ${vaultPda.toBase58()}`);

    // Check if vault exists
    const vaultAccount = await connection.getAccountInfo(vaultPda);

    if (vaultAccount) {
        console.log(`\n⚠️  Found existing vault (${vaultAccount.data.length} bytes)`);
        console.log(`   Owner: ${vaultAccount.owner.toBase58()}`);
        console.log(`   Lamports: ${vaultAccount.lamports / 1e9} SOL`);

        // Force close the old vault
        console.log("\n🗑️  Force closing old vault...");

        try {
            const tx = await program.methods
                .forceCloseVault(assetId)
                .accounts({
                    vault: vaultPda,
                    authority: wallet.publicKey,
                })
                .rpc();

            console.log(`✅ Old vault closed: ${tx}`);
        } catch (error: any) {
            console.error("❌ Failed to close vault:", error.message);
            console.log("\nPossible reasons:");
            console.log("  - You're not the vault authority");
            console.log("  - The vault account structure is too corrupted");
            console.log("\nTrying alternative: direct account close...");

            // Try to just close the account by zeroing lamports
            // This only works if we're the owner
            process.exit(1);
        }
    } else {
        console.log("\n✓ No existing vault found - creating fresh");
    }

    // Wait for confirmation
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create new vault
    console.log("\n📦 Creating new vault...");

    // Derive share mint PDA
    const [shareMint] = PublicKey.findProgramAddressSync(
        [Buffer.from("share_mint"), vaultPda.toBytes()],
        PROGRAM_ID
    );

    // Get token accounts
    const vaultTokenAccount = await getAssociatedTokenAddress(UNDERLYING_MINT, vaultPda, true);
    const premiumTokenAccount = await getAssociatedTokenAddress(USDC_MINT, vaultPda, true);
    const shareEscrow = await getAssociatedTokenAddress(shareMint, vaultPda, true);

    try {
        const tx = await program.methods
            .initializeVault(assetId, 8000, new anchor.BN(180)) // 80% util cap, 3 min epoch
            .accounts({
                vault: vaultPda,
                underlyingMint: UNDERLYING_MINT,
                premiumMint: USDC_MINT,
                shareMint: shareMint,
                vaultTokenAccount: vaultTokenAccount,
                premiumTokenAccount: premiumTokenAccount,
                shareEscrow: shareEscrow,
                authority: wallet.publicKey,
                tokenProgram: TOKEN_PROGRAM_ID,
                associatedTokenProgram: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
                systemProgram: SystemProgram.programId,
                rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            })
            .rpc();

        console.log(`✅ New vault created: ${tx}`);
        console.log();
        console.log("════════════════════════════════════════════════════════════");
        console.log("New Vault Details:");
        console.log(`  Asset ID: ${assetId}`);
        console.log(`  Vault PDA: ${vaultPda.toBase58()}`);
        console.log(`  Share Mint: ${shareMint.toBase58()}`);
        console.log(`  Underlying Token Account: ${vaultTokenAccount.toBase58()}`);
        console.log(`  Premium Token Account: ${premiumTokenAccount.toBase58()}`);
        console.log("════════════════════════════════════════════════════════════");

    } catch (error: any) {
        console.error("❌ Failed to create vault:", error.message);
        if (error.logs) {
            console.log("\nLogs:");
            error.logs.forEach((log: string) => console.log("  ", log));
        }
        process.exit(1);
    }

    console.log("\n✅ Migration complete!");
}

main().catch(console.error);
