import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { AudienceSelector } from "@/components/sections/AudienceSelector";
import { Cases } from "@/components/sections/Cases";
import { Consultation } from "@/components/sections/Consultation";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { LitigationAssessment } from "@/components/sections/LitigationAssessment";
import { Pricing } from "@/components/sections/Pricing";
import { Principles } from "@/components/sections/Principles";
import { ProblemSelector } from "@/components/sections/ProblemSelector";
import { TrustBar } from "@/components/sections/TrustBar";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AudienceSelector />
      <ProblemSelector />
      <Consultation />
      <Pricing />
      <WorkProcess />
      <LitigationAssessment />
      <Cases />
      <About />
      <Principles />
      <FAQ />
      <FinalCTA />
    </>
  );
}
