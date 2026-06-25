export function StatCard({ label, value, helper }: { label:string; value:string|number; helper?:string }) {
  return <div className="stat-card"><strong>{value}</strong><span>{label}</span>{helper && <small>{helper}</small>}</div>;
}
