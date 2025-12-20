(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/anchor/vault_idl.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"address\":\"A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94\",\"metadata\":{\"name\":\"vault\",\"version\":\"0.1.0\",\"spec\":\"0.1.0\",\"description\":\"OptionsFi V2 - Covered Call Vault\"},\"instructions\":[{\"name\":\"advance_epoch\",\"docs\":[\"Advance epoch (called by keeper after settlement)\",\"Premium earned is credited to total_assets, increasing share value\"],\"discriminator\":[93,138,234,218,241,230,132,38],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]}],\"args\":[{\"name\":\"premium_earned\",\"type\":\"u64\"}]},{\"name\":\"collect_premium\",\"docs\":[\"Collect premium from market maker (called during epoch roll)\",\"Transfers USDC from payer to vault's premium account\"],\"discriminator\":[166,199,123,128,71,141,223,204],\"accounts\":[{\"name\":\"vault\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"vault_premium_account\",\"writable\":true},{\"name\":\"payer_token_account\",\"writable\":true},{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[{\"name\":\"amount\",\"type\":\"u64\"}]},{\"name\":\"create_share_metadata\",\"docs\":[\"Create metadata for the share token (vNVDAx, etc.)\",\"Only callable by vault authority since vault PDA is the mint authority\"],\"discriminator\":[176,243,233,202,218,168,53,158],\"accounts\":[{\"name\":\"vault\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"share_mint\",\"relations\":[\"vault\"]},{\"name\":\"metadata\",\"writable\":true},{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"rent\",\"address\":\"SysvarRent111111111111111111111111111111111\"},{\"name\":\"token_metadata_program\",\"address\":\"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s\"}],\"args\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"symbol\",\"type\":\"string\"},{\"name\":\"uri\",\"type\":\"string\"}]},{\"name\":\"deposit\",\"docs\":[\"Deposit underlying tokens and receive vault shares\"],\"discriminator\":[242,35,198,137,82,225,242,182],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"share_mint\",\"writable\":true},{\"name\":\"vault_token_account\",\"writable\":true},{\"name\":\"user_token_account\",\"writable\":true},{\"name\":\"user_share_account\",\"writable\":true},{\"name\":\"user\",\"writable\":true,\"signer\":true},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[{\"name\":\"amount\",\"type\":\"u64\"}]},{\"name\":\"initialize_vault\",\"docs\":[\"Initialize a new vault for a specific xStock asset\"],\"discriminator\":[48,191,163,44,71,129,63,164],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"arg\",\"path\":\"asset_id\"}]}},{\"name\":\"underlying_mint\"},{\"name\":\"premium_mint\"},{\"name\":\"share_mint\",\"writable\":true,\"signer\":true},{\"name\":\"vault_token_account\",\"writable\":true,\"signer\":true},{\"name\":\"premium_token_account\",\"writable\":true,\"signer\":true},{\"name\":\"authority\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"},{\"name\":\"rent\",\"address\":\"SysvarRent111111111111111111111111111111111\"}],\"args\":[{\"name\":\"asset_id\",\"type\":\"string\"},{\"name\":\"utilization_cap_bps\",\"type\":\"u16\"}]},{\"name\":\"pay_settlement\",\"docs\":[\"Pay out to market maker for ITM settlement\",\"Only callable by vault authority\"],\"discriminator\":[65,54,44,166,205,55,164,205],\"accounts\":[{\"name\":\"vault\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"vault_premium_account\",\"writable\":true},{\"name\":\"recipient_token_account\",\"writable\":true},{\"name\":\"recipient\"},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[{\"name\":\"amount\",\"type\":\"u64\"}]},{\"name\":\"process_withdrawal\",\"docs\":[\"Process withdrawal after epoch settles\"],\"discriminator\":[51,97,236,17,37,33,196,64],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]},\"relations\":[\"withdrawal_request\"]},{\"name\":\"withdrawal_request\",\"writable\":true},{\"name\":\"share_mint\",\"writable\":true},{\"name\":\"vault_token_account\",\"writable\":true},{\"name\":\"user_token_account\",\"writable\":true},{\"name\":\"user_share_account\",\"writable\":true},{\"name\":\"user\",\"writable\":true,\"signer\":true,\"relations\":[\"withdrawal_request\"]},{\"name\":\"token_program\",\"address\":\"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA\"}],\"args\":[]},{\"name\":\"record_notional_exposure\",\"docs\":[\"Record notional exposure when an RFQ is filled (fractional options)\",\"Premium is in premium_mint tokens (USDC)\"],\"discriminator\":[26,180,108,160,15,34,179,128],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"authority\",\"signer\":true,\"relations\":[\"vault\"]}],\"args\":[{\"name\":\"notional_tokens\",\"type\":\"u64\"},{\"name\":\"premium\",\"type\":\"u64\"}]},{\"name\":\"request_withdrawal\",\"docs\":[\"Request withdrawal (queued until epoch end)\"],\"discriminator\":[251,85,121,205,56,201,12,177],\"accounts\":[{\"name\":\"vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[118,97,117,108,116]},{\"kind\":\"account\",\"path\":\"vault.asset_id\",\"account\":\"Vault\"}]}},{\"name\":\"withdrawal_request\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[119,105,116,104,100,114,97,119,97,108]},{\"kind\":\"account\",\"path\":\"vault\"},{\"kind\":\"account\",\"path\":\"user\"},{\"kind\":\"account\",\"path\":\"vault.epoch\",\"account\":\"Vault\"}]}},{\"name\":\"user_share_account\"},{\"name\":\"user\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"shares\",\"type\":\"u64\"}]}],\"accounts\":[{\"name\":\"Vault\",\"discriminator\":[211,8,232,43,2,152,117,119]},{\"name\":\"WithdrawalRequest\",\"discriminator\":[242,88,147,173,182,62,229,193]}],\"events\":[{\"name\":\"DepositEvent\",\"discriminator\":[120,248,61,83,31,142,107,144]},{\"name\":\"EpochAdvancedEvent\",\"discriminator\":[26,197,195,116,126,48,210,42]},{\"name\":\"NotionalExposureEvent\",\"discriminator\":[220,74,165,136,237,183,23,38]},{\"name\":\"PremiumCollectedEvent\",\"discriminator\":[76,52,166,111,182,211,215,144]},{\"name\":\"SettlementPaidEvent\",\"discriminator\":[97,3,234,177,141,83,59,26]},{\"name\":\"WithdrawalProcessedEvent\",\"discriminator\":[23,252,30,4,24,110,166,133]},{\"name\":\"WithdrawalRequestedEvent\",\"discriminator\":[82,227,155,140,223,124,77,243]}],\"errors\":[{\"code\":6000,\"name\":\"ZeroAmount\",\"msg\":\"Amount must be greater than zero\"},{\"code\":6001,\"name\":\"ZeroShares\",\"msg\":\"Calculated shares must be greater than zero\"},{\"code\":6002,\"name\":\"InsufficientShares\",\"msg\":\"Insufficient shares\"},{\"code\":6003,\"name\":\"AlreadyProcessed\",\"msg\":\"Withdrawal already processed\"},{\"code\":6004,\"name\":\"EpochNotSettled\",\"msg\":\"Epoch has not settled yet\"},{\"code\":6005,\"name\":\"Overflow\",\"msg\":\"Arithmetic overflow\"},{\"code\":6006,\"name\":\"ExceedsUtilizationCap\",\"msg\":\"Exceeds utilization cap\"}],\"types\":[{\"name\":\"DepositEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"shares_minted\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"EpochAdvancedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"new_epoch\",\"type\":\"u64\"},{\"name\":\"premium_earned\",\"type\":\"u64\"},{\"name\":\"notional_exposed\",\"type\":\"u64\"},{\"name\":\"avg_premium_bps\",\"type\":\"u32\"},{\"name\":\"total_assets\",\"type\":\"u64\"},{\"name\":\"total_shares\",\"type\":\"u64\"}]}},{\"name\":\"NotionalExposureEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"epoch\",\"type\":\"u64\"},{\"name\":\"notional_tokens\",\"type\":\"u64\"},{\"name\":\"premium\",\"type\":\"u64\"},{\"name\":\"total_notional_this_epoch\",\"type\":\"u64\"},{\"name\":\"total_premium_this_epoch\",\"type\":\"u64\"},{\"name\":\"avg_premium_bps\",\"type\":\"u32\"}]}},{\"name\":\"PremiumCollectedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"payer\",\"type\":\"pubkey\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"SettlementPaidEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"recipient\",\"type\":\"pubkey\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"Vault\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"authority\",\"type\":\"pubkey\"},{\"name\":\"asset_id\",\"type\":\"string\"},{\"name\":\"underlying_mint\",\"type\":\"pubkey\"},{\"name\":\"share_mint\",\"type\":\"pubkey\"},{\"name\":\"vault_token_account\",\"type\":\"pubkey\"},{\"name\":\"premium_mint\",\"type\":\"pubkey\"},{\"name\":\"premium_token_account\",\"type\":\"pubkey\"},{\"name\":\"total_assets\",\"type\":\"u64\"},{\"name\":\"total_shares\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"},{\"name\":\"utilization_cap_bps\",\"type\":\"u16\"},{\"name\":\"last_roll_timestamp\",\"type\":\"i64\"},{\"name\":\"pending_withdrawals\",\"type\":\"u64\"},{\"name\":\"epoch_notional_exposed\",\"type\":\"u64\"},{\"name\":\"epoch_premium_earned\",\"type\":\"u64\"},{\"name\":\"epoch_premium_per_token_bps\",\"type\":\"u32\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"WithdrawalProcessedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"shares\",\"type\":\"u64\"},{\"name\":\"amount\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}},{\"name\":\"WithdrawalRequest\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"shares\",\"type\":\"u64\"},{\"name\":\"request_epoch\",\"type\":\"u64\"},{\"name\":\"processed\",\"type\":\"bool\"}]}},{\"name\":\"WithdrawalRequestedEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"vault\",\"type\":\"pubkey\"},{\"name\":\"user\",\"type\":\"pubkey\"},{\"name\":\"shares\",\"type\":\"u64\"},{\"name\":\"epoch\",\"type\":\"u64\"}]}}]}"));}),
"[project]/app/lib/vault-sdk.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/app/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/instructions/associatedTokenAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anchor$2f$vault_idl$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/anchor/vault_idl.json (json)");
;
;
;
;
const VAULT_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("A4jgqct3bwTwRmHECHdPpbH3a8ksaVb7rny9pMUGFo94");
const ORACLE_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("5MnuN6ahpRSp5F3R2uXvy9pSN4TQmhSydywQSoxszuZk");
const RFQ_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("3M2K6htNbWyZHtvvUyUME19f5GUS6x8AtGmitFENDT5Z");
// NVDAx token mint (the actual token users deposit)
const NVDAX_MINT = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("G5VWnnWRxVvuTqRCEQNNGEdRmS42hMTyh8DAN9MHecLn");
const VAULTS = {
    nvdax: {
        symbol: "NVDAx",
        assetId: "NVDAx",
        underlyingMint: NVDAX_MINT
    }
};
function deriveVaultPda(assetId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("vault"),
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(assetId)
    ], VAULT_PROGRAM_ID);
}
function deriveShareMintPda(vaultPda) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("shares"),
        vaultPda.toBuffer()
    ], VAULT_PROGRAM_ID);
}
function deriveVaultTokenAccountPda(vaultPda) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("vault_tokens"),
        vaultPda.toBuffer()
    ], VAULT_PROGRAM_ID);
}
function deriveWithdrawalPda(vaultPda, userPubkey, epoch) {
    // Use BN for browser compatibility (writeBigUInt64LE doesn't work in browser)
    const epochBN = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](epoch.toString());
    const epochBuffer = epochBN.toArrayLike(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"], "le", 8);
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("withdrawal"),
        vaultPda.toBuffer(),
        userPubkey.toBuffer(),
        epochBuffer
    ], VAULT_PROGRAM_ID);
}
function getVaultProgram(provider) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anchor$2f$vault_idl$2e$json__$28$json$29$__["default"], provider);
}
async function fetchVaultData(connection, assetId, retries = 3) {
    const [vaultPda] = deriveVaultPda(assetId);
    // Create a dummy wallet for read-only operations
    const dummyWallet = {
        publicKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].default,
        signTransaction: async ()=>{
            throw new Error("Not implemented");
        },
        signAllTransactions: async ()=>{
            throw new Error("Not implemented");
        }
    };
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, dummyWallet, {
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
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
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
    const userTokenAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(config.underlyingMint, wallet.publicKey);
    // Get user's share token account (create if needed)
    const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, wallet.publicKey);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
    // Check if account exists and has no data (doesn't exist yet)
    const shareAccountInfo = await connection.getAccountInfo(userShareAccount);
    if (!shareAccountInfo) {
        tx.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, userShareAccount, wallet.publicKey, shareMint));
    }
    // Build deposit instruction
    const depositIx = await program.methods.deposit(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](amount)).accounts({
        vault: vaultPda,
        shareMint: shareMint,
        vaultTokenAccount: vaultTokenAccount,
        userTokenAccount: userTokenAccount,
        userShareAccount: userShareAccount,
        user: wallet.publicKey,
        tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
    }).instruction();
    tx.add(depositIx);
    return tx;
}
async function buildRequestWithdrawalTransaction(connection, wallet, assetId, shares// in base units
) {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
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
    const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, wallet.publicKey);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
    const requestWithdrawalIx = await program.methods.requestWithdrawal(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](shares)).accounts({
        vault: vaultPda,
        withdrawalRequest: withdrawalPda,
        userShareAccount: userShareAccount,
        user: wallet.publicKey,
        systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
    }).instruction();
    tx.add(requestWithdrawalIx);
    return tx;
}
async function buildProcessWithdrawalTransaction(connection, wallet, assetId) {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
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
    const userTokenAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(config.underlyingMint, wallet.publicKey);
    const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, wallet.publicKey);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
    const processWithdrawalIx = await program.methods.processWithdrawal().accounts({
        vault: vaultPda,
        withdrawalRequest: withdrawalPda,
        shareMint: shareMint,
        vaultTokenAccount: vaultTokenAccount,
        userTokenAccount: userTokenAccount,
        userShareAccount: userShareAccount,
        user: wallet.publicKey,
        tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
    }).instruction();
    tx.add(processWithdrawalIx);
    return tx;
}
async function getUserShareBalance(connection, userPubkey, assetId) {
    try {
        const [vaultPda] = deriveVaultPda(assetId);
        // Create a dummy wallet for read-only operations
        const dummyWallet = {
            publicKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].default,
            signTransaction: async ()=>{
                throw new Error("Not implemented");
            },
            signAllTransactions: async ()=>{
                throw new Error("Not implemented");
            }
        };
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, dummyWallet, {
            commitment: "confirmed"
        });
        const program = getVaultProgram(provider);
        // Fetch vault to get actual share mint
        const vaultAccount = await program.account.vault.fetch(vaultPda);
        const shareMint = vaultAccount.shareMint;
        const userShareAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(shareMint, userPubkey);
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
        const userTokenAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(config.underlyingMint, userPubkey);
        const accountInfo = await connection.getTokenAccountBalance(userTokenAccount);
        return Number(accountInfo.value.amount);
    } catch  {
        return 0;
    }
}
async function getUserWithdrawalRequest(connection, wallet, assetId) {
    try {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
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
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
        commitment: "confirmed"
    });
    const program = getVaultProgram(provider);
    const [vaultPda] = deriveVaultPda(assetId);
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
    const advanceEpochIx = await program.methods.advanceEpoch(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](premiumEarned)).accounts({
        vault: vaultPda,
        authority: wallet.publicKey
    }).instruction();
    tx.add(advanceEpochIx);
    return tx;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/app/v2/faucet/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaucetPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/vault-sdk.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.WalletMultiButton), {
    loadableGenerated: {
        modules: [
            "[project]/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = WalletMultiButton;
function FaucetPage() {
    _s();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const { publicKey, connected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fetchingBalances, setFetchingBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solBalance, setSolBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nvdaxBalance, setNvdaxBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [underlyingMint, setUnderlyingMint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastTx, setLastTx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch the vault's underlying mint
    const fetchVaultMint = async ()=>{
        try {
            const vaultData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVaultData"])(connection, "NVDAx");
            if (vaultData) {
                setUnderlyingMint(new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](vaultData.underlyingMint));
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](vaultData.underlyingMint);
            }
        } catch (error) {
            console.error("Error fetching vault data:", error);
        }
        return null;
    };
    // Fetch balances
    const fetchBalances = async ()=>{
        if (!publicKey) return;
        setFetchingBalances(true);
        try {
            // SOL balance
            const balance = await connection.getBalance(publicKey);
            setSolBalance(balance / 1e9);
            // Get the mint from vault if we don't have it
            let mint = underlyingMint;
            if (!mint) {
                mint = await fetchVaultMint();
            }
            // NVDAx balance (using vault's underlying mint)
            if (mint) {
                try {
                    const ata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(mint, publicKey);
                    const tokenBalance = await connection.getTokenAccountBalance(ata);
                    setNvdaxBalance(Number(tokenBalance.value.uiAmount));
                } catch  {
                    setNvdaxBalance(0);
                }
            }
        } catch (error) {
            console.error("Error fetching balances:", error);
        } finally{
            setFetchingBalances(false);
        }
    };
    // Request NVDAx tokens from faucet API
    const requestNvdax = async ()=>{
        if (!publicKey) return;
        setLoading(true);
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loading("Requesting NVDAx tokens...");
        try {
            const response = await fetch('/api/faucet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    walletAddress: publicKey.toBase58()
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to mint tokens');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`Received ${data.amount} NVDAx!`, {
                id: toastId,
                duration: 5000
            });
            setLastTx(data.signature);
            await fetchBalances();
        } catch (error) {
            console.error("Faucet error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.message || "Request failed. Try again later.", {
                id: toastId
            });
        } finally{
            setLoading(false);
        }
    };
    // Fetch vault mint and balances on connect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaucetPage.useEffect": ()=>{
            if (connected && publicKey) {
                fetchVaultMint().then({
                    "FaucetPage.useEffect": ()=>fetchBalances()
                }["FaucetPage.useEffect"]);
            }
        }
    }["FaucetPage.useEffect"], [
        connected,
        publicKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-full flex flex-col items-center pt-16 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                className: "w-8 h-8 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/app/v2/faucet/page.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-white",
                            children: "Token Faucet"
                        }, void 0, false, {
                            fileName: "[project]/app/app/v2/faucet/page.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mt-2",
                            children: "Get testnet NVDAx tokens for the xStock Options platform"
                        }, void 0, false, {
                            fileName: "[project]/app/app/v2/faucet/page.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                    lineNumber: 116,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl bg-gray-900/50 border border-gray-800 p-6 space-y-6",
                    children: !connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "w-12 h-12 mx-auto text-gray-500 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 129,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mb-4",
                                children: "Connect your wallet to use the faucet"
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 130,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {
                                className: "!bg-green-600 hover:!bg-green-700 !rounded-xl !h-12 !px-6"
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 131,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                        lineNumber: 128,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-medium text-gray-400",
                                                children: "Your Balances"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: fetchBalances,
                                                disabled: fetchingBalances,
                                                className: "flex items-center gap-1 text-xs text-gray-500 hover:text-gray-400 transition-colors disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: `w-3 h-3 ${fetchingBalances ? 'animate-spin' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Refresh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-gray-800/50 border border-gray-700/50 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-1",
                                                        children: "SOL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold text-white",
                                                        children: solBalance !== null ? solBalance.toFixed(4) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-gray-800/50 border border-gray-700/50 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-1",
                                                        children: "NVDAx"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold text-green-400",
                                                        children: nvdaxBalance !== null ? nvdaxBalance.toFixed(2) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 136,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-800"
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 165,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-gray-400 mb-3",
                                        children: "Request NVDAx"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: requestNvdax,
                                        disabled: loading,
                                        className: "w-full h-14 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium flex items-center justify-center gap-2 transition-all",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-5 h-5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 45
                                                }, this),
                                                "Minting..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/nvidiax_logo.png",
                                                    alt: "NVDAx",
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 45
                                                }, this),
                                                "Get 100 NVDAx"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-2 text-center",
                                        children: "Mock NVDAx tokens for testing vault deposits"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 168,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-blue-500/10 border border-blue-500/30 p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/faucet/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-blue-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium mb-1",
                                                    children: "Need SOL for gas?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        "Visit",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://faucet.solana.com/",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-blue-400 hover:text-blue-300 underline",
                                                            children: "faucet.solana.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 45
                                                        }, this),
                                                        " ",
                                                        "for devnet SOL."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/v2/faucet/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 193,
                                columnNumber: 29
                            }, this),
                            lastTx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://explorer.solana.com/tx/${lastTx}?cluster=devnet`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-400 hover:text-blue-300 flex items-center gap-1",
                                        children: [
                                            "View transaction",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/v2/faucet/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/faucet/page.tsx",
                                lineNumber: 216,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs text-gray-500 mt-6",
                    children: "This faucet is for Solana Devnet only. Tokens have no real value."
                }, void 0, false, {
                    fileName: "[project]/app/app/v2/faucet/page.tsx",
                    lineNumber: 234,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/app/v2/faucet/page.tsx",
            lineNumber: 114,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/app/v2/faucet/page.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
_s(FaucetPage, "CUJhv7IXo/VTqypXPt0Q3gaE3R8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c1 = FaucetPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "WalletMultiButton");
__turbopack_context__.k.register(_c1, "FaucetPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_62510c99._.js.map