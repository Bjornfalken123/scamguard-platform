import { Card, SectionTitle } from '../components/Card';
import { StatCard } from '../components/StatCard';

export function Reports({ data }: { data: any }) {
  return <div className="pageGrid"><Card><SectionTitle title="Senaste 30 dagarna" /><div className="statsGrid"><StatCard label="Screenade" value={data.metrics.screened} /><StatCard label="Blockerade" value={data.metrics.blocked} tone="danger" /><StatCard label="Varningar" value={data.metrics.warnings} tone="warning" /><StatCard label="Familjenotiser" value={data.metrics.familyAlerts} /></div></Card><Card><SectionTitle title="Vanligaste risktyper" /><div className="bars"><p><span>Falsk bank</span><i style={{width:'82%'}} /></p><p><span>Telefonförsäljning</span><i style={{width:'48%'}} /></p><p><span>Vishing</span><i style={{width:'36%'}} /></p></div></Card></div>;
}
