export function ToggleRow({ label, desc, on = true }: { label: string; desc?: string; on?: boolean }) {
  return <div className="toggleRow"><div><b>{label}</b>{desc && <span>{desc}</span>}</div><i className={on ? 'switch on' : 'switch'} /></div>;
}
