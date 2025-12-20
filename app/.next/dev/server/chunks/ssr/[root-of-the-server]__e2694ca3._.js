module.exports = [
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[project]/app/anchor/vault_idl.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"address\":\"A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94\",\"metadata\":{\"name\":\"vault\",\"version\":\"0.1.0\",\"spec\":\"0.1.0\",\"description\":\"OptionsFi V2 - Covered Call Vault\"},\"instructions\":[{\"name\":\"advance_epoch\",\"docs\":[\"Advance epoch (called by keeper after settlement)\",\"Premium earned is credited to total_assets, increasing share value\"],\"discriminator\":[93,138,234,218,241,230,132,38],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]}],\"args\":[{\"name\":\"premium_earned\",\"type\":\"u64\"}]},{\"name\":\"collect_premium\",\"docs\":[\"Collect premium from market maker (called during epoch roll)\",\"Transfers USDC from payer to vault's premium account\"],\"discriminator\":[166,199,123,128,71,141,223,204],\"accounts\":[{\"name\":\"vault\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"vault_premium_account\",\"writable\":true},{\"name\":\"payer_token_account\",\"writable\":true},{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[{\"name\":\"amount\",\"type\":\"u64\"}]},{\"name\":\"create_share_metadata\",\"docs\":[\"Create metadata for the share token (vNVDAx, etc.)\",\"Only callable by vault authority since vault PDA is the mint authority\"],\"discriminator\":[176,243,233,202,218,168,53,158],\"accounts\":[{\"name\":\"vault\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"share_mint\",\"relations\":[\"vault\"]},{\"name\":\"metadata\",\"writable\":true},{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"rent\",\"address\":\"SysvarRent111111111111111111111111111111111\"},{\"name\":\"token_metadata_program\",\"address\":\"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s\"}],\"args\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"symbol\",\"type\":\"string\"},{\"name\":\"uri\",\"type\":\"string\"}]},{\"name\":\"deposit\",\"docs\":[\"Deposit underlying tokens and receive vault shares\"],\"discriminator\":[242,35,198,137,82,225,242,182],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"share_mint\",\"writable\":true},{\"name\":\"vault_token_account\",\"writable\":true},{\"name\":\"user_token_account\",\"writable\":true},{\"name\":\"user_share_account\",\"writable\":true},{\"name\":\"user\",\"writable\":true,\"signer\":true},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[{\"name\":\"amount\",\"type\":\"u64\"}]},{\"name\":\"initialize_vault\",\"docs\":[\"Initialize a new vault for a specific xStock asset\"],\"discriminator\":[48,191,163,44,71,129,63,164],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"arg\",\"path\":\"asset_id\"}]}},{\"name\":\"underlying_mint\"},{\"name\":\"premium_mint\"},{\"name\":\"share_mint\",\"writable\":true,\"signer\":true},{\"name\":\"vault_token_account\",\"writable\":true,\"signer\":true},{\"name\":\"premium_token_account\",\"writable\":true,\"signer\":true},{\"name\":\"authority\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"},{\"name\":\"rent\",\"address\":\"SysvarRent111111111111111111111111111111111\"}],\"args\":[{\"name\":\"asset_id\",\"type\":\"string\"},{\"name\":\"utilization_cap_bps\",\"type\":\"u16\"}]},{\"name\":\"pay_settlement\",\"docs\":[\"Pay out to market maker for ITM settlement\",\"Only callable by vault authority\"],\"discriminator\":[65,54,44,166,205,55,164,205],\"accounts\":[{\"name\":\"vault\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"vault_premium_account\",\"writable\":true},{\"name\":\"recipient_token_account\",\"writable\":true},{\"name\":\"recipient\"},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[{\"name\":\"amount\",\"type\":\"u64\"}]},{\"name\":\"process_withdrawal\",\"docs\":[\"Process withdrawal after epoch settles\"],\"discriminator\":[51,97,236,17,37,33,196,64],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]},\"relations\":[\"withdrawal_request\"]},{\"name\":\"withdrawal_request\",\"writable\":true},{\"name\":\"share_mint\",\"writable\":true},{\"name\":\"vault_token_account\",\"writable\":true},{\"name\":\"user_token_account\",\"writable\":true},{\"name\":\"user_share_account\",\"writable\":true},{\"name\":\"user\",\"writable\":true,\"signer\":true,\"relations\":[\"withdrawal_request\"]},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[]},{\"name\":\"record_notional_exposure\",\"docs\":[\"Record notional exposure when an RFQ is filled (fractional options)\",\"Premium is in premium_mint tokens (USDC)\"],\"discriminator\":[26,180,108,160,15,34,179,128],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]}],\"args\":[{\"name\":\"notional_tokens\",\"type\":\"u64\"},{\"name\":\"premium\",\"type\":\"u64\"}]},{\"name\":\"request_withdrawal\",\"docs\":[\"Request withdrawal (queued until epoch end)\"],\"discriminator\":[251,85,121,205,56,201,12,177],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"withdrawal_request\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[119,105,116,104,100,114,97,119,97,108]},{\"kind\":\"account\",\"path\":\"vault\"},{\"kind\":\"account\",\"path\":\"user\"},{\"kind\":\"account\",\"path\":\"vault.epoch\",\"account\":\"Vault\"}]}},{\"name\":\"user_share_account\"},{\"name\":\"user\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"shares\",\"type\":\"u64\"}]}],\"accounts\":[{\"name\":\"Vault\",\"discriminator\":[211,8,232,43,2,152,117,119]},{\"name\":\"WithdrawalRequest\",\"discriminator\":[242,88,147,173,182,62,229,193]}],\"events\":[{\"name\":\"DepositEvent\",\"discriminator\":[120,248,61,83,31,142,107,144]},{\"name\":\"EpochAdvancedEvent\",\"discriminator\":[26,197,195,116,126,48,210,42]},{\"name\":\"NotionalExposureEvent\",\"discriminator\":[220,74,165,136,237,183,23,38]},{\"name\":\"PremiumCollectedEvent\",\"discriminator\":[76,52,166,111,182,211,215,144]},{\"name\":\"SettlementPaidEvent\",\"discriminator\":[97,3,234,177,141,83,59,26]},{\"name\":\"WithdrawalProcessedEvent\",\"discriminator\":[23,252,30,4,24,110,166,133]},{\"name\":\"WithdrawalRequestedEvent\",\"discriminator\":[82,227,155,140,223,124,77,243]}],\"errors\":[{\"code\":6000,\"name\":\"ZeroAmount\",\"msg\":\"Amount must be greater than zero\"},{\"code\":6001,\"name\":\"ZeroShares\",\"msg\":\"Calculated shares must be greater than zero\"},{\"code\":6002,\"name\":\"InsufficientShares\",\"msg\":\"Insufficient shares\"},{\"code\":6003,\"name\":\"AlreadyProcessed\",\"msg\":\"Withdrawal already processed\"},{\"code\":6004,\"name\":\"EpochNotSettled\",\"msg\":\"Epoch has not settled yet\"},{\"code\":6005,\"name\":\"Overflow\",\"msg\":\"Arithmetic overflow\"},{\"code\":6006,\"name\":\"ExceedsUtilizationCap\",\"msg\":\"Exceeds utilization cap\"}],\"types\":[{\"name\":\"DepositEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"shares_minted\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"EpochAdvancedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"new_epoch\",\"type\":\"u64\"},{\"name\":\"premium_earned\",\"type\":\"u64\"},{\"name\":\"notional_exposed\",\"type\":\"u64\"},{\"name\":\"avg_premium_bps\",\"type\":\"u32\"},{\"name\":\"total_assets\",\"type\":\"u64\"},{\"name\":\"total_shares\",\"type\":\"u64\"}]}},{\"name\":\"NotionalExposureEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"epoch\",\"type\":\"u64\"},{\"name\":\"notional_tokens\",\"type\":\"u64\"},{\"name\":\"premium\",\"type\":\"u64\"},{\"name\":\"total_notional_this_epoch\",\"type\":\"u64\"},{\"name\":\"total_premium_this_epoch\",\"type\":\"u64\"},{\"name\":\"avg_premium_bps\",\"type\":\"u32\"}]}},{\"name\":\"PremiumCollectedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"payer\",\"type\":\"pubkey\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"SettlementPaidEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"recipient\",\"type\":\"pubkey\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"Vault\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"authority\",\"type\":\"pubkey\"},{\"name\":\"asset_id\",\"type\":\"string\"},{\"name\":\"underlying_mint\",\"type\":\"pubkey\"},{\"name\":\"share_mint\",\"type\":\"pubkey\"},{\"name\":\"vault_token_account\",\"type\":\"pubkey\"},{\"name\":\"premium_mint\",\"type\":\"pubkey\"},{\"name\":\"premium_token_account\",\"type\":\"pubkey\"},{\"name\":\"total_assets\",\"type\":\"u64\"},{\"name\":\"total_shares\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"},{\"name\":\"utilization_cap_bps\",\"type\":\"u16\"},{\"name\":\"last_roll_timestamp\",\"type\":\"i64\"},{\"name\":\"pending_withdrawals\",\"type\":\"u64\"},{\"name\":\"epoch_notional_exposed\",\"type\":\"u64\"},{\"name\":\"epoch_premium_earned\",\"type\":\"u64\"},{\"name\":\"epoch_premium_per_token_bps\",\"type\":\"u32\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"WithdrawalProcessedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"shares\",\"type\":\"u64\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"WithdrawalRequest\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"shares\",\"type\":\"u64\"},{\"name\":\"request_epoch\",\"type\":\"u64\"},{\"name\":\"processed\",\"type\":\"bool\"}]}},{\"name\":\"WithdrawalRequestedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"shares\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}}]}"));}),
"[project]/app/lib/vault-sdk.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ORACLE_PROGRAM_ID",
    ()=>ORACLE_PROGRAM_ID,
    "RFQ_PROGRAM_ID",
    ()=>RFQ_PROGRAM_ID,
    "VAULTS",
    ()=>VAULTS,
    "VAULT_PROGRAM_ID",
    ()=>VAULT_PROGRAM_ID,
    "buildAdvanceEpochTransaction",
    ()=>buildAdvanceEpochTransaction,
    "buildDepositTransaction",
    ()=>buildDepositTransaction,
    "buildProcessWithdrawalTransaction",
    ()=>buildProcessWithdrawalTransaction,
    "buildRequestWithdrawalTransaction",
    ()=>buildRequestWithdrawalTransaction,
    "deriveShareMintPda",
    ()=>deriveShareMintPda,
    "deriveVaultPda",
    ()=>deriveVaultPda,
    "deriveVaultTokenAccountPda",
    ()=>deriveVaultTokenAccountPda,
    "deriveWithdrawalPda",
    ()=>deriveWithdrawalPda,
    "fetchVaultData",
    ()=>fetchVaultData,
    "getUserShareBalance",
    ()=>getUserShareBalance,
    "getUserUnderlyingBalance",
    ()=>getUserUnderlyingBalance,
    "getUserWithdrawalRequest",
    ()=>getUserWithdrawalRequest,
    "getVaultProgram",
    ()=>getVaultProgram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@coral-xyz/anchor/dist/esm/program/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@coral-xyz/anchor/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/app/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/instructions/associatedTokenAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anchor$2f$vault_idl$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/anchor/vault_idl.json (json)");
