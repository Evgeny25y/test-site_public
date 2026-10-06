import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { getCase, publishedCases } from "@/content/cases";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return publishedCases().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return pageMetadata({ title: item.title, description: item.problem, path: `/cases/${item.slug}` });
}

export default async function CaseDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader title={item.title} breadcrumb={{ label: "Вся практика", href: "/cases" }} />
      <Container className="max-w-3xl space-y-10 border-t border-line pb-24 pt-12 lg:pb-32">
        <div className="flex flex-wrap gap-2">
          <Badge>{item.category}</Badge>
          <Badge>{item.clientType}</Badge>
          {item.amount ? <Badge>{item.amount}</Badge> : null}
          {item.duration ? <Badge>{item.duration}</Badge> : null}
        </div>
        <section>
          <h2 className="text-2xl">Ситуация</h2>
          <p className="mt-3">{item.problem}</p>
        </section>
        <section>
          <h2 className="text-2xl">Что было сделано</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {item.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">Результат</h2>
          <p className="mt-3">{item.result}</p>
        </section>
      </Container>
    </>
  );
}
