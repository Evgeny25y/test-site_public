import Link from "next/link";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <ul className="grid gap-x-12 md:grid-cols-2">
      {services.map((service) => (
        <li key={service.slug} className="border-t border-primary/40 py-8">
          <p className="text-sm text-muted">{service.audience}</p>
          <h2 className="mt-2 text-2xl">
            <Link href={`/services/${service.slug}`} className="hover:text-primary hover:underline">
              {service.title}
            </Link>
          </h2>
          <p className="mt-3 max-w-md text-muted">{service.summary}</p>
        </li>
      ))}
    </ul>
  );
}
