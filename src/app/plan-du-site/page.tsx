import type { Metadata } from "next";
import { Footer, PageHero, SectionHeading } from "@/components/layout";

export const metadata: Metadata = {
  title: "Plan du Site | Colibrille",
  description:
    "Plan du site colibrille.fr - Toutes les pages de votre atelier de detailing automobile à Aytré.",
};
import { ContactCTASection } from "@/components/specific";

const linkClass = "font-content font-medium text-sm text-ghost-foreground underline pb-16 block";

export default function PlanDuSite() {
  return (
    <>
      <PageHero />
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Plan du site" />

        <div className="flex w-full max-w-content flex-col items-center">
          <p className="w-full pb-16 font-content font-bold text-sm">
            Pages principales
          </p>

          <a href="/" className={linkClass}>
            Accueil
          </a>

          <div className="w-full pb-16">
            <a
              href="/nos-prestations"
              className="font-content font-medium text-sm text-ghost-foreground underline"
            >
              Nos prestations
            </a>
            <ul className="list-disc pl-[2em] pt-16">
              <li className="pb-16">
                <a href="/nos-prestations#nettoyage" className="font-content font-medium text-sm text-ghost-foreground underline">
                  Nettoyage intérieur/extérieur
                </a>
              </li>
              <li className="pb-16">
                <a href="/nos-prestations#carrosserie" className="font-content font-medium text-sm text-ghost-foreground underline">
                  Rénovation de la carrosserie
                </a>
              </li>
              <li className="pb-16">
                <a href="/nos-prestations#cuirs" className="font-content font-medium text-sm text-ghost-foreground underline">
                  Rénovation des cuirs
                </a>
              </li>
              <li>
                <a href="/nos-prestations#ceramique" className="font-content font-medium text-sm text-ghost-foreground underline">
                  Protection céramique
                </a>
              </li>
            </ul>
          </div>

          <a href="/nos-tarifs" className={linkClass}>
            Nos tarifs
          </a>
          <a href="/a-propos" className={linkClass}>
            À propos
          </a>
          <a href="/faq" className={linkClass}>
            FAQ
          </a>

          <p className="w-full pb-16 font-content font-bold text-sm">
            Pages annexes
          </p>

          <a href="/mentions-legales" className={linkClass}>
            Mentions Légales
          </a>
          <a href="/rgpd" className={linkClass}>
            Politique de confidentialité (RGPD)
          </a>
          <a href="/cgv-cgu" className={linkClass}>
            CGV / CGU
          </a>
          <a href="/plan-du-site" className={linkClass}>
            Plan du site
          </a>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
