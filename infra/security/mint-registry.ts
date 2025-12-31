/**
 * Institutional-Grade Mint Registry
 * 
 * Manages whitelisted and blacklisted token mints with:
 * - Real-time validation
 * - Audit logging
 * - Multi-tier classification (verified, trusted, suspicious, banned)
 * - Integration with on-chain metadata
 */

import { PublicKey, Connection } from '@solana/web3.js';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import winston from 'winston';

// Mint classification tiers
export enum MintTier {
    VERIFIED = 'verified',     // KYC'd, institutional grade
    TRUSTED = 'trusted',       // Well-known, used in production
    STANDARD = 'standard',     // Default tier for new mints
    SUSPICIOUS = 'suspicious', // Flagged for review
    BANNED = 'banned'         // Blacklisted, reject all transactions
}

export interface MintMetadata {
    mint: string;
    tier: MintTier;
    symbol?: string;
    name?: string;
    decimals?: number;
    addedAt: number;
    addedBy: string;
    lastVerified?: number;
    notes?: string;
    // Risk indicators
    hasFreeze: boolean;
    hasMintAuthority: boolean;
    totalSupply?: bigint;
}

export interface ValidationResult {
    valid: boolean;
    tier: MintTier;
    reason?: string;
    metadata?: MintMetadata;
}

export class MintRegistry {
    private whitelistedMints: Map<string, MintMetadata>;
    private blacklistedMints: Set<string>;
    private connection: Connection;
    private logger: winston.Logger;
    private cacheTimeout: number = 3600000; // 1 hour

    constructor(
        connection: Connection,
        logger: winston.Logger,
        initialWhitelist: string[] = [],
        initialBlacklist: string[] = []
    ) {
        this.connection = connection;
        this.logger = logger;
        this.whitelistedMints = new Map();
        this.blacklistedMints = new Set(initialBlacklist);

        // Load initial whitelist
        for (const mint of initialWhitelist) {
            this.addMint(mint, MintTier.TRUSTED, 'system-init');
        }
    }

    /**
     * Validate a mint address
     */
    async validateMint(mintAddress: string): Promise<ValidationResult> {
        try {
            // Quick blacklist check
            if (this.blacklistedMints.has(mintAddress)) {
                return {
                    valid: false,
                    tier: MintTier.BANNED,
                    reason: 'Mint is blacklisted'
                };
            }

            // Check whitelist
            const cached = this.whitelistedMints.get(mintAddress);
            if (cached) {
                // Refresh if stale
                if (cached.lastVerified && Date.now() - cached.lastVerified > this.cacheTimeout) {
                    await this.refreshMintMetadata(mintAddress);
                }

                return {
                    valid: cached.tier !== MintTier.BANNED,
                    tier: cached.tier,
                    metadata: cached
                };
            }

            // Unknown mint - fetch metadata and classify
            const metadata = await this.fetchMintMetadata(mintAddress);
            if (!metadata) {
                return {
                    valid: false,
                    tier: MintTier.STANDARD,
                    reason: 'Unable to fetch mint metadata'
                };
            }

            // Classify based on risk indicators
            const tier = this.classifyMint(metadata);
            
            // Cache for future lookups
            this.whitelistedMints.set(mintAddress, {
                ...metadata,
                tier,
                lastVerified: Date.now()
            });

            return {
                valid: tier !== MintTier.BANNED && tier !== MintTier.SUSPICIOUS,
                tier,
                metadata: this.whitelistedMints.get(mintAddress)
            };

        } catch (error: any) {
            this.logger.error('Mint validation error', {
                mint: mintAddress,
                error: error.message
            });
            return {
                valid: false,
                tier: MintTier.STANDARD,
                reason: error.message
            };
        }
    }

    /**
     * Add a mint to the whitelist
     */
    addMint(
        mintAddress: string,
        tier: MintTier = MintTier.STANDARD,
        addedBy: string,
        notes?: string
    ): void {
        const existing = this.whitelistedMints.get(mintAddress);
        
        this.whitelistedMints.set(mintAddress, {
            mint: mintAddress,
            tier,
            addedAt: existing?.addedAt || Date.now(),
            addedBy: existing?.addedBy || addedBy,
            notes,
            hasFreeze: false,
            hasMintAuthority: false
        });

        this.blacklistedMints.delete(mintAddress);

        this.logger.info('Mint added to whitelist', {
            mint: mintAddress,
            tier,
            addedBy
        });
    }

    /**
     * Ban a mint (add to blacklist)
     */
    banMint(mintAddress: string, reason: string, bannedBy: string): void {
        this.blacklistedMints.add(mintAddress);
        
        // Update whitelist entry if exists
        const existing = this.whitelistedMints.get(mintAddress);
        if (existing) {
            existing.tier = MintTier.BANNED;
            existing.notes = `BANNED: ${reason}`;
        } else {
            this.whitelistedMints.set(mintAddress, {
                mint: mintAddress,
                tier: MintTier.BANNED,
                addedAt: Date.now(),
                addedBy: bannedBy,
                notes: `BANNED: ${reason}`,
                hasFreeze: false,
                hasMintAuthority: false
            });
        }

        this.logger.warn('Mint banned', {
            mint: mintAddress,
            reason,
            bannedBy
        });
    }

