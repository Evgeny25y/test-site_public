import { TelegramButton } from "@/components/contact/TelegramButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { HeroPortrait } from "./HeroPortrait";

const credentials = [
  `${profile.experienceYears} лет юридической практики`,
  profile.education,
  `${profile.city} · ${profile.workFormat}`,
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <p className="rise font-serif text-lg text-ink">
              {profile.fullName}
              <span className="block text-base text-muted">
                {profile.profession} · {profile.specialization}
              </span>
            </p>

            <h1
              id="hero-title"
              style={{ "--delay": "80ms" } as React.CSSProperties}
              className="rise mt-6 text-[clamp(2rem,1.2rem+3.6vw,4.25rem)] leading-[1.06] tracking-[-0.02em] text-primary"
            >
              Решаю гражданско-правовые вопросы для людей и бизнеса
            </h1>

            <p style={{ "--delay": "160ms" } as React.CSSProperties} className="rise mt-7 max-w-[34rem] text-lg text-ink/85">
              Договоры, долги, недвижимость, имущество, претензии и судебные споры. Разберусь в вашей ситуации, оценю
              юридические перспективы и риски и предложу понятный план действий.
            </p>

            <div style={{ "--delay": "240ms" } as React.CSSProperties} className="rise mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" event="hero_consultation_click">
                Получить консультацию
              </Button>
              <TelegramButton />
            </div>

            <ul
              style={{ "--delay": "320ms" } as React.CSSProperties}
              className="rise mt-12 grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-6"
            >
              {credentials.map((item) => (
                <li key={item} className="text-[0.95rem] leading-snug text-muted sm:border-l sm:border-line sm:pl-4 first:sm:border-l-0 first:sm:pl-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ "--delay": "200ms" } as React.CSSProperties} className="rise">
            <HeroPortrait />
          </div>
        </div>

        <figure className="mt-16 border-t border-line pt-10 lg:mt-24 lg:pt-14">
          <blockquote className="max-w-4xl font-serif text-[clamp(1.5rem,1rem+2.2vw,2.75rem)] leading-[1.2] tracking-[-0.01em] text-primary">
            <p>«{profile.slogan}»</p>
          </blockquote>
        </figure>
      </Container>
    </section>
  );
}
