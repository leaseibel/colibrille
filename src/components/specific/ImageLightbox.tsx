"use client";

import { useState, useEffect, useCallback } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

export default function ImageLightbox({ src, alt, children }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full cursor-pointer"
        style={{ cursor: "zoom-in" }}
        aria-label={`Agrandir : ${alt}`}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.92)",
            cursor: "zoom-out",
            padding: 24,
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "4px",
                cursor: "default",
              }}
            />
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Fermer"
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--color-surface-secondary-background-rest)",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                fontWeight: "bold",
                color: "var(--color-surface-primary-foreground)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
