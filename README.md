# ScamGuard Platform v0.7.0 — Family Experience

This release adds the first fuller family module. It follows the Product Bible principle that ScamGuard is a background protection system and the app is the control centre for family, settings and trust.

## What changed

- New Family Experience page with a more complete family dashboard
- Member detail view with role, priority, permissions and status
- Notification settings per relative
- Family event timeline connected to risk events
- Mocked add-relative flow with steps: contact details, role, invite
- Expanded family mock data
- Updated release metadata to v0.7.0

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
