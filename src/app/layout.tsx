import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KutuRota | Nakliyat ve Taşımacılık",
  description:
    "KutuRota ile taşınmak artık daha kolay. Evden eve nakliyat, ofis taşımacılığı ve şehirler arası taşımacılık ihtiyaçlarınız için planlı ve profesyonel çözümler sunuyoruz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="fixed -top-24 left-6 z-50 inline-flex min-h-12 items-center rounded-lg bg-accent px-6 py-3 font-semibold text-primary focus:top-4"
        >
          İçeriğe geç
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
