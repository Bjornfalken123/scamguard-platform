import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import { mockData } from './data/mockData';
import { Dashboard } from './pages/Dashboard';
import { Protection } from './pages/Protection';
import { Calls } from './pages/Calls';
import { Family } from './pages/Family';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

type PageId = 'dashboard' | 'protection' | 'calls' | 'family' | 'reports' | 'settings';

const nav: { id: PageId; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Hem', icon: '⌂' },
  { id: 'protection', label: 'Skydd', icon: '◉' },
  { id: 'calls', label: 'Samtal', icon: '☎' },
  { id: 'family', label: 'Anhöriga', icon: '♣' },
  { id: 'reports', label: 'Rapporter', icon: '▥' },
  { id: 'settings', label: 'Inställningar', icon: '⚙' }
];

function App() {
  const [page, setPage] = useState<PageId>('dashboard');
  const content = useMemo(() => {
    switch (page) {
      case 'dashboard': return <Dashboard data={mockData} go={setPage} />;
      case 'protection': return <Protection data={mockData} />;
      case 'calls': return <Calls data={mockData} />;
      case 'family': return <Family data={mockData} />;
      case 'reports': return <Reports data={mockData} />;
      case 'settings': return <Settings data={mockData} />;
    }
  }, [page]);

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">✓</div>
          <div><strong>ScamGuard</strong><span>AI-samtalsskydd</span></div>
        </div>
        <nav className="sideNav">
          {nav.map(item => (
            <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => setPage(item.id)}>
              <span>{item.icon}</span>{item.label}
            </button>
          ))}
        </nav>
        <div className="sidebarCard"><b>Release v0.7.0</b><span>Ren plattform, redo för nästa sprint.</span></div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div><small>ScamGuard Platform</small><h1>{nav.find(n => n.id === page)?.label}</h1></div>
          <div className="statusPill"><span></span> Skydd aktivt</div>
        </header>
        {content}
      </main>
      <nav className="bottomNav">
        {nav.slice(0, 5).map(item => (
          <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => setPage(item.id)}>
            <span>{item.icon}</span>{item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
