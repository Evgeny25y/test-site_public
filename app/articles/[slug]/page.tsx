import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { articles, getArticle } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.description,
    path: `/articles/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <PageHeader title={article.title} description={article.description} breadcrumb={{ label: "Все публикации", href: "/articles" }} />
      <Container className="max-w-3xl space-y-5 border-t border-line pb-24 pt-12 text-lg lg:pb-32">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Container>
    </>
  );
}
