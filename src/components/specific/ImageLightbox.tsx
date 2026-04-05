"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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
            background: "rgba(0,0,0,0.85)",
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              fontSize: 32,
              lineHeight: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
          >
            &times;
          </button>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}
