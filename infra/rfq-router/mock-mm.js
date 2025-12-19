/**
 * Mock Market Maker for OptionsFi
 * 
 * Connects to RFQ Router and provides quotes for testing.
 */

const WebSocket = require("ws");

const ROUTER_WS_URL = process.env.ROUTER_WS_URL || "ws://localhost:3006";
const MAKER_ID = process.env.MAKER_ID || "mock-mm-v2";

let ws;
let reconnectAttempts = 0;

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
        const premium = Math.floor(msg.size * premiumRate * 1e6); // In base units

        // Simulate thinking time
        setTimeout(() => {
            sendQuote(msg.rfqId, premium);
        }, 500 + Math.random() * 1000);
    }

    if (msg.type === "fill") {
        console.log(`Order filled! RFQ: ${msg.rfqId}, Premium: ${msg.premium}`);
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

// Start
console.log("========================================");
console.log("Mock Market Maker Starting");
console.log("========================================");
connect();
