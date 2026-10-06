import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { TelegramButton } from "@/components/contact/TelegramButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Контакты",
  description: "Как связаться с юристом Евгением Ротовым: Telegram и форма обращения. Москва и дистанционно.",
  path: "/contacts",
});

export default function ContactsPage() {
  const hasDirect = Boolean(profile.telegram || profile.phone || profile.email);

  return (
    <>
      <PageHeader
        title="Контакты"
        description={`${profile.city} · ${profile.workFormat}. Расскажите, что произошло, и я отвечу, как лучше разобраться в ситуации.`}
      />
      <Container className="grid gap-14 border-t border-line pb-24 pt-14 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:pb-32">
        <div className="space-y-6">
          {hasDirect ? (
            <ul className="space-y-4 text-lg">
              {profile.phone ? (
                <li>
                  <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary hover:underline">
                    {profile.phone}
                  </a>
                </li>
              ) : null}
              {profile.email ? (
                <li>
                  <a href={`mailto:${profile.email}`} className="break-all hover:text-primary hover:underline">
                    {profile.email}
                  </a>
                </li>
              ) : null}
            </ul>
          ) : null}
          <TelegramButton variant="primary" />
        </div>
        <ContactForm />
      </Container>
    </>
  );
}
