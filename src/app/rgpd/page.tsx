import { Footer, PageHero, SectionHeading } from "@/components/layout";
import { ContactCTASection } from "@/components/specific";

export default function RGPD() {
  return (
    <>
      <PageHero />
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Politique de confidentialité (RGPD)" />

        <div className="flex w-full max-w-container flex-col items-center">
          <div className="w-full max-w-content">
            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">
                1. Responsable du traitement
              </strong>
              <br />
              Colibrille – Corentin Seibel
              <br />
              2 rue Le Verrier, 17440 Aytré
              <br />
              atelier.colibrille.17@gmail.com
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">2. Données collectées</strong>
              <br />
              Dans le cadre de l&apos;utilisation de ce site et de nos services,
              nous sommes susceptibles de collecter les données suivantes : nom
              et prénom, adresse e-mail, numéro de téléphone, informations
              relatives à votre véhicule. Ces données sont collectées uniquement
              dans le cadre de demandes de devis, de prises de rendez-vous ou de
              toute prise de contact volontaire de votre part.
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">
                3. Finalités du traitement
              </strong>
              <br />
              Les données collectées sont utilisées pour : répondre à vos
              demandes de contact ou de devis, organiser les rendez-vous et
              assurer le suivi des prestations, améliorer notre service client.
              Elles ne sont en aucun cas transmises à des tiers à des fins
              commerciales.
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">4. Durée de conservation</strong>
              <br />
              Vos données sont conservées pour une durée maximale de 3 ans à
              compter de notre dernier contact, sauf obligation légale contraire.
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">5. Vos droits</strong>
              <br />
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants : droit d&apos;accès, de
              rectification, d&apos;effacement, de limitation du traitement,
              d&apos;opposition. Pour exercer ces droits, contactez-nous à :
              atelier.colibrille.17@gmail.com
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">6. Cookies</strong>
              <br />
              Ce site peut utiliser des cookies techniques nécessaires à son bon
              fonctionnement. Aucun cookie de traçage publicitaire n&apos;est
              utilisé.
            </p>

            <p className="pb-16 font-content font-normal text-xs text-ghost-foreground">
              <strong className="font-bold">7. Contact</strong>
              <br />
              Pour toute question relative à la protection de vos données :
              atelier.colibrille.17@gmail.com
            </p>
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
