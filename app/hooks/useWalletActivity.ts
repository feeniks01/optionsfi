"use client";

import { useState, useEffect, useCallback } from "react";
import { Connection, PublicKey, ParsedTransactionWithMeta } from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { VAULT_PROGRAM_ID, VAULTS, deriveVaultPda } from "../lib/vault-sdk";

export interface WalletActivity {
    signature: string;
    type: "deposit" | "withdraw" | "withdrawal_request" | "unknown";
    timestamp: Date;
    slot: number;
    success: boolean;
    amount?: number;
    vaultId?: string;
}

/**
 * Hook to fetch real wallet activity involving our vault program
 */
export function useWalletActivity() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    const [activities, setActivities] = useState<WalletActivity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchActivity = useCallback(async () => {
        if (!publicKey) {
            setActivities([]);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            // Fetch recent signatures for the wallet
            const signatures = await connection.getSignaturesForAddress(
                publicKey,
                { limit: 50 },
                "confirmed"
            );

            // Fetch transactions in PARALLEL batches for speed
            const BATCH_SIZE = 10;
            const relevantActivities: WalletActivity[] = [];

            for (let i = 0; i < signatures.length; i += BATCH_SIZE) {
                const batch = signatures.slice(i, i + BATCH_SIZE);

                const txPromises = batch.map(async (sig) => {
                    try {
                        const tx = await connection.getParsedTransaction(
                            sig.signature,
                            { maxSupportedTransactionVersion: 0 }
                        );

                        if (!tx || !tx.meta) return null;

                        const accountKeys = tx.transaction.message.accountKeys;

                        // Parse the vault ID from account keys solely based on ACTIVE vaults
                        let vaultId: string | undefined;
                        let involvesActiveVault = false;

                        for (const [id, config] of Object.entries(VAULTS)) {
                            const [vaultPda] = deriveVaultPda(config.assetId);

                            const isInTx = accountKeys.some(
                                (key) => key.pubkey.toString() === vaultPda.toString()
                            );

                            if (isInTx) {
                                vaultId = id;
                                involvesActiveVault = true;
                                break;
                            }
                        }

                        if (!involvesActiveVault) return null;

                        // Parse the transaction type from logs
                        const logs = tx.meta.logMessages || [];
                        let type: WalletActivity["type"] = "unknown";
                        let amount: number | undefined;

                        for (const log of logs) {
                            if (log.includes("Instruction: Deposit")) {
                                type = "deposit";
                            } else if (log.includes("Instruction: RequestWithdrawal")) {
                                type = "withdrawal_request";
                            } else if (log.includes("Instruction: ProcessWithdrawal")) {
                                type = "withdraw";
                            }
                        }

                        // Try to extract amount from token balance changes
                        const preBalances = tx.meta.preTokenBalances || [];
                        const postBalances = tx.meta.postTokenBalances || [];

                        for (let j = 0; j < postBalances.length; j++) {
                            const post = postBalances[j];
                            const pre = preBalances.find(
                                (p) => p.accountIndex === post.accountIndex
                            );

                            if (post.owner === publicKey!.toString()) {
                                const postAmount = parseFloat(post.uiTokenAmount.uiAmountString || "0");
                                const preAmount = pre ? parseFloat(pre.uiTokenAmount.uiAmountString || "0") : 0;
                                const change = Math.abs(postAmount - preAmount);
                                if (change > 0) {
                                    amount = change;
                                }
                            }
                        }

                        return {
                            signature: sig.signature,
                            type,
                            timestamp: new Date((sig.blockTime || 0) * 1000),
                            slot: sig.slot,
                            success: sig.err === null,
                            amount,
                            vaultId,
                        } as WalletActivity;
                    } catch (txErr) {
                        console.warn("Error parsing tx:", sig.signature, txErr);
                        return null;
                    }
                });

                const results = await Promise.all(txPromises);
                results.forEach(r => { if (r) relevantActivities.push(r); });
            }

            setActivities(relevantActivities);
        } catch (err: any) {
            console.error("Error fetching wallet activity:", err);
            setError(err.message || "Failed to fetch activity");
        } finally {
            setLoading(false);
        }
    }, [connection, publicKey]);

    useEffect(() => {
        fetchActivity();
    }, [fetchActivity]);

    return {
        activities,
        loading,
        error,
        refresh: fetchActivity,
    };
}
