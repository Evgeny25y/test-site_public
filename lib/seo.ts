import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const homeTitle = "Ротов Евгений Александрович - юрист по гражданским делам в Москве";
export const homeDescription =
  "Юридические консультации по гражданскому праву для частных лиц и бизнеса. Договоры, долги, недвижимость, имущественные и судебные споры. Москва и дистанционно.";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** Использовать заголовок как есть, без суффикса бренда. */
  absoluteTitle?: boolean;
  noindex?: boolean;
}

export function pageMetadata({ title, description, path, absoluteTitle, noindex }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${profile.brand}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: profile.brand,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
