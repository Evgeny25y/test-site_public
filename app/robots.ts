import type { MetadataRoute } from "next";
import { isSiteUrlConfigured, siteUrl } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  // Пока домен не задан, закрываем сайт от индексации, чтобы тестовый адрес не попал в поиск.
  if (!isSiteUrlConfigured) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
