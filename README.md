# ScamGuard Platform v0.6.0 — Calls Experience

This release adds the first complete product module: **Calls Experience**.

## What changed

- Complete call history experience
- Search and filters
- Detailed AI decision view
- Timeline per call
- Short transcript preview
- Risk score and status logic
- Expanded mock dataset

## Cloudflare settings

Build command:

```bash
npm install && npm run build
```

Deploy command:

```bash
npx wrangler deploy
```

## API test routes

- `/api/health`
- `/api/release`
- `/api/dashboard`

## Important

This is still a mocked PWA. No real telephony, AI, user accounts or database connections are active yet.
