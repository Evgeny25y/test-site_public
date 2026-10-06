import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  /** Редакторский номер раздела: "01", "02" и т.д. */
  index?: string;
  children: ReactNode;
  description?: ReactNode;
  level?: 1 | 2;
  tone?: "default" | "dark";
}

export function SectionHeading({
  id,
  index,
  children,
  description,
  level = 2,
  tone = "default",
}: SectionHeadingProps) {
  const Tag = level === 1 ? "h1" : "h2";
  const muted = tone === "dark" ? "text-white/75" : "text-muted";
  return (
    <header className="max-w-3xl">
      {index ? (
        <p
          aria-hidden="true"
          className={`mb-5 font-serif text-base tabular-nums ${tone === "dark" ? "text-white/60" : "text-muted"}`}
        >
          {index}
        </p>
      ) : null}
      <Tag id={id} className="text-[clamp(1.75rem,1.2rem+2.4vw,3rem)]">
        {children}
      </Tag>
      {description ? <p className={`mt-5 max-w-[34rem] text-lg ${muted}`}>{description}</p> : null}
    </header>
  );
}
