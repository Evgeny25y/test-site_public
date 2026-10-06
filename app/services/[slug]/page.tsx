import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TelegramButton } from "@/components/contact/TelegramButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.summary, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.summary}
        breadcrumb={{ label: "Все услуги", href: "/services" }}
      />
      <Container className="grid gap-14 border-t border-line pb-24 pt-14 md:grid-cols-2 lg:gap-20 lg:pb-32">
        <section aria-labelledby="situations-title">
          <h2 id="situations-title" className="text-2xl">
            С чем обращаются
          </h2>
          <ul className="mt-6 border-t border-primary/40">
            {service.situations.map((item) => (
              <li key={item} className="border-b border-line py-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="review-title">
          <h2 id="review-title" className="text-2xl">
            Что разберем на консультации
          </h2>
          <ul className="mt-6 border-t border-primary/40">
            {service.review.map((item) => (
              <li key={item} className="border-b border-line py-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row md:col-span-2">
          <Button href="/consultation">Получить консультацию</Button>
          <TelegramButton />
        </div>
      </Container>
    </>
  );
}
