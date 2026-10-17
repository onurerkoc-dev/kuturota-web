import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Hakkımızda | KutuRota",
  description:
    "KutuRota'nın bireysel ve kurumsal taşınma ihtiyaçlarına yönelik planlı taşımacılık, açık iletişim ve eşyalara özen yaklaşımını tanıyın.",
  path: "/hakkimizda",
});

const approaches = [
  {
    title: "Planlı Taşımacılık",
    description:
      "Eşya miktarı, adres koşulları ve zamanlama gibi ayrıntıları başlangıçta netleştirmeyi esas alırız. Her aşamanın birbiriyle uyumlu ilerlediği bir taşınma deneyimi hedefleriz.",
  },
  {
    title: "Açık İletişim",
    description:
      "Hizmetin kapsamını, hazırlık adımlarını ve karşılıklı beklentileri sade bir dille anlatmayı önemseriz. Soruların ve süreçteki değişikliklerin açıkça paylaşılmasını temel alırız.",
  },
  {
    title: "Eşyalara Özen",
    description:
      "Her eşyanın malzemesine, boyutuna ve kullanımına uygun hazırlığı dikkate alırız. Paketleme, araç içi yerleşim ve yeni adreste konumlandırmayı bu özenin parçaları olarak görürüz.",
  },
];

const services = [
  {
    title: "Evden Eve Nakliyat",
    href: "/evden-eve-nakliyat",
    description:
      "Ev eşyalarının paketlenmesi, taşınması ve yeni evde yerleşimi için hazırlık adımları.",
  },
  {
    title: "Ofis Taşımacılığı",
    href: "/ofis-tasima",
    description:
      "Mobilya, ekipman ve departman ihtiyaçlarını iş takvimiyle birlikte ele alan taşınma planlaması.",
  },
  {
    title: "Şehirler Arası Nakliyat",
    href: "/sehirler-arasi-nakliyat",
    description:
      "Mesafe, güzergâh ve varış adresindeki teslimat hazırlığını bir arada ele alan taşıma süreci.",
  },
];

export default function HakkimizdaPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-site flex-1 space-y-12 px-6 py-12 sm:space-y-16 sm:px-8 sm:py-16 lg:space-y-20 lg:py-20"
    >
      <header className="max-w-3xl">
        <h1 className="text-4xl leading-tight font-semibold tracking-tight text-primary sm:text-6xl">
          KutuRota Hakkında
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
          KutuRota, bireysel ve kurumsal taşınma ihtiyaçlarına planlı, anlaşılır
          ve özenli çözümler sunmayı amaçlayan bir nakliyat markasıdır.
        </p>
      </header>

      <section
        aria-labelledby="approach-title"
        className="grid gap-8 border-t border-primary/15 pt-12 sm:pt-16 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <h2
            id="approach-title"
            className="max-w-md text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl"
          >
            Taşınmayı anlaşılır bir sürece dönüştürmek
          </h2>
          <p className="mt-6 max-w-md text-base leading-8">
            Taşınırken hangi adımın ne zaman gerçekleşeceğini bilmek, doğru
            hazırlık yapmayı kolaylaştırır. KutuRota’nın marka yaklaşımını
            ihtiyaçları önceden anlamak, süreci açıkça anlatmak ve eşyanın
            niteliğine uygun hazırlık yapmak üzerine kuruyoruz.
          </p>
        </div>

        <dl className="divide-y divide-primary/15">
          {approaches.map((approach) => (
            <div key={approach.title} className="py-6 first:pt-0 last:pb-0">
              <dt className="text-xl font-semibold tracking-tight text-primary">
                {approach.title}
              </dt>
              <dd className="mt-3 text-base leading-7">
                {approach.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="about-services-title"
        className="rounded-3xl bg-primary/5 p-6 sm:p-8 lg:p-10"
      >
        <h2
          id="about-services-title"
          className="text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl"
        >
          Evden ofise, şehirden şehre
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8">
          Yaşam alanları, çalışma ortamları ve şehirler arası taşınmalar farklı
          hazırlıklar gerektirir. Her hizmetin kapsamını ve planlama adımlarını
          inceleyin.
        </p>
        <ul role="list" className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <h3 className="text-lg font-semibold text-primary">
                <Link
                  href={service.href}
                  className="inline-flex min-h-11 items-center rounded-sm underline decoration-accent underline-offset-4 hover:decoration-primary"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="mt-2 text-base leading-7">{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
