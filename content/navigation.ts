export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Услуги", href: "/services" },
  { label: "Практика", href: "/cases" },
  { label: "Обо мне", href: "/about" },
  { label: "Стоимость", href: "/prices" },
  { label: "FAQ", href: "/#faq" },
  { label: "Контакты", href: "/contacts" },
];

export const legalNav: NavItem[] = [
  { label: "Политика обработки персональных данных", href: "/privacy" },
  { label: "Согласие на обработку персональных данных", href: "/consent" },
];

export const primaryCta: NavItem = { label: "Получить консультацию", href: "/consultation" };
