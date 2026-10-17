"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const navigationLinks = [
  { href: "/", label: "Ana sayfa" },
  { href: "/evden-eve-nakliyat", label: "Evden Eve Nakliyat" },
  { href: "/ofis-tasima", label: "Ofis Taşımacılığı" },
  { href: "/sehirler-arasi-nakliyat", label: "Şehirler Arası Nakliyat" },
];

export function SiteNavigation() {
  const pathname = usePathname();

  return <NavigationMenu key={pathname} pathname={pathname} />;
}

function NavigationMenu({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="contents"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/25 px-4 text-sm font-medium text-primary hover:bg-primary/5 lg:hidden"
      >
        {isOpen ? "Menüyü kapat" : "Menüyü aç"}
      </button>

      <nav
        id="site-navigation"
        aria-label="Ana navigasyon"
        className={`${isOpen ? "block" : "hidden"} w-full border-t border-primary/15 pt-3 lg:block lg:w-auto lg:border-0 lg:pt-0`}
      >
        <ul role="list" className="flex flex-col gap-2 lg:flex-row">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex min-h-11 w-full items-center rounded-md px-4 text-sm font-medium text-primary ${isActive ? "bg-accent/20 hover:bg-accent/35" : "hover:bg-primary/5"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
