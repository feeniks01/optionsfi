/**
 * Multi-Asset RFQ Example
 * 
 * Demonstrates creating RFQs for different asset types (crypto, tokenized stocks, treasuries)
 * with the enhanced multi-dealer quote collection system.
 */

import { 
    createCryptoAsset, 
    createTokenizedStockAsset,
    createTokenizedTreasuryAsset,
    canCreateRFQ,
    validateAssetDescriptor
} from '@optionsfi/sdk';
import type { AssetDescriptor, RFQParams } from '@optionsfi/sdk';

// ============================================================================
// Step 1: Define Assets
// ============================================================================

// Crypto asset (24/7 trading)
const solAsset = createCryptoAsset({
    assetId: 'SOL',
    name: 'Solana',
    ticker: 'SOL',
    mintAddress: 'So11111111111111111111111111111111111111112',
    decimals: 9,
    pythFeedId: '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
});

// Tokenized stock (market hours enforced)
const nvdaAsset = createTokenizedStockAsset({
    assetId: 'NVDAX',
    name: 'NVIDIA Token',
    ticker: 'NVDAX',
    mintAddress: 'G5VWnnWRxVvuTqRCEQNNGEdRmS42hMTyh8DAN9MHecLn',
    decimals: 6,
    yahooTicker: 'NVDA',
});

// Tokenized treasury (24/7 trading)
const treasuryAsset = createTokenizedTreasuryAsset({
    assetId: 'TBILL6M',
    name: '6-Month Treasury Bill',
    ticker: 'TBILL6M',
    mintAddress: 'TBILLMintAddress123',
    decimals: 6,
    customFeedId: 'custom-tbill-oracle',
});

// ============================================================================
// Step 2: Validate Assets
// ============================================================================

function validateAndPrintAsset(asset: AssetDescriptor) {
    console.log(`\n📋 Validating ${asset.name}...`);
    
    const validation = validateAssetDescriptor(asset);
    if (validation.valid) {
        console.log('✅ Asset is valid');
    } else {
        console.log('❌ Asset validation failed:');
        validation.errors.forEach(err => console.log(`   - ${err}`));
    }
    
    // Check if RFQ can be created now
    const rfqCheck = canCreateRFQ(asset);
    if (rfqCheck.allowed) {
        console.log('✅ RFQs can be created for this asset');
    } else {
        console.log(`⏰ RFQs not allowed: ${rfqCheck.reason}`);
    }
}

console.log('='.repeat(60));
console.log('Multi-Asset RFQ Example');
console.log('='.repeat(60));

validateAndPrintAsset(solAsset);
validateAndPrintAsset(nvdaAsset);
validateAndPrintAsset(treasuryAsset);

// ============================================================================
// Step 3: Create RFQs with Multi-Dealer Support
// ============================================================================

console.log('\n' + '='.repeat(60));
console.log('Creating RFQs with Enhanced Multi-Dealer Support');
console.log('='.repeat(60));

// Example 1: Standard RFQ for crypto (single quote, fast)
const cryptoRFQ: RFQParams = {
    asset: solAsset.assetId,
    side: 'sell',
    optionType: 'call',
    strike: 150,
    expiry: Math.floor(Date.now() / 1000) + 86400, // 1 day from now
    quantity: 1000n * 10n**9n, // 1000 SOL
    vaultAddress: 'YourVaultAddressHere',
    minQuotes: 1, // Accept first quote
    quoteTimeout: 15000, // 15 seconds
};

console.log('\n📤 Crypto RFQ (SOL):');
console.log(JSON.stringify(cryptoRFQ, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));

// Example 2: Multi-dealer RFQ for tokenized stock (wait for 3 quotes)
const stockRFQ: RFQParams = {
    asset: nvdaAsset.assetId,
    side: 'sell',
    optionType: 'call',
    strike: 145,
    expiry: Math.floor(Date.now() / 1000) + 604800, // 1 week from now
    quantity: 100n * 10n**6n, // 100 NVDAX
    vaultAddress: 'YourVaultAddressHere',
    anonymous: false, // Show vault address to market makers
    minQuotes: 3, // Wait for at least 3 quotes
    quoteTimeout: 45000, // 45 seconds
};

