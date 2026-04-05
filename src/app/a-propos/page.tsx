import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "À Propos | Colibrille - Atelier Detailing Aytré",
  description:
    "Découvrez Colibrille, atelier de detailing automobile fondé par Corentin Seibel. Passion, rigueur et expertise au service de votre véhicule à Aytré.",
};
import { Footer, PageHero, SectionHeading } from "@/components/layout";
import { ContactCTASection, MapAddressLink } from "@/components/specific";
import Card from "@/components/Card";
import FullWidthSection from "@/components/FullWidthSection";
import { getSettings } from "@/lib/settings";
import { reader } from "@/lib/keystatic-reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

const defaultCertifications = [
  "/assets/images/a-propos/certification-1.jpg",
  "/assets/images/a-propos/certification-2.jpg",
  "/assets/images/a-propos/certification-3.jpg",
];

export default async function APropos() {
  const settings = await getSettings();
  const apropos = await reader.singletons.aproposContent.read();
  const certData = await reader.singletons.certificationsOrder.read();
  const cmsCerts = certData?.items ?? [];

  const telHref = `tel:+33${settings.phone.replace(/\s/g, '').replace(/^0/, '')}`;

  return (
    <>
      <PageHero
        title="À propos"
        epigraph="Parce que derrière chaque soin, il y a une passion"
      />

      {/* Section 1: Bio */}
      <section className="section-outer bg-primary-base pt-24 pb-40">
        <FullWidthSection
          leadingPicture={apropos?.photo ? `/assets/images/a-propos/${apropos.photo}` : "/assets/images/a-propos/corentin-portrait.jpg"}
          leadingPictureAlt="Corentin, fondateur de Colibrille"
        >
          {apropos?.content ? (
            <div className="keystatic-content w-full">
              <DocumentRenderer document={await apropos.content()} />
            </div>
          ) : (
            <>
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
            </>
          )}
        </FullWidthSection>
      </section>

      {/* Section 2: Diplômes et certifications */}
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Mes diplômes et certifications" />

        <div className="flex w-full max-w-container flex-col gap-20 md:flex-row">
          {(cmsCerts.length > 0
            ? cmsCerts.map((c) => c.image ? `/assets/images/a-propos/${c.image}` : '')
            : defaultCertifications
          ).filter(Boolean).map((src, i) => (
            <Card key={src || i} variant="raised" className="min-w-[120px] flex-[1_0_0] p-8">
              <div style={{ width: "100%" }}>
                <Image
                  src={src}
                  alt={`Certification formation detailing - Corentin Seibel (${i + 1})`}
                  width={840}
                  height={594}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "var(--border-radius-atom)",
                    display: "block",
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: Informations pratiques */}
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Informations pratiques" />

        {/* Map card */}
        <Card id="map" variant="raised" className="w-full max-w-container items-stretch p-8">
          <div className="flex w-full flex-col items-center gap-8 overflow-hidden rounded-atom">
            <p className="w-full py-12 text-center font-display font-bold text-sm tracking-[0.8px]">
              Nos trouver :
            </p>
            <iframe
              src={settings.googleMapsEmbed}
              width="100%"
              height="420"
              style={{
                border: 0,
                borderRadius: "var(--border-radius-atom)",
                display: "block",
                flexShrink: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de l'atelier Colibrille à Aytré"
            />
            <div className="flex w-full items-center justify-center py-12">
              <MapAddressLink />
            </div>
          </div>
        </Card>

        {/* Directions content */}
        <div className="mx-auto w-full max-w-content py-40">
          <h3 className="w-full pb-8 font-display font-bold text-sm tracking-[0.8px]">
            {apropos?.directionsTitle ?? 'Pour vous rendre à notre local d\u2019esthétique automobile, rien de plus simple !'}
          </h3>

          <h4 className="w-full pb-4 font-display font-bold text-xs tracking-[0.7px]">
            En voiture :
          </h4>
          {apropos?.directionsCar ? (
            <div className="keystatic-content w-full pb-16">
              <DocumentRenderer document={await apropos.directionsCar()} />
            </div>
          ) : (
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
          )}

          <h4 className="w-full pb-4 font-display font-bold text-xs tracking-[0.7px]">
            En transports en commun :
          </h4>
          <p className="w-full pb-16 font-content font-normal text-xs">
            {apropos?.directionsTransport ?? 'Vous pouvez également utiliser le réseau de bus Yelo au départ de La Rochelle, en direction de Aytré, Zone de Belle Air. La ligne Illico 1a en provenance de La Pallice et la ligne Illico 1b en provenance de Laleu ont leur terminus à Aytré Zone de Belle Air.'}
          </p>

          <hr className="mb-16 border-t border-primary-stroke" />

          <p className="w-full pb-16 font-content font-normal text-xs">
            {apropos?.directionsExtra ?? 'Nous sommes situés sur la parcelle se trouvant entre l\u2019entreprise de peinture IsoFace 17 et le contrôle technique automobile Dekra, sur votre gauche. Notre centre d\u2019esthétique automobile est implanté dans le bâtiment le plus à droite derrière les véhicules exposés par le revendeur Angle Automobile.'}
          </p>
        </div>

        {/* Info cards row */}
        <div id="contact" className="mx-auto flex w-full max-w-content flex-col items-stretch gap-20 md:flex-row">
          {/* Horaires */}
          <Card variant="raised" className="flex-1 p-24">
            <div className="flex w-full flex-col items-start gap-8">
              <div className="w-full pb-8">
                <p className="font-display font-bold text-sm tracking-[0.8px]">
                  Horaires d&apos;ouverture
                </p>
              </div>
              <p className="whitespace-nowrap font-content text-xs text-primary-foreground">
                <span className="font-normal">Lun - Ven : </span>
                <span className="font-bold">{settings.hoursWeek}</span>
              </p>
              <p className="whitespace-nowrap font-content text-xs text-primary-foreground">
                <span className="font-normal">Sam : </span>
                <span className="font-bold">{settings.hoursSat}</span>
              </p>
              <p className="whitespace-nowrap font-content text-xs text-primary-foreground">
                <span className="font-normal">Dim : </span>
                <span className="font-bold">{settings.hoursSun}</span>
              </p>
            </div>
          </Card>

          {/* Contact */}
          <Card variant="raised" className="flex-1 p-24">
            <div className="flex w-full flex-col items-start gap-8">
              <div className="w-full pb-8">
                <p className="font-display font-bold text-sm tracking-[0.8px]">
                  Contact
                </p>
              </div>
              <div className="flex w-full flex-col items-start gap-12 font-content font-normal text-xs text-primary-foreground">
                <a href={telHref} className="underline">
                  {settings.phone}
                </a>
                <a
                  href={`mailto:${settings.email}`}
                  className="underline"
                >
                  {settings.email}
                </a>
                <a
                  href={settings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-4 whitespace-nowrap font-content font-normal text-xs text-primary-foreground underline"
                >
                  {settings.address}
                  <Icon name="external-link" size="small" />
                </a>
                <div>SIRET : {settings.siret}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
