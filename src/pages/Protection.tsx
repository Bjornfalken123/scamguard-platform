import { Card, SectionTitle } from '../components/Card';
import { ToggleRow } from '../components/ToggleRow';

export function Protection({ data }: { data: any }) {
  return <div className="pageGrid">
    <Card className="heroCard compact"><div className="shieldBig">✓</div><div><p className="eyebrow">Skyddsnivå</p><h2>{data.protection.level}</h2><p>Rekommenderat läge för de flesta seniorer.</p></div></Card>
    <Card><SectionTitle title="Skyddsinställningar" />
      <ToggleRow label="Screena alla okända samtal" desc="Okända nummer går till ScamGuard först." />
      <ToggleRow label="Blockera högrisk automatiskt" desc="Bedrägliga samtal kopplas inte fram." />
      <ToggleRow label="Skicka varning till anhöriga" desc="Primär anhörig får varning vid medel/hög risk." />
      <ToggleRow label="Tyst blockering" desc="Senioren störs inte av tydliga bedrägerier." />
    </Card>
    <Card><SectionTitle title="Vidarekoppling" />
      <div className="setupBox"><b>Status: aktiv</b><span>Okända samtal är mockat kopplade till ScamGuard före mobilen.</span><button className="secondaryButton">Visa installationsguide</button></div>
    </Card>
  </div>;
}
