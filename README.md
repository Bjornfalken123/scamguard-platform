# ScamGuard Platform — Core v1.0

Release: `v0.8.0`
Codename: `ScamGuard Core v1.0`

This release adds the internal foundation for the next phase of ScamGuard:

- Core version model
- Module registry
- Risk models
- Mock state
- Event engine mock
- Notification mock
- Mock API endpoints
- Cloudflare Worker serving the PWA

## Cloudflare settings

Root directory: empty

Build command:

```bash
npm install && npm run build
```

Deploy command:

```bash
npx wrangler deploy
```

Output directory: empty

## Test endpoints

- `/api/health`
- `/api/core`
- `/api/events`
- `/api/notifications`
- `/api/models`

## Product principle

ScamGuard is not just an app. ScamGuard is a background protection system. The PWA is the control panel.

Core exists so that UI modules can later use real APIs without being rewritten.

## Next release

Suggested next release: `Reports Experience`, built on top of Core.
