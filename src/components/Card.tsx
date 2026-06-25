import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function SectionTitle({ title, action }: { title: string; action?: string }) {
  return <div className="sectionTitle"><h2>{title}</h2>{action && <button>{action}</button>}</div>;
}
