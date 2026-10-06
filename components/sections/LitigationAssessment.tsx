import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { litigationFactors } from "@/content/process";

export function LitigationAssessment() {
  return (
    <Section id="litigation" labelledBy="litigation-title" tone="dark">
      <SectionHeading
        id="litigation-title"
        tone="dark"
        description="До начала судебного спора важно понять не только, можно ли обратиться в суд, но и насколько это целесообразно."
      >
        Суд - не всегда лучший вариант
      </SectionHeading>

      <ul className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {litigationFactors.map((factor) => (
          <li key={factor.title} className="border-t border-white/30 pt-5">
            <h3 className="text-lg">{factor.title}</h3>
            <p className="mt-2 text-[0.95rem] text-white/75">{factor.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 flex flex-col gap-8 border-t border-white/30 pt-12 lg:flex-row lg:items-end lg:justify-between">
        <p className="font-serif text-[clamp(2rem,1.2rem+3.4vw,4rem)] leading-[1.05] tracking-[-0.02em]">
          Стоит ли идти в суд?
        </p>
        <Button href="/consultation" variant="inverse" event="litigation_assessment_click" className="lg:shrink-0">
          Оценить перспективы дела
        </Button>
      </div>
    </Section>
  );
}
