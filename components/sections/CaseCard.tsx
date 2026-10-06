import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Case } from "@/content/cases";

export function CaseCard({ item }: { item: Case }) {
  return (
    <article className="rounded-md border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap gap-2">
        <Badge>{item.category}</Badge>
        <Badge>{item.clientType}</Badge>
      </div>
      <h3 className="mt-5 text-xl sm:text-2xl">
        <Link href={`/cases/${item.slug}`} className="hover:text-primary hover:underline">
          {item.title}
        </Link>
      </h3>
      <p className="mt-3 text-muted">{item.problem}</p>
    </article>
  );
}
