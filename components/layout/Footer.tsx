import Link from "next/link";
import { legalNav, mainNav } from "@/content/navigation";
import { profile } from "@/content/profile";
import { env } from "@/lib/env";
import { buildTelegramUrl } from "@/lib/telegram";
import { Container } from "@/components/ui/Container";

const hasStickyBar = Boolean(env.telegramUsername) || env.isDev;

export function Footer() {
  const telegramUrl = profile.telegram ? buildTelegramUrl(profile.telegram) : "";
  const hasContacts = Boolean(telegramUrl || profile.phone || profile.email);

  return (
    <footer className={`border-t border-line bg-wash py-14 ${hasStickyBar ? "pb-28 lg:pb-14" : ""}`}>
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-[0.22em] text-primary">{profile.brand}</p>
            <p className="mt-4 text-ink">{profile.fullName}</p>
            <p className="text-muted">Юрист по гражданскому праву</p>
            <p className="text-muted">
              {profile.city} · {profile.workFormat}
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-8 items-center hover:text-primary hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {hasContacts ? (
            <address className="space-y-2 not-italic">
              {telegramUrl ? (
                <p>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-8 items-center hover:text-primary hover:underline"
                  >
                    Telegram
                  </a>
                </p>
              ) : null}
              {profile.phone ? (
                <p>
                  <a
                    href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex min-h-8 items-center hover:text-primary hover:underline"
                  >
                    {profile.phone}
                  </a>
                </p>
              ) : null}
              {profile.email ? (
                <p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-8 items-center break-all hover:text-primary hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
              ) : null}
            </address>
          ) : null}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-8 items-center text-sm text-muted hover:text-primary hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Информация на сайте носит общий информационный характер и сама по себе не является индивидуальной юридической
            консультацией.
          </p>
        </div>
      </Container>
    </footer>
  );
}
