/**
 * Institutional-Grade Data Validation and Sanitization
 * 
 * Comprehensive input validation with:
 * - Type checking
 * - Range validation
 * - Format validation (addresses, amounts, etc.)
 * - SQL injection prevention
 * - XSS prevention
 * - Command injection prevention
 */

import { PublicKey } from '@solana/web3.js';
import validator from 'validator';
import winston from 'winston';

export interface ValidationRule {
    required?: boolean;
    type?: 'string' | 'number' | 'boolean' | 'object' | 'array';
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    enum?: any[];
    custom?: (value: any) => boolean;
    sanitize?: (value: any) => any;
}

export interface ValidationSchema {
    [key: string]: ValidationRule;
}

export interface ValidationError {
    field: string;
    message: string;
    value?: any;
}

export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
    sanitized?: any;
}

export class DataValidator {
    private logger: winston.Logger;

    constructor(logger: winston.Logger) {
        this.logger = logger;
    }

    /**
     * Validate data against schema
     */
    validate(data: any, schema: ValidationSchema): ValidationResult {
        const errors: ValidationError[] = [];
        const sanitized: any = {};

        for (const [field, rule] of Object.entries(schema)) {
            const value = data[field];

            // Check required
            if (rule.required && (value === undefined || value === null || value === '')) {
                errors.push({
                    field,
                    message: `Field '${field}' is required`,
                    value
                });
                continue;
            }

            // Skip validation if not required and value is missing
            if (!rule.required && (value === undefined || value === null)) {
                continue;
            }

            // Type checking
            if (rule.type && typeof value !== rule.type) {
                errors.push({
                    field,
                    message: `Field '${field}' must be of type ${rule.type}`,
                    value
                });
                continue;
            }

            // Range validation for numbers
            if (rule.type === 'number') {
                if (rule.min !== undefined && value < rule.min) {
                    errors.push({
                        field,
                        message: `Field '${field}' must be >= ${rule.min}`,
                        value
                    });
                    continue;
                }
                if (rule.max !== undefined && value > rule.max) {
                    errors.push({
                        field,
                        message: `Field '${field}' must be <= ${rule.max}`,
                        value
                    });
                    continue;
                }
            }

            // Length validation for strings
            if (rule.type === 'string') {
                if (rule.minLength !== undefined && value.length < rule.minLength) {
                    errors.push({
                        field,
                        message: `Field '${field}' must be at least ${rule.minLength} characters`,
                        value
                    });
                    continue;
                }
                if (rule.maxLength !== undefined && value.length > rule.maxLength) {
                    errors.push({
                        field,
                        message: `Field '${field}' must be at most ${rule.maxLength} characters`,
                        value
                    });
                    continue;
                }
            }

            // Pattern validation
            if (rule.pattern && !rule.pattern.test(String(value))) {
                errors.push({
                    field,
                    message: `Field '${field}' format is invalid`,
                    value
                });
                continue;
            }

            // Enum validation
            if (rule.enum && !rule.enum.includes(value)) {
                errors.push({
                    field,
                    message: `Field '${field}' must be one of: ${rule.enum.join(', ')}`,
                    value
                });
                continue;
            }

            // Custom validation
            if (rule.custom && !rule.custom(value)) {
                errors.push({
                    field,
                    message: `Field '${field}' failed custom validation`,
                    value
                });
                continue;
            }

            // Sanitize
            sanitized[field] = rule.sanitize ? rule.sanitize(value) : value;
        }

        if (errors.length > 0) {
            this.logger.warn('Validation failed', {
                errors,
                data: this.sanitizeForLog(data)
            });
        }

        return {
            valid: errors.length === 0,
            errors,
            sanitized: errors.length === 0 ? sanitized : undefined
        };
    }

