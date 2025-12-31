/**
 * Asset utility functions for validation and descriptor creation.
 */

import { AssetType, AssetDescriptor, TradingHours } from '../types/asset';

/**
 * Checks if the current time falls within an asset's trading hours.
 * 
 * Note: Uses simplified timezone conversion. For production, consider
 * using a timezone library like date-fns-tz or luxon.
 */
export function isWithinTradingHours(tradingHours: TradingHours, timestamp?: number): boolean {
    const now = timestamp ? new Date(timestamp * 1000) : new Date();
    
    // For simplicity, we assume trading hours are specified in the market's local time
    // and we need to convert current time to that timezone
    // This simplified version works with UTC-based comparisons
    
    // For US markets (ET = UTC-5 in EST, UTC-4 in EDT)
    // We'll use a simplified approach: subtract 5 hours for EST conversion
    // Note: This doesn't account for DST. Production should use proper timezone library.
    
    let localHour = now.getUTCHours();
    let localMinute = now.getUTCMinutes();
    let localDay = now.getUTCDay();
    
    // Simple timezone offset (this is a simplified implementation)
    // For America/New_York, subtract 5 hours (EST) - should use proper tz lib in production
    if (tradingHours.timezone === 'America/New_York') {
        localHour -= 5;
        if (localHour < 0) {
            localHour += 24;
            localDay = (localDay - 1 + 7) % 7;
        }
    }
    
    // Check if today is a trading day
    if (!tradingHours.tradingDays.includes(localDay)) {
        return false;
    }
    
    // Parse open and close times
    const [openHour, openMinute] = tradingHours.openTime.split(':').map(Number);
    const [closeHour, closeMinute] = tradingHours.closeTime.split(':').map(Number);
    
    const currentMinutes = localHour * 60 + localMinute;
    const openMinutes = openHour * 60 + openMinute;
    const closeMinutes = closeHour * 60 + closeMinute;
    
    return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
}

/**
 * Returns default trading hours for US equity markets (NYSE/NASDAQ).
 */
export function getUSEquityTradingHours(): TradingHours {
    return {
        timezone: 'America/New_York',
        openTime: '09:30',
        closeTime: '16:00',
        tradingDays: [1, 2, 3, 4, 5], // Monday-Friday
        enforceHours: true,
    };
}

/**
 * Creates an asset descriptor for cryptocurrency assets.
 */
export function createCryptoAsset(params: {
    assetId: string;
    name: string;
    ticker: string;
    mintAddress: string;
    decimals: number;
    pythFeedId: string;
}): AssetDescriptor {
    return {
        assetType: 'crypto',
        assetId: params.assetId,
        name: params.name,
        ticker: params.ticker,
        mintAddress: params.mintAddress,
        decimals: params.decimals,
        priceFeedSource: 'pyth',
        priceFeedId: params.pythFeedId,
    };
}

/**
 * Creates an asset descriptor for tokenized stock assets.
 * 
 * Tokenized equities trade 24/7 on-chain. Trading hours are optional
 * and primarily used for reference pricing data availability.
 */
export function createTokenizedStockAsset(params: {
    assetId: string;
    name: string;
    ticker: string;
    mintAddress: string;
    decimals: number;
    yahooTicker?: string;
    tradingHours?: TradingHours;
    enforceTradingHours?: boolean; // Default: false (24/7 trading)
}): AssetDescriptor {
    // Only set trading hours if explicitly requested
    const tradingHours = params.enforceTradingHours 
        ? (params.tradingHours || getUSEquityTradingHours())
        : undefined;
    
    return {
        assetType: 'tokenized_stock',
        assetId: params.assetId,
        name: params.name,
        ticker: params.ticker,
        mintAddress: params.mintAddress,
        decimals: params.decimals,
        priceFeedSource: 'yahoo',
        priceFeedId: params.yahooTicker || params.ticker,
        tradingHours,
        corporateActions: [],
        metadata: {
            description: params.enforceTradingHours
                ? 'Tokenized stock with market hours enforcement'
                : 'Tokenized stock with 24/7 on-chain trading',
        },
    };
}

/**
 * Creates an asset descriptor for tokenized treasury assets.
 */
export function createTokenizedTreasuryAsset(params: {
    assetId: string;
    name: string;
    ticker: string;
    mintAddress: string;
    decimals: number;
    customFeedId?: string;
}): AssetDescriptor {
    return {
        assetType: 'tokenized_treasury',
        assetId: params.assetId,
        name: params.name,
        ticker: params.ticker,
        mintAddress: params.mintAddress,
        decimals: params.decimals,
        priceFeedSource: 'custom',
        priceFeedId: params.customFeedId || params.assetId,
    };
}

/**
 * Validates an asset descriptor for completeness and correctness.
 */
export function validateAssetDescriptor(asset: AssetDescriptor): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!asset.assetId || asset.assetId.trim().length === 0) {
        errors.push('Asset ID is required');
    }
    
    if (!asset.name || asset.name.trim().length === 0) {
        errors.push('Asset name is required');
    }
    
    if (!asset.ticker || asset.ticker.trim().length === 0) {
        errors.push('Ticker is required');
    }
    
    if (!asset.mintAddress || asset.mintAddress.trim().length === 0) {
        errors.push('Mint address is required');
    }
    
    if (asset.decimals < 0 || asset.decimals > 18) {
        errors.push('Decimals must be between 0 and 18');
    }
    
    if (!asset.priceFeedId || asset.priceFeedId.trim().length === 0) {
        errors.push('Price feed ID is required');
    }
    
    // Note: Trading hours are now optional for tokenized stocks (24/7 on-chain trading)
    // Only validate if trading hours are provided
    if (asset.tradingHours && asset.tradingHours.enforceHours) {
        if (!asset.tradingHours.timezone || !asset.tradingHours.openTime || !asset.tradingHours.closeTime) {
            errors.push('Trading hours must include timezone, openTime, and closeTime when enforced');
        }
    }
    
    return {
        valid: errors.length === 0,
        errors,
    };
}

/**
 * Checks if an RFQ can be created for an asset at the specified time.
 * 
 * On-chain assets trade 24/7 by default. Trading hours only apply
 * when explicitly configured.
 */
export function canCreateRFQ(asset: AssetDescriptor, timestamp?: number): { allowed: boolean; reason?: string } {
    // All on-chain assets trade 24/7 by default
    // Only check trading hours if explicitly configured AND enforced
    
    if (!asset.tradingHours || !asset.tradingHours.enforceHours) {
        return { allowed: true }; // 24/7 trading (default for on-chain assets)
    }
    
    // Only enforce trading hours if explicitly requested
    const withinHours = isWithinTradingHours(asset.tradingHours, timestamp);
    if (!withinHours) {
        return {
            allowed: false,
            reason: `Trading hours enforced. Market hours: ${asset.tradingHours.openTime}-${asset.tradingHours.closeTime} ${asset.tradingHours.timezone}`,
        };
    }
    
    return { allowed: true };
}
