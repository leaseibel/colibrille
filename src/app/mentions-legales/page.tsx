import type { Metadata } from "next";
import { Footer, PageHero, SectionHeading } from "@/components/layout";

export const metadata: Metadata = {
  title: "Mentions Légales | Colibrille",
  description:
    "Mentions légales du site colibrille.fr - Atelier de detailing automobile à Aytré.",
};
import { ContactCTASection } from "@/components/specific";
import { reader } from "@/lib/keystatic-reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function MentionsLegales() {
  const page = await reader.singletons.mentionsLegales.read();

  return (
    <>
      <PageHero />
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Mentions Légales" />

        <div className="flex w-full max-w-container flex-col items-center">
          <div className="w-full max-w-content">
            {page?.content ? (
              <div className="keystatic-content">
                <DocumentRenderer document={await page.content()} />
              </div>
            ) : (
            <>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">
                Éditeur du site Le site colibrille.fr est édité par :
              </strong>
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Colibrille – Esthétique Automobile
              <br />
              Entreprise individuelle
              <br />
              2 rue Le Verrier, 17440 Aytré
              <br />
              Téléphone : +33 6 11 48 98 61
              <br />
              Email :{" "}
              <a
                href="mailto:atelier.colibrille.17@gmail.com"
                className="underline"
              >
                atelier.colibrille.17@gmail.com
              </a>
              <br />
              SIRET : 123 456 789 00012
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Responsable de publication : Corentin Seibel
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">Hébergeur :</strong> Ce site est
              hébergé par :
              <br />
              [NOM DE L&apos;HÉBERGEUR]
              <br />
              [ADRESSE DE L&apos;HÉBERGEUR]
              <br />
              [SITE WEB DE L&apos;HÉBERGEUR]
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">Propriété intellectuelle :</strong>{" "}
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              logos, graphismes) est la propriété exclusive de Colibrille, sauf
              mentions contraires. Toute reproduction, distribution ou
              utilisation sans autorisation préalable est interdite.
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">Liens hypertextes :</strong>{" "}
              Colibrille décline toute responsabilité quant au contenu des sites
              externes vers lesquels des liens peuvent pointer.
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">Données personnelles :</strong> Pour
              toute information relative au traitement de vos données
              personnelles, consultez notre Politique de confidentialité (RGPD).
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">Contact :</strong> Pour toute
              question relative au site :{" "}
              <a
                href="mailto:atelier.colibrille.17@gmail.com"
                className="underline"
              >
                atelier.colibrille.17@gmail.com
              </a>
            </p>
            </>
            )}
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
