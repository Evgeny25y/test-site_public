import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing, pricingNote } from "@/content/pricing";

interface PricingProps {
  index?: string;
  headingLevel?: 1 | 2;
}

export function Pricing({ index = "04", headingLevel = 2 }: PricingProps) {
  return (
    <Section id="pricing" labelledBy="pricing-title" tone="wash">
      <SectionHeading id="pricing-title" index={index} level={headingLevel}>
        Стоимость
      </SectionHeading>

      <ul className="mt-12 border-t border-primary/40">
        {pricing.map((item) => (
          <li
            key={item.id}
            className="grid gap-5 border-b border-line py-8 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-10"
          >
            <div>
              <h3 className="text-xl sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-muted">{item.description}</p>
            </div>
            {item.price ? (
              <p className="font-serif text-3xl text-primary md:min-w-36 md:text-right">{item.price}</p>
            ) : (
              <p className="text-muted md:min-w-36 md:text-right">{item.note}</p>
            )}
            <Button href={item.href} variant="secondary" event={item.event} className="md:min-w-48">
              {item.cta}
            </Button>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-muted">{pricingNote}</p>
    </Section>
  );
}
