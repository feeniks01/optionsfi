/**
 * Set vNVDAx Share Token Metadata
 * 
 * Calls the vault program's create_share_metadata instruction
 * to set metadata for the share token using the vault PDA as signer.
 */

import * as anchor from "@coral-xyz/anchor";
import {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
    Transaction,
} from "@solana/web3.js";
import * as fs from "fs";
import * as path from "path";

// Program IDs
const VAULT_PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

// Vault configuration
const ASSET_ID = "NVDAx";

// Metadata for vNVDAx share token
const TOKEN_NAME = "Mock vNVDAx";
const TOKEN_SYMBOL = "vNVDAx";
const TOKEN_URI = "https://raw.githubusercontent.com/feeniks01/optionsfi/master/app/public/metadata/vnvdax.json";

async function main() {
    // Load wallet
    const walletPath = process.env.WALLET_PATH || path.join(process.env.HOME!, ".config/solana/id.json");
    const walletData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const payer = Keypair.fromSecretKey(Uint8Array.from(walletData));

    console.log("Payer (authority):", payer.publicKey.toBase58());

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Create Anchor provider
    const wallet = new anchor.Wallet(payer);
    const provider = new anchor.AnchorProvider(connection, wallet, { commitment: "confirmed" });

    // Load IDL
    const idlPath = path.resolve(__dirname, "../target/idl/vault.json");
    const idl = JSON.parse(fs.readFileSync(idlPath, "utf-8"));
    const program = new anchor.Program(idl, provider);

    // Derive vault PDA
    const [vaultPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(ASSET_ID)],
        VAULT_PROGRAM_ID
    );
    console.log("Vault PDA:", vaultPda.toBase58());

    // Fetch vault to get share mint
    const vaultAccount = await (program.account as any).vault.fetch(vaultPda);
    const shareMint = vaultAccount.shareMint as PublicKey;
    console.log("Share Mint:", shareMint.toBase58());

    // Derive metadata PDA
    const [metadataPda] = PublicKey.findProgramAddressSync(
        [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            shareMint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
    );
    console.log("Metadata PDA:", metadataPda.toBase58());

    // Check if metadata already exists
    const metadataInfo = await connection.getAccountInfo(metadataPda);
    if (metadataInfo) {
        console.log("\n✅ Metadata already exists for vNVDAx share token!");
        console.log("Metadata account:", metadataPda.toBase58());
        process.exit(0);
    }

    console.log("\nCreating metadata for vNVDAx share token...");
    console.log("  Name:", TOKEN_NAME);
    console.log("  Symbol:", TOKEN_SYMBOL);
    console.log("  URI:", TOKEN_URI);

    // Call create_share_metadata instruction
    const tx = await program.methods
        .createShareMetadata(TOKEN_NAME, TOKEN_SYMBOL, TOKEN_URI)
        .accounts({
            vault: vaultPda,
            shareMint: shareMint,
            metadata: metadataPda,
            payer: payer.publicKey,
            authority: payer.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        })
        .rpc();

    console.log("\n✅ Metadata created successfully!");
    console.log("Transaction:", tx);
    console.log("Metadata account:", metadataPda.toBase58());
}

main().catch(console.error);
