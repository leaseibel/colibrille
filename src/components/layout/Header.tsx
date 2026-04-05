"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Icon from "@/components/Icon";
import Drawer from "@/components/Drawer";

type HeaderProps = {
  className?: string;
  phone?: string;
};

export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <header
      className={cn(
        "fixed top-0 z-50 w-full",
        "h-[var(--layout-header-height)]",
        "px-16 lg:px-24",
        className,
      )}
      style={{
        background: scrolled
          ? 'var(--color-surface-brand-background-raised)'
          : 'transparent',
        transition: 'background-color 200ms ease',
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-container items-center justify-between">
        {/* Logo */}
        <NextLink href="/">
          <Logo withBaseline={false} width={107} />
        </NextLink>

        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <Menu variant="large" />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="flex lg:hidden text-ghost-inverted-fg-neutral"
          aria-label="Ouvrir le menu"
        >
          <Icon name="menu" size="x-large" />
        </button>
      </div>

    </header>

    {/* Mobile drawer — outside header to avoid height clipping */}
    <Drawer isOpen={open} onClose={() => setOpen(false)}>
      <Menu variant="medium" />
    </Drawer>
  </>
  );
}
