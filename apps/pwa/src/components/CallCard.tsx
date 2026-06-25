import { Phone, ShieldCheck } from 'lucide-react';
import { outcomeLabels } from '../theme/tokens';
import { RiskBadge } from './RiskBadge';
import type { CallEvent } from '../types/domain';
export function CallCard({ call }: { call: CallEvent }) {
  return <article className="call-card">
    <div className="call-icon"><Phone size={18}/></div>
    <div className="call-main"><div className="call-top"><strong>{call.label}</strong><span>{call.time}</span></div><p>{call.summary}</p><div className="call-meta"><RiskBadge risk={call.risk}/><span><ShieldCheck size={14}/> {outcomeLabels[call.outcome]}</span></div></div>
  </article>;
}
