"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type TabProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Tab({ href, children, className }: TabProps) {
  const pathname = usePathname();
  const isSelected = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center font-content font-medium text-sm text-ghost-inverted-fg-neutral px-12 py-8 min-h-[var(--layout-gap-1000)] rounded-atom whitespace-nowrap transition-colors duration-150 ease-in-out",
        isSelected
          ? "bg-ghost-inverted-selected overflow-hidden"
          : "bg-ghost-inverted hover:bg-ghost-inverted-hovered active:bg-ghost-inverted-active",
        className,
      )}
    >
      {children}
    </Link>
  );
}
