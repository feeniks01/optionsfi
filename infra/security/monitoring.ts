/**
 * Institutional-Grade Security Monitoring System
 * 
 * Real-time threat detection and monitoring with:
 * - Anomaly detection
 * - Attack pattern recognition
 * - Automated alerts
 * - Audit trail
 * - Security metrics
 */

import winston from 'winston';
import { Request } from 'express';

export enum ThreatLevel {
    INFO = 'info',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}

export enum ThreatType {
    RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
    INVALID_INPUT = 'invalid_input',
    UNAUTHORIZED_ACCESS = 'unauthorized_access',
    SUSPICIOUS_PATTERN = 'suspicious_pattern',
    BLACKLISTED_MINT = 'blacklisted_mint',
    SQL_INJECTION_ATTEMPT = 'sql_injection_attempt',
    XSS_ATTEMPT = 'xss_attempt',
    COMMAND_INJECTION_ATTEMPT = 'command_injection_attempt',
    BRUTE_FORCE_ATTEMPT = 'brute_force_attempt',
    UNUSUAL_TRANSACTION = 'unusual_transaction',
    LARGE_TRANSACTION = 'large_transaction'
}

export interface SecurityEvent {
    id: string;
    timestamp: number;
    type: ThreatType;
    level: ThreatLevel;
    source: string; // IP or identifier
    details: Record<string, any>;
    action?: string; // Action taken (blocked, allowed, flagged)
    userId?: string;
    endpoint?: string;
}

export interface SecurityMetrics {
    totalEvents: number;
    eventsByType: Record<ThreatType, number>;
    eventsByLevel: Record<ThreatLevel, number>;
    blockedRequests: number;
    uniqueSources: number;
    topThreats: Array<{ type: ThreatType; count: number }>;
    topSources: Array<{ source: string; count: number }>;
}

export interface AlertConfig {
    enabled: boolean;
    minLevel: ThreatLevel;
    webhookUrl?: string;
    emailRecipients?: string[];
    slackWebhook?: string;
}

export class SecurityMonitor {
    private logger: winston.Logger;
    private events: SecurityEvent[] = [];
    private maxEvents: number = 10000;
    private alertConfig: AlertConfig;
    private sourceEventCounts: Map<string, number> = new Map();
    private patternDetection: Map<string, number[]> = new Map(); // source -> timestamps

    // Anomaly detection thresholds
    private readonly BURST_THRESHOLD = 10; // 10 requests in burst window
    private readonly BURST_WINDOW_MS = 5000; // 5 seconds
    private readonly DAILY_THRESHOLD = 1000; // 1000 requests per day per source

    constructor(logger: winston.Logger, alertConfig: AlertConfig) {
        this.logger = logger;
        this.alertConfig = alertConfig;
    }

    /**
     * Log a security event
     */
    logEvent(event: Omit<SecurityEvent, 'id' | 'timestamp'>): void {
        const fullEvent: SecurityEvent = {
            ...event,
            id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: Date.now()
        };

        // Add to buffer
        this.events.push(fullEvent);
        if (this.events.length > this.maxEvents) {
            this.events.shift(); // Remove oldest
        }

        // Track source
        const count = (this.sourceEventCounts.get(event.source) || 0) + 1;
        this.sourceEventCounts.set(event.source, count);

        // Log to winston
        const logLevel = this.getThreatLogLevel(event.level);
        this.logger[logLevel]('Security event', {
            eventId: fullEvent.id,
            type: event.type,
            level: event.level,
            source: event.source,
            action: event.action,
            details: this.sanitizeDetails(event.details)
        });

        // Check for anomalies
        this.detectAnomalies(fullEvent);

        // Send alerts if needed
        if (this.shouldAlert(event.level)) {
            this.sendAlert(fullEvent);
        }
    }

    /**
     * Log request for pattern analysis
     */
    logRequest(req: Request, blocked: boolean = false): void {
        const source = this.getRequestSource(req);
        
        // Track request timing for burst detection
        let timestamps = this.patternDetection.get(source) || [];
        timestamps.push(Date.now());
        
        // Keep only recent timestamps
        const cutoff = Date.now() - this.BURST_WINDOW_MS;
        timestamps = timestamps.filter(t => t > cutoff);
        this.patternDetection.set(source, timestamps);

        // Check for burst
        if (timestamps.length > this.BURST_THRESHOLD) {
            this.logEvent({
                type: ThreatType.SUSPICIOUS_PATTERN,
                level: ThreatLevel.MEDIUM,
                source,
                details: {
                    pattern: 'request_burst',
                    requestCount: timestamps.length,
                    windowMs: this.BURST_WINDOW_MS,
                    endpoint: req.path,
                    method: req.method
                },
                action: 'flagged',
                endpoint: req.path
            });
        }
    }

