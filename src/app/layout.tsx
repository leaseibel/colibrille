import type { Metadata } from "next";
import { Inter, Montserrat, Petrona } from "next/font/google";
import { headers } from "next/headers";
import { HeaderWrapper } from "@/components/layout";
import { getSettings } from "@/lib/settings";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-content",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-family-display",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-family-epigraph",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const faviconUrl = settings.favicon
    ? (settings.favicon.startsWith('/') ? settings.favicon : `/assets/${settings.favicon}`)
    : '/icon-192.png';

  return {
    metadataBase: new URL("https://www.atelier-colibrille.fr"),
    title: "Colibrille | Detailing Automobile à Aytré",
    description:
      "Atelier de detailing automobile professionnel à Aytré. Nettoyage, polissage, protection céramique et rénovation de cuirs. Devis gratuit sur rendez-vous.",
    alternates: { canonical: "/" },
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: faviconUrl, type: 'image/png' },
      ],
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Colibrille",
      images: [{ url: "/assets/logo/logo-with-baseline.svg" }],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isKeystatic = pathname.startsWith("/keystatic");

  return (
    <html lang="fr">
      <head>
        {!isKeystatic && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Colibrille",
                description: "Atelier de detailing automobile à Aytré",
                url: "https://www.atelier-colibrille.fr",
                telephone: "+33611489861",
                email: "atelier.colibrille.17@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2 rue Le Verrier",
                  postalCode: "17440",
                  addressLocality: "Aytré",
                  addressCountry: "FR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 46.1302288,
                  longitude: -1.097455,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:30",
                    closes: "18:30",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday"],
                    opens: "09:00",
                    closes: "12:30",
                  },
                ],
                priceRange: "€€",
                image:
                  "https://www.atelier-colibrille.fr/assets/logo/logo-with-baseline.svg",
              }),
            }}
          />
        )}
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${petrona.variable} antialiased`}
      >
        {!isKeystatic && (
          <a
            href="#main-content"
            className="skip-link"
          >
            Aller au contenu principal
          </a>
        )}
        {!isKeystatic && <HeaderWrapper />}
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
