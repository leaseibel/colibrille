import type { Metadata } from "next";
import { Inter, Montserrat, Petrona } from "next/font/google";
import { Header } from "@/components/layout";
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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