;
;
;
;
const VAULT_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const ORACLE_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("5MnuN6ahpRSp5F3R2uXvy9pSN4TQmhSydywQSoxszuZk");
const RFQ_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("3M2K6htNbWyZHtvvUyUME19f5GUS6x8AtGmitFENDT5Z");
// NVDAx token mint (the actual token users deposit)
const NVDAX_MINT = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("G5VWnnWRxVvuTqRCEQNNGEdRmS42hMTyh8DAN9MHecLn");
const VAULTS = {
    nvdax: {
        symbol: "NVDAx",
        assetId: "NVDAx",
        underlyingMint: NVDAX_MINT
    }
};
function deriveVaultPda(assetId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("vault"),
        Buffer.from(assetId)
    ], VAULT_PROGRAM_ID);
}
function deriveShareMintPda(vaultPda) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("shares"),
        vaultPda.toBuffer()
    ], VAULT_PROGRAM_ID);
}
function deriveVaultTokenAccountPda(vaultPda) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("vault_tokens"),
        vaultPda.toBuffer()
    ], VAULT_PROGRAM_ID);
}
function deriveWithdrawalPda(vaultPda, userPubkey, epoch) {
    // Use BN for browser compatibility (writeBigUInt64LE doesn't work in browser)
    const epochBN = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](epoch.toString());
    const epochBuffer = epochBN.toArrayLike(Buffer, "le", 8);
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("withdrawal"),
        vaultPda.toBuffer(),
        userPubkey.toBuffer(),
        epochBuffer
    ], VAULT_PROGRAM_ID);
}
function getVaultProgram(provider) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anchor$2f$vault_idl$2e$json__$28$json$29$__["default"], provider);
}
async function fetchVaultData(connection, assetId, retries = 3) {
    const [vaultPda] = deriveVaultPda(assetId);
    // Create a dummy wallet for read-only operations
    const dummyWallet = {
        publicKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].default,
        signTransaction: async ()=>{
            throw new Error("Not implemented");
        },
        signAllTransactions: async ()=>{
            throw new Error("Not implemented");
        }
    };
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, dummyWallet, {
        commitment: "confirmed"
    });
    const program = getVaultProgram(provider);
    // Retry logic with exponential backoff
    let lastError = null;
    for(let attempt = 0; attempt < retries; attempt++){
        try {
            const vaultAccount = await program.account.vault.fetch(vaultPda);
            // Calculate share price (totalAssets / totalShares)
            const totalAssets = Number(vaultAccount.totalAssets);
            const totalShares = Number(vaultAccount.totalShares);
            const sharePrice = totalShares > 0 ? totalAssets / totalShares : 1.0;
            // Calculate APY from epoch premium (annualized)
            // epochPremiumPerTokenBps = premium earned per token in basis points
            // Annualize: assume 52 epochs per year (weekly)
            const epochPremiumBps = Number(vaultAccount.epochPremiumPerTokenBps || 0);
            const apy = epochPremiumBps / 100 * 52; // Convert bps to % and annualize
            const tvl = totalAssets / 1e6; // Assuming 6 decimals
            return {
                publicKey: vaultPda.toBase58(),
                symbol: assetId,
                authority: vaultAccount.authority.toBase58(),
                underlyingMint: vaultAccount.underlyingMint.toBase58(),
                shareMint: vaultAccount.shareMint.toBase58(),
                vaultTokenAccount: vaultAccount.vaultTokenAccount.toBase58(),
                epoch: Number(vaultAccount.epoch),
                totalAssets: vaultAccount.totalAssets.toString(),
                totalShares: vaultAccount.totalShares.toString(),
                sharePrice,
                apy,
                tvl,
                utilizationCapBps: Number(vaultAccount.utilizationCapBps),
                pendingWithdrawals: vaultAccount.pendingWithdrawals.toString(),
                // Notional exposure tracking (with fallbacks for existing vaults)
                epochNotionalExposed: (vaultAccount.epochNotionalExposed || 0).toString(),
                epochPremiumEarned: (vaultAccount.epochPremiumEarned || 0).toString(),
                epochPremiumPerTokenBps: Number(vaultAccount.epochPremiumPerTokenBps || 0)
            };
        } catch (error) {
            lastError = error;
            console.warn(`Vault fetch attempt ${attempt + 1}/${retries} failed:`, error);
            // Wait before retry with exponential backoff (500ms, 1s, 2s)
            if (attempt < retries - 1) {
                await new Promise((resolve)=>setTimeout(resolve, 500 * Math.pow(2, attempt)));
            }
        }
    }
    // All retries failed
    console.error("All vault fetch attempts failed:", lastError);
    return null;
}
async function buildDepositTransaction(connection, wallet, assetId, amount// in base units (e.g., 1_000_000 for 1 USDC)
) {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
        commitment: "confirmed"
    });
    const program = getVaultProgram(provider);
    const config = Object.values(VAULTS).find((v)=>v.assetId === assetId);
    if (!config) throw new Error(`Unknown vault: ${assetId}`);
    const [vaultPda] = deriveVaultPda(assetId);
    // Fetch the vault account to get the ACTUAL share mint and vault token account
    // (These were created as Keypairs during init, not PDAs)
    const vaultAccount = await program.account.vault.fetch(vaultPda);
    const shareMint = vaultAccount.shareMint;
    const vaultTokenAccount = vaultAccount.vaultTokenAccount;
    // Get user's token account for the underlying asset
    const userTokenAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(config.underlyingMint, wallet.publicKey);
    // Get user's share token account (create if needed)
    const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, wallet.publicKey);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
    // Check if account exists and has no data (doesn't exist yet)
    const shareAccountInfo = await connection.getAccountInfo(userShareAccount);
    if (!shareAccountInfo) {
        tx.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, userShareAccount, wallet.publicKey, shareMint));
    }
    // Build deposit instruction
    const depositIx = await program.methods.deposit(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](amount)).accounts({
        vault: vaultPda,
        shareMint: shareMint,
        vaultTokenAccount: vaultTokenAccount,
        userTokenAccount: userTokenAccount,
        userShareAccount: userShareAccount,
        user: wallet.publicKey,
        tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
    }).instruction();
    tx.add(depositIx);
    return tx;
}
async function buildRequestWithdrawalTransaction(connection, wallet, assetId, shares// in base units
) {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
        commitment: "confirmed"
    });
    const program = getVaultProgram(provider);
    const [vaultPda] = deriveVaultPda(assetId);
    // Fetch vault to get actual share mint and current epoch
    const vaultAccount = await program.account.vault.fetch(vaultPda);
    const shareMint = vaultAccount.shareMint;
    const epoch = Number(vaultAccount.epoch);
    // Derive withdrawal PDA with epoch
    const [withdrawalPda] = deriveWithdrawalPda(vaultPda, wallet.publicKey, epoch);
    const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, wallet.publicKey);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
    const requestWithdrawalIx = await program.methods.requestWithdrawal(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](shares)).accounts({
        vault: vaultPda,
        withdrawalRequest: withdrawalPda,
        userShareAccount: userShareAccount,
        user: wallet.publicKey,
        systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemProgram"].programId
    }).instruction();
    tx.add(requestWithdrawalIx);
    return tx;
}
async function buildProcessWithdrawalTransaction(connection, wallet, assetId) {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
        commitment: "confirmed"
    });
    const program = getVaultProgram(provider);
    const config = Object.values(VAULTS).find((v)=>v.assetId === assetId);
    if (!config) throw new Error(`Unknown vault: ${assetId}`);
    const [vaultPda] = deriveVaultPda(assetId);
    // Fetch vault to get actual account addresses
    const vaultAccount = await program.account.vault.fetch(vaultPda);
    const shareMint = vaultAccount.shareMint;
    const vaultTokenAccount = vaultAccount.vaultTokenAccount;
    // The withdrawal was requested in a previous epoch
    // We need to find it - typically the previous epoch
    const currentEpoch = Number(vaultAccount.epoch);
    const requestEpoch = currentEpoch > 0 ? currentEpoch - 1 : 0;
    const [withdrawalPda] = deriveWithdrawalPda(vaultPda, wallet.publicKey, requestEpoch);
    const userTokenAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(config.underlyingMint, wallet.publicKey);
    const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, wallet.publicKey);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
    const processWithdrawalIx = await program.methods.processWithdrawal().accounts({
        vault: vaultPda,
        withdrawalRequest: withdrawalPda,
        shareMint: shareMint,
        vaultTokenAccount: vaultTokenAccount,
        userTokenAccount: userTokenAccount,
        userShareAccount: userShareAccount,
        user: wallet.publicKey,
        tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
    }).instruction();
    tx.add(processWithdrawalIx);
    return tx;
}
async function getUserShareBalance(connection, userPubkey, assetId) {
    try {
        const [vaultPda] = deriveVaultPda(assetId);
        // Create a dummy wallet for read-only operations
        const dummyWallet = {
            publicKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].default,
            signTransaction: async ()=>{
                throw new Error("Not implemented");
            },
            signAllTransactions: async ()=>{
                throw new Error("Not implemented");
            }
        };
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, dummyWallet, {
            commitment: "confirmed"
        });
        const program = getVaultProgram(provider);
        // Fetch vault to get actual share mint
        const vaultAccount = await program.account.vault.fetch(vaultPda);
        const shareMint = vaultAccount.shareMint;
        const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, userPubkey);
        const accountInfo = await connection.getTokenAccountBalance(userShareAccount);
        return Number(accountInfo.value.amount);
    } catch  {
        return 0;
    }
}
async function getUserUnderlyingBalance(connection, userPubkey, assetId) {
    try {
        const config = Object.values(VAULTS).find((v)=>v.assetId === assetId);
        if (!config) return 0;
        const userTokenAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(config.underlyingMint, userPubkey);
        const accountInfo = await connection.getTokenAccountBalance(userTokenAccount);
        return Number(accountInfo.value.amount);
    } catch  {
        return 0;
    }
}
async function getUserWithdrawalRequest(connection, wallet, assetId) {
    try {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
            commitment: "confirmed"
        });
        const program = getVaultProgram(provider);
        const [vaultPda] = deriveVaultPda(assetId);
        // Fetch vault to get current epoch
        const vaultAccount = await program.account.vault.fetch(vaultPda);
        const currentEpoch = Number(vaultAccount.epoch);
        // Try to find withdrawal request from previous epochs
        // Start from previous epoch and go back a few epochs
        for(let epoch = currentEpoch - 1; epoch >= Math.max(0, currentEpoch - 5); epoch--){
            try {
                const [withdrawalPda] = deriveWithdrawalPda(vaultPda, wallet.publicKey, epoch);
                const withdrawalAccount = await program.account.withdrawalRequest.fetch(withdrawalPda);
                return {
                    shares: Number(withdrawalAccount.shares),
                    requestEpoch: Number(withdrawalAccount.requestEpoch),
                    processed: withdrawalAccount.processed
                };
            } catch  {
                continue;
            }
        }
        return null;
    } catch  {
        return null;
    }
}
async function buildAdvanceEpochTransaction(connection, wallet, assetId, premiumEarned = 0) {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
        commitment: "confirmed"
    });
    const program = getVaultProgram(provider);
    const [vaultPda] = deriveVaultPda(assetId);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
    const advanceEpochIx = await program.methods.advanceEpoch(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](premiumEarned)).accounts({
        vault: vaultPda,
        authority: wallet.publicKey
    }).instruction();
    tx.add(advanceEpochIx);
    return tx;
}
}),
"[project]/app/hooks/useVault.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllVaults",
    ()=>useAllVaults,
    "useTotalTVL",
    ()=>useTotalTVL,
    "useVault",
    ()=>useVault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/vault-sdk.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Use custom RPC if set, otherwise use a more reliable devnet endpoint
