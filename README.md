# OptionsFi V2

Covered call vault protocol for tokenized equities on Solana.

## Features

- **On-chain vault** with USDC premium escrow
- **Black-Scholes pricing** with historical volatility from Yahoo Finance
- **RFQ system** for market maker quote aggregation
- **Epoch-based settlement** with ITM/OTM logic

## Structure

```
optionsfi/
├── programs/vault/       # Anchor program
├── infra/
│   ├── keeper/          # Epoch management service
│   └── rfq-router/      # Quote aggregation
├── app/                 # Frontend (coming soon)
└── scripts/            # Deployment scripts
```

## Quick Start

### 1. Deploy Program

```bash
# Generate new program keypair
solana-keygen new -o target/deploy/vault-keypair.json

# Build
anchor build

# Update program ID in lib.rs and Anchor.toml
# Then deploy
anchor deploy --provider.cluster devnet
```

### 2. Install Dependencies

```bash
cd infra/keeper && npm install
cd ../rfq-router && npm install
```

### 3. Run Services

```bash
# Terminal 1: RFQ Router
cd infra/rfq-router && npm run dev

# Terminal 2: Mock MM
cd infra/rfq-router && node mock-mm.js

# Terminal 3: Keeper
cd infra/keeper && npm run dev
```

## Configuration

### Keeper Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `RPC_URL` | devnet | Solana RPC endpoint |
| `ASSET_ID` | NVDAx | Vault asset identifier |
| `TICKER` | NVDA | Yahoo Finance ticker for volatility |
| `EPOCH_DURATION_DAYS` | 7 | Days per epoch |
| `STRIKE_DELTA_BPS` | 1000 | OTM delta (10% = 1000bps) |
| `VOL_LOOKBACK_DAYS` | 30 | Historical volatility window |

## License

MIT
