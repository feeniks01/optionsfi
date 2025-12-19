# How OptionsFi Works

> **Earn yield on tokenized equities through automated covered call strategies**

---

## The Problem

Traditional covered call strategies are:
- **Complex** — Require active management and options knowledge
- **Inaccessible** — Need brokerage accounts with options approval
- **Expensive** — High fees eat into returns
- **Illiquid** — Capital locked until expiration

Meanwhile, **tokenized stocks** (xStocks) on Solana offer instant settlement and 24/7 trading, but lack yield-generating products.

---

## The Solution

OptionsFi brings **DeFi yield vaults** to tokenized equities. Deposit xStocks, earn yield automatically.

```
┌─────────────────────────────────────────────────────────────┐
│  User deposits NVDAx  →  Vault writes covered calls  →  Yield  │
└─────────────────────────────────────────────────────────────┘
```

### How It Works

1. **Deposit** your xStocks (e.g., NVDAx) into a vault
2. **Receive** vault shares representing your stake
3. **Earn** yield as the vault sells covered calls weekly
4. **Withdraw** at any epoch boundary

---

## Architecture

```
                                 ┌──────────────┐
                                 │   Frontend   │
                                 │   (Next.js)  │
                                 └──────┬───────┘
                                        │
           ┌────────────────────────────┼────────────────────────────┐
           │                            │                            │
           ▼                            ▼                            ▼
    ┌──────────────┐          ┌──────────────────┐          ┌──────────────┐
    │   Vault      │          │   RFQ Router     │          │   Keeper     │
    │   Program    │◄────────►│   (Quote Agg)    │◄────────►│   Service    │
    │   (Anchor)   │          └──────────────────┘          │   (Node.js)  │
    └──────┬───────┘                    ▲                   └──────┬───────┘
           │                            │                          │
           │                  ┌─────────┴────────┐                 │
           │                  │  Market Makers   │                 │
           │                  └──────────────────┘                 │
           │                                                       │
           ▼                                                       ▼
    ┌──────────────┐                                      ┌──────────────┐
    │   Solana     │                                      │   Pyth       │
    │   Devnet     │                                      │   Oracle     │
    └──────────────┘                                      └──────────────┘
```

---

## Key Components

### 1. Vault Program (On-Chain)

The heart of OptionsFi — an Anchor program managing deposits, withdrawals, and yield distribution.

**Instructions:**
| Instruction | Description |
|-------------|-------------|
| `deposit` | Deposit xStocks, receive vault shares |
| `request_withdrawal` | Queue withdrawal for next epoch |
| `process_withdrawal` | Claim tokens after epoch settles |
| `advance_epoch` | Roll to next epoch, credit premium |
| `record_notional_exposure` | Track covered call positions |
| `collect_premium` | Receive USDC premium from market makers |
| `pay_settlement` | Pay ITM settlement to market makers |

**Key Features:**
- Pro-rata share pricing
- 80% utilization cap (risk management)
- USDC premium escrow for audit trail

### 2. Keeper Service (Off-Chain)

Automated bot that manages the epoch lifecycle:

```
Every Epoch (Weekly):
  1. Fetch real vault TVL from on-chain
  2. Get live price from Pyth Oracle
  3. Calculate strike (spot + 10% OTM)
  4. Fetch 30-day volatility from Yahoo Finance
  5. Price premium using Black-Scholes
  6. Create RFQ → Broadcast to market makers
  7. Fill best quote → Transfer USDC premium
  8. Record exposure on-chain
  9. At expiry: Settle ITM/OTM → Advance epoch
```

### 3. RFQ Router (Quote Aggregation)

Request-for-quote system connecting the vault to professional market makers:

- WebSocket server for real-time quote streaming
- Best-execution: Fills highest premium quote
- Transparent: All quotes logged

### 4. Oracle Integration

**Pyth Network** provides real-time, manipulation-resistant prices:
- NVDA/USD feed: `0x4244d07890e4610f46bbde67de8f43a4bf8b569eebe904f136b469f148503b7f`
- Sub-second updates
- Confidence intervals for risk management

---

## The Covered Call Strategy

```
Spot: $130   Strike: $143 (10% OTM)   Premium: $3.50/share

Scenario A: Price stays below $143 (OTM)
  → Option expires worthless
  → Vault keeps premium ($3.50/share = 2.7% yield)
  
Scenario B: Price rises above $143 (ITM)
  → Vault pays difference to market maker
  → User still keeps (strike - spot) + premium gain
```

**Weekly premium example:**
- 2% weekly premium × 52 weeks = **~100% APY** (in good conditions)
- Conservative estimate: **15-30% APY** accounting for ITM settlements

---

## User Flow

### Deposit
```
User                    Frontend                  Vault Program
  │                        │                           │
  │── Connect Wallet ─────►│                           │
  │                        │                           │
  │── Enter Amount ───────►│                           │
  │                        │                           │
  │── Confirm ────────────►│── buildDepositTx ───────►│
  │                        │                           │
  │                        │◄─── Tx Built ─────────────│
  │                        │                           │
  │◄─── Sign Request ──────│                           │
  │                        │                           │
  │── Sign ───────────────►│── Submit ────────────────►│
  │                        │                           │
  │◄─── Shares Received ───│◄─── Confirmed ────────────│
```

### Epoch Roll (Automated)
```
Keeper                    Pyth                    Vault           MM
  │                         │                        │              │
  │── Fetch Price ─────────►│                        │              │
  │◄─── $130.00 ────────────│                        │              │
  │                         │                        │              │
  │── Calculate BS Premium ─┼────────────────────────┤              │
  │                         │                        │              │
  │── Create RFQ ───────────┼────────────────────────┼─── Broadcast ►│
  │                         │                        │              │
  │◄─── Quote $3.50 ────────┼────────────────────────┼──────────────│
  │                         │                        │              │
  │── Fill ─────────────────┼────►Transfer USDC ─────┼─────────────►│
  │                         │                        │              │
  │── Record Exposure ──────┼───────────────────────►│              │
```

---

## Security

- **Non-custodial**: Users retain ownership of shares
- **On-chain audit trail**: All premium payments verifiable
- **Utilization caps**: Max 80% of TVL exposed to options
- **Epoch boundaries**: Withdrawals only between epochs (prevents manipulation)

---

## Getting Started

```bash
# Deploy vault
cd ~/Desktop/optionsfi
anchor deploy --provider.cluster devnet

# Run services
cd infra/rfq-router && npm run dev
cd infra/keeper && npm run dev

# Run frontend
cd app && npm run dev
```

---

## Why OptionsFi?

| Feature | Traditional | OptionsFi |
|---------|-------------|-----------|
| Minimum investment | $25,000+ | Any amount |
| Trading hours | Market hours only | 24/7 |
| Settlement | T+2 | Instant |
| Fees | 0.5-1% per trade | 0% management |
| Transparency | Limited | Full on-chain |

---

*Built on Solana. Powered by Pyth. Secured by math.*
