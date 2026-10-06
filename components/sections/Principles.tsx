import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/content/principles";

export function Principles({ index = "09" }: { index?: string }) {
  return (
    <Section id="principles" labelledBy="principles-title" tone="wash">
      <SectionHeading id="principles-title" index={index}>
        Принципы работы
      </SectionHeading>

      <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {principles.map((item) => (
          <li key={item.title} className="border-t border-primary/40 pt-5">
            <h3 className="text-xl sm:text-2xl">{item.title}</h3>
            <p className="mt-3 max-w-md text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
