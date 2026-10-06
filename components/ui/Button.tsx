import type { ReactNode } from "react";
import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import type { AnalyticsEvent } from "@/lib/analytics";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "inverseOutline";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-sm px-6 py-3 text-base font-medium leading-tight transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-deep",
  secondary: "border border-primary text-primary hover:bg-primary hover:text-white",
  inverse: "bg-white text-primary hover:bg-wash",
  inverseOutline: "border border-white/60 text-white hover:bg-white/10",
};

export const buttonClass = (variant: ButtonVariant, className = "") =>
  `${base} ${variants[variant]} ${className}`;

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string>;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  event,
  eventParams,
  external = false,
  className,
}: ButtonProps) {
  const classes = buttonClass(variant, className);
  if (external) {
    return (
      <TrackedAnchor href={href} event={event} eventParams={eventParams} className={classes}>
        {children}
      </TrackedAnchor>
    );
  }
  return (
    <TrackedLink href={href} event={event} className={classes}>
      {children}
    </TrackedLink>
  );
}
