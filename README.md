# ScamGuard Platform v0.2 — Design Foundation

Detta är första riktiga produktplattformen för ScamGuard PWA.

## Vad ingår

- React + Vite + TypeScript
- Cloudflare Worker + Assets
- Mobilanpassad PWA-liknande appyta
- Design tokens och komponentstruktur
- Mockdata för person, anhöriga, samtal och statistik
- Fungerande navigation: Hem, Skydd, Samtal, Anhöriga, Rapporter, Installation, Inställningar
- API-endpoints: `/api/health` och `/api/foundation`

## Cloudflare Workers Builds

Använd dessa settings:

```text
Root directory: tomt
Build command: npm install && npm run build
Deploy command: npx wrangler deploy
Output directory: tomt
```

Inga KV, D1, R2, secrets eller externa integrationer behövs i denna version.

## Versionsmål

v0.2 är en design- och arkitekturgrund. Den är inte kopplad till riktig telefoni eller AI ännu.

Nästa sprint: Dashboard v1 med fler tillstånd, interaktioner och tydligare samtalsflöden.
