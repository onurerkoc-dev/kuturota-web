import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";

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
