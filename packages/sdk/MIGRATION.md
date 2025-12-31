# Migration Guide for v0.2.0

## Breaking Changes

### Renamed Constants

The following constants have been renamed for clarity:

| Old Name | New Name | Reason |
|----------|----------|--------|
| `MOCK_USDC_MINT` | `DEVNET_USDC_MINT` | Clarifies this is official devnet USDC, not a mock |

### New Exports

- `MAINNET_USDC_MINT` - Official Circle USDC mint for mainnet-beta

## Migration Steps

### If you were using MOCK_USDC_MINT

**Before (v0.1.0):**
```typescript
import { MOCK_USDC_MINT } from '@optionsfi/sdk';

const usdcMint = MOCK_USDC_MINT;
```

**After (v0.2.0):**
```typescript
import { DEVNET_USDC_MINT, MAINNET_USDC_MINT } from '@optionsfi/sdk';

// For devnet
const usdcMint = DEVNET_USDC_MINT;

// For mainnet
const usdcMint = MAINNET_USDC_MINT;
```

## Repository Changes

The SDK repository has been transferred to the OptionsFi organization:

- **Old URL**: `https://github.com/feeniks01/optionsfi`
- **New URL**: `https://github.com/optionsfi/optionsfi`

All issue links, documentation links, and repository references have been updated.

## No Other Breaking Changes

All other APIs remain backward compatible. New features:
- Multi-asset support (crypto, tokenized stocks, treasuries)
- Anonymous RFQ support
- Enhanced multi-dealer quote collection
- Trading hours configuration (optional)

See [CHANGELOG.md](./CHANGELOG.md) for full details.
