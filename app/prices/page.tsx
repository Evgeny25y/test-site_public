import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Pricing } from "@/components/sections/Pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Стоимость юридической консультации",
  description:
    "Консультация до 60 минут - 5 000 ₽, консультация с изучением документов - от 7 000 ₽. Стоимость ведения дела определяется после оценки ситуации.",
  path: "/prices",
});

export default function PricesPage() {
  return (
    <>
      <Pricing index="" headingLevel={1} />
      <FinalCTA />
    </>
  );
}