    /**
     * Remove a mint from blacklist
     */
    unbanMint(mintAddress: string, unbannedBy: string): void {
        this.blacklistedMints.delete(mintAddress);
        
        const existing = this.whitelistedMints.get(mintAddress);
        if (existing && existing.tier === MintTier.BANNED) {
            existing.tier = MintTier.SUSPICIOUS; // Move to suspicious for review
            existing.notes = `Unbanned by ${unbannedBy} at ${new Date().toISOString()}`;
        }

        this.logger.info('Mint unbanned', {
            mint: mintAddress,
            unbannedBy
        });
    }

    /**
     * Get all whitelisted mints
     */
    getWhitelistedMints(tier?: MintTier): MintMetadata[] {
        const mints = Array.from(this.whitelistedMints.values());
        return tier ? mints.filter(m => m.tier === tier) : mints;
    }

    /**
     * Get all blacklisted mints
     */
    getBlacklistedMints(): string[] {
        return Array.from(this.blacklistedMints);
    }

    /**
     * Fetch mint metadata from on-chain
     */
    private async fetchMintMetadata(mintAddress: string): Promise<MintMetadata | null> {
        try {
            const mintPubkey = new PublicKey(mintAddress);
            const mintInfo = await this.connection.getParsedAccountInfo(mintPubkey);

            if (!mintInfo.value) {
                return null;
            }

            const data = mintInfo.value.data;
            if (typeof data === 'object' && 'parsed' in data) {
                const parsed = data.parsed;
                
                return {
                    mint: mintAddress,
                    tier: MintTier.STANDARD,
                    decimals: parsed.info.decimals,
                    addedAt: Date.now(),
                    addedBy: 'auto-discovery',
                    hasFreeze: parsed.info.freezeAuthority !== null,
                    hasMintAuthority: parsed.info.mintAuthority !== null,
                    totalSupply: BigInt(parsed.info.supply)
                };
            }

            return null;
        } catch (error: any) {
            this.logger.error('Failed to fetch mint metadata', {
                mint: mintAddress,
                error: error.message
            });
            return null;
        }
    }

    /**
     * Refresh cached metadata
     */
    private async refreshMintMetadata(mintAddress: string): Promise<void> {
        const metadata = await this.fetchMintMetadata(mintAddress);
        if (metadata) {
            const existing = this.whitelistedMints.get(mintAddress);
            if (existing) {
                Object.assign(existing, metadata, {
                    lastVerified: Date.now(),
                    tier: existing.tier // Keep tier
                });
            }
        }
    }

    /**
     * Classify mint based on risk indicators
     */
    private classifyMint(metadata: MintMetadata): MintTier {
        // If has freeze authority or mint authority, it's suspicious
        if (metadata.hasFreeze || metadata.hasMintAuthority) {
            return MintTier.SUSPICIOUS;
        }

        // Check total supply
        if (metadata.totalSupply && metadata.totalSupply < BigInt(1000)) {
            return MintTier.SUSPICIOUS; // Very low supply
        }

        return MintTier.STANDARD;
    }

    /**
     * Export registry to JSON
     */
    exportRegistry(): { whitelist: MintMetadata[]; blacklist: string[] } {
        return {
            whitelist: Array.from(this.whitelistedMints.values()),
            blacklist: Array.from(this.blacklistedMints)
        };
    }

    /**
     * Import registry from JSON
     */
    importRegistry(data: { whitelist: MintMetadata[]; blacklist: string[] }): void {
        for (const metadata of data.whitelist) {
            this.whitelistedMints.set(metadata.mint, metadata);
        }

        for (const mint of data.blacklist) {
            this.blacklistedMints.add(mint);
        }

        this.logger.info('Registry imported', {
            whitelistCount: data.whitelist.length,
            blacklistCount: data.blacklist.length
        });
    }
}

/**
 * Default mainnet verified mints
 */
export const MAINNET_VERIFIED_MINTS = [
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC
    'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', // USDT
    'So11111111111111111111111111111111111111112',  // SOL (wrapped)
    '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs', // ETH (Wormhole)
    '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh', // BTC (Wormhole)
];

/**
 * Default devnet test mints
 */
export const DEVNET_TEST_MINTS = [
    '5z8s3k7mkmH1DKFPvjkVd8PxapEeYaPJjqQTJeUEN1i4', // Mock USDC
    'G5VWnnWRxVvuTqRCEQNNGEdRmS42hMTyh8DAN9MHecLn', // NVDAx
];
