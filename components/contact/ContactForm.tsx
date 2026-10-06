"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { submitContact, type ContactResult } from "@/lib/contact-service";
import { env } from "@/lib/env";

const field =
  "mt-2 block w-full rounded-sm border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-primary";

type FormState = { phase: "idle" } | { phase: "sending" } | { phase: "done"; result: ContactResult };

export function ContactForm() {
  const id = useId();
  const [state, setState] = useState<FormState>({ phase: "idle" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState({ phase: "sending" });

    const result = await submitContact({
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      message: String(data.get("message") ?? ""),
      email: String(data.get("email") ?? "") || undefined,
      consent: data.get("consent") === "on",
    });

    if (result.status === "sent") {
      track("contact_submit");
      form.reset();
    }
    setState({ phase: "done", result });
  };

  const sending = state.phase === "sending";
  const result = state.phase === "done" ? state.result : null;

  return (
    <form onSubmit={onSubmit} className="space-y-6" aria-describedby={`${id}-status`}>
      <div>
        <label htmlFor={`${id}-name`} className="text-base text-ink">
          Имя
        </label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={120} className={field} />
      </div>

      <div>
        <label htmlFor={`${id}-contact`} className="text-base text-ink">
          Телефон или Telegram
        </label>
        <input id={`${id}-contact`} name="contact" type="text" autoComplete="tel" required maxLength={160} className={field} />
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="text-base text-ink">
          Краткое описание ситуации
        </label>
        <textarea id={`${id}-message`} name="message" rows={5} required maxLength={4000} className={field} />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="text-base text-ink">
          Email <span className="text-muted">(необязательно)</span>
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength={160} className={field} />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={`${id}-consent`}
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-primary"
        />
        <label htmlFor={`${id}-consent`} className="text-[0.95rem] text-muted">
          Даю{" "}
          <Link href="/consent" className="text-primary underline underline-offset-2">
            согласие на обработку персональных данных
          </Link>{" "}
          и ознакомлен(а) с{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            политикой обработки
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary-deep disabled:opacity-60"
      >
        {sending ? "Отправляю..." : "Отправить"}
      </button>

      <div id={`${id}-status`} role="status" aria-live="polite" className="min-h-6 text-[0.95rem]">
        {result?.status === "sent" ? (
          <p className="text-primary">Обращение принято. Я свяжусь с вами по указанному контакту.</p>
        ) : null}
        {result?.status === "not_configured" ? (
          <p className="text-ink">
            {env.isDev
              ? "Отправка не подключена: нужно настроить приём заявок (переменная CONTACT_WEBHOOK_URL, см. README). Сообщение не отправлено."
              : "Форма временно не принимает обращения, сообщение не отправлено. Попробуйте связаться другим способом."}
          </p>
        ) : null}
        {result?.status === "invalid" ? <p className="text-ink">{result.message}</p> : null}
        {result?.status === "error" ? (
          <p className="text-ink">Не удалось отправить сообщение. Попробуйте ещё раз чуть позже.</p>
        ) : null}
      </div>
    </form>
  );
}
