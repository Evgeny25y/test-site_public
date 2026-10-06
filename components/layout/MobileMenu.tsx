"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, primaryCta } from "@/content/navigation";
import { buttonClass } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-primary"
      >
        <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <nav
        id="mobile-menu"
        aria-label="Мобильное меню"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg px-5 pb-6 pt-2 shadow-[0_12px_24px_-18px_rgba(22,22,22,0.35)] sm:px-8"
      >
        <ul>
          {mainNav.map((item) => (
            <li key={item.href} className="border-b border-line">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center font-serif text-xl text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={primaryCta.href}
          onClick={() => setOpen(false)}
          className={buttonClass("primary", "mt-6 w-full")}
        >
          {primaryCta.label}
        </Link>
      </nav>
    </div>
  );
}
