import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-md border border-line bg-surface p-6 sm:p-8 ${className}`}>{children}</div>
  );
}
