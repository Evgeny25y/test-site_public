import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Principles } from "@/components/sections/Principles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Обо мне",
  description:
    "Ротов Евгений Александрович, юрист по гражданскому праву. 10 лет юридической практики, очные консультации в Москве и дистанционно.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <About index="" headingLevel={1} />
      <Principles index="" />
      <FinalCTA />
    </>
  );
}
