import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { casesEmptyText, publishedCases } from "@/content/cases";
import { CaseCard } from "./CaseCard";

interface CasesProps {
  index?: string;
  headingLevel?: 1 | 2;
  showAllLink?: boolean;
}

export function Cases({ index = "07", headingLevel = 2, showAllLink = true }: CasesProps) {
  const items = publishedCases();

  return (
    <Section id="cases" labelledBy="cases-title" tone="wash">
      <SectionHeading id="cases-title" index={index} level={headingLevel}>
        Практика
      </SectionHeading>

      {items.length === 0 ? (
        <p className="mt-12 max-w-2xl rounded-md border border-dashed border-primary/40 p-8 font-serif text-xl leading-snug text-primary sm:p-10">
          {casesEmptyText}
        </p>
      ) : (
        <>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
          {showAllLink ? (
            <p className="mt-8">
              <Link href="/cases" className="text-primary underline underline-offset-4">
                Вся практика
              </Link>
            </p>
          ) : null}
        </>
      )}
    </Section>
  );
}
