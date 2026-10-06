import type { AnalyticsEvent } from "@/lib/analytics";

export interface PricingItem {
  id: string;
  title: string;
  description: string;
  /** Готовая строка цены. Если цены нет, показывается note. */
  price?: string;
  note?: string;
  cta: string;
  href: string;
  event: AnalyticsEvent;
}

export const pricing: PricingItem[] = [
  {
    id: "consultation",
    title: "Юридическая консультация",
    description: "до 60 минут",
    price: "5 000 ₽",
    cta: "Записаться",
    href: "/consultation",
    event: "pricing_consultation_click",
  },
  {
    id: "documents",
    title: "Консультация с изучением документов",
    description: "предварительный анализ документов + консультация",
    price: "от 7 000 ₽",
    cta: "Обсудить ситуацию",
    href: "/consultation",
    event: "pricing_consultation_click",
  },
  {
    id: "case",
    title: "Подготовка документов / ведение дела",
    description: "стоимость определяется после оценки ситуации",
    note: "по оценке",
    cta: "Получить оценку",
    href: "/consultation",
    event: "pricing_consultation_click",
  },
];

export const pricingNote =
  "Стоимость сложной работы зависит от обстоятельств дела, объема документов и необходимого объема юридической помощи.";
