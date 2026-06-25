import { Card, SectionTitle } from '../components/Card';
import { ToggleRow } from '../components/ToggleRow';

export function Settings({ data }: { data: any }) {
  return <div className="pageGrid"><Card><SectionTitle title="Profil" /><div className="personRow"><div className="avatar">{data.senior.name[0]}</div><div><b>{data.senior.name}</b><span>{data.senior.phone}</span></div></div></Card><Card><SectionTitle title="Notiser" /><ToggleRow label="Pushnotiser" /><ToggleRow label="SMS vid hög risk" /><ToggleRow label="Veckorapport" /></Card></div>;
}
