import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";

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
        <SiteNavigation />
      </div>
    </header>
  );
}
