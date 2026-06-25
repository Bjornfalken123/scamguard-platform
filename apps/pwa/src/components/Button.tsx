import type { ReactNode } from 'react';
export function Button({ children, variant='primary' }: { children: ReactNode; variant?: 'primary'|'secondary'|'ghost' }) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}