// The default api.devnet.solana.com is often rate-limited
const RPC_URL = ("TURBOPACK compile-time value", "https://devnet.helius-rpc.com/?api-key=a149fae2-6a52-4725-af62-1726c8e2cf9d") || "https://api.devnet.solana.com";
function useVault(assetId) {
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const [vaultData, setVaultData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userShareBalance, setUserShareBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userUnderlyingBalance, setUserUnderlyingBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pendingWithdrawal, setPendingWithdrawal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [txStatus, setTxStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [txError, setTxError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [txSignature, setTxSignature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isInitialLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastVaultHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    // Fetch vault and user data
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            // Only show loading on initial load
            if (isInitialLoad.current) {
                setLoading(true);
            }
            setError(null);
            // Get normalized asset ID
            const normalizedAssetId = assetId.toUpperCase().endsWith('X') ? assetId.charAt(0).toUpperCase() + assetId.slice(1, -1).toUpperCase() + 'x' : assetId;
            const config = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAULTS"][assetId.toLowerCase()];
            if (!config) {
                setVaultData(null);
                if (isInitialLoad.current) {
                    isInitialLoad.current = false;
                    setLoading(false);
                }
                return;
            }
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchVaultData"])(connection, config.assetId);
            // Only update if data changed
            const newHash = JSON.stringify(data);
            if (newHash !== lastVaultHash.current) {
                lastVaultHash.current = newHash;
                setVaultData(data);
            }
            // Fetch user balances if wallet connected
            if (wallet.publicKey) {
                const [shares, underlying] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserShareBalance"])(connection, wallet.publicKey, config.assetId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserUnderlyingBalance"])(connection, wallet.publicKey, config.assetId)
                ]);
                // Only update if changed
                if (shares !== userShareBalance) setUserShareBalance(shares);
                if (underlying !== userUnderlyingBalance) setUserUnderlyingBalance(underlying);
                // Check for pending withdrawal
                if (wallet.signTransaction) {
                    const anchorWallet = {
                        publicKey: wallet.publicKey,
                        signTransaction: wallet.signTransaction,
                        signAllTransactions: wallet.signAllTransactions
                    };
                    const withdrawal = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserWithdrawalRequest"])(connection, anchorWallet, config.assetId);
                    setPendingWithdrawal(withdrawal);
                }
            }
        } catch (err) {
            console.error("Error fetching vault:", err);
            setError(err.message || "Failed to fetch vault data");
            setVaultData(null);
        } finally{
            if (isInitialLoad.current) {
                isInitialLoad.current = false;
                setLoading(false);
            }
        }
    }, [
        assetId,
        connection,
        wallet.publicKey,
        wallet.signTransaction,
        wallet.signAllTransactions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return ()=>clearInterval(interval);
    }, [
        fetchData
    ]);
    // Send transaction helper
    const sendTransaction = async (tx)=>{
        if (!wallet.publicKey || !wallet.signTransaction) {
            throw new Error("Wallet not connected");
        }
        setTxStatus("signing");
        // Get latest blockhash
        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
        tx.recentBlockhash = blockhash;
        tx.feePayer = wallet.publicKey;
        // Sign transaction
        const signedTx = await wallet.signTransaction(tx);
        setTxStatus("confirming");
        // Send and confirm
        const signature = await connection.sendRawTransaction(signedTx.serialize());
        await connection.confirmTransaction({
            signature,
            blockhash,
            lastValidBlockHeight
        });
        setTxSignature(signature);
        setTxStatus("success");
        // Refresh data after transaction
        await fetchData();
        return signature;
    };
    // Deposit
    const deposit = async (amount)=>{
        if (!wallet.publicKey || !wallet.signTransaction) {
            throw new Error("Wallet not connected");
        }
        const config = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAULTS"][assetId.toLowerCase()];
        if (!config) throw new Error("Unknown vault");
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Preparing deposit...");
        try {
            setTxStatus("building");
            setTxError(null);
            setTxSignature(null);
            const anchorWallet = {
                publicKey: wallet.publicKey,
                signTransaction: wallet.signTransaction,
                signAllTransactions: wallet.signAllTransactions
            };
            const tx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildDepositTransaction"])(connection, anchorWallet, config.assetId, amount);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Please sign the transaction...", {
                id: toastId
            });
            const signature = await sendTransaction(tx);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Deposit successful! ✓", {
                id: toastId,
                duration: 5000
            });
            return signature;
        } catch (err) {
            console.error("Deposit error:", err);
            setTxStatus("error");
            setTxError(err.message || "Deposit failed");
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(err.message || "Deposit failed", {
                id: toastId
            });
            throw err;
        }
    };
    // Request withdrawal
    const requestWithdrawal = async (shares)=>{
        if (!wallet.publicKey || !wallet.signTransaction) {
            throw new Error("Wallet not connected");
        }
        const config = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAULTS"][assetId.toLowerCase()];
        if (!config) throw new Error("Unknown vault");
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Preparing withdrawal request...");
        try {
            setTxStatus("building");
            setTxError(null);
            setTxSignature(null);
            const anchorWallet = {
                publicKey: wallet.publicKey,
                signTransaction: wallet.signTransaction,
                signAllTransactions: wallet.signAllTransactions
            };
            const tx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRequestWithdrawalTransaction"])(connection, anchorWallet, config.assetId, shares);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Please sign the transaction...", {
                id: toastId
            });
            const signature = await sendTransaction(tx);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Withdrawal requested! Will be processed at epoch end.", {
                id: toastId,
                duration: 5000
            });
            return signature;
        } catch (err) {
            console.error("Request withdrawal error:", err);
            setTxStatus("error");
            setTxError(err.message || "Request withdrawal failed");
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(err.message || "Request withdrawal failed", {
                id: toastId
            });
            throw err;
        }
    };
    // Process withdrawal
    const processWithdrawal = async ()=>{
        if (!wallet.publicKey || !wallet.signTransaction) {
            throw new Error("Wallet not connected");
        }
        const config = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAULTS"][assetId.toLowerCase()];
        if (!config) throw new Error("Unknown vault");
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Processing withdrawal...");
        try {
            setTxStatus("building");
            setTxError(null);
            setTxSignature(null);
            const anchorWallet = {
                publicKey: wallet.publicKey,
                signTransaction: wallet.signTransaction,
                signAllTransactions: wallet.signAllTransactions
            };
            const tx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildProcessWithdrawalTransaction"])(connection, anchorWallet, config.assetId);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Please sign the transaction...", {
                id: toastId
            });
            const signature = await sendTransaction(tx);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Withdrawal complete! Funds returned to wallet.", {
                id: toastId,
                duration: 5000
            });
            return signature;
        } catch (err) {
            console.error("Process withdrawal error:", err);
            setTxStatus("error");
            setTxError(err.message || "Process withdrawal failed");
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(err.message || "Process withdrawal failed", {
                id: toastId
            });
            throw err;
        }
    };
    // Derive vault state from on-chain data
    // IDLE: No active options exposure
    // ACTIVE: Options are live (epochNotionalExposed > 0)
    const vaultState = vaultData && Number(vaultData.epochNotionalExposed) > 0 ? "ACTIVE" : "IDLE";
    return {
        vaultData,
        loading,
        error,
        vaultState,
        userShareBalance,
        userUnderlyingBalance,
        pendingWithdrawal,
        deposit,
        requestWithdrawal,
        processWithdrawal,
        txStatus,
        txError,
        txSignature,
        refresh: fetchData
    };
}
function useAllVaults() {
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const [vaults, setVaults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isInitialLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastDataHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            // Only show loading on initial load, not refreshes
            if (isInitialLoad.current) {
                setLoading(true);
            }
            setError(null);
            const results = {};
            for (const [key, config] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAULTS"])){
                try {
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchVaultData"])(connection, config.assetId);
                    results[key] = data;
                } catch (err) {
                    console.error(`Error fetching ${key}:`, err);
                    results[key] = null;
                }
            }
            // Only update state if data actually changed (prevents visual flicker)
            const newHash = JSON.stringify(results);
            if (newHash !== lastDataHash.current) {
                lastDataHash.current = newHash;
                setVaults(results);
            }
        } catch (err) {
            console.error("Error fetching vaults:", err);
            setError(err.message || "Failed to fetch vaults");
        } finally{
            if (isInitialLoad.current) {
                isInitialLoad.current = false;
                setLoading(false);
            }
        }
    }, [
        connection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return ()=>clearInterval(interval);
    }, [
        fetchData
    ]);
    return {
        vaults,
        loading,
        error,
        refresh: fetchData
    };
}
function useTotalTVL() {
    const { vaults, loading } = useAllVaults();
    const totalTVL = Object.values(vaults).reduce((sum, vault)=>{
        return sum + (vault?.tvl || 0);
    }, 0);
    return {
        totalTVL,
        loading
    };
}
}),
"[project]/app/lib/rfq-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCoveredCallParams",
    ()=>calculateCoveredCallParams,
    "checkRouterHealth",
    ()=>checkRouterHealth,
    "createRfq",
    ()=>createRfq,
    "fillRfq",
    ()=>fillRfq,
    "formatPremiumPct",
    ()=>formatPremiumPct,
    "formatPremiumUsd",
    ()=>formatPremiumUsd,
    "getRfqStatus",
    ()=>getRfqStatus,
    "listActiveRfqs",
    ()=>listActiveRfqs
]);
/**
 * RFQ Client SDK
 * Frontend client for interacting with the RFQ Router API
 */ const RFQ_ROUTER_URL = process.env.NEXT_PUBLIC_RFQ_ROUTER_URL || "http://localhost:3005";
