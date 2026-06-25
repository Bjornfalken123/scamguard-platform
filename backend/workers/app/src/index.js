const routes = {
  '/api/health': () => json({ ok: true, app: 'ScamGuard Platform', version: '0.1.0-foundation' }),
  '/api/foundation': () => json({
    status: 'foundation-ready',
    modules: ['pwa', 'worker', 'design-system', 'mock-data', 'docs'],
    nextSprint: 'Design System + Dashboard v1'
  })
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (routes[url.pathname]) return routes[url.pathname]();
    if (url.pathname === '/manifest.webmanifest') return manifest();
    if (url.pathname === '/sw.js') return serviceWorker();
    return html(appShell());
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}

function html(body) {
  return new Response(body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}

function manifest() {
  return json({
    name: 'ScamGuard',
    short_name: 'ScamGuard',
    start_url: '/',
    display: 'standalone',
    background_color: '#071915',
    theme_color: '#0f766e',
    description: 'AI-baserat telefonskydd för seniorer och anhöriga.'
  });
}

function serviceWorker() {
  return new Response(`self.addEventListener('install', event => self.skipWaiting());`, {
    headers: { 'content-type': 'application/javascript; charset=utf-8' }
  });
}

function appShell() {
  return `<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#0f766e" />
  <link rel="manifest" href="/manifest.webmanifest" />
  <title>ScamGuard Platform</title>
  <style>
    :root{--bg:#071915;--panel:#0b211d;--panel2:#102d28;--text:#eefdf8;--muted:#9ec5bb;--line:#1d453e;--primary:#26d6a3;--primary2:#0f766e;--warn:#f6c453;--danger:#fb7185;--radius:24px;--shadow:0 24px 70px rgba(0,0,0,.35)}
    *{box-sizing:border-box} body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;background:radial-gradient(circle at top,#123b34 0,#071915 45%,#04100e 100%);color:var(--text)}
    .app{min-height:100dvh;max-width:1180px;margin:0 auto;padding:24px} .top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:28px}.brand{display:flex;align-items:center;gap:12px}.logo{width:44px;height:44px;border-radius:16px;background:linear-gradient(135deg,#26d6a3,#0f766e);display:grid;place-items:center;box-shadow:var(--shadow);font-size:24px}.brand h1{font-size:20px;margin:0}.brand p{font-size:13px;color:var(--muted);margin:2px 0 0}.pill{border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--muted);padding:10px 14px;border-radius:999px;font-size:13px}.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:20px}.card{background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03));border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:24px}.status{display:inline-flex;align-items:center;gap:8px;padding:9px 12px;border-radius:999px;background:rgba(38,214,163,.12);color:#b9ffee;border:1px solid rgba(38,214,163,.35);font-weight:700;font-size:13px}.dot{width:9px;height:9px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 8px rgba(38,214,163,.09)}h2{font-size:42px;line-height:1.02;margin:20px 0 12px;letter-spacing:-1.3px}.lead{font-size:18px;color:var(--muted);line-height:1.55;max-width:640px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:22px}.metric{background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:18px;padding:16px}.metric strong{font-size:28px;display:block}.metric span{color:var(--muted);font-size:13px}.phone{width:310px;max-width:100%;margin:0 auto;border:10px solid #06100e;border-radius:44px;background:#08201c;padding:16px;box-shadow:var(--shadow)}.phoneTop{height:22px;width:90px;border-radius:0 0 18px 18px;background:#06100e;margin:-16px auto 14px}.screenTitle{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.shield{font-size:42px}.small{font-size:12px;color:var(--muted)}.list{display:grid;gap:10px}.item{background:rgba(255,255,255,.05);border:1px solid var(--line);border-radius:16px;padding:13px;display:flex;gap:12px;align-items:center}.ico{width:38px;height:38px;border-radius:14px;background:rgba(38,214,163,.12);display:grid;place-items:center}.item b{font-size:14px}.item p{font-size:12px;color:var(--muted);margin:2px 0 0}.nav{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:20px}.nav a{color:var(--muted);text-decoration:none;text-align:center;border:1px solid var(--line);background:rgba(255,255,255,.03);padding:12px 10px;border-radius:16px;font-size:13px}.section{margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.section h3{margin:0 0 8px;font-size:17px}.section p{margin:0;color:var(--muted);line-height:1.45;font-size:14px}.footer{color:var(--muted);font-size:12px;text-align:center;margin:28px 0 8px}@media(max-width:820px){.app{padding:16px}.hero{grid-template-columns:1fr}.top{align-items:flex-start}.pill{display:none}h2{font-size:34px}.grid,.section{grid-template-columns:1fr}.nav{grid-template-columns:repeat(3,1fr)}}
  </style>
</head>
<body>
  <main class="app">
    <header class="top">
      <div class="brand"><div class="logo">🛡️</div><div><h1>ScamGuard</h1><p>Foundation v1 · PWA + Cloudflare Worker</p></div></div>
      <div class="pill">Redo för nästa sprint</div>
    </header>
    <section class="hero">
      <div class="card">
        <div class="status"><span class="dot"></span> Plattformen är aktiv</div>
        <h2>Grunden för ScamGuard är på plats.</h2>
        <p class="lead">Det här är den rena startpunkten för produkten: en mobil-first PWA, Cloudflare Worker, designstruktur, mockdata och dokumentationsmappar. Inga externa kopplingar ännu.</p>
        <div class="grid">
          <div class="metric"><strong>0</strong><span>externa integrationer</span></div>
          <div class="metric"><strong>5</strong><span>framtida huvudmoduler</span></div>
          <div class="metric"><strong>100%</strong><span>ren kodbas</span></div>
        </div>
        <nav class="nav">
          <a href="/">Hem</a><a href="/protection">Skydd</a><a href="/calls">Samtal</a><a href="/family">Anhöriga</a><a href="/reports">Rapporter</a><a href="/settings">Inställningar</a>
        </nav>
      </div>
      <aside class="card">
        <div class="phone"><div class="phoneTop"></div><div class="screenTitle"><div><b>Skydd aktivt</b><div class="small">Demo dashboard</div></div><div class="shield">🛡️</div></div><div class="list">
          <div class="item"><div class="ico">📞</div><div><b>Okända samtal screenas</b><p>Telefoniflödet byggs i kommande sprint.</p></div></div>
          <div class="item"><div class="ico">👨‍👩‍👧</div><div><b>Anhöriga får kontroll</b><p>Roller och notifieringar förbereds.</p></div></div>
          <div class="item"><div class="ico">🤖</div><div><b>AI-riskbedömning</b><p>Regelmotor och AI-adapter kommer senare.</p></div></div>
        </div></div>
      </aside>
    </section>
    <section class="section">
      <div class="card"><h3>Produkt</h3><p>Appen är en kontrollpanel för ett bakgrundsaktivt telefonskydd, inte en samtalsapp.</p></div>
      <div class="card"><h3>Teknik</h3><p>Cloudflare Worker serverar PWA:n och blir senare API-gateway för backend.</p></div>
      <div class="card"><h3>Nästa steg</h3><p>Design System v1: tokens, komponenter, navigation och realistisk dashboard.</p></div>
    </section>
    <div class="footer">ScamGuard Platform · Foundation v1 · /api/health</div>
  </main>
  <script>if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js').catch(()=>{});}</script>
</body>
</html>`;
}
