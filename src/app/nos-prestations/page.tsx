import type { Metadata } from "next";
import { Footer, PageHero } from "@/components/layout";

export const metadata: Metadata = {
  title: "Nos Prestations | Colibrille - Detailing Automobile Aytré",
  description:
    "Découvrez toutes nos prestations de detailing : nettoyage intérieur/extérieur, rénovation carrosserie, cuirs, protection céramique. Atelier Colibrille à Aytré.",
};
import { ContactCTASection } from "@/components/specific";
import FullWidthSection from "@/components/FullWidthSection";
import { reader } from "@/lib/keystatic-reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

const CTA_HREF = "#contact-cta";

const defaultSections = [
  { slug: "nettoyage", title: "Nettoyage intérieur/extérieur", imageAlt: "Nettoyage intérieur et extérieur automobile" },
  { slug: "carrosserie", title: "Rénovation de la carrosserie", imageAlt: "Rénovation de carrosserie automobile" },
  { slug: "cuirs", title: "Rénovation des cuirs", imageAlt: "Rénovation des cuirs automobiles" },
  { slug: "ceramique", title: "Protection céramique", imageAlt: "Protection céramique automobile" },
];

export default async function NosPrestations() {
  const orderData = await reader.singletons.prestationsOrder.read();
  const orderedSlugs = orderData?.items?.map((item) => item.slug)
    ?? ['nettoyage', 'carrosserie', 'cuirs', 'ceramique'];

  const prestations = await Promise.all(
    orderedSlugs.map(async (slug) => {
      const p = await reader.collections.prestations.read(slug);
      if (!p) return null;
      const contentDoc = p.content ? await p.content() : null;
      return { ...p, slug, contentDoc };
    })
  );
  const sorted = prestations.filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <>
      <PageHero
        title="Nos prestations"
        epigraph="Parce que votre voiture mérite le meilleur traitement"
      />

      <section className="section-outer flex flex-col items-center gap-2 bg-primary-base pt-24 pb-40">
        {sorted.length > 0 ? (
          sorted.map((item) => {
            const img = item.image && item.image !== 'null'
              ? `/assets/images/prestations/${item.image}`
              : `/assets/images/prestations/${item.slug}.jpg`;
            const meta = defaultSections.find((d) => d.slug === item.slug);
            return (
              <FullWidthSection
                key={item.slug}
                id={item.slug}
                withTopPicture
                withCallToAction
                image={img}
                imageAlt={meta?.imageAlt ?? item.title}
                ctaHref={CTA_HREF}
              >
                <h2 className="w-full pb-16 text-center font-display font-bold text-md tracking-[1px]">
                  {item.title}
                </h2>
                {item.contentDoc ? (
                  <div className="keystatic-content w-full">
                    <DocumentRenderer document={item.contentDoc} />
                  </div>
                ) : (
                  <p className="w-full pb-16 font-content font-normal text-xs">
                    {item.title}
                  </p>
                )}
              </FullWidthSection>
            );
          })
        ) : (
          <>
            {/* Nettoyage */}
            <FullWidthSection
              id="nettoyage"
              withTopPicture
              withCallToAction
              image="/assets/images/prestations/nettoyage.jpg"
              imageAlt="Nettoyage intérieur et extérieur automobile"
              ctaHref={CTA_HREF}
            >
              <h2 className="w-full pb-16 text-center font-display font-bold text-md tracking-[1px]">
                Nettoyage intérieur/extérieur
              </h2>
              <h3 className="w-full pb-8 font-display font-bold text-sm tracking-[0.8px]">
                L&apos;intérieur :
              </h3>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Retrouvez le plaisir de conduire dans une voiture comme neuve ! Lors
                de nos prestations, chaque élément de votre intérieur est choyé :
                aspiration complète de l&apos;habitacle et du coffre, dépoussiérage
                minutieux de chaque élément, nettoyage des plastiques et vitres avec
                produits adaptés, traitement des moquettes, tapis et tissus en
                profondeur grâce à notre procédé d&apos;injection/extraction. Quant
                aux cuirs, ils reçoivent un nettoyage doux et méticuleux, grâce à un
                soin adapté, et protégés par une lotion spécifique.
              </p>
              <h3 className="w-full pb-8 font-display font-bold text-sm tracking-[0.8px]">
                L&apos;extérieur :
              </h3>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Chez Colibrille, le nettoyage extérieur de chaque véhicule est
                réalisé entièrement à la main, selon un protocole rigoureux, pensé
                pour préserver l&apos;intégralité de la carrosserie.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                L&apos;utilisation de produits hauts de gammes et reconnus dans le
                milieu du detailing permet de décontaminer efficacement
                l&apos;ensemble des surfaces extérieures, tout en ravivant
                l&apos;éclat de la peinture, sans aucun risque d&apos;altération.
              </p>
            </FullWidthSection>

            {/* Carrosserie */}
            <FullWidthSection
              id="carrosserie"
              withTopPicture
              withCallToAction
              image="/assets/images/prestations/carrosserie.jpg"
              imageAlt="Rénovation de carrosserie automobile"
              ctaHref={CTA_HREF}
            >
              <h2 className="w-full pb-16 text-center font-display font-bold text-md tracking-[1px]">
                Rénovation de la carrosserie
              </h2>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Avec le temps, les UV, les abrasions du vent, des feuilles, et du
                film routier engendrent des microrayures sur la carrosserie de votre
                auto, et de l&apos;oxydation pouvant agresser son vernis. Cela se
                traduit souvent par des hologrammes visibles, voire même un
                ternissement de la peinture.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Chez Colibrille, nous vous proposons un large panel de services vous
                permettant de corriger les défauts de surface et de restaurer la
                brillance de votre carrosserie. Les techniques de polissage, de
                lustrage et de traitements de la carrosserie permettent de redonner
                de la profondeur au vernis sur tous les types de véhicules.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Les équipements et le matériel de notre atelier d&apos;esthétique
                nous permettent de nous adapter à chaque problématique rencontrée,
                nous permettent de vous proposer des prestations haut de gamme
                permettant ainsi un résultat optimum !
              </p>
            </FullWidthSection>

            {/* Cuirs */}
            <FullWidthSection
              id="cuirs"
              withTopPicture
              withCallToAction
              image="/assets/images/prestations/cuirs.jpg"
              imageAlt="Rénovation des cuirs automobiles"
              ctaHref={CTA_HREF}
            >
              <h2 className="w-full pb-16 text-center font-display font-bold text-md tracking-[1px]">
                Rénovation des cuirs
              </h2>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Le cuir est une matière vivante, il a une peau, une mémoire, une
                respiration. Comme toute peau, il a besoin d&apos;être nourri,
                hydraté et entretenu régulièrement pour traverser le temps avec
                élégance.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Pour redonner vie aux cuirs fatigués, desséchés ou ternis avec le
                temps, nous mettons en oeuvre des produits professionnels et un
                savoir faire précis. Chaque cuir est ainsi nettoyé en profondeur,
                débarrassé de ses impuretés pour recevoir les soins dont il a
                réellement besoin.
              </p>
            </FullWidthSection>

            {/* Céramique */}
            <FullWidthSection
              id="ceramique"
              withTopPicture
              withCallToAction
              image="/assets/images/prestations/ceramique.jpg"
              imageAlt="Protection céramique automobile"
              ctaHref={CTA_HREF}
            >
              <h2 className="w-full pb-16 text-center font-display font-bold text-md tracking-[1px]">
                Protection céramique
              </h2>
              <p className="w-full pb-16 font-content font-normal text-xs">
                La protection céramique haut de gamme proposée par Colibrille assure
                une défense optimale de la carrosserie contre les agressions
                extérieures du quotidien telles que les traces d&apos;eau, le film
                routier, le sel, le goudron, la résine ou encore les insectes.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Grâce à son effet déperlant, ce traitement créé une barrière
                protectrice qui réduit fortement l&apos;adhérence des impuretés à la
                surface du véhicule.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                La céramique agit également en lissant les micro-imperfections de la
                carrosserie la rendant ainsi hydrophobe et nettement plus facile à
                entretenir au quotidien.
              </p>
            </FullWidthSection>
          </>
        )}
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
