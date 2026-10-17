import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evden Eve Nakliyat | KutuRota",
  description:
    "Yeni evinize taşınma sürecini ihtiyaçlarınıza uygun bir planlamayla kolaylaştırıyoruz. KutuRota'nın planlama, hazırlık ve taşıma adımlarını keşfedin.",
};

const movingSteps = [
  {
    title: "Planlama",
    description:
      "Eşya miktarını, adresleri ve taşınma tarihini birlikte değerlendirerek ihtiyaçlarınıza uygun bir taşınma planı oluşturuyoruz.",
  },
  {
    title: "Hazırlık",
    description:
      "Eşyalarınızın özelliklerine uygun paketleme ve taşıma hazırlığını planlıyor, taşınma günü öncesinde yapılacakları netleştiriyoruz.",
  },
  {
    title: "Taşıma",
    description:
      "Hazırlanan eşyalarınızı belirlenen plana göre yeni adresinize taşıyor, yerleştirme sürecini ihtiyaçlarınız doğrultusunda düzenliyoruz.",
  },
];

export default function EvdenEveNakliyatPage() {
  return (
    <main className="mx-auto w-full max-w-site flex-1 px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-lg border border-primary/25 px-4 text-sm font-medium text-primary hover:border-primary hover:bg-primary/5"
      >
        Ana sayfaya dön
      </Link>

      <header className="mt-8 border-b border-primary/15 pb-12 sm:pb-16">
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-primary sm:text-6xl">
          Evden Eve Nakliyat
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
          Yeni evinize taşınma sürecini ihtiyaçlarınıza uygun bir planlamayla
          kolaylaştırıyoruz.
        </p>
      </header>

      <section
        aria-labelledby="service-intro-title"
        className="grid gap-6 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16"
      >
        <h2
          id="service-intro-title"
          className="max-w-md text-2xl leading-tight font-semibold tracking-tight text-primary sm:text-3xl"
        >
          Evinize özel bir taşınma planı
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-8">
          <p>
            Her evin ve her taşınmanın ihtiyacı farklıdır. KutuRota olarak eşya
            miktarını, bina koşullarını ve zamanlamayı birlikte değerlendirerek
            taşınma sürecini size uygun şekilde planlıyoruz.
          </p>
          <p>
            Paketleme hazırlığından yeni adresinizdeki yerleştirmeye kadar her
            adımın önceden netleşmesini önemsiyoruz. Böylece taşınma günü hangi
            aşamada ne yapılacağını bilerek yeni evinize hazırlanabilirsiniz.
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
          Taşınma sürecimiz
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
