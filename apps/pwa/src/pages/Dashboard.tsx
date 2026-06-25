import { family, calls, person, stats } from '../mock/data';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CallCard } from '../components/CallCard';
import { StatCard } from '../components/StatCard';
import { StatusCard } from '../components/StatusCard';

export function Dashboard(){
 return <div className="page-grid">
  <StatusCard />
  <div className="stats-grid">
    <StatCard label="Screenade samtal" value={stats.screenedThisWeek} helper="senaste 7 dagarna" />
    <StatCard label="Blockerade risker" value={stats.blockedThisWeek} helper="hög eller kritisk risk" />
    <StatCard label="Skyddspoäng" value={`${stats.protectionScore}%`} helper="mycket starkt" />
  </div>
  <Card><div className="section-head"><div><p className="eyebrow">Snabbåtgärder</p><h3>Hantera skyddet</h3></div></div><div className="actions"><Button>Simulera okänt samtal</Button><Button variant="secondary">Lägg till anhörig</Button><Button variant="ghost">Se installation</Button></div></Card>
  <Card><div className="section-head"><div><p className="eyebrow">Senaste händelser</p><h3>Samtal som ScamGuard hanterat</h3></div><span className="pill">{person.plan}</span></div><div className="list">{calls.slice(0,3).map(c=><CallCard key={c.id} call={c}/>)}</div></Card>
  <Card><div className="section-head"><div><p className="eyebrow">Familj</p><h3>Anhöriga kopplade</h3></div><span className="pill success">{family.length} personer</span></div><div className="family-row">{family.map(f=><div className="family-mini" key={f.id}><div className="avatar">{f.name[0]}</div><div><strong>{f.name}</strong><span>{f.relation} · {f.alerts?'varningar på':'varningar av'}</span></div></div>)}</div></Card>
 </div>
}
