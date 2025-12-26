import * as anchor from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as fs from "fs";

const PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const ASSET_ID = process.argv[2] || "NVDAx";
const TOKEN_ACCOUNT = process.argv[3]; // The orphaned token account address

async function main() {
    if (!TOKEN_ACCOUNT) {
        console.log("Usage: npx ts-node scripts/close-orphaned-account.ts <assetId> <tokenAccount>");
        console.log("Example: npx ts-node scripts/close-orphaned-account.ts NVDAx DDc7eiqGvBTZu9N52tGMeg2XAZsuHMpPbLXT1DV7uVop");
        process.exit(1);
    }

    console.log(`\n🧹 Closing orphaned token account for asset: ${ASSET_ID}`);
    console.log(`   Token Account: ${TOKEN_ACCOUNT}`);

    const walletPath = process.env.ANCHOR_WALLET || `${process.env.HOME}/.config/solana/id.json`;
    const keypairData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const wallet = Keypair.fromSecretKey(Uint8Array.from(keypairData));

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const provider = new anchor.AnchorProvider(connection, new anchor.Wallet(wallet), {});
    anchor.setProvider(provider);

    const idl = JSON.parse(fs.readFileSync("target/idl/vault.json", "utf-8"));
    const program = new anchor.Program(idl, provider);

    // Derive vault PDA
    const [vaultPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(ASSET_ID)],
        PROGRAM_ID
    );

    console.log(`   Vault PDA: ${vaultPda.toBase58()}`);
    console.log(`   Authority: ${wallet.publicKey.toBase58()}`);

    try {
        const tx = await program.methods
            .closeOrphanedTokenAccount(ASSET_ID)
            .accounts({
                vaultPda: vaultPda,
                tokenAccount: new PublicKey(TOKEN_ACCOUNT),
                authority: wallet.publicKey,
                tokenProgram: TOKEN_PROGRAM_ID,
            })
            .rpc();

        console.log(`\n✅ Orphaned token account closed!`);
        console.log(`   Transaction: ${tx}`);
    } catch (error: any) {
        console.error(`\n❌ Failed:`, error.message);
        if (error.logs) {
            console.log("Logs:");
            error.logs.forEach((log: string) => console.log("  ", log));
        }
    }
}

main().catch(console.error);
