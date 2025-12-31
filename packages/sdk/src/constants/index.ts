/**
 * Constant exports for addresses and configuration.
 */

export {
    VAULT_PROGRAM_ID,
    DEVNET_USDC_MINT,
    MAINNET_USDC_MINT,
    PYTH_PRICE_FEEDS,
    PYTH_HERMES_URL,
    deriveVaultPda,
    deriveWithdrawalPda,
    deriveShareEscrowPda,
    deriveWhitelistPda,
} from './addresses';

export {
    DEVNET_CONFIG,
    MAINNET_CONFIG,
    DEFAULT_PRICING_PARAMS,
    RFQ_DEFAULTS,
    TOKEN_DECIMALS,
} from './config';
