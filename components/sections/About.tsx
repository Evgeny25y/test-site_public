import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

interface AboutProps {
  index?: string;
  headingLevel?: 1 | 2;
}

export function About({ index = "08", headingLevel = 2 }: AboutProps) {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div>
          <SectionHeading id="about-title" index={index} level={headingLevel}>
            {profile.fullName}
          </SectionHeading>
          <div className="mt-8 max-w-[34rem] space-y-5 text-lg">
            <p>
              Юрист по гражданскому праву. {profile.experienceYears} лет юридической практики. {profile.education}.
            </p>
            <p>
              Работаю с частными лицами и бизнесом. Провожу очные консультации в Москве и дистанционные консультации.
            </p>
          </div>
        </div>

        <blockquote className="self-end border-l-2 border-primary pl-6 font-serif text-[clamp(1.25rem,1rem+1vw,1.75rem)] leading-snug text-primary">
          <p>
            «Для меня важно, чтобы клиент понимал не только что предлагается сделать, но и почему именно этот вариант
            имеет смысл.»
          </p>
        </blockquote>
      </div>
    </Section>
  );
}
