"use client";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Colibrille/@46.1302288,-1.1000299,17z/data=!3m1!4b1!4m6!3m5!1s0x48014d91505b2053:0x306c9b7bd7a3e358!8m2!3d46.1302288!4d-1.097455!16s%2Fg%2F11nb6xc5td?hl=fr-FR&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

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
              "maps://maps.apple.com/?q=Colibrille+2+Rue+Le+Verrier+17440+Aytré";
            setTimeout(() => {
              window.open(GOOGLE_MAPS_URL, "_blank");
            }, 500);
          } else {
            window.location.href =
              "geo:46.1302288,-1.097455?q=Colibrille+2+Rue+Le+Verrier+17440+Aytré";
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
