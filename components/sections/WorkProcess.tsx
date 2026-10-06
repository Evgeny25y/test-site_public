import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workSteps } from "@/content/process";

export function WorkProcess({ index = "05" }: { index?: string }) {
  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeading id="process-title" index={index}>
        Как проходит работа
      </SectionHeading>

      <ol className="mt-14 lg:grid lg:grid-cols-6 lg:gap-6">
        {workSteps.map((step, i) => (
          <li
            key={step.title}
            className="relative border-l border-primary/40 pb-10 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-8"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary lg:-top-[5px] lg:left-0"
            />
            <span aria-hidden="true" className="font-serif text-sm tabular-nums text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 text-xl">{step.title}</h3>
            <p className="mt-2 max-w-xs text-[0.95rem] text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
