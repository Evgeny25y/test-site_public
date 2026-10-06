import { NextResponse } from "next/server";

interface Body {
  name?: unknown;
  contact?: unknown;
  message?: unknown;
  email?: unknown;
  consent?: unknown;
  website?: unknown;
}

const MAX_BODY_BYTES = 16_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

// Простое ограничение частоты в памяти процесса. На serverless-хостинге оно действует в пределах
// одного экземпляра, поэтому это защита от случайного спама, а не от целенаправленной атаки.
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (now - times[times.length - 1] >= RATE_WINDOW_MS) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT;
}

const text = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "rate_limited", message: "Слишком много обращений подряд. Попробуйте через несколько минут." },
      { status: 429 },
    );
  }

  const body = (await request.json().catch(() => null)) as Body | null;

  // Скрытое поле-ловушка: человек его не видит и не заполняет, бот заполняет. Отвечаем "успехом", ничего не отправляя.
  if (typeof body?.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = text(body?.name, 120);
  const contact = text(body?.contact, 160);
  const message = text(body?.message, 4000);
  const email = text(body?.email, 160);

  if (!name || !contact || !message || body?.consent !== true) {
    return NextResponse.json(
      { error: "invalid", message: "Заполните имя, контакт и описание ситуации и подтвердите согласие." },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, contact, message, email: email || undefined, receivedAt: new Date().toISOString() }),
    });
    if (!upstream.ok) {
      return NextResponse.json({ error: "upstream" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
