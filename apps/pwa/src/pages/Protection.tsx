import { Card } from '../components/Card';
import { Button } from '../components/Button';
const settings = ['Screena alla okända nummer','Släpp igenom verifierade vårdkontakter','Blockera samtal med BankID-risk','Varna anhörig vid hög risk','Tyst blockering nattetid'];
export function Protection(){return <div className="page-grid"><Card className="hero-card"><p className="eyebrow">Skyddsnivå</p><h1>Hög trygghet, låg friktion</h1><p>ScamGuard agerar före samtalet når användaren. Målet är att stoppa risk utan att störa viktiga samtal.</p></Card><Card><h3>Regler</h3><div className="settings-list">{settings.map((s,i)=><label key={s} className="setting-row"><span>{s}</span><input type="checkbox" defaultChecked={i!==4}/></label>)}</div><Button>Spara inställningar</Button></Card></div>}
