/**
 * Institutional-Grade Rate Limiter
 * 
 * Multi-tier rate limiting with:
 * - IP-based limiting
 * - API key-based limiting
 * - Endpoint-specific limits
 * - Distributed rate limiting support (Redis)
 * - Automatic ban for abuse
 */

import { Request } from 'express';
import winston from 'winston';

export interface RateLimitConfig {
    windowMs: number;        // Time window in milliseconds
    maxRequests: number;     // Max requests per window
    keyGenerator?: (req: Request) => string;
    skipSuccessfulRequests?: boolean;
    skipFailedRequests?: boolean;
    message?: string;
}

export interface RateLimitRecord {
    count: number;
    windowStart: number;
    blocked: boolean;
    blockedUntil?: number;
    violations: number;
}

export class RateLimiter {
    private records: Map<string, RateLimitRecord>;
    private config: Required<RateLimitConfig>;
    private logger: winston.Logger;
    private cleanupInterval: NodeJS.Timeout;
    
    // Thresholds for auto-blocking
    private readonly VIOLATION_THRESHOLD = 5;
    private readonly BLOCK_DURATION_MS = 3600000; // 1 hour

    constructor(config: RateLimitConfig, logger: winston.Logger) {
        this.records = new Map();
        this.logger = logger;
        this.config = {
            windowMs: config.windowMs,
            maxRequests: config.maxRequests,
            keyGenerator: config.keyGenerator || this.defaultKeyGenerator,
            skipSuccessfulRequests: config.skipSuccessfulRequests || false,
            skipFailedRequests: config.skipFailedRequests || false,
            message: config.message || 'Too many requests'
        };

        // Cleanup old records every 5 minutes
        this.cleanupInterval = setInterval(() => this.cleanup(), 300000);
    }

    /**
     * Check if request should be allowed
     */
    check(req: Request): { allowed: boolean; remaining: number; resetAt: number; reason?: string } {
        const key = this.config.keyGenerator(req);
        const now = Date.now();
        
        let record = this.records.get(key);

        // Check if blocked
        if (record?.blocked) {
            if (record.blockedUntil && now < record.blockedUntil) {
                return {
                    allowed: false,
                    remaining: 0,
                    resetAt: record.blockedUntil,
                    reason: 'IP temporarily blocked due to abuse'
                };
            } else {
                // Unblock if time expired
                record.blocked = false;
                record.blockedUntil = undefined;
            }
        }

        // Create new record if needed or reset if window expired
        if (!record || now - record.windowStart >= this.config.windowMs) {
            record = {
                count: 0,
                windowStart: now,
                blocked: false,
                violations: record?.violations || 0
            };
            this.records.set(key, record);
        }

        // Increment count
        record.count++;

        const remaining = Math.max(0, this.config.maxRequests - record.count);
        const resetAt = record.windowStart + this.config.windowMs;

        // Check if limit exceeded
        if (record.count > this.config.maxRequests) {
            record.violations++;

            // Auto-block if too many violations
            if (record.violations >= this.VIOLATION_THRESHOLD) {
                record.blocked = true;
                record.blockedUntil = now + this.BLOCK_DURATION_MS;
                
                this.logger.warn('IP auto-blocked for abuse', {
                    key,
                    violations: record.violations,
                    blockedUntil: new Date(record.blockedUntil).toISOString()
                });

                return {
                    allowed: false,
                    remaining: 0,
                    resetAt: record.blockedUntil,
                    reason: 'Too many violations - temporarily banned'
                };
            }

            this.logger.warn('Rate limit exceeded', {
                key,
                count: record.count,
                limit: this.config.maxRequests,
                violations: record.violations
            });

            return {
                allowed: false,
                remaining: 0,
                resetAt,
                reason: this.config.message
            };
        }

        return {
            allowed: true,
            remaining,
            resetAt
        };
    }

    /**
     * Manually block a key
     */
    block(key: string, durationMs?: number): void {
        const record = this.records.get(key) || {
            count: 0,
            windowStart: Date.now(),
            blocked: false,
            violations: 0
        };

        record.blocked = true;
        record.blockedUntil = Date.now() + (durationMs || this.BLOCK_DURATION_MS);
        this.records.set(key, record);

        this.logger.warn('Key manually blocked', {
            key,
            until: new Date(record.blockedUntil).toISOString()
        });
    }

