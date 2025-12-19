/**
 * Create Metadata for vNVDAx Share Token
 * 
 * Run this AFTER init-vault.ts to add metadata to the share mint
 */

import {
    Connection,
    Keypair,
    PublicKey,
    Transaction,
    sendAndConfirmTransaction,
    clusterApiUrl,
} from "@solana/web3.js";
import {
    createCreateMetadataAccountV3Instruction,
    PROGRAM_ID as METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import * as fs from "fs";
import * as path from "path";

// Vault Program ID
const VAULT_PROGRAM_ID = new PublicKey("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
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

    console.log("Payer:", payer.publicKey.toBase58());

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Derive vault and share mint PDAs
    const [vaultPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), Buffer.from(ASSET_ID)],
        VAULT_PROGRAM_ID
    );
    const [shareMintPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("shares"), vaultPda.toBuffer()],
        VAULT_PROGRAM_ID
    );

    console.log("Vault PDA:", vaultPda.toBase58());
    console.log("Share Mint PDA:", shareMintPda.toBase58());

    // Check if share mint exists
    const shareMintInfo = await connection.getAccountInfo(shareMintPda);
    if (!shareMintInfo) {
        console.error("Error: Share mint not found. Run init-vault.ts first.");
        process.exit(1);
    }

    // Create metadata PDA
    const [metadataPda] = PublicKey.findProgramAddressSync(
        [
            Buffer.from("metadata"),
            METADATA_PROGRAM_ID.toBuffer(),
            shareMintPda.toBuffer(),
        ],
        METADATA_PROGRAM_ID
    );

    // Check if metadata already exists
    const metadataInfo = await connection.getAccountInfo(metadataPda);
    if (metadataInfo) {
        console.log("Metadata already exists for vNVDAx share token!");
        process.exit(0);
    }

    console.log("Creating vNVDAx share token metadata...");

    const metadataData = {
        name: TOKEN_NAME,
        symbol: TOKEN_SYMBOL,
        uri: TOKEN_URI,
        sellerFeeBasisPoints: 0,
        creators: null,
        collection: null,
        uses: null,
    };

    // Note: The vault PDA is the mint authority for share tokens
    // We need to sign with the vault authority (payer) who can update via program
    // For now, we'll create metadata with payer as the authority since vault is PDA
    const createMetadataIx = createCreateMetadataAccountV3Instruction(
        {
            metadata: metadataPda,
            mint: shareMintPda,
            mintAuthority: vaultPda, // Vault PDA is mint authority
            payer: payer.publicKey,
            updateAuthority: payer.publicKey,
        },
        {
            createMetadataAccountArgsV3: {
                data: metadataData,
                isMutable: true,
                collectionDetails: null,
            },
        }
    );

    // This will fail because vault PDA is mint authority and can't sign directly
    // We need to call this via the vault program or use a different approach
    console.log("\nNote: vNVDAx share metadata requires vault program integration.");
    console.log("The vault program's create_share_metadata instruction should be used.");
    console.log("\nShare Mint:", shareMintPda.toBase58());
    console.log("Metadata PDA:", metadataPda.toBase58());
}

main().catch(console.error);
