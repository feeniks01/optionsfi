# OptionsFi Demo Scripts

## Quick Start (4 terminals)

```bash
# Terminal 1: RFQ Router
cd infra/rfq-router && node index.js

# Terminal 2: Mock Market Maker
cd infra/rfq-router && node mock-mm.js

# Terminal 3: Keeper Service
cd infra/keeper && npm run dev

# Terminal 4: Frontend
cd app && npm run dev
```

Then open: http://localhost:3000/v2/earn/nvdax

---

## Initial Setup (run once)

```bash
# 1. Build the vault program
anchor build

# 2. Deploy to devnet
anchor deploy

# 3. Create mock tokens
npx ts-node scripts/create-nvdax.ts
npx ts-node scripts/create-usdc.ts

# 4. Initialize vault
npx ts-node scripts/init-vault.ts

# 5. Set vNVDAx metadata
npx ts-node scripts/set-vnvdax-metadata.ts

# 6. Copy IDL to frontend
cp target/idl/vault.json app/anchor/vault_idl.json
```

---

## Keeper API (for demo panel)

| Action | Endpoint |
|--------|----------|
| Roll Epoch | `POST http://localhost:3010/trigger` |
| Settle | `POST http://localhost:3010/settle` |
| Health | `GET http://localhost:3010/health` |