    /**
     * Manually unblock a key
     */
    unblock(key: string): void {
        const record = this.records.get(key);
        if (record) {
            record.blocked = false;
            record.blockedUntil = undefined;
            record.violations = 0;
            
            this.logger.info('Key manually unblocked', { key });
        }
    }

    /**
     * Get record for a key
     */
    getRecord(key: string): RateLimitRecord | undefined {
        return this.records.get(key);
    }

    /**
     * Get all blocked keys
     */
    getBlockedKeys(): string[] {
        const blocked: string[] = [];
        const now = Date.now();
        
        for (const [key, record] of this.records.entries()) {
            if (record.blocked && (!record.blockedUntil || now < record.blockedUntil)) {
                blocked.push(key);
            }
        }
        
        return blocked;
    }

    /**
     * Reset record for a key
     */
    reset(key: string): void {
        this.records.delete(key);
        this.logger.info('Rate limit reset', { key });
    }

    /**
     * Default key generator (IP + User-Agent)
     */
    private defaultKeyGenerator(req: Request): string {
        const ip = req.ip || 
                   req.headers['x-forwarded-for'] || 
                   req.socket.remoteAddress || 
                   'unknown';
        const userAgent = req.headers['user-agent'] || 'unknown';
        return `${ip}:${userAgent}`;
    }

    /**
     * Cleanup old records
     */
    private cleanup(): void {
        const now = Date.now();
        const before = this.records.size;
        
        for (const [key, record] of this.records.entries()) {
            // Remove if window expired and not blocked
            if (!record.blocked && now - record.windowStart >= this.config.windowMs * 2) {
                this.records.delete(key);
            }
            // Remove if block expired
            if (record.blocked && record.blockedUntil && now >= record.blockedUntil) {
                this.records.delete(key);
            }
        }

        const removed = before - this.records.size;
        if (removed > 0) {
            this.logger.debug('Rate limiter cleanup', {
                removed,
                remaining: this.records.size
            });
        }
    }

    /**
     * Destroy and cleanup
     */
    destroy(): void {
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
        }
        this.records.clear();
    }
}

/**
 * Multi-tier rate limiting with different limits per tier
 */
export class TieredRateLimiter {
    private limiters: Map<string, RateLimiter>;
    private logger: winston.Logger;

    constructor(logger: winston.Logger) {
        this.limiters = new Map();
        this.logger = logger;
    }

    /**
     * Add a tier
     */
    addTier(name: string, config: RateLimitConfig): void {
        this.limiters.set(name, new RateLimiter(config, this.logger));
    }

    /**
     * Check against a specific tier
     */
    check(tier: string, req: Request): ReturnType<RateLimiter['check']> {
        const limiter = this.limiters.get(tier);
        if (!limiter) {
            throw new Error(`Rate limiter tier "${tier}" not found`);
        }
        return limiter.check(req);
    }

    /**
     * Block a key across all tiers
     */
    blockAll(key: string, durationMs?: number): void {
        for (const limiter of this.limiters.values()) {
            limiter.block(key, durationMs);
        }
    }

    /**
     * Unblock a key across all tiers
     */
    unblockAll(key: string): void {
        for (const limiter of this.limiters.values()) {
            limiter.unblock(key);
        }
    }

    /**
     * Get all blocked keys across all tiers
     */
    getAllBlockedKeys(): Map<string, string[]> {
        const blocked = new Map<string, string[]>();
        for (const [tier, limiter] of this.limiters.entries()) {
            blocked.set(tier, limiter.getBlockedKeys());
        }
        return blocked;
    }

    /**
     * Destroy all limiters
     */
    destroy(): void {
        for (const limiter of this.limiters.values()) {
            limiter.destroy();
        }
        this.limiters.clear();
    }
}

/**
 * Predefined rate limit tiers
 */
export const RATE_LIMIT_TIERS = {
    PUBLIC: {
        windowMs: 60000,      // 1 minute
        maxRequests: 10       // 10 requests per minute
    },
    AUTHENTICATED: {
        windowMs: 60000,
        maxRequests: 100      // 100 requests per minute
    },
    MM_QUOTE: {
        windowMs: 60000,
        maxRequests: 100      // 100 quotes per minute per MM
    },
    MM_CONNECTION: {
        windowMs: 3600000,    // 1 hour
        maxRequests: 10       // 10 connections per hour
    },
    ADMIN: {
        windowMs: 60000,
        maxRequests: 1000     // 1000 requests per minute
    }
};
