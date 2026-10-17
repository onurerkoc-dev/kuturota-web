import Link from "next/link";

const linkGroups = [
  {
    title: "Hizmetler",
    id: "footer-services",
    links: [
      { href: "/evden-eve-nakliyat", label: "Evden Eve Nakliyat" },
      { href: "/ofis-tasima", label: "Ofis Taşımacılığı" },
      { href: "/sehirler-arasi-nakliyat", label: "Şehirler Arası Nakliyat" },
    ],
  },
  {
    title: "Hızlı Bağlantılar",
    id: "footer-quick-links",
    links: [
      { href: "/", label: "Ana Sayfa" },
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/teklif-al", label: "Teklif Al" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/40 bg-primary text-background">
      <div className="mx-auto w-full max-w-site px-6 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-8 lg:pt-10 lg:pb-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="KutuRota ana sayfa"
              className="inline-flex min-h-11 items-center rounded-sm text-3xl font-bold tracking-tight hover:text-accent focus-visible:outline-accent sm:text-4xl"
            >
              KutuRota
            </Link>
            <p className="mt-4 max-w-sm text-base leading-8 text-background/75">
              Evden eve, ofis ve şehirler arası taşınma ihtiyaçları için planlı
              taşımacılık, açık iletişim ve eşyalara özen.
            </p>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.id} aria-labelledby={group.id}>
              <h2 id={group.id} className="text-base font-semibold">
                {group.title}
              </h2>
              <ul role="list" className="mt-4 space-y-1 lg:mt-3 lg:space-y-0">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-sm py-2 text-sm leading-6 text-background/80 underline-offset-4 hover:text-accent hover:underline focus-visible:outline-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-background/15 pt-6 sm:mt-12 lg:mt-6 lg:pt-4">
          <p className="text-sm leading-6 text-background/65">
            © KutuRota. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
