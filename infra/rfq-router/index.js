/**
 * OptionsFi RFQ Router
 * 
 * Simple quote aggregation service that:
 * - Accepts RFQ requests from the keeper
 * - Broadcasts RFQs to connected market makers via WebSocket
 * - Collects quotes and returns best fill
 */

const express = require("express");
const { WebSocketServer } = require("ws");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 3005;
const WS_PORT = process.env.WS_PORT || 3006;

const app = express();
app.use(express.json());

// State
const rfqs = new Map();
const makers = new Map();

// WebSocket server for market makers
const wss = new WebSocketServer({ port: WS_PORT });

wss.on("connection", (ws, req) => {
    const makerId = req.url?.split("makerId=")[1] || `maker-${Date.now()}`;
    console.log(`Maker connected: ${makerId}`);
    makers.set(makerId, ws);

    ws.on("message", (data) => {
        try {
            const msg = JSON.parse(data.toString());
            handleMakerMessage(makerId, msg);
        } catch (e) {
            console.error("Failed to parse maker message:", e);
        }
    });

    ws.on("close", () => {
        console.log(`Maker disconnected: ${makerId}`);
        makers.delete(makerId);
    });

    ws.on("error", (error) => {
        console.error(`Maker error (${makerId}):`, error);
    });
});

function handleMakerMessage(makerId, msg) {
    if (msg.type === "quote" && msg.rfqId && msg.premium) {
        const rfq = rfqs.get(msg.rfqId);
        if (rfq && !rfq.filled) {
            rfq.quotes.push({
                maker: makerId,
                premium: msg.premium,
                timestamp: Date.now(),
            });
            console.log(`Quote received for ${msg.rfqId} from ${makerId}: ${msg.premium}`);
        }
    }
}

function broadcastToMakers(message) {
    const data = JSON.stringify(message);
    for (const [makerId, ws] of makers) {
        try {
            ws.send(data);
        } catch (e) {
            console.error(`Failed to send to ${makerId}:`, e);
        }
    }
}

// REST API

app.post("/rfq", (req, res) => {
    const { underlying, optionType, strike, expiry, size, premiumFloor } = req.body;

    const rfqId = `rfq_${Date.now()}_${uuidv4().slice(0, 6)}`;
    const rfq = {
        rfqId,
        underlying,
        optionType,
        strike,
        expiry,
        size,
        premiumFloor: premiumFloor || 0,
        quotes: [],
        filled: null,
        createdAt: Date.now(),
    };

    rfqs.set(rfqId, rfq);
    console.log(`RFQ created: ${rfqId}`, { underlying, strike, size });

    // Broadcast to makers
    broadcastToMakers({
        type: "rfq",
        rfqId,
        underlying,
        optionType,
        strike,
        expiry,
        size,
    });

    res.json({ rfqId, status: "open" });
});

app.get("/rfq/:rfqId", (req, res) => {
    const rfq = rfqs.get(req.params.rfqId);
    if (!rfq) {
        return res.status(404).json({ error: "RFQ not found" });
    }
    res.json(rfq);
});

app.post("/rfq/:rfqId/fill", (req, res) => {
    const rfq = rfqs.get(req.params.rfqId);
    if (!rfq) {
        return res.status(404).json({ error: "RFQ not found" });
    }

    if (rfq.filled) {
        return res.json({ rfqId: rfq.rfqId, filled: rfq.filled });
    }

    if (rfq.quotes.length === 0) {
        return res.json({ rfqId: rfq.rfqId, filled: null, message: "No quotes received" });
    }

    // Find best quote (highest premium for selling options)
    const validQuotes = rfq.quotes.filter(q => q.premium >= rfq.premiumFloor);
    if (validQuotes.length === 0) {
        return res.json({ rfqId: rfq.rfqId, filled: null, message: "No quotes above floor" });
    }

    const bestQuote = validQuotes.reduce((best, q) =>
        q.premium > best.premium ? q : best
    );

    rfq.filled = {
        maker: bestQuote.maker,
        premium: bestQuote.premium,
        filledAt: Date.now(),
    };

    console.log(`RFQ ${rfq.rfqId} filled by ${bestQuote.maker} at ${bestQuote.premium}`);

    // Notify winning maker
    const makerWs = makers.get(bestQuote.maker);
    if (makerWs) {
        makerWs.send(JSON.stringify({
            type: "fill",
            rfqId: rfq.rfqId,
            premium: bestQuote.premium,
        }));
    }

    res.json({ rfqId: rfq.rfqId, filled: rfq.filled });
});

// Health endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        connectedMakers: makers.size,
        activeRfqs: rfqs.size,
    });
});

app.listen(PORT, () => {
    console.log(`RFQ Router HTTP server listening on port ${PORT}`);
    console.log(`RFQ Router WebSocket server listening on port ${WS_PORT}`);
});
