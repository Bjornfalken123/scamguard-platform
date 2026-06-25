export function SystemStatus({ label, value, detail, tone = 'success' }: { label: string; value: string; detail: string; tone?: string }) {
  return <div className="systemStatus">
    <div className={`statusOrb ${tone}`}></div>
    <div>
      <span>{label}</span>
      <b>{value}</b>
      <small>{detail}</small>
    </div>
  </div>;
}
