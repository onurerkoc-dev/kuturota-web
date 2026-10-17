import Image from "next/image";
import movingPhoto from "@/assets/hero-moving.webp";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
    >
      <div className="min-w-0">
        <p className="border-l-2 border-accent pl-3 text-sm font-medium leading-6 text-primary">
          Evden Eve ve Kurumsal Nakliyat
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-[12ch] text-4xl leading-[1.08] font-semibold tracking-tight text-primary sm:text-6xl xl:text-7xl"
        >
          Yeni başlangıçlara güvenle taşının
        </h1>
        <p className="mt-6 max-w-lg text-base leading-8 sm:text-lg">
          Evden eve, ofis ve şehirler arası taşımacılık ihtiyaçlarınız için planlı
          ve profesyonel çözümler.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            disabled
            aria-describedby="hero-cta-note"
            className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary disabled:opacity-75"
          >
            Ücretsiz Teklif Al
          </button>
          <a
            href="#hizmetler"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary/25 px-6 py-3 text-sm font-semibold text-primary hover:border-primary hover:bg-primary/5"
          >
            Hizmetlerimizi Keşfedin
          </a>
        </div>
        <p id="hero-cta-note" className="mt-3 text-sm leading-6">
          Teklif alma özelliği yakında erişime açılacak
        </p>
      </div>

      <div
        className="relative aspect-[6/5] overflow-hidden rounded-3xl bg-primary/5 ring-1 ring-primary/10 sm:aspect-[5/4] lg:aspect-[4/5]"
      >
        <Image
          src={movingPhoto}
          alt="Modern bir oturma odasında taşınma için hazırlanmış koliler."
          fill
          sizes="(min-width: 1152px) 512px, (min-width: 1024px) calc(50vw - 64px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          className="object-cover object-[50%_65%]"
        />
      </div>
    </section>
  );
}