    /**
     * Detect anomalies in events
     */
    private detectAnomalies(event: SecurityEvent): void {
        const source = event.source;
        const count = this.sourceEventCounts.get(source) || 0;

        // Check for excessive events from single source
        if (count > 100) {
            this.logEvent({
                type: ThreatType.BRUTE_FORCE_ATTEMPT,
                level: ThreatLevel.HIGH,
                source,
                details: {
                    totalEvents: count,
                    pattern: 'excessive_events',
                    originalEventType: event.type
                },
                action: 'flagged'
            });
        }

        // Check for SQL injection patterns
        if (event.details.input) {
            const input = String(event.details.input).toLowerCase();
            if (this.detectSQLInjection(input)) {
                this.logEvent({
                    type: ThreatType.SQL_INJECTION_ATTEMPT,
                    level: ThreatLevel.HIGH,
                    source,
                    details: {
                        input: event.details.input,
                        endpoint: event.endpoint
                    },
                    action: 'blocked',
                    endpoint: event.endpoint
                });
            }
        }

        // Check for XSS patterns
        if (event.details.input) {
            const input = String(event.details.input);
            if (this.detectXSS(input)) {
                this.logEvent({
                    type: ThreatType.XSS_ATTEMPT,
                    level: ThreatLevel.HIGH,
                    source,
                    details: {
                        input: event.details.input,
                        endpoint: event.endpoint
                    },
                    action: 'blocked',
                    endpoint: event.endpoint
                });
            }
        }
    }

