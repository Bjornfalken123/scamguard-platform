import { Card, SectionTitle } from '../components/Card';
import { StatCard } from '../components/StatCard';
import { CallCard } from '../components/CallCard';

type PageId = 'dashboard' | 'protection' | 'calls' | 'family' | 'reports' | 'settings';

export function Dashboard({ data, go }: { data: any; go: (page: PageId) => void }) {
  return <div className="pageGrid">
    <Card className="heroCard">
      <div className="shieldBig">✓</div>
      <div><p className="eyebrow">Skydd aktivt för {data.senior.name}</p><h2>Okända samtal screenas automatiskt.</h2><p>ScamGuard arbetar i bakgrunden och varnar anhöriga vid misstänkt bedrägeri.</p></div>
      <button className="primaryButton" onClick={() => go('protection')}>Hantera skydd</button>
    </Card>
    <div className="statsGrid">
      <StatCard label="Screenade samtal" value={data.metrics.screened} />
      <StatCard label="Blockerade" value={data.metrics.blocked} tone="danger" />
      <StatCard label="Varningar" value={data.metrics.warnings} tone="warning" />
      <StatCard label="Tillåtna" value={data.metrics.allowed} tone="success" />
    </div>
    <Card>
      <SectionTitle title="Senaste händelser" action="Visa alla" />
      <div className="stack">{data.calls.slice(0,3).map((c: any) => <CallCard key={c.id} call={c} />)}</div>
    </Card>
    <Card>
      <SectionTitle title="Familjestatus" />
      <div className="familyStrip">{data.family.map((f: any) => <div key={f.name}><div className="avatar">{f.name[0]}</div><b>{f.name}</b><span>{f.role}</span></div>)}</div>
    </Card>
    <Card className="recommendCard">
      <SectionTitle title="Rekommenderade nästa steg" />
      {data.recommendations.map((r: string) => <p key={r}>✓ {r}</p>)}
    </Card>
  </div>;
}
