import type { Metadata } from "next";
import { Cases } from "@/components/sections/Cases";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Практика",
  description: "Примеры из юридической практики с соблюдением конфиденциальности клиентов.",
  path: "/cases",
});

export default function CasesPage() {
  return <Cases index="" headingLevel={1} showAllLink={false} />;
}
