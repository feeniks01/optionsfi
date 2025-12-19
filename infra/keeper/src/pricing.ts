/**
 * Black-Scholes Option Pricing with Historical Volatility
 * 
 * Fetches historical price data from Yahoo Finance and calculates
 * annualized volatility for use in Black-Scholes pricing.
 */

import axios from "axios";

// ============================================================================
// Types
// ============================================================================

export interface BlackScholesParams {
    spot: number;        // Current underlying price
    strike: number;      // Option strike price
    timeToExpiry: number; // Time to expiry in years
    riskFreeRate: number; // Risk-free rate (e.g., 0.05 for 5%)
    volatility: number;   // Annualized volatility (e.g., 0.30 for 30%)
}

export interface OptionPrices {
    call: number;
    put: number;
    delta: { call: number; put: number };
}

// ============================================================================
// Standard Normal Distribution Functions
// ============================================================================

/**
 * Standard normal CDF using Abramowitz & Stegun approximation
 */
function normCDF(x: number): number {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x) / Math.sqrt(2);

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return 0.5 * (1.0 + sign * y);
}

/**
 * Standard normal PDF
 */
function normPDF(x: number): number {
    return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

// ============================================================================
// Black-Scholes Pricing
// ============================================================================

/**
 * Calculate Black-Scholes option prices and Greeks
 */
export function blackScholes(params: BlackScholesParams): OptionPrices {
    const { spot, strike, timeToExpiry, riskFreeRate, volatility } = params;

    // Handle edge cases
    if (timeToExpiry <= 0) {
        const intrinsicCall = Math.max(0, spot - strike);
        const intrinsicPut = Math.max(0, strike - spot);
        return {
            call: intrinsicCall,
            put: intrinsicPut,
            delta: { call: intrinsicCall > 0 ? 1 : 0, put: intrinsicPut > 0 ? -1 : 0 }
        };
    }

    if (volatility <= 0) {
        throw new Error("Volatility must be positive");
    }

    const sqrtT = Math.sqrt(timeToExpiry);

    // d1 and d2
    const d1 = (Math.log(spot / strike) + (riskFreeRate + 0.5 * volatility * volatility) * timeToExpiry)
        / (volatility * sqrtT);
    const d2 = d1 - volatility * sqrtT;

    // Call and Put prices
    const callPrice = spot * normCDF(d1) - strike * Math.exp(-riskFreeRate * timeToExpiry) * normCDF(d2);
    const putPrice = strike * Math.exp(-riskFreeRate * timeToExpiry) * normCDF(-d2) - spot * normCDF(-d1);

    // Delta
    const callDelta = normCDF(d1);
    const putDelta = callDelta - 1;

    return {
        call: Math.max(0, callPrice),
        put: Math.max(0, putPrice),
        delta: { call: callDelta, put: putDelta }
    };
}

// ============================================================================
// Historical Volatility from Yahoo Finance
// ============================================================================

interface YahooQuote {
    close: number;
    date: Date;
}

/**
 * Fetch historical prices from Yahoo Finance
 */
export async function fetchHistoricalPrices(
    ticker: string,
    days: number = 30
): Promise<YahooQuote[]> {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - (days * 24 * 60 * 60);

    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?period1=${startDate}&period2=${endDate}&interval=1d`;

    try {
        const response = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
        });

        const data = response.data;
        if (!data.chart?.result?.[0]) {
            throw new Error(`No data returned for ${ticker}`);
        }

        const result = data.chart.result[0];
        const timestamps = result.timestamp || [];
        const closes = result.indicators?.quote?.[0]?.close || [];

        const quotes: YahooQuote[] = [];
        for (let i = 0; i < timestamps.length; i++) {
            if (closes[i] !== null && closes[i] !== undefined) {
                quotes.push({
                    close: closes[i],
                    date: new Date(timestamps[i] * 1000)
                });
            }
        }

        return quotes;
    } catch (error: any) {
        console.error("Failed to fetch historical prices:", error.message);
        throw error;
    }
}

/**
 * Calculate annualized historical volatility from price data
 */
export function calculateHistoricalVolatility(prices: YahooQuote[]): number {
    if (prices.length < 2) {
        throw new Error("Need at least 2 prices to calculate volatility");
    }

    // Calculate log returns
    const logReturns: number[] = [];
    for (let i = 1; i < prices.length; i++) {
        const logReturn = Math.log(prices[i].close / prices[i - 1].close);
        logReturns.push(logReturn);
    }

    // Calculate mean
    const mean = logReturns.reduce((sum, r) => sum + r, 0) / logReturns.length;

    // Calculate variance
    const variance = logReturns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / (logReturns.length - 1);

    // Standard deviation of daily returns
    const dailyStdDev = Math.sqrt(variance);

    // Annualize (assuming 252 trading days)
    const annualizedVol = dailyStdDev * Math.sqrt(252);

    return annualizedVol;
}

/**
 * Get volatility for a ticker from Yahoo Finance
 */
export async function getVolatility(ticker: string, lookbackDays: number = 30): Promise<number> {
    const prices = await fetchHistoricalPrices(ticker, lookbackDays);
    return calculateHistoricalVolatility(prices);
}

// ============================================================================
// Premium Calculation
// ============================================================================

export interface PremiumParams {
    spot: number;           // Current price
    strikePercent: number;  // Strike as % of spot (e.g., 1.05 for 5% OTM call)
    daysToExpiry: number;   // Days until expiry
    volatility: number;     // Annualized volatility
    riskFreeRate?: number;  // Default 5%
}

/**
 * Calculate covered call premium using Black-Scholes
 */
export function calculateCoveredCallPremium(params: PremiumParams): number {
    const {
        spot,
        strikePercent,
        daysToExpiry,
        volatility,
        riskFreeRate = 0.05
    } = params;

    const strike = spot * strikePercent;
    const timeToExpiry = daysToExpiry / 365;

    const prices = blackScholes({
        spot,
        strike,
        timeToExpiry,
        riskFreeRate,
        volatility
    });

    return prices.call;
}

/**
 * Calculate premium as basis points of notional
 */
export function premiumToBps(premium: number, spot: number): number {
    return Math.round((premium / spot) * 10000);
}
