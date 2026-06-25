import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from './layouts/AppShell';
import { Dashboard } from './pages/Dashboard';
import { Protection } from './pages/Protection';
import { Calls } from './pages/Calls';
import { Family } from './pages/Family';
import { Reports } from './pages/Reports';
import { Installation } from './pages/Installation';
import { Settings } from './pages/Settings';
import { Support } from './pages/Support';
import './styles.css';

function App(){
 const [page,setPage]=useState('dashboard');
 const pages: Record<string, React.ReactNode> = {
  dashboard:<Dashboard/>, protection:<Protection/>, calls:<Calls/>, family:<Family/>, reports:<Reports/>, installation:<Installation/>, settings:<Settings/>, support:<Support/>
 };
 return <AppShell page={page} setPage={setPage}>{pages[page] ?? <Dashboard/>}</AppShell>;
}

createRoot(document.getElementById('root')!).render(<App/>);
