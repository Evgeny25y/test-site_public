import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { publishedCases } from "@/content/cases";
import { services } from "@/content/services";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services", "/cases", "/articles", "/about", "/prices", "/consultation", "/contacts"];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, priority: 0.6 })),
    ...publishedCases().map((item) => ({ url: `${siteUrl}/cases/${item.slug}`, priority: 0.5 })),
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: article.updatedAt ?? article.publishedAt,
      priority: 0.5,
    })),
  ];
}
