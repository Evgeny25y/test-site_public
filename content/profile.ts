import { env } from "@/lib/env";

export interface Profile {
  fullName: string;
  shortName: string;
  brand: string;
  profession: string;
  specialization: string;
  experienceYears: number;
  education: string;
  city: string;
  workFormat: string;
  slogan: string;
  telegram: string;
  phone: string;
  email: string;
  siteUrl: string;
}

export const profile: Profile = {
  fullName: "Ротов Евгений Александрович",
  shortName: "Евгений Ротов | Юрист",
  brand: "ROTOV",
  profession: "Юрист",
  specialization: "Гражданское право",
  experienceYears: 10,
  education: "Высшее юридическое образование",
  city: "Москва",
  workFormat: "очно и дистанционно",
  slogan: "Сначала разбираюсь в ситуации - потом предлагаю решение.",
  telegram: env.telegramUsername,
  phone: env.phone,
  email: env.email,
  siteUrl: env.siteUrl,
};
