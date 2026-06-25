export interface Env {
  ASSETS: Fetcher;
}

const json = (data: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers: { 'content-type': 'application/json; charset=utf-8', ...(init.headers || {}) }
  });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return json({ ok: true, service: 'ScamGuard Platform', version: '0.6.0' });
    }

    if (url.pathname === '/api/dashboard') {
      return json({
        user: 'Ingrid',
        protection: 'active',
        screenedCalls: 128,
        blockedCalls: 18,
        warnings: 7,
        familyMembers: 3
      });
    }

    if (url.pathname === '/api/release') {
      return json({
        version: '0.6.0',
        codename: 'Calls Experience',
        purpose: 'Complete call history and AI decision review experience with mock data'
      });
    }

    return env.ASSETS.fetch(request);
  }
};
