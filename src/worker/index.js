import { APP_HTML } from '../generated/app-html.js';
import { VERSION } from '../core/version.js';
import { modules, riskLevels } from '../core/models.js';
import { mockState } from '../mock/data.js';

const json = (data, status = 200) => new Response(JSON.stringify(data, null, 2), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
});

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/api/health') return json({ ok: true, service: 'scamguard-platform', version: VERSION.release });
    if (url.pathname === '/api/core') return json({ version: VERSION, modules, state: mockState.metrics });
    if (url.pathname === '/api/events') return json({ events: mockState.events });
    if (url.pathname === '/api/notifications') return json({ notifications: mockState.notifications });
    if (url.pathname === '/api/models') return json({ riskLevels, modules });
    if (url.pathname.startsWith('/api/')) return json({ error: 'Not found', path: url.pathname }, 404);
    return new Response(APP_HTML, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
  }
};
