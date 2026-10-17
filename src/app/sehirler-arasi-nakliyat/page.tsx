import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import intercityTruckPhoto from "@/assets/intercity-truck.webp";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Şehirler Arası Nakliyat | KutuRota",
  description:
    "Farklı şehirler arasında taşınma sürecinizi mesafe, zamanlama ve eşya ihtiyaçlarınıza uygun şekilde planlıyoruz.",
  path: "/sehirler-arasi-nakliyat",
});

const movingSteps = [
  {
    title: "Taşınma Planlaması",
    description:
      "Çıkış ve varış adreslerini, şehirler arasındaki mesafeyi ve eşya hacmini değerlendirerek taşıma takvimini ve araç ihtiyacını belirliyoruz.",
  },
  {
    title: "Eşyaların Hazırlanması",
    description:
      "Eşyaları uzun yol taşımacılığına uygun paketleme ve yükleme için hazırlıyor, varışta yerleştirilecekleri alanlara göre gruplandırıyoruz.",
  },
  {
    title: "Şehirler Arası Taşıma ve Teslimat",
    description:
      "Taşımayı belirlenen güzergâha göre organize ediyor, varış adresindeki erişim ve karşılama koşullarını sizinle koordine ederek teslimatı gerçekleştiriyoruz.",
  },
];

export default function SehirlerArasiNakliyatPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-site flex-1 px-6 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-lg border border-primary/25 px-4 text-sm font-medium text-primary hover:border-primary hover:bg-primary/5"
      >
        Ana sayfaya dön
      </Link>

      <header className="mt-8 grid items-center gap-10 border-b border-primary/15 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-primary sm:text-6xl">
            Şehirler Arası Nakliyat
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
            Farklı şehirler arasında taşınma sürecinizi mesafe, zamanlama ve eşya
            ihtiyaçlarınıza uygun şekilde planlıyoruz.
          </p>
          <Link
            href="/teklif-al"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/80 sm:w-auto"
          >
            Teklif Formunu İncele
          </Link>
        </div>

        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-primary/5 ring-1 ring-primary/10 lg:aspect-[4/3]">
          <Image
            src={intercityTruckPhoto}
            alt="Beyaz kapalı yük aracının arkasında kolileri yüklemeye hazırlayan iki taşıma görevlisi."
            fill
            sizes="(min-width: 1152px) 512px, (min-width: 1024px) calc(50vw - 64px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            className="object-cover object-[40%_50%]"
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
          İki şehir arasında, her adımı düşünülmüş bir taşınma
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-8">
          <p>
            Şehirler arası taşınmada hazırlık, yalnızca eşyaların paketlenmesiyle
            sınırlı değildir. Çıkış ve varış adresleri arasındaki mesafeyi, eşya
            hacmini ve her iki binanın erişim koşullarını birlikte ele alarak
            güzergâh ve yükleme planını oluşturuyoruz.
          </p>
          <p>
            Uzun yol boyunca eşyaların araç içindeki yerleşimini ve varış
            adresindeki boşaltma sırasını planlıyoruz. Yeni şehirde eşyaları
            karşılayacak kişiyle koordinasyonu ve teslimat hazırlıklarını
            netleştirerek taşınmanın iki adres arasındaki bütününü yönetiyoruz.
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
          Şehirler arası taşınma sürecimiz
        </h2>
        <ol role="list" className="mt-8 grid gap-6 lg:grid-cols-3">
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
