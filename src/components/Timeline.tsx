export function Timeline({ items }: { items: any[] }) {
  return <div className="timeline">
    {items.map((item, index) => (
      <div className="timelineItem" key={`${item.title}-${index}`}>
        <div className={`timelineDot ${item.tone || ''}`}></div>
        <div>
          <b>{item.title}</b>
          <span>{item.description}</span>
        </div>
      </div>
    ))}
  </div>;
}
