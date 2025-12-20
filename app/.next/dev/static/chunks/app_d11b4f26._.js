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
            // Real APY = (premium_earned / total_assets) × 52 weeks × 100
            // This gives the actual yield on the entire vault, not just exposed tokens
            const epochPremiumEarned = Number(vaultAccount.epochPremiumEarned || 0);
            const epochYieldPercent = totalAssets > 0 ? epochPremiumEarned / totalAssets * 100 : 0;
            // Annualize assuming weekly epochs
            const apy = epochYieldPercent * 52;
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
"[project]/app/components/DemoPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarDemoPanel",
    ()=>SidebarDemoPanel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/vault-sdk.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SidebarDemoPanel({ collapsed = false }) {
    _s();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [keeperOnline, setKeeperOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRolling, setIsRolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSettling, setIsSettling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [vaultState, setVaultState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("IDLE");
    const [lastResult, setLastResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const keeperUrl = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_KEEPER_URL || "http://localhost:3010";
    // Fetch vault state to determine if there's active exposure
    const fetchVaultState = async ()=>{
        try {
            const vaultData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$vault$2d$sdk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVaultData"])(connection, "NVDAx");
            if (vaultData) {
                const hasExposure = BigInt(vaultData.epochNotionalExposed) > BigInt(0);
                setVaultState(hasExposure ? "ACTIVE" : "IDLE");
            }
        } catch (error) {
            console.warn("Failed to fetch vault state:", error);
        }
    };
    // Check keeper health
    const checkKeeperHealth = async ()=>{
        try {
            const response = await fetch(`${keeperUrl}/health`, {
                method: "GET",
                signal: AbortSignal.timeout(3000)
            });
            const data = await response.json();
            setKeeperOnline(data.status === "healthy");
        } catch  {
            setKeeperOnline(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarDemoPanel.useEffect": ()=>{
            checkKeeperHealth();
            fetchVaultState();
            const healthInterval = setInterval(checkKeeperHealth, 15000);
            const vaultInterval = setInterval(fetchVaultState, 10000);
            return ({
                "SidebarDemoPanel.useEffect": ()=>{
                    clearInterval(healthInterval);
                    clearInterval(vaultInterval);
                }
            })["SidebarDemoPanel.useEffect"];
        }
    }["SidebarDemoPanel.useEffect"], [
        connection
    ]);
    const triggerRoll = async ()=>{
        setIsRolling(true);
        setLastResult(null);
        try {
            const response = await fetch(`${keeperUrl}/trigger`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setLastResult({
                success: data.success,
                message: data.success ? "Roll complete" : "Roll failed"
            });
            if (data.success) setVaultState("ACTIVE");
        } catch (error) {
            setLastResult({
                success: false,
                message: "Failed"
            });
        } finally{
            setIsRolling(false);
        }
    };
    const triggerSettlement = async ()=>{
        setIsSettling(true);
        setLastResult(null);
        try {
            const response = await fetch(`${keeperUrl}/settle`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setLastResult({
                success: data.success,
                message: data.success ? "Settled" : "Failed"
            });
            if (data.success) setVaultState("IDLE");
        } catch (error) {
            setLastResult({
                success: false,
                message: "Failed"
            });
        } finally{
            setIsSettling(false);
        }
    };
    // Collapsed view - just show icon
    if (collapsed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-2 py-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-10 rounded-lg text-muted-foreground/50 hover:bg-secondary/30 cursor-pointer",
                title: "Demo Controls",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-2 h-2 rounded-full ${keeperOnline ? 'bg-gray-400' : 'bg-gray-600'}`
                }, void 0, false, {
                    fileName: "[project]/app/components/DemoPanel.tsx",
                    lineNumber: 114,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/DemoPanel.tsx",
                lineNumber: 110,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/DemoPanel.tsx",
            lineNumber: 109,
            columnNumber: 13
        }, this);
    }
    // Expanded sidebar view
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 py-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "w-full flex items-center justify-between h-10 px-3 rounded-lg text-muted-foreground/70 hover:bg-secondary/30 text-sm transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-1.5 h-1.5 rounded-full ${keeperOnline ? 'bg-gray-400' : 'bg-gray-600'}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoPanel.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px]",
                                children: "Demo"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DemoPanel.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 px-3 py-2 space-y-2 bg-secondary/20 rounded-lg border border-border/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[11px] text-muted-foreground/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "State:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoPanel.tsx",
                                lineNumber: 142,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: vaultState
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoPanel.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 141,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: triggerRoll,
                                disabled: !keeperOnline || isRolling || vaultState !== "IDLE",
                                className: "flex-1 flex items-center justify-center gap-1 py-1.5 rounded text-[11px] bg-secondary/50 border border-border/50 text-muted-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                                children: [
                                    isRolling ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3 h-3 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/DemoPanel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 42
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/DemoPanel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 89
                                    }, this),
                                    "Roll"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/DemoPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: triggerSettlement,
                                disabled: !keeperOnline || isSettling || vaultState !== "ACTIVE",
                                className: "flex-1 flex items-center justify-center gap-1 py-1.5 rounded text-[11px] bg-secondary/50 border border-border/50 text-muted-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                                children: [
                                    isSettling ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3 h-3 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/DemoPanel.tsx",
                                        lineNumber: 161,
                                        columnNumber: 43
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/DemoPanel.tsx",
                                        lineNumber: 161,
                                        columnNumber: 90
                                    }, this),
                                    "Settle"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/DemoPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this),
                    lastResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-[10px] ${lastResult.success ? 'text-muted-foreground' : 'text-red-400/70'}`,
                        children: lastResult.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 168,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-muted-foreground/40",
                        children: [
                            "Keeper: ",
                            keeperOnline ? 'online' : 'offline'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DemoPanel.tsx",
                        lineNumber: 174,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DemoPanel.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DemoPanel.tsx",
        lineNumber: 122,
        columnNumber: 9
    }, this);
}
_s(SidebarDemoPanel, "gw+ndGreJnBjcBZCR7z9FlDyfMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"]
    ];
});
_c = SidebarDemoPanel;
const __TURBOPACK__default__export__ = SidebarDemoPanel;
var _c;
__turbopack_context__.k.register(_c, "SidebarDemoPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/app/v2/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>V2Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/app/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DemoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DemoPanel.tsx [app-client] (ecmascript)");
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
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.WalletMultiButton), {
    loadableGenerated: {
        modules: [
            "[project]/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = WalletMultiButton;
function V2Layout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "V2Layout.useEffect": ()=>{
            const savedSidebar = localStorage.getItem("sidebarCollapsed");
            if (savedSidebar) {
                setSidebarCollapsed(savedSidebar === "true");
            }
        }
    }["V2Layout.useEffect"], []);
    const toggleSidebar = ()=>{
        const newState = !sidebarCollapsed;
        setSidebarCollapsed(newState);
        localStorage.setItem("sidebarCollapsed", String(newState));
    };
    // Core product navigation
    const coreNavItems = [
        {
            href: "/v2/portfolio",
            label: "Portfolio",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"]
        },
        {
            href: "/v2",
            label: "Earn",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"]
        },
        {
            href: "/v2/oracle",
            label: "Oracle",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
        }
    ];
    // Utility navigation (bottom section)
    const utilityNavItems = [
        {
            href: "/v2/faucet",
            label: "Faucet",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
        },
        {
            href: "/v2/docs",
            label: "Docs",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        },
        {
            href: "/v2/settings",
            label: "Settings",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    const isActive = (href)=>{
        if (href === "/v2") return pathname === "/v2" || pathname === "/v2/earn" || pathname?.startsWith("/v2/earn/");
        return pathname?.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col bg-background overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex-shrink-0 border-b border-border bg-background/80 backdrop-blur-md z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-14 flex justify-between items-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/v2",
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/OptionsFi_logo.png",
                                            alt: "OptionsFi",
                                            className: "h-8 w-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30",
                                            children: "V2 Beta"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/layout.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-secondary/50 rounded-lg p-0.5 border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "px-3 py-1.5 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground transition-colors",
                                            children: "V1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-1.5 text-xs font-medium rounded-md bg-blue-500/20 text-blue-400",
                                            children: "V2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/layout.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/v2/layout.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary/50 border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-purple-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: "Devnet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/v2/layout.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {
                                    className: "!bg-secondary !text-secondary-foreground hover:!bg-secondary/80 !rounded-lg !h-9 !px-4 !text-sm !font-medium !border !border-border"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/v2/layout.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/v2/layout.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/app/v2/layout.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/app/v2/layout.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `${sidebarCollapsed ? 'w-16' : 'w-52'} flex-shrink-0 border-r border-border bg-background/50 transition-all duration-200 flex flex-col`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-11 flex-shrink-0 flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-end'} px-3 border-b border-border/50`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleSidebar,
                                    className: "p-1.5 rounded-lg hover:bg-secondary/50 text-muted-foreground",
                                    title: sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`,
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 111,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/layout.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/app/v2/layout.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/layout.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex-1 px-2 py-3 space-y-1 overflow-y-auto min-h-0",
                                children: [
                                    coreNavItems.map((item)=>{
                                        const Icon = item.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: `flex items-center h-10 ${sidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3'} rounded-lg text-sm font-medium transition-all ${isActive(item.href) ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
                                            title: sidebarCollapsed ? item.label : undefined,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-5 h-5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/layout.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 37
                                                }, this),
                                                !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/v2/layout.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, item.href, true, {
                                            fileName: "[project]/app/app/v2/layout.tsx",
                                            lineNumber: 121,
                                            columnNumber: 33
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DemoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarDemoPanel"], {
                                        collapsed: sidebarCollapsed
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/v2/layout.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/v2/layout.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-3 border-t border-border/50 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/layout.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "px-2 py-3 space-y-1 flex-shrink-0",
                                children: utilityNavItems.map((item)=>{
                                    const Icon = item.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `flex items-center h-10 ${sidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3'} rounded-lg text-sm font-medium transition-all ${isActive(item.href) ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "text-muted-foreground/70 hover:text-foreground hover:bg-secondary/50"}`,
                                        title: sidebarCollapsed ? item.label : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-4.5 h-4.5 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/layout.tsx",
                                                lineNumber: 157,
                                                columnNumber: 37
                                            }, this),
                                            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px]",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/v2/layout.tsx",
                                                lineNumber: 158,
                                                columnNumber: 59
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/app/app/v2/layout.tsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/app/v2/layout.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/v2/layout.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-4 overflow-auto",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/app/v2/layout.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/v2/layout.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/v2/layout.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(V2Layout, "EHse3gIsqNwk8Ib6DfwEndbjJW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = V2Layout;
var _c, _c1;
__turbopack_context__.k.register(_c, "WalletMultiButton");
__turbopack_context__.k.register(_c1, "V2Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_d11b4f26._.js.map