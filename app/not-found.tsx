import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <PageHeader title="Страница не найдена" description="Возможно, ссылка устарела или в адресе опечатка." />
      <Container className="pb-24">
        <Button href="/">На главную</Button>
      </Container>
    </>
  );
}
