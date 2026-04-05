import type { Metadata } from "next";
import { Footer, PageHero, SectionHeading } from "@/components/layout";

export const metadata: Metadata = {
  title: "CGV / CGU | Colibrille",
  description:
    "Conditions générales de vente et d'utilisation - Colibrille, atelier de detailing automobile.",
};
import { ContactCTASection } from "@/components/specific";
import { reader } from "@/lib/keystatic-reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function CGVCGU() {
  const page = await reader.singletons.cgvCgu.read();

  return (
    <>
      <PageHero />
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="CGV / CGU" />

        <div className="flex w-full max-w-container flex-col items-center">
          <div className="w-full max-w-content">
            {page?.content ? (
              <div className="keystatic-content">
                <DocumentRenderer document={await page.content()} />
              </div>
            ) : (
            <>
            {/* CGV Section Title */}
            <h4 className="pt-16 pb-8 font-display font-bold text-sm tracking-[0.8px]">
              Conditions Générales de Vente (CGV)
            </h4>

            <p className="pb-4 font-content font-bold text-xs">
              1. Objet
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Les présentes Conditions Générales de Vente régissent les
              relations contractuelles entre Colibrille (Corentin Seibel,
              entreprise individuelle) et ses clients dans le cadre des
              prestations de detailing automobile.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              2. Devis et commande
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Toute prestation fait l&apos;objet d&apos;un devis préalable,
              établi après diagnostic du véhicule. Le devis est valable 30
              jours. La confirmation de la prestation est effectuée par la
              signature du devis et le versement d&apos;un acompte de 30%.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              3. Tarifs
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Les tarifs sont indiqués hors taxes sur le devis. Colibrille est
              soumis au régime de la franchise en base de TVA (article 293B du
              CGI). Les prix peuvent être révisés sans préavis.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              4. Paiement
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Le solde de 70% est exigible à la restitution du véhicule. Les
              moyens de paiement acceptés sont : carte bancaire, virement
              instantané, chèque. Tout retard de paiement entraîne des
              pénalités au taux légal en vigueur.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              5. Restitution du véhicule
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Un tour complet du véhicule est effectué avec le client lors de la
              restitution afin de valider la prestation. Le client dispose de 7
              jours pour signaler tout défaut lié à notre intervention.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              6. Responsabilité
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Colibrille s&apos;engage à réaliser les prestations avec soin et
              professionnalisme. Notre responsabilité ne peut être engagée en
              cas de dommages préexistants non signalés, ou résultant d&apos;une
              utilisation ou d&apos;un entretien inadapté après la prestation.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              7. Annulation
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Toute annulation moins de 48h avant le rendez-vous pourra
              entraîner la retenue de l&apos;acompte versé.
            </p>

            {/* CGU Section Title */}
            <h4 className="pt-16 pb-8 font-display font-bold text-sm tracking-[0.8px]">
              Conditions Générales d&apos;Utilisation (CGU)
            </h4>

            <p className="pb-4 font-content font-bold text-xs">
              1. Accès au site
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              L&apos;accès au site colibrille.fr est gratuit. Colibrille se
              réserve le droit de modifier, suspendre ou interrompre
              l&apos;accès au site à tout moment sans préavis.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              2. Contenu
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Les informations présentes sur ce site sont données à titre
              indicatif. Colibrille s&apos;efforce de les maintenir à jour mais
              ne peut garantir leur exactitude exhaustive.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              3. Propriété intellectuelle
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Tous les contenus du site (textes, images, logo) sont protégés.
              Toute reproduction sans autorisation est interdite.
            </p>

            <p className="pb-4 font-content font-bold text-xs">
              4. Droit applicable
            </p>
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              Les présentes CGV/CGU sont soumises au droit français. En cas de
              litige, les tribunaux français sont seuls compétents.
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
