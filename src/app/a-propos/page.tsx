import Image from "next/image";
import { Footer, PageHero, SectionHeading } from "@/components/layout";
import { ContactCTASection } from "@/components/specific";
import Card from "@/components/Card";
import FullWidthSection from "@/components/FullWidthSection";

const certifications = [
  "/assets/images/a-propos/certification-1.jpg",
  "/assets/images/a-propos/certification-2.jpg",
  "/assets/images/a-propos/certification-3.jpg",
];

export default function APropos() {
  return (
    <>
      <PageHero
        title="À propos"
        epigraph="Parce que derrière chaque soin, il y a une passion"
      />

      {/* Section 1: Bio */}
      <section className="section-outer bg-primary-base pt-24 pb-40">
        <FullWidthSection
          leadingPicture="/assets/images/a-propos/corentin-portrait.jpg"
          leadingPictureAlt="Corentin, fondateur de Colibrille"
        >
          <p className="w-full pb-16 font-content font-bold text-xs">
            Je m&apos;appelle Corentin SEIBEL et j&apos;ai créé Colibrille
            début 2026.
          </p>
          <p className="w-full pb-16 font-content font-normal text-xs">
            J&apos;ai commencé ma carrière professionnelle dans le commerce,
            suivie d&apos;expériences en tant qu&apos;assistant administratif et
            en tant que chargé de recrutement.
          </p>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Mais, ma vraie passion depuis tout petit, c&apos;est
            l&apos;automobile. Elle me vient de mon grand père, qui était
            lui-même passionné d&apos;autos, sous toutes ses formes.
            Aujourd&apos;hui, j&apos;ai décidé de faire de ma passion mon
            métier.
          </p>
          <p className="w-full font-content font-normal text-xs">
            Perfectionniste et amoureux du travail bien fait, ce n&apos;est pas
            un hasard si je me suis tourné vers le détailing automobile. Ma
            rigueur et mon sens du détail redonneront une nouvelle vie à chaque
            auto, avec le plaisir de partager mon expertise avec son
            propriétaire.
          </p>
        </FullWidthSection>
      </section>

      {/* Section 2: Diplômes et certifications */}
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Mes diplômes et certifications" />

        <div className="flex w-full max-w-container flex-col gap-20 md:flex-row">
          {certifications.map((src) => (
            <Card key={src} variant="raised" className="flex-1 p-8">
              <div
                className="relative w-full overflow-hidden rounded-atom"
                style={{ aspectRatio: "283/196" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative shrink-0"
                    style={{
                      transform: "rotate(-90deg)",
                      width: "196px",
                      height: "283px",
                    }}
                  >
                    <Image
                      src={src}
                      alt="Certification"
                      fill
                      style={{ objectFit: "cover", pointerEvents: "none" }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: Informations pratiques */}
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Informations pratiques" />

        {/* Map card */}
        <Card variant="raised" className="w-full max-w-container p-8">
          <p className="w-full py-12 text-center font-display font-bold text-sm tracking-[0.8px]">
            Nos trouver :
          </p>
          <div className="relative h-[420px] w-full overflow-hidden rounded-atom">
            <Image
              src="/assets/images/a-propos/map.jpg"
              alt="Carte de localisation de Colibrille"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full py-12 text-center">
            <a
              href="https://maps.google.com/?q=02+Rue+Le+Verrier+17440+Aytré"
              className="text-ghost-foreground underline"
            >
              02 Rue Le Verrier ZAC de Belle Air, 17440 AYTRE
            </a>
          </p>
        </Card>

        {/* Directions content */}
        <div className="mx-auto w-full max-w-content py-40">
          <h3 className="w-full pb-8 font-display font-bold text-sm tracking-[0.8px]">
            Pour vous rendre à notre local d&apos;esthétique automobile, rien de
            plus simple !
          </h3>

          <h4 className="w-full pb-4 font-display font-bold text-xs tracking-[0.7px]">
            En voiture :
          </h4>
          <ul className="w-full list-disc pb-16 ps-[21px] font-content font-normal text-xs">
            <li className="pb-4">
              En provenance de La Rochelle direction Rochefort, ou de Rochefort
              direction La Rochelle, quittez la N137 en prenant la sortie Aytré
              – Zone de Bel Air et dirigez vous vers l&apos;entrée de la zone.
            </li>
            <li className="pb-4">
              Au premier rondpoint de la zone, une centaine de mètres après le
              garage et la station-service Total, tournez une première fois à
              droite. Vous passerez alors devant le restaurant New Asie et le
              marchand de spa Carré Bleu.
            </li>
            <li className="pb-4">
              Au rondpoint, tournez une nouvelle fois à droite et filez
              jusqu&apos;au bout de la rue Le Verrier.
            </li>
          </ul>

          <h4 className="w-full pb-4 font-display font-bold text-xs tracking-[0.7px]">
            En transports en commun :
          </h4>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Vous pouvez également utiliser le réseau de bus Yelo au départ de La
            Rochelle, en direction de Aytré, Zone de Belle Air. La ligne Illico
            1a en provenance de La Pallice et la ligne Illico 1b en provenance
            de Laleu ont leur terminus à Aytré Zone de Belle Air.
          </p>

          <hr className="mb-16 border-t border-primary-stroke" />

          <p className="w-full pb-16 font-content font-normal text-xs">
            Nous sommes situés sur la parcelle se trouvant entre
            l&apos;entreprise de peinture IsoFace 17 et le contrôle technique
            automobile Dekra, sur votre gauche. Notre centre d&apos;esthétique
            automobile est implanté dans le bâtiment le plus à droite derrière
            les véhicules exposés par le revendeur Angle Automobile.
          </p>
        </div>

        {/* Info cards row */}
        <div className="flex w-full max-w-container flex-col gap-20 md:flex-row">
          {/* Horaires */}
          <Card variant="raised" className="flex-1 p-24 md:h-[196px]">
            <h3 className="pb-8 font-display font-bold text-sm tracking-[0.8px]">
              Horaires d&apos;ouverture
            </h3>
            <div className="font-content text-xs text-primary-foreground">
              <p>
                Lun - Ven : <span className="font-bold">08h30 / 18h30</span>
              </p>
              <p>
                Sam : <span className="font-bold">09h00 / 12h30</span>
              </p>
              <p>
                Dim : <span className="font-bold">Fermé</span>
              </p>
            </div>
          </Card>

          {/* Contact */}
          <Card variant="raised" className="flex-1 p-24">
            <h3 className="pb-8 font-display font-bold text-sm tracking-[0.8px]">
              Contact
            </h3>
            <div className="flex flex-col gap-12 font-content text-xs text-primary-foreground">
              <a href="tel:+33611489861" className="underline">
                +33 6 11 48 98 61
              </a>
              <a
                href="mailto:atelier.colibrille.17@gmail.com"
                className="underline"
              >
                atelier.colibrille.17@gmail.com
              </a>
              <p>2 rue Le Verrier, 17440 Aytré</p>
              <p>SIRET : 100 817 677 844 48</p>
            </div>
          </Card>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
