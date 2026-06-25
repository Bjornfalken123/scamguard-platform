import { Card, SectionTitle } from '../components/Card';
import { StatCard } from '../components/StatCard';
import { CallCard } from '../components/CallCard';
import { SystemStatus } from '../components/SystemStatus';
import { QuickAction } from '../components/QuickAction';
import { Timeline } from '../components/Timeline';

type PageId = 'dashboard' | 'protection' | 'calls' | 'family' | 'reports' | 'settings';

export function Dashboard({ data, go }: { data: any; go: (page: PageId) => void }) {
  return <div className="dashboardExperience">
    <Card className="heroCard dashboardHero">
      <div className="shieldBig">✓</div>
      <div>
        <p className="eyebrow">Skydd aktivt för {data.senior.name}</p>
        <h2>ScamGuard skyddar i bakgrunden.</h2>
        <p>Okända samtal screenas innan de når fram. Anhöriga informeras bara när något verkligen kräver uppmärksamhet.</p>
      </div>
      <button className="primaryButton" onClick={() => go('protection')}>Hantera skydd</button>
    </Card>

    <section className="todayStrip">
      <div>
        <span>Idag</span>
        <strong>{data.today.screened}</strong>
        <small>screenade samtal</small>
      </div>
      <div>
        <span>Högrisk</span>
        <strong>{data.today.blocked}</strong>
        <small>blockerade idag</small>
      </div>
      <div>
        <span>Medelrisk</span>
        <strong>{data.today.medium}</strong>
        <small>krävde bedömning</small>
      </div>
      <div>
        <span>Status</span>
        <strong>På</strong>
        <small>kontrollerad {data.today.lastCheck}</small>
      </div>
    </section>

    <div className="dashboardGrid">
      <Card className="spanTwo">
        <SectionTitle title="Systemstatus" />
        <div className="systemGrid">
          {data.system.map((s: any) => <SystemStatus key={s.label} {...s} />)}
        </div>
      </Card>

      <Card>
        <SectionTitle title="Snabbåtgärder" />
        <div className="quickGrid">
          <QuickAction icon="☎" title="Testa AI" subtitle="Simulera samtal" />
          <QuickAction icon="◉" title="Skyddsnivå" subtitle={data.protection.level} />
          <QuickAction icon="♣" title="Anhöriga" subtitle="3 personer" />
          <QuickAction icon="▥" title="Rapport" subtitle="30 dagar" />
        </div>
      </Card>

      <Card className="spanTwo">
        <SectionTitle title="Senaste samtal" action="Visa alla" />
        <div className="stack">{data.calls.slice(0,3).map((c: any) => <CallCard key={c.id} call={c} />)}</div>
      </Card>

      <Card>
        <SectionTitle title="Senaste aktivitet" />
        <Timeline items={data.activity} />
      </Card>

      <div className="statsGrid spanTwo">
        <StatCard label="Screenade samtal" value={data.metrics.screened} />
        <StatCard label="Blockerade" value={data.metrics.blocked} tone="danger" />
        <StatCard label="Varningar" value={data.metrics.warnings} tone="warning" />
        <StatCard label="Tillåtna" value={data.metrics.allowed} tone="success" />
      </div>

      <Card>
        <SectionTitle title="Anhöriga" action="Hantera" />
        <div className="familyMiniList">
          {data.family.map((f: any) => <div key={f.name} className="familyMiniRow"><div className="avatar">{f.name[0]}</div><div><b>{f.name}</b><span>{f.role} · {f.status}</span></div></div>)}
        </div>
      </Card>

      <Card className="recommendCard spanTwo">
        <SectionTitle title="Rekommenderade nästa steg" />
        <div className="recommendList">
          {data.recommendations.map((r: string) => <p key={r}>✓ {r}</p>)}
        </div>
      </Card>
    </div>
  </div>;
}
