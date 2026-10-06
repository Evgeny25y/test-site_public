import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

const facts = [
  { value: `${profile.experienceYears} ЛЕТ`, label: "юридической практики" },
  { value: "МОСКВА", label: "очные консультации" },
  { value: "ОНЛАЙН", label: "дистанционная работа" },
  { value: "ФИЗЛИЦА + БИЗНЕС", label: "два направления практики" },
];

export function TrustBar() {
  return (
    <section aria-label="Коротко о практике" className="border-y border-line bg-wash">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.value}
              className={`py-8 pr-4 sm:py-10 ${index % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : ""} ${
                index >= 2 ? "border-t border-line lg:border-t-0" : ""
              } lg:border-l lg:pl-8 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <dt className="font-serif text-[clamp(1.25rem,1rem+1vw,1.75rem)] leading-tight tracking-[0.02em] text-primary">
                {fact.value}
              </dt>
              <dd className="mt-2 text-[0.95rem] text-muted">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
