/**
 * Asset type definitions for multi-asset support.
 */

/**
 * Asset type classification
 */
export type AssetType = 'crypto' | 'tokenized_stock' | 'tokenized_treasury';

/**
 * Price feed source for asset pricing
 */
export type PriceFeedSource = 'pyth' | 'yahoo' | 'switchboard' | 'custom';

/**
 * Trading hours configuration for assets with market hours
 */
export interface TradingHours {
    /** Timezone (e.g., "America/New_York") */
    timezone: string;
    
    /** Market open time in 24h format (e.g., "09:30") */
    openTime: string;
    
    /** Market close time in 24h format (e.g., "16:00") */
    closeTime: string;
    
    /** Days of week market is open (0 = Sunday, 6 = Saturday) */
    tradingDays: number[];
    
    /** Whether to enforce trading hours for RFQs */
    enforceHours?: boolean;
}

/**
 * Corporate action types for tokenized stocks
 */
export type CorporateActionType = 'dividend' | 'split' | 'reverse_split' | 'merger';

/**
 * Corporate action data
 */
export interface CorporateAction {
    /** Type of corporate action */
    type: CorporateActionType;
    
    /** Effective date (Unix seconds) */
    effectiveDate: number;
    
    /** Action-specific data */
    data: {
        /** For dividend: amount per share in USD */
        dividendAmount?: number;
        
        /** For split/reverse split: ratio (e.g., 2.0 for 2:1 split) */
        splitRatio?: number;
        
        /** For merger: new asset ticker */
        newTicker?: string;
    };
}

/**
 * Complete asset descriptor with metadata
 */
export interface AssetDescriptor {
    /** Asset type classification */
    assetType: AssetType;
    
    /** Unique asset identifier (e.g., "NVDAX", "SOL", "TBILL6M") */
    assetId: string;
    
    /** Human-readable name */
    name: string;
    
    /** Trading ticker/symbol */
    ticker: string;
    
    /** Mint address on Solana */
    mintAddress: string;
    
    /** Token decimals */
    decimals: number;
    
    /** Price feed source */
    priceFeedSource: PriceFeedSource;
    
    /** Price feed identifier (e.g., Pyth price feed address, Yahoo ticker) */
    priceFeedId: string;
    
    /** Trading hours configuration (required for tokenized_stock) */
    tradingHours?: TradingHours;
    
    /** Corporate actions history (for tokenized_stock) */
    corporateActions?: CorporateAction[];
    
    /** Additional metadata */
    metadata?: {
        /** Asset description */
        description?: string;
        
        /** Logo/icon URI */
        logoUri?: string;
        
        /** External links */
        links?: {
            website?: string;
            documentation?: string;
        };
        
        /** Risk disclosure */
        riskDisclosure?: string;
    };
}

/**
 * Asset registry entry with status
 */
export interface AssetRegistryEntry extends AssetDescriptor {
    /** Whether asset is active for trading */
    isActive: boolean;
    
    /** Timestamp when asset was added (Unix seconds) */
    addedAt: number;
    
    /** Last update timestamp (Unix seconds) */
    updatedAt: number;
}

/**
 * Volatility data for an asset
 */
export interface AssetVolatility {
    /** Asset identifier */
    assetId: string;
    
    /** Annualized volatility (e.g., 0.30 for 30%) */
    volatility: number;
    
    /** Lookback period in days */
    lookbackDays: number;
    
    /** Data timestamp (Unix seconds) */
    timestamp: number;
    
    /** Data source */
    source: 'historical' | 'implied' | 'hybrid';
}
