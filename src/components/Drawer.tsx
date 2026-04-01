"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  // Mount then animate in; animate out then unmount
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);
      // Fallback unmount if transition doesn't fire (e.g. CSS display:none)
      const timeout = setTimeout(() => {
        setMounted(false);
        if (previousActiveElement.current instanceof HTMLElement) {
          previousActiveElement.current.focus();
        }
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Unmount after exit animation (fires before the timeout fallback)
  function handleTransitionEnd() {
    if (!isOpen) {
      setMounted(false);
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    }
  }

  // Focus the close button when panel becomes visible
  useEffect(() => {
    if (visible) {
      closeButtonRef.current?.focus();
    }
  }, [visible]);

  // Lock body scroll
  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mounted]);

  // Escape key
  useEffect(() => {
    if (!mounted) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mounted, onClose]);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [],
  );

  if (!mounted) return null;

  return (
    <div className="drawer-overlay fixed inset-0 z-50 flex flex-row" onKeyDown={handleKeyDown}>
      {/* Scrim */}
      <div
        className={cn(
          "h-full flex-1 cursor-pointer transition-opacity duration-300 ease-in-out",
          visible ? "opacity-100" : "opacity-0",
        )}
        style={{
          minWidth: '40px',
          background: 'var(--color-specific-scrim)',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={cn(
          "flex h-full w-full flex-col transition-transform duration-300 ease-in-out",
          visible ? "translate-x-0" : "translate-x-full",
        )}
        style={{
          maxWidth: '400px',
          background: 'var(--color-surface-brand-background-raised)',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Header */}
        <div className="flex justify-end p-16">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-surface-ghost-inverted-foreground-neutral)',
              width: 'var(--icon-size-x-large)',
              height: 'var(--icon-size-x-large)',
            }}
            aria-label="Fermer"
          >
            <Icon name="x-mark" size="x-large" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-16">
          {children}
        </div>
      </div>
    </div>
  );
}
