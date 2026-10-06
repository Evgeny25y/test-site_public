import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  breadcrumb?: { label: string; href: string };
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="pb-12 pt-10 sm:pt-14 lg:pb-16 lg:pt-20">
      <Container>
        {breadcrumb ? (
          <p className="mb-6 text-[0.95rem]">
            <Link href={breadcrumb.href} className="text-muted underline-offset-4 hover:text-primary hover:underline">
              {breadcrumb.label}
            </Link>
          </p>
        ) : null}
        <h1 className="max-w-4xl text-[clamp(2rem,1.2rem+3.4vw,3.75rem)] leading-[1.06] tracking-[-0.02em] text-primary">
          {title}
        </h1>
        {description ? <p className="mt-6 max-w-[36rem] text-lg text-ink/85">{description}</p> : null}
      </Container>
    </section>
  );
}
