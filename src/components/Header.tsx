"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Nos prestations", href: "/nos-prestations" },
  { label: "Nos tarifs", href: "/nos-tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface-brand-background-base)]/95 backdrop-blur-sm border-b border-ghost-inverted-stroke">
      <div className="max-w-container mx-auto flex items-center justify-between px-24 py-12 lg:px-24 md:px-16">
        <Link href="/" className="font-display font-bold text-lg text-brand-fg-neutral">
          Colibrille
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-16 py-8 rounded-atom text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-fg-accent"
                    : "text-ghost-inverted-fg-neutral opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          variant="accent"
          pill
          href="tel:+33611489861"
          className="hidden md:inline-flex text-xs"
        >
          06 11 48 98 61
        </Button>
      </div>
    </header>
  );
}
