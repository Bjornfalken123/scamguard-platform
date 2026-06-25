export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    if (url.pathname === '/api/health') {
      return Response.json({ ok: true, product: 'ScamGuard', version: '0.2.0', release: 'Design Foundation' });
    }
    if (url.pathname === '/api/foundation') {
      return Response.json({ status: 'stable', frontend: 'React + Vite + TypeScript', externalIntegrations: false });
    }
    return env.ASSETS.fetch(request);
  }
};
