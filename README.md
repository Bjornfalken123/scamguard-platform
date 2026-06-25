# ScamGuard Platform v0.3.1 — Dashboard Experience

This release moves ScamGuard from architecture/demo into a user-facing product experience.

## Added
- Complete mobile-first Dashboard experience
- Protection page with simulated forwarding setup
- Calls history page
- Family page
- Reports page
- Mock API endpoints:
  - `/api/health`
  - `/api/dashboard`
  - `/api/calls`
  - `/api/family`
- PWA manifest
- Improved product copy and Swedish UI

## Cloudflare settings
Root directory: empty
Build command: `npm install && npm run build`
Deploy command: `npx wrangler deploy`
Output directory: empty

## Notes
No external services are connected. Telephony, AI and notifications are simulated.
