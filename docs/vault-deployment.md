# Vault Deployment (RWA)

Single source of truth for vault metadata and deployment parameters lives in `config/vaults.json`.

## Add a New Vault

1. Add an entry to `config/vaults.json` with:
   - `id`, `assetId`
   - `underlyingMint`, `premiumMint`
   - `pythFeedId`, `oracleTicker`
   - `utilizationCapBps`, `minEpochDuration`
   - `shareMetadata` (name, symbol, uri)
2. Run:
   ```bash
   npx ts-node scripts/create-vault.ts <AssetId|Id>
   ```
3. Start services:
   ```bash
   cd infra/keeper && npm run dev
   cd app && npm run dev
   ```

## Notes

- Frontend and keeper both read `config/vaults.json`.
- Vault discovery is on-chain; config only supplies UI metadata and oracle feeds.
- Set `enabled: false` in `config/vaults.json` to hide a vault from the UI and vault list.
