/**
 * Create Mock NVDAx Token with Metadata
 * 
 * Supply: 125,000 tokens (6 decimals = 125,000,000,000 base units)
 * Metadata: Mock NVDAx with logo
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
    createMint,
    getOrCreateAssociatedTokenAccount,
    mintTo,
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
    createCreateMetadataAccountV3Instruction,
    PROGRAM_ID as METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import * as fs from "fs";
import * as path from "path";

const DECIMALS = 6;
const MAX_SUPPLY = 125_000; // 125k tokens
const MAX_SUPPLY_BASE = BigInt(MAX_SUPPLY) * BigInt(10 ** DECIMALS);

// Metadata for NVDAx
const TOKEN_NAME = "Mock NVDAx";
const TOKEN_SYMBOL = "NVDAx";
const TOKEN_URI = "https://raw.githubusercontent.com/feeniks01/optionsfi/main/app/public/metadata/nvdax.json";

async function main() {
    // Load wallet
    const walletPath = process.env.WALLET_PATH || path.join(process.env.HOME!, ".config/solana/id.json");
    const walletData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const payer = Keypair.fromSecretKey(Uint8Array.from(walletData));

    console.log("Payer:", payer.publicKey.toBase58());

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Create mint
    console.log("Creating NVDAx mint...");
    const mint = await createMint(
        connection,
        payer,
        payer.publicKey, // mint authority
        payer.publicKey, // freeze authority
        DECIMALS
    );
    console.log("NVDAx Mint:", mint.toBase58());

    // Create metadata
    console.log("Creating metadata...");
    const [metadataPda] = PublicKey.findProgramAddressSync(
        [
            Buffer.from("metadata"),
            METADATA_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
        ],
        METADATA_PROGRAM_ID
    );

    const metadataData = {
        name: TOKEN_NAME,
        symbol: TOKEN_SYMBOL,
        uri: TOKEN_URI,
        sellerFeeBasisPoints: 0,
        creators: null,
        collection: null,
        uses: null,
    };

    const createMetadataIx = createCreateMetadataAccountV3Instruction(
        {
            metadata: metadataPda,
            mint: mint,
            mintAuthority: payer.publicKey,
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

    const tx = new Transaction().add(createMetadataIx);
    const sig = await sendAndConfirmTransaction(connection, tx, [payer]);
    console.log("Metadata created:", sig);

    // Create token account and mint max supply
    console.log("Minting max supply...");
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        payer.publicKey
    );

    await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer.publicKey,
        MAX_SUPPLY_BASE
    );
    console.log(`Minted ${MAX_SUPPLY.toLocaleString()} NVDAx to ${tokenAccount.address.toBase58()}`);

    // Save mint address
    const outputPath = path.join(__dirname, "../.env.mints");
    fs.appendFileSync(outputPath, `NVDAX_MINT=${mint.toBase58()}\n`);
    console.log(`\nSaved to ${outputPath}`);
}

main().catch(console.error);
