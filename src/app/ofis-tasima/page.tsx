import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import officeMovingPhoto from "@/assets/office-moving.webp";

export const metadata: Metadata = {
  title: "Ofis Taşımacılığı | KutuRota",
  description:
    "Ofis mobilyaları, ekipmanlar ve çalışma alanları için iş takviminizi gözeten taşımacılık. KutuRota'nın ihtiyaç analizi, planlama ve yerleşim sürecini keşfedin.",
};

const movingSteps = [
  {
    title: "İhtiyaç Analizi",
    description:
      "Mobilya ve ekipman envanterini, departmanların ihtiyaçlarını ve bina erişim koşullarını değerlendirerek taşınmanın kapsamını belirliyoruz.",
  },
  {
    title: "Taşınma Planlaması",
    description:
      "İş takviminizi gözeterek paketleme, söküm ve taşıma sırasını planlıyor; ekiplerinizle koordinasyon gerektiren adımları netleştiriyoruz.",
  },
  {
    title: "Yerleşim ve Düzen",
    description:
      "Mobilya ve ekipmanları yeni ofisin yerleşim planına göre konumlandırıyor, çalışma alanlarını departmanların kullanımına uygun biçimde düzenliyoruz.",
  },
];

export default function OfisTasimaPage() {
  return (
    <main className="mx-auto w-full max-w-site flex-1 px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-lg border border-primary/25 px-4 text-sm font-medium text-primary hover:border-primary hover:bg-primary/5"
      >
        Ana sayfaya dön
      </Link>

      <header className="mt-8 grid items-center gap-10 border-b border-primary/15 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="min-w-0">
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-primary sm:text-6xl">
            Ofis Taşımacılığı
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
            Ofis mobilyalarınızı, ekipmanlarınızı ve çalışma alanlarınızı iş
            takviminizi gözeten bir planlamayla yeni adresinize taşıyoruz.
          </p>
          <Link
            href="/teklif-al"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/80 sm:w-auto"
          >
            Teklif formunu inceleyin
          </Link>
        </div>

        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-primary/5 ring-1 ring-primary/10">
          <Image
            src={officeMovingPhoto}
            alt="Ofiste masa telefonunu koliye yerleştiren bir çalışan; masada dosyalar ve bilgisayar bulunuyor."
            fill
            sizes="(min-width: 1152px) 563px, (min-width: 1024px) calc(55vw - 70.4px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            className="object-cover object-[55%_60%]"
          />
        </div>
      </header>

      <section
        aria-labelledby="service-intro-title"
        className="grid gap-6 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16"
      >
        <h2
          id="service-intro-title"
          className="max-w-md text-2xl leading-tight font-semibold tracking-tight text-primary sm:text-3xl"
        >
          İş akışınıza uygun bir ofis taşınması
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-8">
          <p>
            Bir ofisi taşımak, masaları ve kolileri başka bir adrese götürmenin
            ötesinde koordinasyon gerektirir. Çalışma masaları, dolaplar,
            toplantı alanı mobilyaları ve ofis ekipmanları için kapsamı belirli
            bir taşıma planı hazırlıyoruz.
          </p>
          <p>
            Departmanların önceliklerini ve yeni ofisin yerleşim düzenini
            planlamaya dahil ediyoruz. Paketlerin ait olduğu çalışma alanına
            göre gruplandırılmasından ekipmanların konumlandırılmasına kadar
            süreci işletmenizin ihtiyaçlarına göre düzenliyoruz.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="moving-steps-title"
        className="border-t border-primary/15 pt-12 sm:pt-16"
      >
        <h2
          id="moving-steps-title"
          className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
        >
          Ofis taşınma sürecimiz
        </h2>
        <ol role="list" className="mt-8 grid gap-6 md:grid-cols-3">
          {movingSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-primary/15 p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-xl bg-accent/20 text-lg font-semibold text-primary"
              >
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
