import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { consentSections } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Согласие на обработку персональных данных",
  description: "Условия согласия на обработку персональных данных при отправке формы обращения.",
  path: "/consent",
  noindex: true,
});

export default function ConsentPage() {
  return <LegalPage title="Согласие на обработку персональных данных" sections={consentSections} />;
}
