export interface Problem {
  id: string;
  label: string;
  /** Фраза для подстановки в сообщение Telegram. */
  topic: string;
}

export const problems: Problem[] = [
  { id: "owed-money", label: "Мне должны деньги", topic: "мне должны деньги" },
  { id: "sued", label: "На меня подали в суд", topic: "на меня подали в суд" },
  { id: "contract-breach", label: "Контрагент нарушил договор", topic: "контрагент нарушил договор" },
  { id: "contract-review", label: "Хочу проверить договор", topic: "проверка договора" },
  { id: "real-estate", label: "Возник спор по недвижимости", topic: "спор по недвижимости" },
  { id: "damage", label: "Мне причинили ущерб", topic: "мне причинили ущерб" },
  { id: "claim-received", label: "Получил претензию", topic: "я получил претензию" },
  { id: "business-debt", label: "Нужно взыскать долг с контрагента", topic: "взыскание долга с контрагента" },
  { id: "other", label: "Другая ситуация", topic: "другая ситуация" },
];
