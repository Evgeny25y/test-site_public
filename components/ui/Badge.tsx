import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-line bg-surface px-2.5 py-1 text-sm text-muted">
      {children}
    </span>
  );
}
