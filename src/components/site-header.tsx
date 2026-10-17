import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-primary/15 bg-background">
      <div className="mx-auto flex w-full max-w-site flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 sm:px-8">
        <Link
          href="/"
          aria-label="KutuRota ana sayfa"
          className="inline-flex min-h-11 items-center rounded-sm text-2xl font-bold tracking-tight text-primary"
        >
          KutuRota
        </Link>
        <nav aria-label="Ana navigasyon" className="flex flex-wrap gap-2">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-md bg-accent/20 px-4 text-sm font-medium text-primary hover:bg-accent/35"
          >
            Ana sayfa
          </Link>
          <Link
            href="/evden-eve-nakliyat"
            className="inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Evden Eve Nakliyat
          </Link>
          <Link
            href="/ofis-tasima"
            className="inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Ofis Taşımacılığı
          </Link>
          <Link
            href="/sehirler-arasi-nakliyat"
            className="inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Şehirler Arası Nakliyat
          </Link>
        </nav>
      </div>
    </header>
  );
}
