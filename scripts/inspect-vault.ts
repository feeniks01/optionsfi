
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { Vault } from "../target/types/vault";
import vaultIdl from "../target/idl/vault.json";

// Config
const RPC_URL = process.env.RPC_URL || "https://api.devnet.solana.com";
const ASSET_ID = process.argv[2] || process.env.ASSET_ID || "NVDAx3";

async function main() {
    console.log(`Inspecting vault: ${ASSET_ID}`);
    const connection = new Connection(RPC_URL, "confirmed");

    // Mock wallet for provider (read-only)
    const wallet = new anchor.Wallet(anchor.web3.Keypair.generate());
    const provider = new anchor.AnchorProvider(connection, wallet, {});
    anchor.setProvider(provider);

    const programId = new PublicKey("G473EkeR5gowVn8CRwJuD6nvEt552iHMubtJp87g213K");
    const program = new anchor.Program(vaultIdl as any, provider);

    // Derive Vault PDA
    const [vaultPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(ASSET_ID)],
        program.programId
    );
    console.log(`Vault PDA: ${vaultPda.toBase58()}`);

    try {
        const vault = await (program.account as any).vault.fetch(vaultPda);
        console.log("\n=== Vault State ===");
        console.log(`Asset ID: ${ASSET_ID}`);
        console.log(`Total Assets: ${vault.totalAssets.toString()} (${Number(vault.totalAssets) / 1e6} tokens)`);
        console.log(`Epoch: ${vault.epoch.toString()}`);
        console.log(`Exposed Notional: ${vault.epochNotionalExposed.toString()} (${Number(vault.epochNotionalExposed) / 1e6})`);
        console.log(`Last Roll Timestamp: ${new Date(Number(vault.lastRollTimestamp) * 1000).toISOString()} (${Number(vault.lastRollTimestamp)})`);
        console.log(`Min Epoch Duration: ${vault.minEpochDuration.toString()} seconds`);
        console.log(`Authority: ${vault.authority.toBase58()}`);
        console.log("===================\n");

    } catch (e: any) {
        console.error("Error fetching vault:", e.message);
    }
}

main().catch(console.error);
