"use client";

const GOOGLE_MAPS_URL =
  "https://maps.google.com/maps?q=2+Rue+Le+Verrier+ZAC+de+Belle+Air+17440+Aytré+France";

export default function MapAddressLink() {
  return (
    <a
      href={GOOGLE_MAPS_URL}
      onClick={(e) => {
        if (
          typeof navigator !== "undefined" &&
          /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        ) {
          e.preventDefault();
          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href =
              "maps://maps.apple.com/?q=2+Rue+Le+Verrier+17440+Aytré";
            setTimeout(() => {
              window.open(GOOGLE_MAPS_URL, "_blank");
            }, 500);
          } else {
            window.location.href =
              "geo:46.1282,-1.1388?q=2+Rue+Le+Verrier+17440+Aytré";
            setTimeout(() => {
              window.open(GOOGLE_MAPS_URL, "_blank");
            }, 500);
          }
        }
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center font-content text-xs text-ghost-foreground underline"
    >
      02 Rue Le Verrier ZAC de Belle Air, 17440 AYTRE
    </a>
  );
}
