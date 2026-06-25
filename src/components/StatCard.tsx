export function StatCard({ label, value, tone = 'neutral' }: { label: string; value: string | number; tone?: string }) {
  return <div className={`statCard ${tone}`}><span>{label}</span><strong>{value}</strong></div>;
}
