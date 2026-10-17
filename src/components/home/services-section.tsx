import Link from "next/link";

const services = [
  {
    title: "Evden Eve Nakliyat",
    href: "/evden-eve-nakliyat",
    description:
      "Ev eşyalarınızın paketlenmesi, taşınması ve yeni adresinize yerleştirilmesi için ihtiyacınıza uygun planlama.",
    iconPath: "M3 10.5 12 3l9 7.5M5 9v12h14V9M9 21v-8h6v8",
  },
  {
    title: "Ofis Taşımacılığı",
    href: "/ofis-tasima",
    description:
      "Ofis mobilyaları ve ekipmanlarınız için çalışma düzeninizi gözeten, ihtiyaçlarınıza uygun taşınma çözümleri.",
    iconPath:
      "M4 21V3h16v18H4ZM9 21v-5h6v5M8 7h2m4 0h2M8 11h2m4 0h2",
  },
  {
    title: "Şehirler Arası Nakliyat",
    description:
      "Farklı şehirler arasındaki taşınmalarınız için mesafe ve zamanlamayı dikkate alan taşımacılık planlaması.",
    iconPath:
      "M3 16V5h11v11M14 9h4l3 4v3h-3M3 16h2m4 0h5M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  },
];

export function ServicesSection() {
  return (
    <section
      id="hizmetler"
      aria-labelledby="services-title"
      className="scroll-mt-8 border-t border-primary/15 py-12 sm:py-16 lg:py-20"
    >
      <p className="border-l-2 border-accent pl-3 text-sm font-medium leading-6 text-primary">
        Hizmetlerimiz
      </p>
      <h2
        id="services-title"
        className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl"
      >
        Taşınmanın her aşamasında yanınızdayız.
      </h2>
      <p className="mt-4 text-base leading-8 sm:text-lg">
        İhtiyacınıza uygun taşımacılık hizmetini keşfedin.
      </p>

      <ul role="list" className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.title}
            className="relative rounded-2xl border border-primary/15 p-6 sm:p-8"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/20 text-primary">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-7"
              >
                <path d={service.iconPath} />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary">
              {service.href ? (
                <Link
                  href={service.href}
                  className="rounded-sm underline decoration-accent underline-offset-4 after:absolute after:inset-0 after:rounded-2xl hover:decoration-primary"
                >
                  {service.title}
                </Link>
              ) : (
                service.title
              )}
            </h3>
            <p className="mt-3 text-base leading-7">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
