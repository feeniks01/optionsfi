/**
 * Force-close a vault account using the force_close_vault instruction
 * This bypasses deserialization and works even with incompatible account structures
 * 
 * Usage: npx ts-node scripts/force-close-vault.ts <AssetId>
 * Example: npx ts-node scripts/force-close-vault.ts DemoNVDAx5
 */

import {
    Connection,
    Keypair,
    PublicKey,
    Transaction,
    sendAndConfirmTransaction,
} from "@solana/web3.js";
import { Program, AnchorProvider, Wallet, BN } from "@coral-xyz/anchor";
import * as fs from "fs";
import * as path from "path";

const VAULT_PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const RPC_URL = process.env.RPC_URL || "https://api.devnet.solana.com";

function deriveVaultPda(assetId: string): [PublicKey, number] {
    return PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(assetId)],
        VAULT_PROGRAM_ID
    );
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log("Usage: npx ts-node scripts/force-close-vault.ts <AssetId>");
        console.log("Example: npx ts-node scripts/force-close-vault.ts DemoNVDAx5");
        process.exit(1);
    }

    const assetId = args[0];
    const [vaultPda, bump] = deriveVaultPda(assetId);

    console.log(`\n🔧 Force-closing vault: ${assetId}`);
    console.log(`   PDA: ${vaultPda.toBase58()}`);

    // Load wallet
    const walletPath = process.env.WALLET_PATH ||
        path.join(process.env.HOME!, ".config/solana/id.json");
    const walletData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const payer = Keypair.fromSecretKey(Uint8Array.from(walletData));

    console.log(`   Authority: ${payer.publicKey.toBase58()}`);

    const connection = new Connection(RPC_URL, "confirmed");

    // Check if vault exists
    const vaultInfo = await connection.getAccountInfo(vaultPda);
    if (!vaultInfo) {
        console.log("✓ Vault does not exist (already closed or never created)");
        return;
    }

    console.log(`   Vault Balance: ${vaultInfo.lamports / 1e9} SOL`);
    console.log(`   Owner: ${vaultInfo.owner.toBase58()}`);

    // Load IDL
    const idlPath = path.join(__dirname, "..", "target", "idl", "vault.json");
    const idl = JSON.parse(fs.readFileSync(idlPath, "utf-8"));

    // Create provider and program
    const wallet = new Wallet(payer);
    const provider = new AnchorProvider(connection, wallet, { commitment: "confirmed" });
    const program = new Program(idl, provider);

    console.log("\n⚠️  Force closing vault (bypasses all safety checks)...");

    try {
        const tx = await program.methods
            .forceCloseVault(assetId)
            .accounts({
                vault: vaultPda,
                authority: payer.publicKey,
            })
            .rpc();

        console.log(`\n✅ Vault force-closed successfully!`);
        console.log(`   Transaction: ${tx}`);
        console.log(`   Rent recovered: ~${vaultInfo.lamports / 1e9} SOL`);
    } catch (err: any) {
        console.error(`\n❌ Failed to force-close vault:`, err.message || err);

        if (err.logs) {
            console.log("\nProgram logs:");
            err.logs.forEach((log: string) => console.log(`   ${log}`));
        }
    }
}

main().catch(console.error);
