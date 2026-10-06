import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { TelegramButton } from "@/components/contact/TelegramButton";
import { Consultation } from "@/components/sections/Consultation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Юридическая консультация",
  description:
    "Разбор ситуации, правовая оценка, документы, варианты действий и риски. Консультации по гражданскому праву в Москве и дистанционно.",
  path: "/consultation",
});

export default function ConsultationPage() {
  return (
    <>
      <Consultation index="" headingLevel={1} />
      <Section id="request" labelledBy="request-title" tone="wash">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div>
            <SectionHeading
              id="request-title"
              description="Кратко опишите, что произошло. Это нужно, чтобы подготовиться к разговору."
            >
              Описать ситуацию
            </SectionHeading>
            <div className="mt-8">
              <TelegramButton />
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
