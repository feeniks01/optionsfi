# Changelog

All notable changes to the OptionsFi SDK will be documented in this file.

## [0.2.0] - 2025-12-30

### Added - Multi-Asset Support

#### New Types
- `AssetType`: Classification for crypto, tokenized_stock, and tokenized_treasury
- `AssetDescriptor`: Complete asset metadata with price feeds and trading hours
- `AssetRegistryEntry`: Asset descriptor with activation status
- `AssetVolatility`: Volatility data structure for assets
- `PriceFeedSource`: Enum for pyth, yahoo, switchboard, or custom feeds
- `TradingHours`: Trading hours configuration for market-hours assets
- `CorporateAction`: Corporate action tracking for tokenized stocks

#### RFQ Enhancements
- `RFQParams.anonymous`: Optional anonymization of vault identity in RFQ broadcasts
- `RFQParams.minQuotes`: Configurable minimum number of quotes required before filling
- `RFQParams.quoteTimeout`: Customizable timeout for quote collection periods
- `Quote.validUntil`: Quote expiration timestamp for improved validation

#### Asset Utilities
- `createCryptoAsset()`: Helper for creating crypto asset descriptors
- `createTokenizedStockAsset()`: Helper for tokenized stock descriptors
- `createTokenizedTreasuryAsset()`: Helper for treasury descriptors
- `validateAssetDescriptor()`: Validate asset descriptor completeness
- `canCreateRFQ()`: Check if RFQ can be created (respects trading hours)
- `isWithinTradingHours()`: Check if asset is within trading hours
- `getUSEquityTradingHours()`: Default US equity market hours

### Changed

#### RFQ System Improvements
- Enhanced multi-dealer quote collection with configurable thresholds
- Improved quote expiry validation and lifecycle management
- Better duplicate quote handling with automatic updates
- Ranked quote responses for improved price transparency
- Comprehensive status tracking (open, filled, expired, no_valid_quotes)
- New polling endpoint for asynchronous quote collection workflows

### Migration Guide

#### For Existing Users

No breaking changes. All new fields are optional and backward compatible.

**Using Multi-Asset Support:**

```typescript
import { 
  createCryptoAsset, 
  createTokenizedStockAsset,
  canCreateRFQ 
} from '@optionsfi/sdk';

// Create asset descriptors
const solAsset = createCryptoAsset({
  assetId: 'SOL',
  name: 'Solana',
  ticker: 'SOL',
  mintAddress: 'So11111111111111111111111111111111111111112',
  decimals: 9,
  pythFeedId: '0xef0d8...'
});

const nvdaAsset = createTokenizedStockAsset({
  assetId: 'NVDAX',
  name: 'NVIDIA Token',
  ticker: 'NVDAX',
  mintAddress: 'G5VWnn...',
  decimals: 6,
  yahooTicker: 'NVDA'
});

// Check if RFQ can be created
const { allowed, reason } = canCreateRFQ(nvdaAsset);
if (!allowed) {
  console.log(`Cannot create RFQ: ${reason}`);
}
```

**Using Anonymous RFQs:**

```typescript
const rfqId = await rfqClient.createRFQ({
  asset: 'NVDAX',
  side: 'sell',
  optionType: 'call',
  strike: 150,
  expiry: Math.floor(Date.now() / 1000) + 86400,
  quantity: 100n * 10n**6n,
  vaultAddress: myVault.toString(),
  anonymous: true, // Vault address will be hidden from market makers
  minQuotes: 3,    // Wait for at least 3 quotes
  quoteTimeout: 45000 // 45 second timeout
});
```

## [0.1.0] - 2024-12-26

### Added
- Initial SDK release
- RFQClient for quote management
- VaultInstructions for on-chain operations
- OptionPricing utilities (Black-Scholes)
- Validation and formatting utilities
- TypeScript support
- Comprehensive test suite

[0.2.0]: https://github.com/optionsfi/optionsfi/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/optionsfi/optionsfi/releases/tag/v0.1.0
