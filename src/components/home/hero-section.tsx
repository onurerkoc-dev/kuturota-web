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

      {/* shortcut: Dekoratif CSS illüstrasyonu; onaylı fotoğraf geldiğinde değiştirilecek. */}
      <div
        aria-hidden="true"
        className="relative isolate aspect-[6/5] overflow-hidden rounded-3xl bg-primary sm:aspect-[5/4] lg:aspect-[4/5]"
      >
        <div className="absolute top-[12%] right-[12%] h-[58%] w-[44%] rounded-t-full border border-background/20" />
        <div className="absolute right-[20%] bottom-[18%] h-[36%] w-[60%] rounded-full border border-dashed border-background/25" />
        <div className="absolute right-[12%] bottom-[24%] h-3 w-3 rounded-full bg-accent ring-8 ring-accent/15" />
        <div className="absolute right-[17%] bottom-[32%] h-[25%] w-[32%] rounded-sm bg-background before:absolute before:inset-y-0 before:left-[43%] before:w-[15%] before:bg-accent/50 after:absolute after:top-full after:left-0 after:h-[10%] after:w-full after:origin-top after:skew-x-[-45deg] after:bg-background/60" />
        <div className="absolute bottom-[20%] left-[12%] h-[35%] w-[45%] rounded-sm bg-accent before:absolute before:inset-y-0 before:left-[43%] before:w-[15%] before:bg-background/50 after:absolute after:bottom-full after:left-0 after:h-[15%] after:w-full after:origin-bottom after:skew-x-[-45deg] after:bg-accent/75">
          <span className="absolute bottom-[15%] left-[12%] text-sm font-bold tracking-tight text-primary sm:text-lg">
            KutuRota
          </span>
        </div>
        <div className="absolute right-[12%] bottom-[10%] left-[12%] h-px bg-background/15" />
      </div>
    </section>
  );
}
