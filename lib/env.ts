// NEXT_PUBLIC_* переменные нужно читать именно так (по полному имени), иначе Next.js не подставит их в клиентский код.
const clean = (value: string | undefined): string => value?.trim() ?? "";

const normalizeTelegram = (value: string): string =>
  value
    .replace(/^https?:\/\/(www\.)?(t\.me|telegram\.me)\//i, "")
    .replace(/^@/, "")
    .replace(/[/?#].*$/, "");

export const env = {
  siteUrl: clean(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/+$/, ""),
  telegramUsername: normalizeTelegram(clean(process.env.NEXT_PUBLIC_TELEGRAM_USERNAME)),
  phone: clean(process.env.NEXT_PUBLIC_PHONE),
  email: clean(process.env.NEXT_PUBLIC_EMAIL),
  yandexMetrikaId: clean(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID),
  gaId: clean(process.env.NEXT_PUBLIC_GA_ID),
  isDev: process.env.NODE_ENV === "development",
} as const;

export const DEV_SITE_URL = "http://localhost:3000";

export const siteUrl = env.siteUrl || DEV_SITE_URL;
export const isSiteUrlConfigured = env.siteUrl.length > 0;
