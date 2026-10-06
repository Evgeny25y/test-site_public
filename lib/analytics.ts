export type AnalyticsEvent =
  | "hero_consultation_click"
  | "telegram_click"
  | "telegram_problem_click"
  | "problem_selected"
  | "problem_telegram_click"
  | "pricing_consultation_click"
  | "litigation_assessment_click"
  | "contact_submit";

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    ym?: (id: number, method: string, goal: string, params?: Params) => void;
    gtag?: (command: string, name: string, params?: Params) => void;
  }
}

export function track(event: AnalyticsEvent, params?: Params): void {
  if (typeof window === "undefined") return;

  const metrikaId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);
  if (metrikaId && typeof window.ym === "function") {
    window.ym(metrikaId, "reachGoal", event, params);
  }
  if (process.env.NEXT_PUBLIC_GA_ID && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
