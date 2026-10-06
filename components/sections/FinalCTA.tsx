import { TelegramButton } from "@/components/contact/TelegramButton";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCTA() {
  return (
    <Section id="contact" labelledBy="final-cta-title" tone="dark">
      <SectionHeading
        id="final-cta-title"
        tone="dark"
        description="Не обязательно самостоятельно определять отрасль права или нужную юридическую услугу. Кратко опишите ситуацию - после этого можно определить возможные варианты действий."
      >
        Расскажите, что произошло
      </SectionHeading>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <TelegramButton variant="inverse" />
        <Button href="/consultation" variant="inverseOutline" event="hero_consultation_click">
          Получить консультацию
        </Button>
      </div>
    </Section>
  );
}
