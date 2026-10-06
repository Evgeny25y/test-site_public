import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { draftNotice, operator, type LegalSection } from "@/content/legal";

interface LegalPageProps {
  title: string;
  sections: LegalSection[];
}

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <>
      <PageHeader title={title} description={draftNotice} />
      <Container className="max-w-3xl space-y-10 border-t border-line pb-24 pt-12 lg:pb-32">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        {operator.details ? (
          <section>
            <h2 className="text-2xl">Реквизиты оператора</h2>
            <p className="mt-3">{operator.details}</p>
          </section>
        ) : null}
        {operator.retentionPeriod ? (
          <section>
            <h2 className="text-2xl">Срок хранения</h2>
            <p className="mt-3">{operator.retentionPeriod}</p>
          </section>
        ) : null}
      </Container>
    </>
  );
}