async function createRfq(request) {
    const response = await fetch(`${RFQ_ROUTER_URL}/rfq`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create RFQ");
    }
    return response.json();
}
async function getRfqStatus(rfqId) {
    try {
        const response = await fetch(`${RFQ_ROUTER_URL}/rfq/${rfqId}`);
        if (!response.ok) {
            if (response.status === 404) return null;
            throw new Error("Failed to get RFQ status");
        }
        const data = await response.json();
        return data.rfq;
    } catch (error) {
        console.error("Error fetching RFQ status:", error);
        return null;
    }
}
async function listActiveRfqs() {
    try {
        const response = await fetch(`${RFQ_ROUTER_URL}/rfqs`);
        if (!response.ok) {
            throw new Error("Failed to list RFQs");
        }
        const data = await response.json();
        return data.rfqs || [];
    } catch (error) {
        console.error("Error listing RFQs:", error);
        return [];
    }
}
async function fillRfq(rfqId) {
    const response = await fetch(`${RFQ_ROUTER_URL}/rfq/${rfqId}/fill`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
}
async function checkRouterHealth() {
    try {
        const response = await fetch(`${RFQ_ROUTER_URL}/health`, {
            method: "GET",
            signal: AbortSignal.timeout(3000)
        });
        return response.ok;
    } catch  {
        return false;
    }
}
function calculateCoveredCallParams(spotPrice, strikeOffsetPct, notionalAmount, epochDurationHours = 168) {
    const now = Math.floor(Date.now() / 1000);
    const expiryTs = now + epochDurationHours * 60 * 60;
    const validUntilTs = now + 60 * 60; // 1 hour to collect quotes
    const strike = Math.round(spotPrice * (1 + strikeOffsetPct) * 100) / 100;
    // Premium floor: ~0.3% of notional as minimum
    const premiumFloor = Math.round(notionalAmount * 0.003);
    return {
        optionType: "CALL",
        expiryTs,
        strike,
        size: notionalAmount,
        premiumFloor,
        validUntilTs,
        settlement: "CASH"
    };
}
function formatPremiumPct(premium, notional) {
    if (notional === 0) return "0.00%";
    return (premium / notional * 100).toFixed(2) + "%";
}
function formatPremiumUsd(premiumBps, notionalUsd) {
    const premium = premiumBps / 10000 * notionalUsd;
    return "$" + premium.toFixed(2);
}
}),
"[project]/app/hooks/useRfq.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRfq",
    ()=>useRfq
]);
/**
 * useRfq Hook
 * React hook for RFQ (Request for Quote) functionality
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/rfq-client.ts [app-ssr] (ecmascript)");
;
;
function useRfq(options = {}) {
    const { pollInterval = 5000, autoFetch = true } = options;
    // Router status
    const [routerOnline, setRouterOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [routerLoading, setRouterLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // RFQ state
    const [currentRfqId, setCurrentRfqId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentRfq, setCurrentRfq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rfqLoading, setRfqLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check router health on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkHealth = async ()=>{
            setRouterLoading(true);
            const online = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkRouterHealth"])();
            setRouterOnline(online);
            setRouterLoading(false);
        };
        checkHealth();
        const interval = setInterval(checkHealth, 30000); // Check every 30s
        return ()=>clearInterval(interval);
    }, []);
    // Poll RFQ status when we have an active RFQ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentRfqId || !routerOnline) return;
        let fillTimer = null;
        const pollStatus = async ()=>{
            const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRfqStatus"])(currentRfqId);
            if (status) {
                setCurrentRfq(status);
                // Auto-fill after 5 seconds if we have quotes
                if (status.status === "OPEN" && status.quoteCount > 0 && !fillTimer) {
                    fillTimer = setTimeout(async ()=>{
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillRfq"])(currentRfqId);
                        if (result.success) {
                            // Refresh to get filled status
                            const updatedStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRfqStatus"])(currentRfqId);
                            if (updatedStatus) setCurrentRfq(updatedStatus);
                        }
                    }, 5000); // Wait 5 seconds to collect more quotes
                }
                // Stop polling if RFQ is no longer open
                if (status.status !== "OPEN") {
                    if (fillTimer) clearTimeout(fillTimer);
                    return;
                }
            }
        };
        pollStatus();
        const interval = setInterval(pollStatus, pollInterval);
        return ()=>{
            clearInterval(interval);
            if (fillTimer) clearTimeout(fillTimer);
        };
    }, [
        currentRfqId,
        routerOnline,
        pollInterval
    ]);
    // Request a quote
    const requestQuote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (params)=>{
        if (!routerOnline) {
            setError("RFQ router is offline");
            return null;
        }
        setRfqLoading(true);
        setError(null);
        try {
            const rfqParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCoveredCallParams"])(params.spotPrice, params.strikeOffsetPct, params.notionalAmount, params.epochDurationHours);
            const request = {
                ...rfqParams,
                underlying: params.underlying,
                oraclePrice: Math.round(params.spotPrice * 1e6),
                oracleTs: Math.floor(Date.now() / 1000)
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRfq"])(request);
            if (response.success && response.rfqId) {
                setCurrentRfqId(response.rfqId);
                return response.rfqId;
            } else {
                throw new Error("Failed to create RFQ");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to request quote");
            return null;
        } finally{
            setRfqLoading(false);
        }
    }, [
        routerOnline
    ]);
    // Accept the best quote
    const acceptBestQuote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentRfqId || !currentRfq?.bestQuote) {
            setError("No quote to accept");
            return false;
        }
        setRfqLoading(true);
        setError(null);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillRfq"])(currentRfqId);
            if (result.success) {
                // Refresh status
                const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRfqStatus"])(currentRfqId);
                if (status) setCurrentRfq(status);
                return true;
            } else {
                throw new Error("Failed to fill RFQ");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to accept quote");
            return false;
        } finally{
            setRfqLoading(false);
        }
    }, [
        currentRfqId,
        currentRfq
    ]);
    // Clear current RFQ
    const clearRfq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentRfqId(null);
        setCurrentRfq(null);
        setError(null);
    }, []);
    // Manual refresh
    const refreshStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentRfqId) return;
        const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rfq$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRfqStatus"])(currentRfqId);
        if (status) setCurrentRfq(status);
    }, [
        currentRfqId
    ]);
    // Computed values
    const rfqStatus = (()=>{
        if (error) return "ERROR";
        if (rfqLoading && !currentRfq) return "REQUESTING";
        if (!currentRfq) return "IDLE";
        return currentRfq.status;
    })();
    return {
        routerOnline,
        routerLoading,
        currentRfq,
        rfqLoading,
        requestQuote,
        acceptBestQuote,
        quoteCount: currentRfq?.quoteCount || 0,
        bestPremium: currentRfq?.bestQuote?.premium || null,
        bestMaker: currentRfq?.bestQuote?.maker || null,
        rfqStatus,
        error,
        clearRfq,
        refreshStatus
    };
}
}),
"[project]/app/themes/vaultThemes.generated.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"default":{"accent":"#3B82F6","accentSoft":"rgba(59, 130, 246, 0.14)","accentGlow":"rgba(59, 130, 246, 0.25)","accentBorder":"rgba(59, 130, 246, 0.30)"},"NVDAx":{"accent":"#76B900","accentSoft":"rgba(118, 185, 0, 0.14)","accentGlow":"rgba(118, 185, 0, 0.22)","accentBorder":"rgba(118, 185, 0, 0.30)"},"ABTx":{"accent":"#107aa9","accentSoft":"rgba(16, 122, 169, 0.14)","accentGlow":"rgba(16, 122, 169, 0.25)","accentBorder":"rgba(16, 122, 169, 0.30)"},"ABBVx":{"accent":"#00003a","accentSoft":"rgba(0, 0, 58, 0.14)","accentGlow":"rgba(0, 0, 58, 0.25)","accentBorder":"rgba(0, 0, 58, 0.30)"},"ACNx":{"accent":"#9600f0","accentSoft":"rgba(150, 0, 240, 0.14)","accentGlow":"rgba(150, 0, 240, 0.25)","accentBorder":"rgba(150, 0, 240, 0.30)"},"GOOGLx":{"accent":"#3468c0","accentSoft":"rgba(52, 104, 192, 0.14)","accentGlow":"rgba(52, 104, 192, 0.25)","accentBorder":"rgba(52, 104, 192, 0.30)"},"AMZNx":{"accent":"#c77700","accentSoft":"rgba(199, 119, 0, 0.14)","accentGlow":"rgba(199, 119, 0, 0.25)","accentBorder":"rgba(199, 119, 0, 0.30)"},"AMBRx":{"accent":"#fefefe","accentSoft":"rgba(254, 254, 254, 0.14)","accentGlow":"rgba(254, 254, 254, 0.25)","accentBorder":"rgba(254, 254, 254, 0.30)"},"AAPLx":{"accent":"#fefefe","accentSoft":"rgba(254, 254, 254, 0.14)","accentGlow":"rgba(254, 254, 254, 0.25)","accentBorder":"rgba(254, 254, 254, 0.30)"},"APPx":{"accent":"#0389ac","accentSoft":"rgba(3, 137, 172, 0.14)","accentGlow":"rgba(3, 137, 172, 0.25)","accentBorder":"rgba(3, 137, 172, 0.30)"},"AZNx":{"accent":"#c68a12","accentSoft":"rgba(198, 138, 18, 0.14)","accentGlow":"rgba(198, 138, 18, 0.25)","accentBorder":"rgba(198, 138, 18, 0.30)"},"BACx":{"accent":"#10649a","accentSoft":"rgba(16, 100, 154, 0.14)","accentGlow":"rgba(16, 100, 154, 0.25)","accentBorder":"rgba(16, 100, 154, 0.30)"},"BRK.Bx":{"accent":"#4650dd","accentSoft":"rgba(70, 80, 221, 0.14)","accentGlow":"rgba(70, 80, 221, 0.25)","accentBorder":"rgba(70, 80, 221, 0.30)"},"AVGOx":{"accent":"#c7082d","accentSoft":"rgba(199, 8, 45, 0.14)","accentGlow":"rgba(199, 8, 45, 0.25)","accentBorder":"rgba(199, 8, 45, 0.30)"},"CVXx":{"accent":"#c4172d","accentSoft":"rgba(196, 23, 45, 0.14)","accentGlow":"rgba(196, 23, 45, 0.25)","accentBorder":"rgba(196, 23, 45, 0.30)"},"CRCLx":{"accent":"#57dcbe","accentSoft":"rgba(87, 220, 190, 0.14)","accentGlow":"rgba(87, 220, 190, 0.25)","accentBorder":"rgba(87, 220, 190, 0.30)"},"CSCOx":{"accent":"#027dab","accentSoft":"rgba(2, 125, 171, 0.14)","accentGlow":"rgba(2, 125, 171, 0.25)","accentBorder":"rgba(2, 125, 171, 0.30)"},"KOx":{"accent":"#c7171d","accentSoft":"rgba(199, 23, 29, 0.14)","accentGlow":"rgba(199, 23, 29, 0.25)","accentBorder":"rgba(199, 23, 29, 0.30)"},"COINx":{"accent":"#004cf0","accentSoft":"rgba(0, 76, 240, 0.14)","accentGlow":"rgba(0, 76, 240, 0.25)","accentBorder":"rgba(0, 76, 240, 0.30)"},"CMCSAx":{"accent":"#0eb14b","accentSoft":"rgba(14, 177, 75, 0.14)","accentGlow":"rgba(14, 177, 75, 0.25)","accentBorder":"rgba(14, 177, 75, 0.30)"},"CRWDx":{"accent":"#ba2c1d","accentSoft":"rgba(186, 44, 29, 0.14)","accentGlow":"rgba(186, 44, 29, 0.25)","accentBorder":"rgba(186, 44, 29, 0.30)"},"DHRx":{"accent":"#015fcd","accentSoft":"rgba(1, 95, 205, 0.14)","accentGlow":"rgba(1, 95, 205, 0.25)","accentBorder":"rgba(1, 95, 205, 0.30)"},"DFDVx":{"accent":"#c85836","accentSoft":"rgba(200, 88, 54, 0.14)","accentGlow":"rgba(200, 88, 54, 0.25)","accentBorder":"rgba(200, 88, 54, 0.30)"},"LLYx":{"accent":"#c7171d","accentSoft":"rgba(199, 23, 29, 0.14)","accentGlow":"rgba(199, 23, 29, 0.25)","accentBorder":"rgba(199, 23, 29, 0.30)"},"XOMx":{"accent":"#c71426","accentSoft":"rgba(199, 20, 38, 0.14)","accentGlow":"rgba(199, 20, 38, 0.25)","accentBorder":"rgba(199, 20, 38, 0.30)"},"GMEx":{"accent":"#c50000","accentSoft":"rgba(197, 0, 0, 0.14)","accentGlow":"rgba(197, 0, 0, 0.25)","accentBorder":"rgba(197, 0, 0, 0.30)"},"GLDx":{"accent":"#966a23","accentSoft":"rgba(150, 106, 35, 0.14)","accentGlow":"rgba(150, 106, 35, 0.25)","accentBorder":"rgba(150, 106, 35, 0.30)"},"GSx":{"accent":"#5a789c","accentSoft":"rgba(90, 120, 156, 0.14)","accentGlow":"rgba(90, 120, 156, 0.25)","accentBorder":"rgba(90, 120, 156, 0.30)"},"HDx":{"accent":"#b96111","accentSoft":"rgba(185, 97, 17, 0.14)","accentGlow":"rgba(185, 97, 17, 0.25)","accentBorder":"rgba(185, 97, 17, 0.30)"},"HONx":{"accent":"#c81a2e","accentSoft":"rgba(200, 26, 46, 0.14)","accentGlow":"rgba(200, 26, 46, 0.25)","accentBorder":"rgba(200, 26, 46, 0.30)"},"INTCx":{"accent":"#0068b4","accentSoft":"rgba(0, 104, 180, 0.14)","accentGlow":"rgba(0, 104, 180, 0.25)","accentBorder":"rgba(0, 104, 180, 0.30)"},"IBMx":{"accent":"#0a56e4","accentSoft":"rgba(10, 86, 228, 0.14)","accentGlow":"rgba(10, 86, 228, 0.25)","accentBorder":"rgba(10, 86, 228, 0.30)"},"JNJx":{"accent":"#c51300","accentSoft":"rgba(197, 19, 0, 0.14)","accentGlow":"rgba(197, 19, 0, 0.25)","accentBorder":"rgba(197, 19, 0, 0.30)"},"JPMx":{"accent":"#994d26","accentSoft":"rgba(153, 77, 38, 0.14)","accentGlow":"rgba(153, 77, 38, 0.25)","accentBorder":"rgba(153, 77, 38, 0.30)"},"LINx":{"accent":"#0062a8","accentSoft":"rgba(0, 98, 168, 0.14)","accentGlow":"rgba(0, 98, 168, 0.25)","accentBorder":"rgba(0, 98, 168, 0.30)"},"MRVLx":{"accent":"#fefefe","accentSoft":"rgba(254, 254, 254, 0.14)","accentGlow":"rgba(254, 254, 254, 0.25)","accentBorder":"rgba(254, 254, 254, 0.30)"},"MAx":{"accent":"#eb011a","accentSoft":"rgba(235, 1, 26, 0.14)","accentGlow":"rgba(235, 1, 26, 0.25)","accentBorder":"rgba(235, 1, 26, 0.30)"},"MCDx":{"accent":"#ef8f17","accentSoft":"rgba(239, 143, 23, 0.14)","accentGlow":"rgba(239, 143, 23, 0.25)","accentBorder":"rgba(239, 143, 23, 0.30)"},"MDTx":{"accent":"#2161c0","accentSoft":"rgba(33, 97, 192, 0.14)","accentGlow":"rgba(33, 97, 192, 0.25)","accentBorder":"rgba(33, 97, 192, 0.30)"},"MRKx":{"accent":"#009b96","accentSoft":"rgba(0, 155, 150, 0.14)","accentGlow":"rgba(0, 155, 150, 0.25)","accentBorder":"rgba(0, 155, 150, 0.30)"},"METAx":{"accent":"#0065c6","accentSoft":"rgba(0, 101, 198, 0.14)","accentGlow":"rgba(0, 101, 198, 0.25)","accentBorder":"rgba(0, 101, 198, 0.30)"},"MSFTx":{"accent":"#0080bc","accentSoft":"rgba(0, 128, 188, 0.14)","accentGlow":"rgba(0, 128, 188, 0.25)","accentBorder":"rgba(0, 128, 188, 0.30)"},"MSTRx":{"accent":"#bc2e36","accentSoft":"rgba(188, 46, 54, 0.14)","accentGlow":"rgba(188, 46, 54, 0.25)","accentBorder":"rgba(188, 46, 54, 0.30)"},"QQQx":{"accent":"#107189","accentSoft":"rgba(16, 113, 137, 0.14)","accentGlow":"rgba(16, 113, 137, 0.25)","accentBorder":"rgba(16, 113, 137, 0.30)"},"NFLXx":{"accent":"#cd0711","accentSoft":"rgba(205, 7, 17, 0.14)","accentGlow":"rgba(205, 7, 17, 0.25)","accentBorder":"rgba(205, 7, 17, 0.30)"},"NVOx":{"accent":"#007fb1","accentSoft":"rgba(0, 127, 177, 0.14)","accentGlow":"rgba(0, 127, 177, 0.25)","accentBorder":"rgba(0, 127, 177, 0.30)"},"OPENx":{"accent":"#1569b7","accentSoft":"rgba(21, 105, 183, 0.14)","accentGlow":"rgba(21, 105, 183, 0.25)","accentBorder":"rgba(21, 105, 183, 0.30)"},"ORCLx":{"accent":"#c40000","accentSoft":"rgba(196, 0, 0, 0.14)","accentGlow":"rgba(196, 0, 0, 0.25)","accentBorder":"rgba(196, 0, 0, 0.30)"},"PLTRx":{"accent":"#fefefe","accentSoft":"rgba(254, 254, 254, 0.14)","accentGlow":"rgba(254, 254, 254, 0.25)","accentBorder":"rgba(254, 254, 254, 0.30)"},"PEPx":{"accent":"#0076a9","accentSoft":"rgba(0, 118, 169, 0.14)","accentGlow":"rgba(0, 118, 169, 0.25)","accentBorder":"rgba(0, 118, 169, 0.30)"},"PFEx":{"accent":"#00009e","accentSoft":"rgba(0, 0, 158, 0.14)","accentGlow":"rgba(0, 0, 158, 0.25)","accentBorder":"rgba(0, 0, 158, 0.30)"},"PMx":{"accent":"#3b7eac","accentSoft":"rgba(59, 126, 172, 0.14)","accentGlow":"rgba(59, 126, 172, 0.25)","accentBorder":"rgba(59, 126, 172, 0.30)"},"PGx":{"accent":"#1663b0","accentSoft":"rgba(22, 99, 176, 0.14)","accentGlow":"rgba(22, 99, 176, 0.25)","accentBorder":"rgba(22, 99, 176, 0.30)"},"HOODx":{"accent":"#009e04","accentSoft":"rgba(0, 158, 4, 0.14)","accentGlow":"rgba(0, 158, 4, 0.25)","accentBorder":"rgba(0, 158, 4, 0.30)"},"CRMx":{"accent":"#007bac","accentSoft":"rgba(0, 123, 172, 0.14)","accentGlow":"rgba(0, 123, 172, 0.25)","accentBorder":"rgba(0, 123, 172, 0.30)"},"SPYx":{"accent":"#cd0028","accentSoft":"rgba(205, 0, 40, 0.14)","accentGlow":"rgba(205, 0, 40, 0.25)","accentBorder":"rgba(205, 0, 40, 0.30)"},"TBLLx":{"accent":"#0007a6","accentSoft":"rgba(0, 7, 166, 0.14)","accentGlow":"rgba(0, 7, 166, 0.25)","accentBorder":"rgba(0, 7, 166, 0.30)"},"TSLAx":{"accent":"#c80020","accentSoft":"rgba(200, 0, 32, 0.14)","accentGlow":"rgba(200, 0, 32, 0.25)","accentBorder":"rgba(200, 0, 32, 0.30)"},"TMOx":{"accent":"#bc332a","accentSoft":"rgba(188, 51, 42, 0.14)","accentGlow":"rgba(188, 51, 42, 0.25)","accentBorder":"rgba(188, 51, 42, 0.30)"},"TONXx":{"accent":"#0078b8","accentSoft":"rgba(0, 120, 184, 0.14)","accentGlow":"rgba(0, 120, 184, 0.25)","accentBorder":"rgba(0, 120, 184, 0.30)"},"TQQQx":{"accent":"#5c9631","accentSoft":"rgba(92, 150, 49, 0.14)","accentGlow":"rgba(92, 150, 49, 0.25)","accentBorder":"rgba(92, 150, 49, 0.30)"},"UNHx":{"accent":"#f1b028","accentSoft":"rgba(241, 176, 40, 0.14)","accentGlow":"rgba(241, 176, 40, 0.25)","accentBorder":"rgba(241, 176, 40, 0.30)"},"VTIx":{"accent":"#b5293a","accentSoft":"rgba(181, 41, 58, 0.14)","accentGlow":"rgba(181, 41, 58, 0.25)","accentBorder":"rgba(181, 41, 58, 0.30)"},"Vx":{"accent":"#0f29a0","accentSoft":"rgba(15, 41, 160, 0.14)","accentGlow":"rgba(15, 41, 160, 0.25)","accentBorder":"rgba(15, 41, 160, 0.30)"},"WMTx":{"accent":"#0053e4","accentSoft":"rgba(0, 83, 228, 0.14)","accentGlow":"rgba(0, 83, 228, 0.25)","accentBorder":"rgba(0, 83, 228, 0.30)"}});}),
"[project]/app/themes/vaultThemes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "darkenColor",
    ()=>darkenColor,
    "getAllVaultTickers",
    ()=>getAllVaultTickers,
    "getThemeCSSVars",
    ()=>getThemeCSSVars,
    "getThemedBackground",
    ()=>getThemedBackground,
    "getVaultTheme",
    ()=>getVaultTheme,
    "themes",
    ()=>themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2f$vaultThemes$2e$generated$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/themes/vaultThemes.generated.json (json)");
;
const themes = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2f$vaultThemes$2e$generated$2e$json__$28$json$29$__["default"];
function getVaultTheme(ticker) {
    // Try exact match first, then uppercase, then default
    if (themes[ticker]) {
        return themes[ticker];
    }
    const normalizedTicker = ticker.toUpperCase();
    if (themes[normalizedTicker]) {
        return themes[normalizedTicker];
    }
    return themes.default;
}
function getThemeCSSVars(theme) {
    return {
        ["--accent"]: theme.accent,
        ["--accent-soft"]: theme.accentSoft,
        ["--accent-glow"]: theme.accentGlow,
        ["--accent-border"]: theme.accentBorder
    };
}
function getThemedBackground(theme, baseColor = "#0B0F17") {
    return {
        ...getThemeCSSVars(theme),
        background: `linear-gradient(135deg, ${baseColor} 0%, ${theme.accentSoft} 50%, ${baseColor} 100%)`,
        backgroundSize: '200% 200%'
    };
}
function darkenColor(color, amount = 20) {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length !== 3) return color;
    const r = Math.max(0, parseInt(rgb[0]) - amount);
    const g = Math.max(0, parseInt(rgb[1]) - amount);
    const b = Math.max(0, parseInt(rgb[2]) - amount);
    return `rgb(${r}, ${g}, ${b})`;
}
function getAllVaultTickers() {
    return Object.keys(themes).filter((t)=>t !== 'default').sort();
}
}),
"[project]/app/app/v2/earn/[ticker]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VaultDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useVault.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useRfq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useRfq.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2f$vaultThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/themes/vaultThemes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const PYTH_FEEDS = {
    nvdax: "0x4244d07890e4610f46bbde67de8f43a4bf8b569eebe904f136b469f148503b7f",
    tslax: "0x47a156470288850a440df3a6ce85a55917b813a19bb5b31128a33a986566a362",
    spyx: "0x2817b78438c769357182c04346fddaad1178c82f4048828fe0997c3c64624e14",
    aaplx: "0x978e6cc68a119ce066aa830017318563a9ed04ec3a0a6439010fc11296a58675",
    metax: "0xbf3e5871be3f80ab7a4d1f1fd039145179fb58569e159aee1ccd472868ea5900"
};
const VAULT_METADATA = {
    nvdax: {
        name: "NVDAx Vault",
        symbol: "NVDAx",
        strategy: "Covered Call",
        tier: "Normal",
        strikeOffset: 0.10,
        apy: 12.4,
        isLive: true,
        premiumRange: [
            0.8,
            1.2
        ],
        decimals: 6,
        logo: "/nvidiax_logo.png"
    },
    aaplx: {
        name: "AAPLx Vault",
        symbol: "AAPLx",
        strategy: "Covered Call",
        tier: "Conservative",
        strikeOffset: 0.05,
        apy: 8.2,
        isLive: false,
        premiumRange: [
            0.4,
            0.7
        ],
        decimals: 6,
        logo: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/6849799260ee65bf38841f90_Ticker%3DAAPL%2C%20Company%20Name%3DApple%20Inc.%2C%20size%3D256x256.svg"
    },
    tslax: {
        name: "TSLAx Vault",
        symbol: "TSLAx",
        strategy: "Covered Call",
        tier: "Aggressive",
        strikeOffset: 0.08,
        apy: 18.6,
        isLive: false,
        premiumRange: [
            1.2,
            2.0
        ],
        decimals: 6,
        logo: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684aaf9559b2312c162731f5_Ticker%3DTSLA%2C%20Company%20Name%3DTesla%20Inc.%2C%20size%3D256x256.svg"
    },
    spyx: {
        name: "SPYx Vault",
        symbol: "SPYx",
        strategy: "Covered Call",
        tier: "Conservative",
        strikeOffset: 0.05,
        apy: 6.5,
        isLive: false,
        premiumRange: [
            0.3,
            0.5
        ],
        decimals: 6,
        logo: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/685116624ae31d5ceb724895_Ticker%3DSPX%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg"
    },
    metax: {
        name: "METAx Vault",
        symbol: "METAx",
        strategy: "Covered Call",
        tier: "Normal",
        strikeOffset: 0.10,
        apy: 15.2,
        isLive: false,
        premiumRange: [
            1.0,
            1.5
        ],
        decimals: 6,
        logo: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68497dee3db1bae97b91ac05_Ticker%3DMETA%2C%20Company%20Name%3DMeta%20Platforms%20Inc.%2C%20size%3D256x256.svg"
    }
};
const HERMES_URL = "https://hermes.pyth.network";
function PayoffChart({ spotPrice, strikePrice, premiumRange }) {
    const capGain = (strikePrice - spotPrice) / spotPrice * 100;
    const currentBarIndex = 11;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/50 rounded-xl p-4 border border-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400 uppercase tracking-wide",
                        children: "Epoch Payoff"
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Max upside: +",
                            capGain.toFixed(0),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-end gap-0.5",
                        children: Array.from({
                            length: 24
                        }).map((_, i)=>{
                            const height = i < 12 ? 28 : i < 18 ? 28 + (i - 12) * 9 : 82;
                            const capped = i >= 18;
                            const isCurrent = i === currentBarIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 rounded-t transition-all ${capped ? 'bg-yellow-500/50' : 'bg-green-500/50'} ${isCurrent ? 'ring-2 ring-white/60' : ''}`,
                                style: {
                                    height: `${Math.min(height, 82)}%`
                                }
                            }, i, false, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[47%] top-0 bottom-0 w-0.5 bg-white/40"
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[47%] top-0 -translate-x-1/2 text-[10px] text-white/70 bg-gray-900/90 px-1.5 py-0.5 rounded",
                        children: "now"
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-2 bottom-1 text-xs bg-gray-900/90 px-1.5 py-0.5 rounded",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-400 font-medium",
                            children: [
                                "+",
                                premiumRange[0],
                                "-",
                                premiumRange[1],
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-2 top-1 text-xs bg-gray-900/90 px-1.5 py-0.5 rounded",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-yellow-400",
                            children: [
                                "cap $",
                                strikePrice.toFixed(0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
function VaultDetailPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const ticker = params.ticker;
    const vaultMeta = VAULT_METADATA[ticker];
    const { connected, publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    // Get vault-specific theme colors
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2f$vaultThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVaultTheme"])(vaultMeta?.symbol || "NVDAx");
    // Vault hook for on-chain data and transactions
    const { vaultData, loading: vaultLoading, vaultState, userShareBalance, userUnderlyingBalance, pendingWithdrawal, deposit, requestWithdrawal, processWithdrawal, txStatus, txError, txSignature, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVault"])(ticker);
    // RFQ hook for quote fetching
    const rfq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useRfq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRfq"])();
    const [depositAmount, setDepositAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [withdrawAmount, setWithdrawAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("deposit");
    const [underlyingPrice, setUnderlyingPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [priceLoading, setPriceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchPrice = async ()=>{
        const feedId = PYTH_FEEDS[ticker];
        if (!feedId) return;
        setPriceLoading(true);
        try {
            const response = await fetch(`${HERMES_URL}/v2/updates/price/latest?ids[]=${feedId}&parsed=true`);
            const data = await response.json();
            if (data.parsed?.[0]) {
                const priceData = data.parsed[0].price;
                setUnderlyingPrice(parseFloat(priceData.price) * Math.pow(10, priceData.expo));
                setLastUpdated(new Date());
            }
        } catch (e) {
            console.error(e);
        }
        setPriceLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPrice();
        const interval = setInterval(fetchPrice, 15000);
        return ()=>clearInterval(interval);
    }, [
        ticker
    ]);
    // Format helpers
    const decimals = vaultMeta?.decimals || 6;
    const formatTokenAmount = (amount)=>(amount / Math.pow(10, decimals)).toFixed(2);
    // Calculate strike price: ~10% OTM, rounded to $2.50 increments
    const getRealisticStrike = (spot)=>{
        // Calculate 10% OTM target
        const otmTarget = spot * 1.10;
        // Round to nearest $2.50 increment
        const increment = 2.5;
        return Math.round(otmTarget / increment) * increment;
    };
    const strikePrice = underlyingPrice ? getRealisticStrike(underlyingPrice) : null;
    const formatPrice = (p)=>p ? `$${p.toFixed(2)}` : "—";
    const depositNum = parseFloat(depositAmount) || 0;
    const withdrawNum = parseFloat(withdrawAmount) || 0;
    const estPremiumUsd = underlyingPrice && depositNum ? depositNum * underlyingPrice * vaultMeta.premiumRange[0] / 100 : null;
    // Handle deposit
    const handleDeposit = async ()=>{
        if (!depositNum || depositNum <= 0) return;
        try {
            const amountInBaseUnits = Math.floor(depositNum * Math.pow(10, decimals));
            await deposit(amountInBaseUnits);
            setDepositAmount("");
        } catch (err) {
            console.error("Deposit failed:", err);
        }
    };
    // Handle withdrawal request
    const handleRequestWithdrawal = async ()=>{
        if (!withdrawNum || withdrawNum <= 0) return;
        try {
            const sharesInBaseUnits = Math.floor(withdrawNum * Math.pow(10, decimals));
            await requestWithdrawal(sharesInBaseUnits);
            setWithdrawAmount("");
        } catch (err) {
            console.error("Withdrawal request failed:", err);
        }
    };
    // Handle process withdrawal
    const handleProcessWithdrawal = async ()=>{
        try {
            await processWithdrawal();
        } catch (err) {
            console.error("Process withdrawal failed:", err);
        }
    };
    // Set max amount
    // Set max amount
    const handleHalfDeposit = ()=>{
        setDepositAmount(formatTokenAmount(userUnderlyingBalance / 2));
    };
    const handleMaxDeposit = ()=>{
        setDepositAmount(formatTokenAmount(userUnderlyingBalance));
    };
    const handleMaxWithdraw = ()=>{
        setWithdrawAmount(formatTokenAmount(userShareBalance));
    };
    // Transaction status display
    const getTxButtonText = (defaultText)=>{
        switch(txStatus){
            case "building":
                return "Building...";
            case "signing":
                return "Sign in wallet...";
            case "confirming":
                return "Confirming...";
            default:
                return defaultText;
        }
    };
    const isProcessing = txStatus === "building" || txStatus === "signing" || txStatus === "confirming";
    if (!vaultMeta) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-foreground mb-4",
                    children: "Vault not found"
                }, void 0, false, {
                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                    lineNumber: 216,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/v2",
                    className: "text-blue-400 text-lg",
                    children: "← Back to Earn"
                }, void 0, false, {
                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
            lineNumber: 215,
            columnNumber: 13
        }, this);
    }
    // Use on-chain data if available, fallback to metadata
    const tvlTokens = vaultData?.tvl || 0;
    const tvlUsd = tvlTokens * (underlyingPrice || 0); // TVL in USD
    const epoch = vaultData?.epoch || 0;
    const utilization = vaultData ? Number(vaultData.totalShares) > 0 ? vaultData.utilizationCapBps / 100 : 0 : 0;
    // Epoch timing - calculate based on a fixed weekly schedule
    // Epochs run Sunday 00:00 UTC to Saturday 23:59 UTC
    const getEpochEndTime = ()=>{
        const now = new Date();
        // Find next Saturday 23:59 UTC
        const daysUntilSaturday = (6 - now.getUTCDay() + 7) % 7 || 7;
        const nextSaturday = new Date(now);
        nextSaturday.setUTCDate(now.getUTCDate() + daysUntilSaturday);
        nextSaturday.setUTCHours(23, 59, 59, 999);
        return Math.floor(nextSaturday.getTime() / 1000);
    };
    const [timeUntilEpochEnd, setTimeUntilEpochEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTime = ()=>{
            const epochEnd = getEpochEndTime();
            const remaining = Math.max(0, epochEnd - Math.floor(Date.now() / 1000));
            setTimeUntilEpochEnd(remaining);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute
        return ()=>clearInterval(interval);
    }, []);
    const hoursUntilEnd = Math.floor(timeUntilEpochEnd / 3600);
    const daysUntilEnd = Math.floor(hoursUntilEnd / 24);
    const remainingHours = hoursUntilEnd % 24;
    // Themed background gradient
    const backgroundStyle = {
        background: `linear-gradient(135deg, #0B0F17 0%, ${theme.accentSoft} 50%, #0B0F17 100%)`,
        backgroundSize: '200% 200%'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 min-h-screen -m-4 p-4",
        style: {
            ...backgroundStyle,
            width: 'calc(100% + 2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/v2",
                        className: "hover:text-gray-200",
                        children: "Earn"
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 268,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-200",
                        children: vaultMeta.name
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 270,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                lineNumber: 267,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-white",
                                        children: vaultMeta.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 25
                                    }, this),
                                    vaultMeta.isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border",
                                        style: {
                                            backgroundColor: theme.accentSoft,
                                            color: theme.accent,
                                            borderColor: theme.accentBorder
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full",
                                                style: {
                                                    backgroundColor: theme.accent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 33
                                            }, this),
                                            "Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 29
                                    }, this),
                                    vaultLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 276,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mt-1",
                                children: [
                                    vaultMeta.strategy,
                                    " · ",
                                    vaultMeta.tier
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 275,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 flex items-center justify-end gap-1",
                                children: [
                                    "Est. APY (7 epochs) ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "w-3 h-3 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-green-400",
                                children: [
                                    vaultData?.apy || vaultMeta.apy,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 298,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    {
                        label: "Strike",
                        value: `${Math.round(vaultMeta.strikeOffset * 100)}% OTM`
                    },
                    {
                        label: "Roll",
                        value: "~5h"
                    },
                    {
                        label: "Premium",
                        value: `${vaultMeta.premiumRange[0]}-${vaultMeta.premiumRange[1]}%`,
                        highlight: true
                    },
                    {
                        label: "Cap",
                        value: `+${Math.round(vaultMeta.strikeOffset * 100)}%`,
                        warn: true
                    }
                ].map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-3 py-2 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: chip.label
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 311,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-semibold ${chip.highlight ? 'text-green-400' : chip.warn ? 'text-yellow-400' : 'text-white'}`,
                                children: chip.value
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 312,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 310,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl bg-gray-800/40 border border-gray-700/40 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 mb-1 flex items-center gap-1.5",
                                                children: [
                                                    "TVL",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-3.5 h-3.5 text-gray-500 cursor-help"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 border border-gray-700 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50",
                                                                children: "Total Value Locked - Assets deposited in this vault"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-white",
                                                children: [
                                                    "$",
                                                    tvlUsd.toLocaleString(undefined, {
                                                        maximumFractionDigits: 0
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-blue-400 mt-0.5",
                                                children: [
                                                    tvlTokens.toFixed(2),
                                                    " ",
                                                    vaultMeta.symbol
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl bg-gray-800/40 border border-gray-700/40 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 mb-1 flex items-center gap-1.5",
                                                children: [
                                                    "Epoch",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-3.5 h-3.5 text-gray-500 cursor-help"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 border border-gray-700 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50",
                                                                children: "Current epoch - Each epoch is one options cycle (~7 days)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-white",
                                                children: [
                                                    "#",
                                                    epoch
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-0.5",
                                                children: daysUntilEnd > 0 ? `${daysUntilEnd}d ${remainingHours}h left` : `${hoursUntilEnd}h left`
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl bg-gray-800/40 border border-gray-700/40 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 mb-1 flex items-center gap-1.5",
                                                children: [
                                                    "Utilization",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-3.5 h-3.5 text-gray-500 cursor-help"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 border border-gray-700 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50",
                                                                children: "% of vault assets deployed in options positions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 351,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-white",
                                                children: [
                                                    utilization,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-0.5",
                                                children: [
                                                    "of ",
                                                    vaultData?.utilizationCapBps ? vaultData.utilizationCapBps / 100 : 60,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl bg-gray-800/40 border border-gray-700/40 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 mb-1 flex items-center gap-1.5",
                                                children: [
                                                    "Est. Premium",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-3.5 h-3.5 text-gray-500 cursor-help"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 border border-gray-700 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50",
                                                                children: "Estimated yield from selling covered calls"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-green-400",
                                                children: [
                                                    vaultMeta.premiumRange[0],
                                                    "-",
                                                    vaultMeta.premiumRange[1],
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-0.5",
                                                children: "this roll"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-gray-800/40 border border-gray-700/40 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-medium text-gray-300 uppercase tracking-wide",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 29
                                            }, this),
                                            lastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 flex items-center gap-1.5",
                                                children: [
                                                    priceLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-3 h-3 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 54
                                                    }, this),
                                                    "Updated ",
                                                    lastUpdated.toLocaleTimeString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/60 border border-gray-800/60 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-200",
                                                        children: "Oracle OK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm ${rfq.routerOnline ? 'bg-gray-900/60 border-gray-800/60' : 'bg-red-500/10 border-red-500/30'}`,
                                                children: [
                                                    rfq.routerLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "w-4 h-4 text-gray-400 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 37
                                                    }, this) : rfq.routerOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                        className: "w-4 h-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-4 h-4 text-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: rfq.routerOnline ? 'text-gray-200' : 'text-red-400',
                                                        children: rfq.routerLoading ? 'Checking...' : rfq.routerOnline ? 'RFQ Online' : 'RFQ Offline'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 29
                                            }, this),
                                            rfq.rfqStatus !== 'IDLE' && rfq.rfqStatus !== 'ERROR' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm",
                                                children: [
                                                    rfq.rfqStatus === 'OPEN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "w-4 h-4 text-blue-400 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 41
                                                    }, this) : rfq.rfqStatus === 'FILLED' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4 text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 41
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-4 h-4 text-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-400",
                                                        children: rfq.rfqStatus === 'OPEN' ? `${rfq.quoteCount} quotes` : rfq.rfqStatus
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 37
                                                    }, this),
                                                    rfq.bestPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 font-semibold ml-1",
                                                        children: [
                                                            "+$",
                                                            (rfq.bestPremium / 1e6).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2 py-1 rounded bg-gray-900/60 text-xs text-gray-500",
                                                children: "Pyth"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900/40 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: "Spot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-semibold text-base",
                                                        children: formatPrice(underlyingPrice)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900/40 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: "Strike"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-semibold text-base",
                                                        children: formatPrice(strikePrice)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-gray-900/40 border border-gray-800/40 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-400",
                                                        children: "Position"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-300",
                                                        children: [
                                                            "Sold ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-semibold",
                                                                children: "0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 78
                                                            }, this),
                                                            " / Target ",
                                                            vaultData?.utilizationCapBps ? vaultData.utilizationCapBps / 100 : 60,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2.5 rounded-full bg-gray-800 overflow-hidden flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full w-0 rounded-full",
                                                        style: {
                                                            backgroundColor: theme.accent
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full w-[60%] border-r-2 border-dashed border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 25
                                    }, this),
                                    strikePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400/90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-4 h-4 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 33
                                            }, this),
                                            "Upside capped above ",
                                            formatPrice(strikePrice)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 29
                                    }, this),
                                    ("TURBOPACK compile-time value", "true") !== "true" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 p-3 rounded-lg bg-gray-900/40 border border-gray-800/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-400",
                                                        children: "Request Quote"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: "Test RFQ Integration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 33
                                            }, this),
                                            rfq.routerOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>rfq.requestQuote({
                                                        underlying: vaultMeta.symbol,
                                                        spotPrice: underlyingPrice || 100,
                                                        strikeOffsetPct: vaultMeta.strikeOffset,
                                                        notionalAmount: 1000 * 1e6,
                                                        epochDurationHours: 168
                                                    }),
                                                disabled: rfq.rfqLoading || rfq.rfqStatus === 'OPEN',
                                                className: "w-full py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50",
                                                style: {
                                                    backgroundColor: rfq.rfqLoading || rfq.rfqStatus === 'OPEN' ? '#374151' : theme.accentSoft,
                                                    color: theme.accent,
                                                    borderWidth: '1px',
                                                    borderColor: theme.accentBorder
                                                },
                                                children: rfq.rfqLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 49
                                                        }, this),
                                                        "Requesting..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 45
                                                }, this) : rfq.rfqStatus === 'OPEN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                            className: "w-4 h-4 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 49
                                                        }, this),
                                                        "Collecting ",
                                                        rfq.quoteCount,
                                                        " quotes..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 45
                                                }, this) : 'Request Quote from Market Makers'
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 37
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 text-center py-2",
                                                children: [
                                                    "RFQ Router offline - Start with: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "bg-gray-800 px-1 rounded",
                                                        children: "npm run dev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 74
                                                    }, this),
                                                    " in rfq-router"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 37
                                            }, this),
                                            rfq.bestPremium && rfq.rfqStatus === 'FILLED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 rounded bg-green-500/10 border border-green-500/20 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-400",
                                                                children: "Best Quote Accepted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-400 font-semibold",
                                                                children: [
                                                                    "+$",
                                                                    (rfq.bestPremium / 1e6).toFixed(4)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children: [
                                                            "From: ",
                                                            rfq.bestMaker?.slice(0, 8),
                                                            "..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 379,
                                columnNumber: 21
                            }, this),
                            underlyingPrice && strikePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PayoffChart, {
                                spotPrice: underlyingPrice,
                                strikePrice: strikePrice,
                                premiumRange: vaultMeta.premiumRange
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 528,
                                columnNumber: 25
                            }, this),
                            vaultMeta.isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 p-3 rounded-xl text-sm ${vaultState === "ACTIVE" ? "bg-green-500/10 border border-green-500/20" : "bg-blue-500/10 border border-blue-500/20"}`,
                                children: vaultState === "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-4 h-4 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Exposure Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 41
                                                }, this),
                                                " — Epoch #",
                                                epoch,
                                                " · Withdrawals queued until settlement"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-4 h-4 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 546,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-300",
                                            children: tvlTokens > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Awaiting Manual Roll"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 49
                                                    }, this),
                                                    " — Epoch #",
                                                    epoch,
                                                    " · Ready for execution"
                                                ]
                                            }, void 0, true) : `Live on Devnet. Deposit to start Epoch #${epoch}.`
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 533,
                                columnNumber: 25
                            }, this),
                            txSignature && txStatus === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-4 h-4 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-300",
                                        children: "Transaction confirmed!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://explorer.solana.com/tx/${txSignature}?cluster=devnet`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "ml-auto text-green-400 hover:text-green-300 flex items-center gap-1",
                                        children: [
                                            "View ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 564,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 561,
                                columnNumber: 25
                            }, this),
                            txError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-300",
                                        children: txError
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                lineNumber: 576,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 319,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl bg-gray-800/40 border border-gray-700/40 p-4 sticky top-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                vaultMeta.strategy,
                                                " (",
                                                vaultMeta.tier,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: refresh,
                                            className: "text-gray-500 hover:text-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 590,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 589,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                    lineNumber: 587,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 mb-4 p-1 bg-gray-900/60 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("deposit"),
                                            className: `flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "deposit" ? "text-white" : "text-gray-400 hover:text-white"}`,
                                            style: activeTab === "deposit" ? {
                                                backgroundColor: theme.accent
                                            } : {},
                                            children: "Deposit"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("withdraw"),
                                            className: `flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "withdraw" ? "text-white" : "text-gray-400 hover:text-white"}`,
                                            style: activeTab === "withdraw" ? {
                                                backgroundColor: theme.accent
                                            } : {},
                                            children: "Withdraw"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 25
                                }, this),
                                activeTab === "deposit" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-900/50 border border-gray-800 rounded-xl p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center pr-4 border-r border-gray-800/60",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 bg-gray-800 rounded-full pl-1.5 pr-3 py-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: vaultMeta.logo,
                                                                    alt: vaultMeta.symbol,
                                                                    className: "w-7 h-7 rounded-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-white text-sm",
                                                                    children: vaultMeta.symbol
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 pl-4 flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-end gap-2 mb-2",
                                                                children: [
                                                                    connected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer hover:text-gray-400",
                                                                        onClick: ()=>setDepositAmount(formatTokenAmount(userUnderlyingBalance)),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                                lineNumber: 633,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    formatTokenAmount(userUnderlyingBalance),
                                                                                    " ",
                                                                                    vaultMeta.symbol
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                                lineNumber: 634,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setDepositAmount(formatTokenAmount(userUnderlyingBalance / 2)),
                                                                        disabled: isProcessing || !connected,
                                                                        className: "px-2 py-0.5 rounded bg-gray-800 text-[10px] font-semibold hover:bg-gray-700 disabled:opacity-50 transition-colors",
                                                                        style: {
                                                                            color: theme.accent
                                                                        },
                                                                        children: "HALF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleMaxDeposit,
                                                                        disabled: isProcessing || !connected,
                                                                        className: "px-2 py-0.5 rounded bg-gray-800 text-[10px] font-semibold hover:bg-gray-700 disabled:opacity-50 transition-colors",
                                                                        style: {
                                                                            color: theme.accent
                                                                        },
                                                                        children: "MAX"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                        lineNumber: 645,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 630,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: depositAmount,
                                                                onChange: (e)=>setDepositAmount(e.target.value),
                                                                placeholder: "0.00",
                                                                disabled: isProcessing,
                                                                className: "w-full text-right text-3xl font-semibold bg-transparent border-none outline-none p-0 placeholder-gray-600 text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-gray-500 text-right mt-0.5",
                                                                children: [
                                                                    "≈ $",
                                                                    underlyingPrice ? (Number(depositAmount || 0) * underlyingPrice).toFixed(2) : "0.00"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                lineNumber: 614,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 613,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-gray-900/40 border border-gray-800/60 divide-y divide-gray-800/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: "You deposit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                depositNum.toFixed(2),
                                                                " ",
                                                                vaultMeta.symbol
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: "You receive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                depositNum.toFixed(2),
                                                                " v",
                                                                vaultMeta.symbol
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: "Withdraw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300",
                                                            children: "Epoch end (~5h)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 37
                                                }, this),
                                                estPremiumUsd && estPremiumUsd > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: "Est. premium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400 font-semibold",
                                                            children: [
                                                                "~$",
                                                                estPremiumUsd.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 674,
                                            columnNumber: 33
                                        }, this),
                                        strikePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 text-center",
                                            children: [
                                                "Withdraw unlocks at epoch end. Upside capped above ",
                                                formatPrice(strikePrice),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 697,
                                            columnNumber: 37
                                        }, this),
                                        connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDeposit,
                                            disabled: isProcessing || depositNum <= 0,
                                            className: "w-full py-3 h-12 rounded-lg hover:brightness-110 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium transition-all flex items-center justify-center gap-2",
                                            style: {
                                                backgroundColor: isProcessing || depositNum <= 0 ? undefined : theme.accent
                                            },
                                            children: [
                                                isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 58
                                                }, this),
                                                getTxButtonText("Deposit")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 703,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full py-3 h-12 rounded-lg bg-gray-700 text-gray-400 font-medium cursor-not-allowed",
                                            children: "Connect Wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-lg bg-gray-900/40 border border-gray-800/60 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400",
                                                    children: "Your shares"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-white mt-1",
                                                    children: formatTokenAmount(userShareBalance)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 mt-0.5",
                                                    children: [
                                                        "v",
                                                        vaultMeta.symbol
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 721,
                                            columnNumber: 33
                                        }, this),
                                        pendingWithdrawal && !pendingWithdrawal.processed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400/90",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 45
                                                        }, this),
                                                        "Pending withdrawal: ",
                                                        formatTokenAmount(pendingWithdrawal.shares),
                                                        " shares"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-yellow-500/70",
                                                    children: [
                                                        "Requested in epoch #",
                                                        pendingWithdrawal.requestEpoch
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 41
                                                }, this),
                                                vaultData && vaultData.epoch > pendingWithdrawal.requestEpoch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleProcessWithdrawal,
                                                    disabled: isProcessing,
                                                    className: "mt-2 w-full py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-sm flex items-center justify-center gap-2",
                                                    children: [
                                                        isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-3 h-3 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 66
                                                        }, this),
                                                        "Claim Withdrawal"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                            lineNumber: 729,
                                            columnNumber: 37
                                        }, this),
                                        (!pendingWithdrawal || pendingWithdrawal.processed) && userShareBalance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm text-gray-400 mb-2 block",
                                                            children: "Shares to withdraw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: withdrawAmount,
                                                                    onChange: (e)=>setWithdrawAmount(e.target.value),
                                                                    placeholder: "0.00",
                                                                    disabled: isProcessing,
                                                                    className: "w-full px-4 py-3 h-12 rounded-lg bg-gray-900/60 border border-gray-700/60 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-blue-500/60 disabled:opacity-50 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                    lineNumber: 754,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: [
                                                                                "v",
                                                                                vaultMeta.symbol
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                            lineNumber: 763,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: handleMaxWithdraw,
                                                                            disabled: isProcessing,
                                                                            className: "text-xs font-medium hover:brightness-125 disabled:opacity-50",
                                                                            style: {
                                                                                color: theme.accent
                                                                            },
                                                                            children: "MAX"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                            lineNumber: 764,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400/90 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 45
                                                        }, this),
                                                        "Processed at epoch end"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleRequestWithdrawal,
                                                    disabled: isProcessing || withdrawNum <= 0,
                                                    className: "w-full py-3 h-12 rounded-lg hover:brightness-110 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium transition-all flex items-center justify-center gap-2",
                                                    style: {
                                                        backgroundColor: isProcessing || withdrawNum <= 0 ? undefined : theme.accent
                                                    },
                                                    children: [
                                                        isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 62
                                                        }, this),
                                                        getTxButtonText("Request Withdrawal")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        userShareBalance === 0 && (!pendingWithdrawal || pendingWithdrawal.processed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400/90 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                            lineNumber: 796,
                                                            columnNumber: 45
                                                        }, this),
                                                        "Processed at epoch end"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full py-3 h-12 rounded-lg bg-gray-700 text-gray-400 font-medium cursor-not-allowed",
                                                    children: "No shares"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                                    lineNumber: 719,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                            lineNumber: 585,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                        lineNumber: 584,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/v2/earn/[ticker]/page.tsx",
        lineNumber: 265,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2694ca3._.js.map