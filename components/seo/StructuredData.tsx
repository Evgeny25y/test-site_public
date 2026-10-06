import { profile } from "@/content/profile";
import { isSiteUrlConfigured, siteUrl } from "@/lib/env";
import { JsonLd } from "./JsonLd";

// Только подтвержденные данные. Телефон, адрес, рейтинги, отзывы и sameAs добавляются, когда появятся реальные значения.
export function StructuredData() {
  const personId = `${siteUrl}/#person`;
  const url = isSiteUrlConfigured ? siteUrl : undefined;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.fullName,
    jobTitle: profile.profession,
    knowsAbout: "Гражданское право",
    ...(url ? { url } : {}),
  };

  const service = {
    "@type": "LegalService",
    "@id": `${siteUrl}/#service`,
    name: `${profile.fullName}, юрист по гражданскому праву`,
    areaServed: ["Москва", "Дистанционно"],
    provider: { "@id": personId },
    ...(url ? { url } : {}),
  };

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [person, service] }} />;
}