    /**
     * Validate Solana address
     */
    validateSolanaAddress(address: string): boolean {
        try {
            new PublicKey(address);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Validate and sanitize RFQ parameters
     */
    validateRFQParams(params: any): ValidationResult {
        const schema: ValidationSchema = {
            asset: {
                required: true,
                type: 'string',
                minLength: 1,
                maxLength: 32,
                sanitize: (v) => validator.escape(v.trim())
            },
            underlying: {
                type: 'string',
                minLength: 1,
                maxLength: 32,
                sanitize: (v) => validator.escape(v.trim())
            },
            side: {
                required: true,
                type: 'string',
                enum: ['buy', 'sell']
            },
            optionType: {
                required: true,
                type: 'string',
                enum: ['call', 'put']
            },
            strike: {
                required: true,
                type: 'number',
                min: 0,
                max: 1000000
            },
            expiry: {
                required: true,
                type: 'number',
                min: Date.now() / 1000,
                max: Date.now() / 1000 + 365 * 24 * 60 * 60 // Max 1 year
            },
            size: {
                type: 'number',
                min: 0,
                max: 1000000000
            },
            quantity: {
                type: 'number',
                min: 0
            },
            vaultAddress: {
                required: true,
                type: 'string',
                custom: (v) => this.validateSolanaAddress(v)
            },
            spotPrice: {
                type: 'number',
                min: 0
            },
            premiumFloor: {
                type: 'number',
                min: 0
            },
            anonymous: {
                type: 'boolean'
            }
        };

        return this.validate(params, schema);
    }

    /**
     * Validate quote submission
     */
    validateQuote(quote: any): ValidationResult {
        const schema: ValidationSchema = {
            rfqId: {
                required: true,
                type: 'string',
                pattern: /^rfq_\d+_[a-z0-9]+$/
            },
            premium: {
                required: true,
                type: 'number',
                min: 0,
                max: 1000000000 // 1 billion micro-USDC
            },
            validUntil: {
                type: 'number',
                min: Date.now(),
                max: Date.now() + 3600000 // Max 1 hour validity
            }
        };

        return this.validate(quote, schema);
    }

    /**
     * Sanitize string for SQL (although we don't use SQL, good practice)
     */
    sanitizeSQL(input: string): string {
        return validator.escape(input)
            .replace(/'/g, "''")
            .replace(/;/g, '')
            .replace(/--/g, '');
    }

    /**
     * Sanitize HTML/XSS
     */
    sanitizeHTML(input: string): string {
        return validator.escape(input);
    }

    /**
     * Sanitize for shell command (prevent command injection)
     */
    sanitizeShellCommand(input: string): string {
        // Remove dangerous characters
        return input.replace(/[;&|`$(){}[\]<>]/g, '');
    }

    /**
     * Validate amount (for token transfers)
     */
    validateAmount(amount: string | number | bigint): boolean {
        try {
            const num = typeof amount === 'bigint' ? amount : BigInt(amount);
            return num >= BigInt(0) && num <= BigInt(Number.MAX_SAFE_INTEGER) * BigInt(1000000);
        } catch {
            return false;
        }
    }

    /**
     * Sanitize data for logging (remove sensitive info)
     */
    private sanitizeForLog(data: any): any {
        const sensitive = ['privateKey', 'apiKey', 'password', 'secret', 'token'];
        const sanitized = { ...data };

        for (const key of Object.keys(sanitized)) {
            if (sensitive.some(s => key.toLowerCase().includes(s))) {
                sanitized[key] = '[REDACTED]';
            }
        }

        return sanitized;
    }
}

/**
 * Common validation patterns
 */
export const VALIDATION_PATTERNS = {
    SOLANA_ADDRESS: /^[1-9A-HJ-NP-Za-km-z]{32,44}$/,
    ASSET_ID: /^[A-Za-z0-9_-]{1,32}$/,
    RFQ_ID: /^rfq_\d+_[a-z0-9]+$/,
    QUOTE_ID: /^quote_\d+_[a-z0-9]+$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    API_KEY: /^[A-Za-z0-9_-]{32,128}$/
};

/**
 * Predefined validation schemas
 */
export const SCHEMAS = {
    RFQ_PARAMS: {
        asset: {
            required: true,
            type: 'string' as const,
            pattern: VALIDATION_PATTERNS.ASSET_ID
        },
        strike: {
            required: true,
            type: 'number' as const,
            min: 0
        },
        expiry: {
            required: true,
            type: 'number' as const,
            min: 0
        },
        vaultAddress: {
            required: true,
            type: 'string' as const,
            pattern: VALIDATION_PATTERNS.SOLANA_ADDRESS
        }
    },
    VAULT_DEPOSIT: {
        amount: {
            required: true,
            type: 'number' as const,
            min: 1
        },
        userTokenAccount: {
            required: true,
            type: 'string' as const,
            pattern: VALIDATION_PATTERNS.SOLANA_ADDRESS
        }
    }
};
