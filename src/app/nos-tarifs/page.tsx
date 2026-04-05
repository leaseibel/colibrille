export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Tarifs | Colibrille - Devis Gratuit Detailing Aytré",
  description:
    "Tarifs personnalisés en detailing automobile. Devis gratuit après diagnostic de votre véhicule. Contactez Colibrille à Aytré.",
};
import { Footer, PageHero, SectionHeading } from "@/components/layout";
import { ContactCTASection, Step } from "@/components/specific";
import Card from "@/components/Card";
import FullWidthSection from "@/components/FullWidthSection";
import { reader } from "@/lib/keystatic-reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function NosTarifs() {
  const tarifs = await reader.singletons.tarifsContent.read();
  return (
    <>
      <PageHero
        title="Nos tarifs"
        epigraph="Parce que vous méritez une approche sur-mesure*"
        tag="* Devis gratuit"
      />

      {/* Section 1: Pourquoi nous rencontrer */}
      <section className="section-outer bg-primary-base pt-24">
        <FullWidthSection
          trailingPicture={tarifs?.photo || "/assets/images/tarifs/corentin.jpg"}
          trailingPictureAlt="Corentin, fondateur de Colibrille"
        >
          <h2 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Pourquoi nous avons besoin de vous rencontrer ?
          </h2>
          {tarifs?.content ? (
            <div className="keystatic-content w-full">
              <DocumentRenderer document={await tarifs.content()} />
            </div>
          ) : (
            <>
              <p className="w-full pb-16 font-content font-normal text-xs">
                Chez Colibrille, nous avons fait le choix de ne pas proposer de
                forfaits standardisés, contrairement à de nombreux acteurs du
                domaine du detailing automobile. Pourquoi ? Parce que chaque véhicule
                est unique, tout comme les attentes, les besoins, et les exigences de
                son propriétaire.
              </p>
              <p className="w-full pb-16 font-content font-normal text-xs">
                L&apos;état général du véhicule, son utilisation, son kilométrage,
                les matériaux présents à l&apos;intérieur ou encore le niveau de
                résultat souhaité sont autant de facteurs qui influencent le travail
                à réaliser.
              </p>
              <p className="w-full font-content font-bold text-xs">
                C&apos;est pourquoi nous privilégions une approche entièrement
                personnalisée et sur mesure.
              </p>
            </>
          )}
        </FullWidthSection>
      </section>

      {/* Section 2: Cahier des charges */}
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading title="La définition de votre cahier des charges" />

        <div className="mx-auto w-full max-w-content text-center">
          <p className="pb-8 font-content font-normal text-sm text-ghost-foreground">
            Avant toute intervention, nous prenons le temps de rencontrer nos
            clients et d&apos;effectuer un diagnostic complet du véhicule.
          </p>
          <p className="font-content font-bold text-sm text-ghost-foreground">
            Cette étape permet de :
          </p>
        </div>

        <div className="flex w-full max-w-container flex-col items-center gap-24 py-40 md:flex-row md:flex-wrap md:justify-center">
          {[
            "Analyser l\u2019état réel du véhicule",
            "Comprendre vos attentes et vos priorités",
            "Vous conseiller sur les prestations adaptées",
            "Établir un devis précis et transparent",
          ].map((label) => (
            <div
              key={label}
              className="flex min-w-[160px] max-w-[200px] flex-1 flex-col items-center gap-8"
            >
              <div className="relative h-[80px] w-[60px]">
                <Image
                  src="/assets/images/pictograms/pictogram.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center font-content font-bold text-sm text-ghost-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-content flex-col items-start">
          <p className="w-full text-center font-content font-normal text-sm">
            Cette rencontre est essentielle : elle nous permet de vous proposer
            une solution réellement adaptée et de garantir un résultat à hauteur
            de vos exigences. Si vous souhaitez obtenir un tarif, nous vous
            invitons à prendre rendez-vous afin de faire ensemble le tour de
            votre véhicule et définir ensemble vos exigences.
          </p>
        </div>
      </section>

      {/* Section 3: Votre devis en trois étapes */}
      <section className="section-outer flex flex-col items-center bg-primary-base py-40">
        <SectionHeading
          title="Votre devis en trois étapes"
          withTag
          tagLabel="* Devis gratuit"
        />

        <div className="step-grid">
          <Card variant="raised" className="min-w-[120px] flex-[1_0_0]">
            <Step
              number="1"
              title="Prise de contact"
              description="Un premier échange par téléphone ou directement à l'atelier nous permet d'identifier votre besoin et de vous orienter vers les solutions les plus adaptées."
            />
          </Card>
          <Card variant="raised" className="min-w-[120px] flex-[1_0_0]">
            <Step
              number="2"
              title="Diagnostic"
              description="Sur rendez-vous, ce diagnostic nous permet d'évaluer son état général et de définir ensemble les prestations nécessaires en fonction du résultat souhaité."
            />
          </Card>
          <Card variant="raised" className="min-w-[120px] flex-[1_0_0]">
            <Step
              number="3"
              title="Devis personnalisé"
              description="À l'issue du rendez-vous, nous vous remettons un devis détaillé et transparent, entièrement adapté à votre véhicule, à vos besoins et à vos attentes."
            />
          </Card>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
