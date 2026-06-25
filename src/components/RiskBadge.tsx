import { riskClass } from '../lib/risk';

export function RiskBadge({ risk }: { risk: string }) {
  return <span className={`riskBadge ${riskClass(risk)}`}>{risk}</span>;
}
