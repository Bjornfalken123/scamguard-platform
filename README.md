# ScamGuard Platform v0.9.0 — Reports Experience

Detta är nästa användarrelease ovanpå ScamGuard Core.

## Fokus
Rapporterna ska visa vad ScamGuard gjort i bakgrunden:

- screenade samtal
- stoppade bedrägeriförsök
- högriskmönster
- per-senior trygghetsstatus
- rekommendationer för anhörig

## Cloudflare settings

Build command:

```bash
npm install && npm run build
```

Deploy command:

```bash
npx wrangler deploy
```

Root directory: tomt.

Output directory: tomt.

## API

- `/api/health`
- `/api/core`
- `/api/reports`
- `/api/events`
- `/api/notifications`
- `/api/models`
