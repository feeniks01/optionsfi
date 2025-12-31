/**
 * Asset utilities test suite
 */

import { describe, it, expect } from 'vitest';
import {
    createCryptoAsset,
    createTokenizedStockAsset,
    createTokenizedTreasuryAsset,
    validateAssetDescriptor,
    canCreateRFQ,
    isWithinTradingHours,
    getUSEquityTradingHours,
} from '../src/utils/asset';
import type { AssetDescriptor, TradingHours } from '../src/types/asset';

describe('Asset Utilities', () => {
    describe('createCryptoAsset', () => {
        it('should create valid crypto asset descriptor', () => {
            const asset = createCryptoAsset({
                assetId: 'SOL',
                name: 'Solana',
                ticker: 'SOL',
                mintAddress: 'So11111111111111111111111111111111111111112',
                decimals: 9,
                pythFeedId: '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
            });

            expect(asset.assetType).toBe('crypto');
            expect(asset.assetId).toBe('SOL');
            expect(asset.priceFeedSource).toBe('pyth');
            expect(asset.decimals).toBe(9);
            expect(asset.tradingHours).toBeUndefined();
        });
    });

    describe('createTokenizedStockAsset', () => {
        it('should create valid tokenized stock descriptor with 24/7 trading by default', () => {
            const asset = createTokenizedStockAsset({
                assetId: 'NVDAX',
                name: 'NVIDIA Token',
                ticker: 'NVDAX',
                mintAddress: 'G5VWnnWRxVvuTqRCEQNNGEdRmS42hMTyh8DAN9MHecLn',
                decimals: 6,
                yahooTicker: 'NVDA',
            });

            expect(asset.assetType).toBe('tokenized_stock');
            expect(asset.assetId).toBe('NVDAX');
            expect(asset.priceFeedSource).toBe('yahoo');
            expect(asset.priceFeedId).toBe('NVDA');
            expect(asset.tradingHours).toBeUndefined(); // 24/7 by default
            expect(asset.corporateActions).toEqual([]);
            expect(asset.metadata?.description).toContain('24/7');
        });

        it('should use ticker as default Yahoo ticker', () => {
            const asset = createTokenizedStockAsset({
                assetId: 'AAPLX',
                name: 'Apple Token',
                ticker: 'AAPL',
                mintAddress: 'AAPLMintAddress',
                decimals: 6,
            });

            expect(asset.priceFeedId).toBe('AAPL');
        });

        it('should accept custom trading hours when enforceTradingHours=true', () => {
            const customHours: TradingHours = {
                timezone: 'Europe/London',
                openTime: '08:00',
                closeTime: '16:30',
                tradingDays: [1, 2, 3, 4, 5],
                enforceHours: true,
            };

            const asset = createTokenizedStockAsset({
                assetId: 'LSESTOCK',
                name: 'LSE Stock',
                ticker: 'LSE',
                mintAddress: 'LSEMintAddress',
                decimals: 6,
                tradingHours: customHours,
                enforceTradingHours: true,
            });

            expect(asset.tradingHours).toEqual(customHours);
            expect(asset.metadata?.description).toContain('market hours enforcement');
        });
    });

    describe('createTokenizedTreasuryAsset', () => {
        it('should create valid tokenized treasury descriptor', () => {
            const asset = createTokenizedTreasuryAsset({
                assetId: 'TBILL6M',
                name: '6-Month Treasury Bill',
                ticker: 'TBILL6M',
                mintAddress: 'TBILLMintAddress',
                decimals: 6,
                customFeedId: 'custom-tbill-feed',
            });

            expect(asset.assetType).toBe('tokenized_treasury');
            expect(asset.assetId).toBe('TBILL6M');
            expect(asset.priceFeedSource).toBe('custom');
            expect(asset.priceFeedId).toBe('custom-tbill-feed');
            expect(asset.tradingHours).toBeUndefined();
        });
    });

    describe('validateAssetDescriptor', () => {
        it('should validate correct asset descriptor', () => {
            const asset = createCryptoAsset({
                assetId: 'BTC',
                name: 'Bitcoin',
                ticker: 'BTC',
                mintAddress: 'BTCMintAddress',
                decimals: 8,
                pythFeedId: 'pyth-btc-feed',
            });

            const result = validateAssetDescriptor(asset);
            expect(result.valid).toBe(true);
            expect(result.errors).toHaveLength(0);
        });

        it('should reject asset with missing assetId', () => {
            const asset = {
                assetType: 'crypto' as const,
                assetId: '',
                name: 'Test',
                ticker: 'TEST',
                mintAddress: 'TestMint',
                decimals: 6,
                priceFeedSource: 'pyth' as const,
                priceFeedId: 'test-feed',
            };

            const result = validateAssetDescriptor(asset);
            expect(result.valid).toBe(false);
            expect(result.errors).toContain('Asset ID is required');
        });

        it('should reject asset with invalid decimals', () => {
            const asset = createCryptoAsset({
                assetId: 'TEST',
                name: 'Test',
                ticker: 'TEST',
                mintAddress: 'TestMint',
                decimals: 25, // Invalid
                pythFeedId: 'test-feed',
            });

            const result = validateAssetDescriptor(asset);
            expect(result.valid).toBe(false);
            expect(result.errors).toContain('Decimals must be between 0 and 18');
        });

        it('should not require trading hours for tokenized stocks (24/7 on-chain trading)', () => {
            const asset: AssetDescriptor = {
                assetType: 'tokenized_stock',
                assetId: 'STOCK',
                name: 'Stock',
                ticker: 'STOCK',
                mintAddress: 'StockMint',
                decimals: 6,
                priceFeedSource: 'yahoo',
                priceFeedId: 'STOCK',
                // No trading hours - 24/7 on-chain trading is default
            };

            const result = validateAssetDescriptor(asset);
            expect(result.valid).toBe(true);
            expect(result.errors).toHaveLength(0);
        });
    });

    describe('isWithinTradingHours', () => {
        const usEquityHours = getUSEquityTradingHours();

        it('should return false for weekend', () => {
            // Sunday, 2025-01-05 14:00 UTC (9:00 AM ET)
            const sundayTimestamp = 1736082000;
            const result = isWithinTradingHours(usEquityHours, sundayTimestamp);
            expect(result).toBe(false);
        });

        it('should return true during trading hours on weekday', () => {
            // Monday, 2025-01-06 18:00 UTC (13:00 PM ET - during market hours)
            const mondayTimestamp = 1736186400;
            const result = isWithinTradingHours(usEquityHours, mondayTimestamp);
            expect(result).toBe(true);
        });

        it('should return false before market open', () => {
            // Monday, 2025-01-06 13:00 UTC (8:00 AM ET - before market open)
            const beforeOpenTimestamp = 1736168400;
            const result = isWithinTradingHours(usEquityHours, beforeOpenTimestamp);
            expect(result).toBe(false);
        });

        it('should return false after market close', () => {
            // Monday, 2025-01-06 22:00 UTC (17:00 PM ET - after market close)
            const afterCloseTimestamp = 1736200800;
            const result = isWithinTradingHours(usEquityHours, afterCloseTimestamp);
            expect(result).toBe(false);
        });
    });

    describe('canCreateRFQ', () => {
        it('should always allow crypto assets', () => {
            const cryptoAsset = createCryptoAsset({
                assetId: 'ETH',
                name: 'Ethereum',
                ticker: 'ETH',
                mintAddress: 'ETHMint',
                decimals: 18,
                pythFeedId: 'pyth-eth-feed',
            });

            const result = canCreateRFQ(cryptoAsset);
            expect(result.allowed).toBe(true);
            expect(result.reason).toBeUndefined();
        });

        it('should always allow tokenized treasury assets', () => {
            const treasuryAsset = createTokenizedTreasuryAsset({
                assetId: 'TBILL',
                name: 'Treasury Bill',
                ticker: 'TBILL',
                mintAddress: 'TBILLMint',
                decimals: 6,
            });

            const result = canCreateRFQ(treasuryAsset);
            expect(result.allowed).toBe(true);
            expect(result.reason).toBeUndefined();
        });

        it('should check trading hours for tokenized stocks when enforced', () => {
            const stockAsset = createTokenizedStockAsset({
                assetId: 'STOCK',
                name: 'Stock',
                ticker: 'STOCK',
                mintAddress: 'StockMint',
                decimals: 6,
                enforceTradingHours: true, // Explicitly enforce trading hours
            });

            // Sunday timestamp
            const sundayTimestamp = 1736082000;
            const result = canCreateRFQ(stockAsset, sundayTimestamp);
            expect(result.allowed).toBe(false);
            expect(result.reason).toContain('Trading hours enforced');
        });

        it('should allow tokenized stocks when hours not enforced (default 24/7)', () => {
            const stockAsset = createTokenizedStockAsset({
                assetId: 'STOCK',
                name: 'Stock',
                ticker: 'STOCK',
                mintAddress: 'StockMint',
                decimals: 6,
                // No enforceTradingHours = default 24/7 trading
            });

            // Sunday timestamp - should be allowed since hours not enforced
            const sundayTimestamp = 1736082000;
            const result = canCreateRFQ(stockAsset, sundayTimestamp);
            expect(result.allowed).toBe(true);
        });

        it('should allow tokenized stocks with explicit enforceHours=false', () => {
            const stockAsset = createTokenizedStockAsset({
                assetId: 'STOCK',
                name: 'Stock',
                ticker: 'STOCK',
                mintAddress: 'StockMint',
                decimals: 6,
                tradingHours: {
                    timezone: 'America/New_York',
                    openTime: '09:30',
                    closeTime: '16:00',
                    tradingDays: [1, 2, 3, 4, 5],
                    enforceHours: false,
                },
            });

            // Sunday timestamp
            const sundayTimestamp = 1736082000;
            const result = canCreateRFQ(stockAsset, sundayTimestamp);
            expect(result.allowed).toBe(true);
        });
    });

    describe('getUSEquityTradingHours', () => {
        it('should return correct US equity trading hours', () => {
            const hours = getUSEquityTradingHours();
            
            expect(hours.timezone).toBe('America/New_York');
            expect(hours.openTime).toBe('09:30');
            expect(hours.closeTime).toBe('16:00');
            expect(hours.tradingDays).toEqual([1, 2, 3, 4, 5]); // Monday-Friday
            expect(hours.enforceHours).toBe(true);
        });
    });
});
