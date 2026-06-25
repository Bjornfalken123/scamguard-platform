# ScamGuard Platform v1.1.1 — Simplicity Correction

This release corrects the product direction:

**ScamGuard is not an app people actively manage. ScamGuard is an automated protection engine. The app is only a calm control panel.**

## What changed

- Less emphasis on relatives as active decision-makers.
- More emphasis on the ScamGuard engine doing the work automatically.
- Cleaner navigation: Overview, Reports, Settings, Calls, Trust, Support.
- Relatives are now positioned as report receivers / backup, not the people responsible for protection.
- UI copy is calmer and simpler.

## Cloudflare

Use the same settings:

```text
Build command: npm install && npm run build
Deploy command: npx wrangler deploy
```

## Test commands used

```text
npm run build
node --check src/worker/index.js
npx wrangler deploy --dry-run
```
