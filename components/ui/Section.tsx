import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  tone?: "default" | "wash" | "dark";
  className?: string;
  labelledBy?: string;
  bordered?: boolean;
}

const tones = {
  default: "",
  wash: "bg-wash",
  dark: "bg-primary text-white on-dark",
} as const;

export function Section({
  id,
  children,
  tone = "default",
  className = "",
  labelledBy,
  bordered = true,
}: SectionProps) {
  const border = bordered && tone === "default" ? "border-t border-line" : "";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-20 py-20 sm:py-24 lg:py-32 ${tones[tone]} ${border} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
