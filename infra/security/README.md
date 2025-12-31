# OptionsFi Security Module

Institutional-grade security infrastructure for the OptionsFi protocol.

## Features

### 1. Mint Registry (Whitelist/Blacklist)
- Multi-tier classification (Verified, Trusted, Standard, Suspicious, Banned)
- Real-time on-chain metadata validation
- Automatic risk assessment
- Import/export functionality

### 2. Rate Limiting
- IP-based and API key-based limiting
- Multi-tier rate limits
- Automatic blocking for abuse
- Distributed architecture support

### 3. Data Validation
- Comprehensive input validation
- SQL injection prevention
- XSS prevention
- Command injection prevention
- Solana address validation

### 4. Security Monitoring
- Real-time threat detection
- Anomaly detection
- Attack pattern recognition
- Automated alerts
- Security metrics and dashboards

## Installation

```bash
npm install
```

## Usage

### Mint Registry

```typescript
import { MintRegistry, MintTier } from '@optionsfi/security';

const registry = new MintRegistry(connection, logger);

// Validate a mint
const result = await registry.validateMint(mintAddress);
if (result.valid) {
    console.log(`Mint is ${result.tier}`);
}

// Add to whitelist
registry.addMint(mintAddress, MintTier.VERIFIED, 'admin');

// Ban a mint
registry.banMint(mintAddress, 'Scam token', 'admin');
```

### Rate Limiting

```typescript
import { RateLimiter, RATE_LIMIT_TIERS } from '@optionsfi/security';

const limiter = new RateLimiter(RATE_LIMIT_TIERS.PUBLIC, logger);

// In Express middleware
app.use((req, res, next) => {
    const result = limiter.check(req);
    if (!result.allowed) {
        return res.status(429).json({ error: result.reason });
    }
    next();
});
```

### Data Validation

```typescript
import { DataValidator, SCHEMAS } from '@optionsfi/security';

const validator = new DataValidator(logger);

// Validate RFQ params
const result = validator.validateRFQParams(req.body);
if (!result.valid) {
    return res.status(400).json({ errors: result.errors });
}

// Use sanitized data
const sanitized = result.sanitized;
```

### Security Monitoring

```typescript
import { SecurityMonitor, ThreatLevel, ThreatType } from '@optionsfi/security';

const monitor = new SecurityMonitor(logger, alertConfig);

// Log security event
monitor.logEvent({
    type: ThreatType.INVALID_INPUT,
    level: ThreatLevel.MEDIUM,
    source: req.ip,
    details: { field: 'amount', value: amount },
    action: 'blocked'
});

// Get metrics
const metrics = monitor.getMetrics();
console.log(`Total events: ${metrics.totalEvents}`);
```

## Configuration

### Environment Variables

```bash
# Security settings
SECURITY_RATE_LIMIT_ENABLED=true
SECURITY_VALIDATION_STRICT=true
SECURITY_MONITORING_ENABLED=true

# Alert configuration
SECURITY_ALERT_WEBHOOK_URL=https://your-webhook.com
SECURITY_ALERT_MIN_LEVEL=high
```

## Architecture

```
infra/security/
├── mint-registry.ts    # Mint whitelist/blacklist system
├── rate-limiter.ts     # Rate limiting infrastructure
├── validator.ts        # Input validation & sanitization
├── monitoring.ts       # Security monitoring & alerts
├── index.ts           # Main exports
├── package.json       # Dependencies
└── README.md          # This file
```

## Security Best Practices

1. **Always validate inputs** before processing
2. **Use rate limiting** on all public endpoints
3. **Monitor security events** in real-time
4. **Keep whitelist updated** with verified mints
5. **Review blocked requests** regularly
6. **Set up alerts** for critical events
7. **Export audit logs** periodically

## Integration Examples

### Express Middleware

```typescript
import express from 'express';
import { RateLimiter, DataValidator, SecurityMonitor } from '@optionsfi/security';

const app = express();
const limiter = new RateLimiter(config, logger);
const validator = new DataValidator(logger);
const monitor = new SecurityMonitor(logger, alertConfig);

// Rate limiting middleware
app.use((req, res, next) => {
    const result = limiter.check(req);
    if (!result.allowed) {
        monitor.logEvent({
            type: ThreatType.RATE_LIMIT_EXCEEDED,
            level: ThreatLevel.MEDIUM,
            source: req.ip,
            details: { endpoint: req.path },
            action: 'blocked'
        });
        return res.status(429).json({ error: result.reason });
    }
    next();
});

// Validation middleware
app.post('/rfq', (req, res) => {
    const validation = validator.validateRFQParams(req.body);
    if (!validation.valid) {
        monitor.logEvent({
            type: ThreatType.INVALID_INPUT,
            level: ThreatLevel.LOW,
            source: req.ip,
            details: { errors: validation.errors },
            action: 'rejected'
        });
        return res.status(400).json({ errors: validation.errors });
    }
    // Process with validation.sanitized
});
```

## Maintenance

### Cleanup Old Data

```typescript
// Clean events older than 7 days
const deleted = monitor.clearEvents(Date.now() - 7 * 24 * 60 * 60 * 1000);
console.log(`Cleared ${deleted} old events`);
```

### Export Audit Trail

```typescript
// Export events for compliance
const events = monitor.exportEvents(startDate, endDate);
fs.writeFileSync('audit-trail.json', JSON.stringify(events, null, 2));
```

### Update Mint Registry

```typescript
// Import verified mints
const data = JSON.parse(fs.readFileSync('verified-mints.json', 'utf-8'));
registry.importRegistry(data);
```

## License

MIT
