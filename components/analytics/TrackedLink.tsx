"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentProps } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type InternalProps = ComponentProps<typeof Link> & { event?: AnalyticsEvent };

export function TrackedLink({ event, onClick, ...rest }: InternalProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        if (event) track(event);
        onClick?.(e);
      }}
    />
  );
}

type ExternalProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string>;
};

export function TrackedAnchor({ event, eventParams, onClick, ...rest }: ExternalProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      onClick={(e) => {
        if (event) track(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
