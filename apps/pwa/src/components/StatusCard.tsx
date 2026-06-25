import { ShieldCheck } from 'lucide-react';
import { Card } from './Card';
export function StatusCard(){ return <Card className="status-card"><div className="shield-pulse"><ShieldCheck size={34}/></div><div><p className="eyebrow">Skydd aktivt</p><h1>ScamGuard skyddar Anna</h1><p>Okända samtal screenas av AI innan de når fram. Anhöriga varnas vid hög risk.</p></div></Card> }
