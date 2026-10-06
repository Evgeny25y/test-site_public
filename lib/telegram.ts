export function buildTelegramUrl(username: string, message?: string): string {
  const base = `https://t.me/${encodeURIComponent(username)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function problemMessage(problem: string): string {
  return `Здравствуйте, Евгений. Хочу проконсультироваться по вопросу: ${problem}.`;
}
