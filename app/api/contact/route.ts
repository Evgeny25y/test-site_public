import { NextResponse } from "next/server";

interface Body {
  name?: unknown;
  contact?: unknown;
  message?: unknown;
  email?: unknown;
  consent?: unknown;
}

const text = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as Body | null;
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
