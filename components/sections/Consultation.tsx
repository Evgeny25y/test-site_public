import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { consultationResult, consultationSteps } from "@/content/process";

interface ConsultationProps {
  index?: string;
  headingLevel?: 1 | 2;
}

export function Consultation({ index = "03", headingLevel = 2 }: ConsultationProps) {
  return (
    <Section id="consultation" labelledBy="consultation-title">
      <SectionHeading
        id="consultation-title"
        index={index}
        level={headingLevel}
        description="Не просто ответ на вопрос, а разбор ситуации и возможных вариантов действий."
      >
        Юридическая консультация
      </SectionHeading>

      <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {consultationSteps.map((step, i) => (
          <li key={step.title} className="border-t border-primary/40 pt-5">
            <span aria-hidden="true" className="font-serif text-sm tabular-nums text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl">{step.title}</h3>
            <p className="mt-2 max-w-[22rem] text-muted">{step.text}</p>
          </li>
        ))}
      </ol>

      <p className="mt-14 max-w-3xl border-l-2 border-primary pl-6 font-serif text-[clamp(1.25rem,1rem+1vw,1.75rem)] leading-snug text-primary">
        {consultationResult}
      </p>
    </Section>
  );
}
