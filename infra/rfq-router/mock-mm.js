/**
 * Mock Market Maker for OptionsFi
 * 
 * Connects to RFQ Router and provides quotes for testing.
 * On fill, transfers NVDAx premium to vault (simulating auto-compound).
 */

const WebSocket = require("ws");
const { Connection, Keypair, PublicKey, Transaction } = require("@solana/web3.js");
const { getAssociatedTokenAddress, createTransferInstruction, TOKEN_PROGRAM_ID } = require("@solana/spl-token");
const fs = require("fs");
const path = require("path");

const ROUTER_WS_URL = process.env.ROUTER_WS_URL || "ws://localhost:3006";
const MAKER_ID = process.env.MAKER_ID || "mock-mm-v2";
const RPC_URL = process.env.RPC_URL || "https://api.devnet.solana.com";

// Vault and token addresses
const VAULT_TOKEN_ACCOUNT = new PublicKey("DGewgEHgALEpwkRDS7kCiUmoLjcV9DNfpAL79iKaEViB");
const NVDAX_MINT = new PublicKey("G5VWnnWRxVvuTqRCEQNNGEdRmS42hMTyh8DAN9MHecLn");

let ws;
let reconnectAttempts = 0;
let connection;
let wallet;

// Load wallet
function loadWallet() {
    const walletPath = process.env.WALLET_PATH || path.join(process.env.HOME, ".config/solana/id.json");
    try {
        const keypairData = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
        wallet = Keypair.fromSecretKey(Uint8Array.from(keypairData));
        console.log(`Wallet loaded: ${wallet.publicKey.toBase58()}`);
    } catch (error) {
        console.error("Failed to load wallet:", error.message);
        console.log("Premium transfers will be simulated only (no actual tokens)");
        wallet = null;
    }
}

// Initialize connection
function init() {
    connection = new Connection(RPC_URL, "confirmed");
    loadWallet();
}

function connect() {
    console.log(`Connecting to RFQ Router as ${MAKER_ID}...`);

    ws = new WebSocket(`${ROUTER_WS_URL}?makerId=${MAKER_ID}`);

    ws.on("open", () => {
        console.log("Connected to RFQ Router");
        reconnectAttempts = 0;
    });

    ws.on("message", (data) => {
        try {
            const msg = JSON.parse(data.toString());
            handleMessage(msg);
        } catch (e) {
            console.error("Failed to parse message:", e);
        }
    });

    ws.on("close", () => {
        console.log("Disconnected from RFQ Router");
        scheduleReconnect();
    });

    ws.on("error", (error) => {
        console.error("WebSocket error:", error.message);
    });
}

function scheduleReconnect() {
    const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000);
    reconnectAttempts++;
    console.log(`Reconnecting in ${delay}ms...`);
    setTimeout(connect, delay);
}

function handleMessage(msg) {
    if (msg.type === "rfq") {
        console.log(`Received RFQ: ${msg.rfqId}`, {
            underlying: msg.underlying,
            strike: msg.strike,
            size: msg.size,
        });

        // Generate quote with some spread
        // Premium = size * premiumRate (simulate ~1% premium for demo)
        const premiumRate = 0.01 + Math.random() * 0.005; // 1-1.5%
        const premium = Math.floor(msg.size * premiumRate * 1e6); // In base units (6 decimals)

        // Simulate thinking time
        setTimeout(() => {
            sendQuote(msg.rfqId, premium);
        }, 500 + Math.random() * 1000);
    }

    if (msg.type === "fill") {
        console.log(`Order filled! RFQ: ${msg.rfqId}, Premium: ${msg.premium}`);
        // Transfer premium to vault
        transferPremiumToVault(msg.premium);
    }
}

function sendQuote(rfqId, premium) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const quote = {
            type: "quote",
            rfqId,
            premium,
        };
        ws.send(JSON.stringify(quote));
        console.log(`Sent quote for ${rfqId}: ${premium}`);
    }
}

async function transferPremiumToVault(premiumBaseUnits) {
    if (!wallet) {
        console.log(`[Simulated] Would transfer ${premiumBaseUnits / 1e6} NVDAx to vault`);
        return;
    }

    try {
        // Get MM's NVDAx token account
        const mmTokenAccount = await getAssociatedTokenAddress(NVDAX_MINT, wallet.publicKey);

        // Check balance
        const balance = await connection.getTokenAccountBalance(mmTokenAccount);
        console.log(`MM NVDAx balance: ${balance.value.uiAmount}`);

        if (Number(balance.value.amount) < premiumBaseUnits) {
            console.warn(`Insufficient NVDAx balance for premium transfer. Have: ${balance.value.uiAmount}, Need: ${premiumBaseUnits / 1e6}`);
            return;
        }

        // Create transfer instruction
        const transferIx = createTransferInstruction(
            mmTokenAccount,           // from
            VAULT_TOKEN_ACCOUNT,      // to (vault's NVDAx account)
            wallet.publicKey,         // owner
            premiumBaseUnits          // amount
        );

        const tx = new Transaction().add(transferIx);
        tx.feePayer = wallet.publicKey;
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

        tx.sign(wallet);
        const signature = await connection.sendRawTransaction(tx.serialize());
        await connection.confirmTransaction(signature, "confirmed");

        console.log(`✓ Premium transferred: ${premiumBaseUnits / 1e6} NVDAx`);
        console.log(`  TX: ${signature}`);
    } catch (error) {
        console.error("Failed to transfer premium:", error.message);
    }
}

// Start
console.log("========================================");
console.log("Mock Market Maker Starting");
console.log("========================================");
init();
connect();
