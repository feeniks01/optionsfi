/**
 * Centralized vault configuration (config/vaults.json).
 *
 * Dynamic data (TVL, APY, price, tier) should be fetched from on-chain
 * or computed based on live data.
 */

import vaultsJson from "../../config/vaults.json";

export interface VaultShareMetadata {
    name: string;
    symbol: string;
    uri: string;
}

export interface VaultMetadata {
    id: string;
    name: string;
    symbol: string;
    assetId: string;      // On-chain asset ID for PDA derivation
    strategy: string;
    logo: string;
    accentColor: string;
    strikeOffset: number; // Strike OTM percentage (e.g., 0.10 = 10%)
    premiumRange: [number, number]; // Expected premium range as percentage (strategy-based)
    isDemo: boolean;
    decimals: number;
    pythFeedId: string;
    underlyingMint?: string;
    premiumMint?: string;
    oracleTicker?: string;
    utilizationCapBps?: number;
    minEpochDuration?: number;
    enabled?: boolean;
    shareMetadata?: VaultShareMetadata;
}

const ALL_VAULTS: VaultMetadata[] = (vaultsJson as VaultMetadata[]).map(v => ({
    ...v,
    enabled: v.enabled !== false,
}));

export const VAULT_CONFIG: Record<string, VaultMetadata> = ALL_VAULTS
    .filter(v => v.enabled)
    .reduce((acc, v) => {
        acc[v.id.toLowerCase()] = v;
        return acc;
    }, {} as Record<string, VaultMetadata>);

export function getAllVaultConfigs(): VaultMetadata[] {
    return Object.values(VAULT_CONFIG);
}

export function getAllVaultConfigsIncludingDisabled(): VaultMetadata[] {
    return ALL_VAULTS;
}

// Helper to get vault by ticker (lowercase key)
export function getVaultConfig(tickerOrAssetId: string): VaultMetadata | undefined {
    const key = tickerOrAssetId.toLowerCase();
    if (VAULT_CONFIG[key]) return VAULT_CONFIG[key];
    return Object.values(VAULT_CONFIG).find(v => v.assetId.toLowerCase() === key || v.symbol.toLowerCase() === key);
}

export function getVaultConfigByAssetId(assetId: string): VaultMetadata | undefined {
    return ALL_VAULTS.find(v => v.assetId.toLowerCase() === assetId.toLowerCase());
}

export function isVaultEnabled(assetId: string): boolean {
    const config = getVaultConfigByAssetId(assetId);
    if (!config) return true;
    return config.enabled !== false;
}

// Get all vault tickers
export function getAllVaultTickers(): string[] {
    return Object.keys(VAULT_CONFIG);
}

// Get Pyth feed ID for a vault
export function getPythFeedId(ticker: string): string | undefined {
    return getVaultConfig(ticker)?.pythFeedId;
}

// Compute tier based on APY dynamically
export function computeTier(apy: number, isDemo: boolean): "Conservative" | "Normal" | "Aggressive" | "Demo" {
    if (isDemo) return "Demo";
    if (apy < 8) return "Conservative";
    if (apy > 15) return "Aggressive";
    return "Normal";
}
