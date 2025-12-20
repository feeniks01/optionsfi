/**
 * Fund Keeper with Mock USDC
 * 
 * Transfers USDC to the keeper wallet so it can pay premiums
 */

import {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
} from "@solana/web3.js";
import {
    getOrCreateAssociatedTokenAccount,
    transfer,
} from "@solana/spl-token";
import * as fs from "fs";
import * as path from "path";

// Mock USDC mint from deployment
const USDC_MINT = new PublicKey("5z8s3k7mkmH1DKFPvjkVd8PxapEeYaPJjqQTJeUEN1i4");

// Amount to fund (1 million USDC should be plenty for demos)
const FUND_AMOUNT = 1_000_000 * 10 ** 6; // 1M USDC (6 decimals)

async function main() {
    // Load authority wallet (has the USDC supply)
    const walletPath = process.env.WALLET_PATH || path.join(process.env.HOME!, ".config/solana/id.json");
    const walletData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
    const authority = Keypair.fromSecretKey(Uint8Array.from(walletData));

    console.log("Authority (has USDC supply):", authority.publicKey.toBase58());

    // Load keeper wallet (same as authority for now - they use the same keypair)
    const keeperWallet = authority.publicKey;
    console.log("Keeper wallet:", keeperWallet.toBase58());

    // Connect to devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Get authority's USDC account
    const authorityUsdcAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        authority,
        USDC_MINT,
        authority.publicKey
    );
    console.log("Authority USDC account:", authorityUsdcAccount.address.toBase58());

    // Check USDC balance
    const balance = Number(authorityUsdcAccount.amount) / 10 ** 6;
    console.log(`Authority USDC balance: ${balance.toLocaleString()} USDC`);

    if (balance > 0) {
        console.log("\n✅ Keeper already has USDC (same wallet as authority)");
        console.log(`Balance: ${balance.toLocaleString()} USDC`);
    } else {
        console.log("\n⚠️ No USDC in keeper wallet");
    }
}

main().catch(console.error);
