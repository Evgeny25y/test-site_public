export interface Case {
  id: string;
  slug: string;
  title: string;
  category: string;
  clientType: "Частное лицо" | "Бизнес";
  problem: string;
  amount?: string;
  actions: string[];
  result: string;
  duration?: string;
  published: boolean;
}

// Кейсы публикуются только с согласия клиента и без раскрытия конфиденциальных данных.
export const cases: Case[] = [];

export const publishedCases = (): Case[] => cases.filter((item) => item.published);

export const getCase = (slug: string): Case | undefined =>
  publishedCases().find((item) => item.slug === slug);

export const casesEmptyText =
  "Здесь будут опубликованы отдельные примеры из практики с соблюдением конфиденциальности клиентов.";
