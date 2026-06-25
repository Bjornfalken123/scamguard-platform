const json = (data, init = {}) => new Response(JSON.stringify(data, null, 2), { ...init, headers: { 'content-type': 'application/json; charset=utf-8', ...(init.headers || {}) } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/health') return json({ ok: true, service: 'scamguard-platform', version: '0.3.0' });
    if (url.pathname === '/api/foundation') return json({ release: 'v0.3.0', name: 'Design Foundation', status: 'ready', externalIntegrations: false });
    if (url.pathname === '/api/mock/dashboard') return json({
      profile: { name: 'Björn', protectedPerson: 'Ingrid Svensson', status: 'Skydd aktivt', protectionScore: 94 },
      metrics: { screenedCalls: 18, blockedRisks: 3, familyMembers: 4, aiResponse: '2.4s' }
    });
    return env.ASSETS.fetch(request);
  }
};
