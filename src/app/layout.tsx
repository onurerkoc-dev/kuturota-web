import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
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
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
