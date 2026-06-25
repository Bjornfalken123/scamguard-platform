import { riskLabels } from '../theme/tokens';
import type { RiskLevel } from '../types/domain';
export function RiskBadge({ risk }: { risk: RiskLevel }) {
  return <span className={`risk risk-${risk}`}>{riskLabels[risk]}</span>;
}
