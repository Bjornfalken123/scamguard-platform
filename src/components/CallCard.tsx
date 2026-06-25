import { RiskBadge } from './RiskBadge';

export function CallCard({ call }: { call: any }) {
  return <article className="callCard">
    <div className="callIcon">☎</div>
    <div className="callBody"><b>{call.title}</b><span>{call.number}</span><small>{call.reason}</small></div>
    <div className="callMeta"><RiskBadge risk={call.risk} /><span>{call.time}</span></div>
  </article>;
}
