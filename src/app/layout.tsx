import type { Metadata } from "next";
import { Inter, Montserrat, Petrona } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-content",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-epigraph",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colibrille — Esthétique automobile à Aytré (17)",
  description:
    "Nettoyage, rénovation et protection automobile. Votre nouveau centre d'esthétique automobile sur Aytré (17).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${montserrat.variable} ${petrona.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
