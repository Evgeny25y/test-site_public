"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, primaryCta } from "@/content/navigation";
import { profile } from "@/content/profile";
import { buttonClass } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg"
      }`}
    >
      <div
        className={`relative mx-auto flex w-full max-w-[72rem] items-center justify-between gap-3 px-5 transition-[height] duration-300 sm:px-8 lg:px-10 ${
          scrolled ? "h-14" : "h-16 lg:h-20"
        }`}
      >
        <Link
          href="/"
          aria-label={`${profile.brand}, на главную`}
          className="font-serif text-xl font-semibold tracking-[0.22em] text-primary"
        >
          {profile.brand}
        </Link>

        <nav aria-label="Основное меню" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-ink underline-offset-8 transition-colors hover:text-primary hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href={primaryCta.href} className={buttonClass("primary", "!px-4 !py-2 text-[0.95rem] sm:!px-5")}>
            <span className="sm:hidden">Консультация</span>
            <span className="hidden sm:inline">{primaryCta.label}</span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
