export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  /** Абзацы текста. Для сложной разметки позже можно перейти на MDX. */
  content: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const articles: Article[] = [];

export const getArticle = (slug: string): Article | undefined =>
  articles.find((item) => item.slug === slug);
