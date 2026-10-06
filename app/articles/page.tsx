import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Публикации",
  description: "Материалы по гражданскому праву: долги, договоры, подготовка к консультации.",
  path: "/articles",
});

const dateFormat = new Intl.DateTimeFormat("ru-RU", { dateStyle: "long", timeZone: "UTC" });

export default function ArticlesPage() {
  return (
    <>
      <PageHeader title="Публикации" />
      <Container className="pb-24 lg:pb-32">
        {articles.length === 0 ? (
          <p className="max-w-2xl rounded-md border border-dashed border-primary/40 p-8 font-serif text-xl leading-snug text-primary sm:p-10">
            Здесь появятся материалы по гражданскому праву.
          </p>
        ) : (
          <ul className="border-t border-primary/40">
            {articles.map((article) => (
              <li key={article.slug} className="border-b border-line py-8">
                <p className="text-sm text-muted">
                  {article.category} · <time dateTime={article.publishedAt}>{dateFormat.format(new Date(article.publishedAt))}</time>
                </p>
                <h2 className="mt-2 text-2xl">
                  <Link href={`/articles/${article.slug}`} className="hover:text-primary hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-2xl text-muted">{article.description}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