console.log('\n📤 Tokenized Stock RFQ (NVDAX) - Multi-Dealer:');
console.log(JSON.stringify(stockRFQ, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));

// Example 3: Anonymous RFQ for large institutional vault
const anonymousRFQ: RFQParams = {
    asset: nvdaAsset.assetId,
    side: 'sell',
    optionType: 'call',
    strike: 150,
    expiry: Math.floor(Date.now() / 1000) + 2592000, // 1 month from now
    quantity: 10000n * 10n**6n, // 10,000 NVDAX (large size)
    vaultAddress: 'InstitutionalVaultAddress',
    anonymous: true, // Hide vault identity
    minQuotes: 5, // Wait for 5 quotes for better competition
    quoteTimeout: 60000, // 60 seconds
    premiumFloor: 50000n * 10n**6n, // $50,000 minimum premium
};

console.log('\n📤 Anonymous RFQ (NVDAX) - Institutional:');
console.log(JSON.stringify({
    ...anonymousRFQ,
    vaultAddress: anonymousRFQ.anonymous ? '***HIDDEN***' : anonymousRFQ.vaultAddress
}, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));

// Example 4: Treasury RFQ (24/7 trading)
const treasuryRFQ: RFQParams = {
    asset: treasuryAsset.assetId,
    side: 'sell',
    optionType: 'put',
    strike: 98.5,
    expiry: Math.floor(Date.now() / 1000) + 1209600, // 2 weeks from now
    quantity: 1000000n * 10n**6n, // $1M notional
    vaultAddress: 'TreasuryVaultAddress',
    minQuotes: 2, // Wait for 2 quotes
    quoteTimeout: 30000, // 30 seconds
};

console.log('\n📤 Treasury RFQ (TBILL6M):');
console.log(JSON.stringify(treasuryRFQ, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));

// ============================================================================
// Step 4: Expected Router Response Flow
// ============================================================================

console.log('\n' + '='.repeat(60));
console.log('Expected Multi-Dealer RFQ Flow');
console.log('='.repeat(60));

console.log(`
1️⃣  Create RFQ:
   POST /rfq
   Response: {
     rfqId: "rfq_1234567890_abc123",
     status: "open",
     broadcastedTo: 5,  // Number of connected market makers
     minQuotes: 3,
     expiresAt: 1704137890000
   }

2️⃣  Wait for Quotes (Optional):
   POST /rfq/:rfqId/wait
   Body: { minQuotes: 3, timeout: 30000 }
   Response: {
     rfqId: "rfq_1234567890_abc123",
     success: true,
     reason: "target_met",
     quotesReceived: 3,
     quotes: [...]
   }

3️⃣  Fill RFQ (Best Quote Selection):
   POST /rfq/:rfqId/fill
   Response: {
     rfqId: "rfq_1234567890_abc123",
     status: "filled",
     filled: {
       quoteId: "quote_xyz",
       maker: "maker_1",
       premium: 52000000000,  // $52,000 USDC
       filledAt: 1704137900000
     },
     totalQuotes: 5,
     validQuotes: 4,
     rankedQuotes: [
       { maker: "maker_1", premium: 52000000000, rank: 1 },
       { maker: "maker_2", premium: 51500000000, rank: 2 },
       { maker: "maker_3", premium: 51000000000, rank: 3 },
       { maker: "maker_4", premium: 50500000000, rank: 4 }
     ]
   }

4️⃣  Market Maker Notifications:
   - Winner gets "fill" message
   - Losers get "rfq_lost" message with spread info
`);

console.log('\n' + '='.repeat(60));
console.log('Benefits of Multi-Dealer RFQ System');
console.log('='.repeat(60));

console.log(`
✅ Better Price Discovery
   - Multiple quotes ensure competitive pricing
   - Ranked results show market depth

✅ Reduced Information Leakage
   - Anonymous RFQs protect large institutional flows
   - Vault identity can be hidden when needed

✅ Flexible Execution
   - Configure minQuotes based on trade size
   - Adjust timeout based on urgency

✅ Market Transparency
   - See all quotes and rankings
   - Understand spread between best and worst quotes

✅ Fair Market Structure
   - All connected market makers get RFQ simultaneously
   - Deterministic winner selection (highest premium)
`);

console.log('\n✨ Multi-asset support ready for production! ✨\n');
