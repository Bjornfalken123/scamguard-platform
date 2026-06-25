import { Card, SectionTitle } from '../components/Card';

export function Family({ data }: { data: any }) {
  return <div className="pageGrid"><Card><SectionTitle title="Anhöriga" action="Lägg till" />{data.family.map((f: any) => <div className="personRow" key={f.name}><div className="avatar">{f.name[0]}</div><div><b>{f.name}</b><span>{f.phone}</span></div><em>{f.role}</em></div>)}</Card><Card><SectionTitle title="Varningsregler" /><p className="muted">Hög risk skickas alltid till primär anhörig. Medelrisk visas i historik och skickas som push.</p></Card></div>;
}