    /**
     * Detect SQL injection patterns
     */
    private detectSQLInjection(input: string): boolean {
        const patterns = [
            /(\bunion\b.*\bselect\b)/i,
            /(\bselect\b.*\bfrom\b)/i,
            /(;\s*drop\b)/i,
            /(;\s*delete\b)/i,
            /(\bor\b\s+\d+\s*=\s*\d+)/i,
            /(';\s*--)/i,
            /(\bexec\b|\bexecute\b)/i
        ];

        return patterns.some(pattern => pattern.test(input));
    }

    /**
     * Detect XSS patterns
     */
    private detectXSS(input: string): boolean {
        const patterns = [
            /<script[^>]*>.*?<\/script>/gi,
            /javascript:/gi,
            /on\w+\s*=/gi, // onclick, onerror, etc.
            /<iframe/gi,
            /<embed/gi,
            /<object/gi
        ];

        return patterns.some(pattern => pattern.test(input));
    }

    /**
     * Get security metrics
     */
    getMetrics(): SecurityMetrics {
        const eventsByType: Record<string, number> = {};
        const eventsByLevel: Record<string, number> = {};
        const sourceCounts: Map<string, number> = new Map();

        for (const event of this.events) {
            // Count by type
            eventsByType[event.type] = (eventsByType[event.type] || 0) + 1;
            
            // Count by level
            eventsByLevel[event.level] = (eventsByLevel[event.level] || 0) + 1;
            
            // Count by source
            sourceCounts.set(event.source, (sourceCounts.get(event.source) || 0) + 1);
        }

        // Get top threats
        const topThreats = Object.entries(eventsByType)
            .map(([type, count]) => ({ type: type as ThreatType, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        // Get top sources
        const topSources = Array.from(sourceCounts.entries())
            .map(([source, count]) => ({ source, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        return {
            totalEvents: this.events.length,
            eventsByType: eventsByType as Record<ThreatType, number>,
            eventsByLevel: eventsByLevel as Record<ThreatLevel, number>,
            blockedRequests: this.events.filter(e => e.action === 'blocked').length,
            uniqueSources: sourceCounts.size,
            topThreats,
            topSources
        };
    }

    /**
     * Get recent events
     */
    getRecentEvents(limit: number = 100, minLevel?: ThreatLevel): SecurityEvent[] {
        let events = this.events;
        
        if (minLevel) {
            const levelOrder = [ThreatLevel.INFO, ThreatLevel.LOW, ThreatLevel.MEDIUM, ThreatLevel.HIGH, ThreatLevel.CRITICAL];
            const minIndex = levelOrder.indexOf(minLevel);
            events = events.filter(e => levelOrder.indexOf(e.level) >= minIndex);
        }

        return events.slice(-limit).reverse();
    }

    /**
     * Get events for a specific source
     */
    getEventsBySource(source: string, limit: number = 100): SecurityEvent[] {
        return this.events
            .filter(e => e.source === source)
            .slice(-limit)
            .reverse();
    }

    /**
     * Check if source is suspicious
     */
    isSuspicious(source: string): boolean {
        const count = this.sourceEventCounts.get(source) || 0;
        const recentEvents = this.getEventsBySource(source, 10);
        
        // High event count
        if (count > 50) return true;
        
        // Multiple high-severity events
        const highSeverityCount = recentEvents.filter(
            e => e.level === ThreatLevel.HIGH || e.level === ThreatLevel.CRITICAL
        ).length;
        if (highSeverityCount > 3) return true;
        
        // Multiple blocked events
        const blockedCount = recentEvents.filter(e => e.action === 'blocked').length;
        if (blockedCount > 5) return true;
        
        return false;
    }

    /**
     * Send alert for critical events
     */
    private async sendAlert(event: SecurityEvent): Promise<void> {
        if (!this.alertConfig.enabled) return;

        const alertMessage = {
            title: `🚨 Security Alert: ${event.type}`,
            level: event.level,
            timestamp: new Date(event.timestamp).toISOString(),
            source: event.source,
            details: event.details,
            action: event.action
        };

        // Log alert
        this.logger.warn('Security alert triggered', alertMessage);

        // TODO: Implement webhook/email/Slack notifications
        // For now, just log
        if (this.alertConfig.webhookUrl) {
            // await fetch(this.alertConfig.webhookUrl, { ... });
        }
    }

    /**
     * Check if event level should trigger alert
     */
    private shouldAlert(level: ThreatLevel): boolean {
        if (!this.alertConfig.enabled) return false;

        const levelOrder = [ThreatLevel.INFO, ThreatLevel.LOW, ThreatLevel.MEDIUM, ThreatLevel.HIGH, ThreatLevel.CRITICAL];
        const eventLevel = levelOrder.indexOf(level);
        const minLevel = levelOrder.indexOf(this.alertConfig.minLevel);

        return eventLevel >= minLevel;
    }

    /**
     * Get winston log level for threat level
     */
    private getThreatLogLevel(level: ThreatLevel): string {
        switch (level) {
            case ThreatLevel.CRITICAL:
            case ThreatLevel.HIGH:
                return 'error';
            case ThreatLevel.MEDIUM:
                return 'warn';
            default:
                return 'info';
        }
    }

    /**
     * Get request source identifier
     */
    private getRequestSource(req: Request): string {
        return req.ip || 
               req.headers['x-forwarded-for'] as string || 
               req.socket.remoteAddress || 
               'unknown';
    }

    /**
     * Sanitize details for logging (remove sensitive data)
     */
    private sanitizeDetails(details: Record<string, any>): Record<string, any> {
        const sensitive = ['password', 'privateKey', 'apiKey', 'secret', 'token'];
        const sanitized = { ...details };

        for (const key of Object.keys(sanitized)) {
            if (sensitive.some(s => key.toLowerCase().includes(s))) {
                sanitized[key] = '[REDACTED]';
            }
        }

        return sanitized;
    }

    /**
     * Export events to JSON
     */
    exportEvents(startTime?: number, endTime?: number): SecurityEvent[] {
        let events = this.events;

        if (startTime) {
            events = events.filter(e => e.timestamp >= startTime);
        }
        if (endTime) {
            events = events.filter(e => e.timestamp <= endTime);
        }

        return events;
    }

    /**
     * Clear old events
     */
    clearEvents(olderThan?: number): number {
        const before = this.events.length;
        
        if (olderThan) {
            this.events = this.events.filter(e => e.timestamp >= olderThan);
        } else {
            this.events = [];
            this.sourceEventCounts.clear();
            this.patternDetection.clear();
        }

        return before - this.events.length;
    }
}

/**
 * Security dashboard data aggregator
 */
export class SecurityDashboard {
    private monitor: SecurityMonitor;

    constructor(monitor: SecurityMonitor) {
        this.monitor = monitor;
    }

    /**
     * Get dashboard overview
     */
    getOverview(): any {
        const metrics = this.monitor.getMetrics();
        const recentEvents = this.monitor.getRecentEvents(20, ThreatLevel.MEDIUM);

        return {
            summary: {
                total: metrics.totalEvents,
                blocked: metrics.blockedRequests,
                uniqueSources: metrics.uniqueSources,
                criticalCount: metrics.eventsByLevel[ThreatLevel.CRITICAL] || 0,
                highCount: metrics.eventsByLevel[ThreatLevel.HIGH] || 0
            },
            topThreats: metrics.topThreats,
            topSources: metrics.topSources,
            recentAlerts: recentEvents.filter(e => 
                e.level === ThreatLevel.HIGH || e.level === ThreatLevel.CRITICAL
            ),
            timeline: this.getEventTimeline()
        };
    }

    /**
     * Get event timeline (events per hour for last 24 hours)
     */
    private getEventTimeline(): Array<{ hour: string; count: number }> {
        const now = Date.now();
        const timeline: Array<{ hour: string; count: number }> = [];

        for (let i = 23; i >= 0; i--) {
            const hourStart = now - (i * 3600000);
            const hourEnd = hourStart + 3600000;
            const hour = new Date(hourStart).toISOString().substr(0, 13) + ':00';
            
            const count = this.monitor.getRecentEvents(10000)
                .filter(e => e.timestamp >= hourStart && e.timestamp < hourEnd)
                .length;

            timeline.push({ hour, count });
        }

        return timeline;
    }
}
