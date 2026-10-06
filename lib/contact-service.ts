export interface ContactPayload {
  name: string;
  contact: string;
  message: string;
  email?: string;
  consent: boolean;
}

export type ContactResult =
  | { status: "sent" }
  | { status: "not_configured" }
  | { status: "invalid"; message: string }
  | { status: "error" };

// Граница интеграции: форма знает только про эту функцию. Куда уходят заявки, решает app/api/contact.
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) return { status: "sent" };
    if (response.status === 503) return { status: "not_configured" };
    if (response.status === 400) {
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      return { status: "invalid", message: body?.message ?? "Проверьте заполненные поля." };
    }
    return { status: "error" };
  } catch {
    return { status: "error" };
  }
}
