import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacySections } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Политика обработки персональных данных",
  description: "Какие персональные данные обрабатываются на сайте и в каких целях.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return <LegalPage title="Политика обработки персональных данных" sections={privacySections} />;
}
