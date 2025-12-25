
function normCDF(x) {
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

function blackScholes(spot, strike, timeToExpiry, riskFreeRate, volatility) {
    if (timeToExpiry <= 0) return Math.max(0, spot - strike);
    const sqrtT = Math.sqrt(timeToExpiry);
    const d1 = (Math.log(spot / strike) + (riskFreeRate + 0.5 * volatility * volatility) * timeToExpiry) / (volatility * sqrtT);
    const d2 = d1 - volatility * sqrtT;
    return spot * normCDF(d1) - strike * Math.exp(-riskFreeRate * timeToExpiry) * normCDF(d2);
}

const spot = 145;
const strikePercent = 1.10; // 10% OTM
const strike = spot * strikePercent;
const vol = 0.40; // 40% annualized vol
const riskFree = 0.05;

console.log("Black-Scholes (Floor/Keeper) Realism");
console.log("--------------------------------------------------");
// 7 Days
const p7d_bs = blackScholes(spot, strike, 7 / 365, riskFree, vol);
console.log(`7 Days BS:   $${p7d_bs.toFixed(4)} (${((p7d_bs / spot) * 100).toFixed(4)}% of notional)`);

// 3 Minutes
const p3m_bs = blackScholes(spot, strike, (3 / (24 * 60)) / 365, riskFree, vol);
console.log(`3 Minutes BS: $${p3m_bs.toFixed(10)} (Basically ZERO)`);

console.log("\nMock MM (Quoting) Scaling Realism");
console.log("--------------------------------------------------");

function mockMMQuote(durationMins) {
    const baseRate = 0.0025; // 0.25% base for weekly
    const timeScale = Math.sqrt(durationMins / 10080);
    const premiumPercent = baseRate * timeScale;
    return premiumPercent * spot;
}

const q7d = mockMMQuote(7 * 24 * 60);
console.log(`7 Days Quote:   $${q7d.toFixed(4)} (${((q7d / spot) * 100).toFixed(4)}% of notional)`);

const q3m = mockMMQuote(3);
console.log(`3 Minutes Quote: $${q3m.toFixed(6)} (${((q3m / spot) * 100).toFixed(6)}% of notional)`);
console.log(`(This satisfies the "movement" needed for demo while being realistically tiny)`);
