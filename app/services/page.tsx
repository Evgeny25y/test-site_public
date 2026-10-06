import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Услуги",
  description:
    "Взыскание задолженности, договорные споры, недвижимость, возмещение ущерба, защита прав потребителей и юридическая помощь бизнесу.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Услуги"
        description="Гражданское право для частных лиц и бизнеса. Выберите направление, чтобы увидеть, с чем я помогаю."
      />
      <Container className="pb-24 lg:pb-32">
        <ServicesGrid />
      </Container>
    </>
  );
}
