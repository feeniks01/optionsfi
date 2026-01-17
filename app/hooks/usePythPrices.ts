"use client";

import { useState, useEffect, useCallback } from "react";
import { getAllVaultConfigs, getVaultConfig } from "../lib/vault-config";

const HERMES_URL = "https://hermes.pyth.network";

export interface PythPriceData {
    symbol: string;
    price: number;
    confidence: number;
    lastUpdated: Date;
    emaPrice: number;
}

interface UsePythPricesReturn {
    prices: Record<string, PythPriceData>;
    loading: boolean;
    error: string | null;
    refresh: () => Promise<void>;
    getPrice: (symbol: string) => number;
}

/**
 * Hook to fetch live Pyth oracle prices for all xStock assets
 */
export function usePythPrices(): UsePythPricesReturn {
    const [prices, setPrices] = useState<Record<string, PythPriceData>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPrices = useCallback(async () => {
        try {
            const configs = getAllVaultConfigs();
            const feedIds = configs.map(c => c.pythFeedId).filter(Boolean);
            if (feedIds.length === 0) return;
            const idsParam = feedIds.map(id => `ids[]=${id}`).join("&");

            const response = await fetch(
                `${HERMES_URL}/v2/updates/price/latest?${idsParam}&parsed=true`
            );

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            if (data.parsed) {
                const newPrices: Record<string, PythPriceData> = {};

                configs.forEach((config) => {
                    const feedId = config.pythFeedId;
                    const feedData = data.parsed.find((p: any) => `0x${p.id}` === feedId);

                    if (feedData) {
                        const price = parseFloat(feedData.price.price) * Math.pow(10, feedData.price.expo);
                        const conf = parseFloat(feedData.price.conf) * Math.pow(10, feedData.price.expo);
                        const emaPrice = parseFloat(feedData.ema_price.price) * Math.pow(10, feedData.ema_price.expo);
                        const publishTime = feedData.price.publish_time;

                        newPrices[config.assetId.toLowerCase()] = {
                            symbol: config.symbol,
                            price,
                            confidence: conf,
                            lastUpdated: new Date(publishTime * 1000),
                            emaPrice,
                        };
                    }
                });

                setPrices(newPrices);
                setError(null);
            }
        } catch (err: any) {
            console.error("Failed to fetch Pyth prices:", err);
            setError(err.message || "Failed to fetch prices");
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial fetch
    useEffect(() => {
        fetchPrices();
        // Auto-refresh every 30 seconds
        const interval = setInterval(fetchPrices, 30000);
        return () => clearInterval(interval);
    }, [fetchPrices]);

    // Helper to get price by symbol (case insensitive)
    const getPrice = useCallback((symbolOrAssetId: string): number => {
        const config = getVaultConfig(symbolOrAssetId);
        const key = config?.assetId.toLowerCase() || symbolOrAssetId.toLowerCase();
        return prices[key]?.price || 0;
    }, [prices]);

    return {
        prices,
        loading,
        error,
        refresh: fetchPrices,
        getPrice,
    };
}

/**
 * Hook to get a single asset's price
 */
export function usePythPrice(symbol: string): { price: number; loading: boolean } {
    const { prices, loading, getPrice } = usePythPrices();
    return {
        price: getPrice(symbol),
        loading,
    };
}
