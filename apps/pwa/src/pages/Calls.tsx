import { calls } from '../mock/data';
import { Card } from '../components/Card';
import { CallCard } from '../components/CallCard';
export function Calls(){return <div className="page-grid"><Card className="hero-card"><p className="eyebrow">Samtal</p><h1>AI-screening i bakgrunden</h1><p>Här visas samtal som screenats, släppts igenom, blockerats eller skickat varning till anhöriga.</p></Card><Card><h3>Samtalshistorik</h3><div className="list">{calls.map(c=><CallCard key={c.id} call={c}/>)}</div></Card></div>}
