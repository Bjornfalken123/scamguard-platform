export function QuickAction({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return <button className="quickAction">
    <span>{icon}</span>
    <b>{title}</b>
    <small>{subtitle}</small>
  </button>;
}
