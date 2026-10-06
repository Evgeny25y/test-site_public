import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/content/faq";

export function FAQ({ index = "10" }: { index?: string }) {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <SectionHeading id="faq-title" index={index}>
          Частые вопросы
        </SectionHeading>
        <Accordion items={faq} />
      </div>
    </Section>
  );
}
