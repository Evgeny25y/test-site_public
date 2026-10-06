import type { Metadata, Viewport } from "next";
import { Golos_Text, Literata } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { profile } from "@/content/profile";
import { ButtonEffects } from "@/components/ui/ButtonEffects";
import { siteUrl } from "@/lib/env";
import { homeDescription, homeTitle } from "@/lib/seo";

const literata = Literata({
  subsets: ["cyrillic", "latin"],
  variable: "--font-literata",
  display: "swap",
});

const golos = Golos_Text({
  subsets: ["cyrillic", "latin"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: `%s | ${profile.brand}` },
  description: homeDescription,
  applicationName: profile.brand,
  authors: [{ name: profile.fullName }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: profile.brand,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription },
};

export const viewport: Viewport = {
  themeColor: "#24364b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${literata.variable} ${golos.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-3 focus:text-white"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <StructuredData />
        <Analytics />
        <ButtonEffects />
      </body>
    </html>
  );
}
