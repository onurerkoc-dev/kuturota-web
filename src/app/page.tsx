import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "KutuRota | Nakliyat ve Taşımacılık",
  description:
    "KutuRota ile taşınmak artık daha kolay. Evden eve nakliyat, ofis taşımacılığı ve şehirler arası taşımacılık ihtiyaçlarınız için planlı ve profesyonel çözümler sunuyoruz.",
  path: "/",
});

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-site flex-1 px-6 sm:px-8"
    >
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
