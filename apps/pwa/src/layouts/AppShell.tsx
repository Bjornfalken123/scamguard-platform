import type { ReactNode } from 'react';
import { BarChart3, Bell, HeartHandshake, Home, PhoneCall, Settings, Shield, Wrench } from 'lucide-react';
const nav = [
  ['dashboard','Hem',Home],['protection','Skydd',Shield],['calls','Samtal',PhoneCall],['family','Anhöriga',HeartHandshake],['reports','Rapporter',BarChart3],['installation','Installation',Wrench],['settings','Inställningar',Settings]
] as const;
export function AppShell({ page, setPage, children }: { page:string; setPage:(p:string)=>void; children:ReactNode }){
 return <div className="app-shell"><aside className="sidebar"><div className="brand"><div className="brand-mark">SG</div><div><strong>ScamGuard</strong><span>AI telefonskydd</span></div></div><nav>{nav.map(([id,label,Icon])=><button key={id} onClick={()=>setPage(id)} className={page===id?'active':''}><Icon size={18}/>{label}</button>)}</nav></aside><main className="main"><header className="topbar"><div><span className="eyebrow">Platform v0.2</span><h2>Kontrollpanel</h2></div><button className="icon-btn"><Bell size={19}/></button></header>{children}</main><nav className="bottom-nav">{nav.slice(0,5).map(([id,label,Icon])=><button key={id} onClick={()=>setPage(id)} className={page===id?'active':''}><Icon size={19}/><span>{label}</span></button>)}</nav></div>
}
