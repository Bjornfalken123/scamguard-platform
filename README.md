# ScamGuard Platform v1.0.0 — Control Center

Detta är en användarrelease ovanpå ScamGuard Core.

## Fokus
Control Center är platsen där användaren styr ScamGuard:

- senior-läge vs anhörig-läge
- skyddsnivåer
- telefonvidarekoppling
- AI-inställningar
- anhörigkedja
- integritet/GDPR
- abonnemang och support, mockat

## Product line
Det följer Product Bible: ScamGuard är ett skyddssystem som arbetar i bakgrunden. Appen är kontrollpanelen.

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
- `/api/control-center`
- `/api/reports`
- `/api/events`
- `/api/notifications`
- `/api/models`
