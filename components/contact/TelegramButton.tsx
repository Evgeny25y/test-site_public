import type { ReactNode } from "react";
import { Button, buttonClass, type ButtonVariant } from "@/components/ui/Button";
import type { AnalyticsEvent } from "@/lib/analytics";
import { env } from "@/lib/env";
import { buildTelegramUrl } from "@/lib/telegram";

interface TelegramButtonProps {
  message?: string;
  variant?: ButtonVariant;
  children?: ReactNode;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string>;
  className?: string;
}

export function TelegramButton({
  message,
  variant = "secondary",
  children = "Написать в Telegram",
  event = "telegram_click",
  eventParams,
  className,
}: TelegramButtonProps) {
  if (!env.telegramUsername) {
    if (!env.isDev) return null;
    return (
      <span
        aria-disabled="true"
        title="Только в режиме разработки: задайте NEXT_PUBLIC_TELEGRAM_USERNAME в .env.local"
        className={buttonClass(variant, `cursor-not-allowed opacity-50 ${className ?? ""}`)}
      >
        {children} (Telegram не настроен)
      </span>
    );
  }

  return (
    <Button
      href={buildTelegramUrl(env.telegramUsername, message)}
      external
      variant={variant}
      event={event}
      eventParams={eventParams}
      className={className}
    >
      {children}
    </Button>
  );
}
