import { Footer, PageHero } from "@/components/layout";
import { ContactCTASection } from "@/components/specific";
import FullWidthSection from "@/components/FullWidthSection";

const CTA_HREF = "mailto:atelier.colibrille.17@gmail.com";

export default function FAQ() {
  return (
    <>
      <PageHero
        title="Foire aux questions"
        epigraph="Parce que chaque question mérite une réponse claire"
      />

      <section className="section-outer flex flex-col items-center gap-2 bg-primary-base pt-24 pb-40">
        {/* FAQ 1 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Dois-je prendre rendez-vous pour faire établir un devis par
            l&apos;équipe de Colibrille ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Afin de vous garantir un service de qualité et de vous apporter
            toute l&apos;attention que vous méritez, nous vous recommandons de
            prendre rendez vous avant votre visite à notre atelier. Cela nous
            permet de nous rendre pleinement disponibles pour vous, de préparer
            en amont l&apos;ensemble des éléments nécessaire pour répondre de
            manière complète et précise à toutes vos interrogations, devant
            votre véhicule. Un rendez-vous vous assure un échange personnalisé,
            sans attente et dans des conditions optimales.
          </p>
        </FullWidthSection>

        {/* FAQ 2 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Quelle est la différence entre un car staging et un detailing ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Le car staging et le detailing automobile sont deux prestations de
            rénovation esthétique qui visent à améliorer l&apos;apparence
            d&apos;un véhicule, mais elles ne répondent pas au même niveau
            d&apos;exigence.
          </p>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Le car staging consiste à réaliser un polissage du véhicule afin de
            raviver la brillance du vernis et atténuer la majorité de
            micro-rayures et défauts superficiels. Cette prestation permis
            d&apos;obtenir un résultat très esthétique, avec une peinture plus
            brillante et un véhicule visuellement valorisé.
          </p>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Le detailing quant à lui, va beaucoup plus loin. Il s&apos;agit
            d&apos;un travail de correction, beaucoup plus approfondi du vernis,
            permettant de supprimer jusqu&apos;à environ 98% des défauts et
            micro-rayures. Le polissage est réalisé en plusieurs étapes afin
            d&apos;obtenir une profondeur de brillance, une clarté et une
            finition supérieure.
          </p>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Ce niveau d&apos;exigence demande naturellement plus de temps, plus
            de précision et un travail plus poussé, afin d&apos;atteindre un
            résultat proche de l&apos;état neuf et révéler pleinement le
            potentiel esthétique du véhicule.
          </p>
        </FullWidthSection>

        {/* FAQ 3 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Quels types de véhicules peuvent bénéficier des services de
            l&apos;atelier Colibrille ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Chez Colibrille, nous proposons diverses prestations, allant du
            nettoyage, au polissage, en passant également par la pose de
            traitements céramique ou de cire et même de l&apos;entretien et la
            réparation de vos cuirs. Nos services s&apos;adressent à tous types
            de véhicules, sans aucune exception. Qu&apos;il s&apos;agisse
            d&apos;un véhicule neuf à protéger, d&apos;un véhicule
            d&apos;occasion à sublimer, d&apos;un véhicule en location à
            restituer, ou encore d&apos;un véhicule de collection nécessitant
            une attention particulère, chaque automobile est la bienvenue chez
            Colibrille. Nous adaptions chacune de nos prestations aux besoins
            spécifiques du véhicule et aux attentes de son propriétaire, afin de
            proposer un service entièrement personnalisé. Chez Colibrille,
            chaque demande est unique, et bénéficie d&apos;un accompagnement sur
            mesure.
          </p>
        </FullWidthSection>

        {/* FAQ 4 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Comment établissez-vous votre devis ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            En detailing automobile, il est impossible de proposer de tarif
            unique, car aucun véhicule ne nécessite le même travail. Le prix
            dépend donc du temps nécessaire pour réaliser la prestation dans les
            règles de l&apos;art. Plus le véhicule demande de préparation, de
            correction ou de protection, plus le temps sera important. A cela
            peuvent s&apos;ajouter certains produits spécifiques utilisés pour
            votre véhicule. Le devis est toujours expliqué et détaillé afin que
            vous sachiez précisément ce qui est prévu et pourquoi. Nous
            établissons nos devis après avoir inspecté le véhicule et échangé
            avec son propriétaire sur les prestations à effectuer.
          </p>
        </FullWidthSection>

        {/* FAQ 5 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Pourquoi n&apos;y a-t-il pas de forfaits ou de tarifs affichés sur
            votre site ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Dans le domaine du detailing, chaque véhicule est unique. Son état,
            son historique, son niveau d&apos;encrassement, la présence de
            micro-rayures, de défauts ou de contaminations varient d&apos;une
            automobile à l&apos;autre. Pour vous proposer un travail réellement
            adapté et un résultat à la hauteur de vos attentes, il est
            indispensable que nous évaluions à l&apos;atelier l&apos;entretien
            et la correction à y apporter. Comme dans tout métier artisanal, un
            devis sérieux ne peut pas être standardisé. Chez Colibrille, nous
            réalisons donc un devis sur mesure, afin de vous garantir un prix
            juste, transparent et parfaitement adapté aux besoins réels de votre
            véhicule.
          </p>
        </FullWidthSection>

        {/* FAQ 6 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Quels sont les produits que vous utilisez. Peut-on les retrouver
            dans le commerce ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Chez Colibrille, nous travaillons exclusivement avec des produits de
            gamme professionnelle, sélectionnés auprès de spécialistes reconnus
            du detailing automobile. Chaque produit est choisi pour son
            efficacité, sa sécurité et sa capacité à préserver durablement les
            matériaux des véhicules qui nous sont confiés. Associés à un
            outillage spécifique et professionnel, ces équipements nous
            permettent de garantir un niveau de finition élevé et un résultat
            optimal pour chaque véhicule.
          </p>
        </FullWidthSection>

        {/* FAQ 7 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Quelles sont les modalités de règlement proposés par Colibrille ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Vous pouvez régler vos prestations par carte bancaire, par virement
            instantané, ou par chèque. Nous vous demanderons un acompte de 30% à
            la signature du devis pour confirmer la prestation. Le solde de 70%
            devra être réglé lors de la restitution de votre véhicule, après
            avoir fait un tour complet ensemble.
          </p>
        </FullWidthSection>

        {/* FAQ 8 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Quelles sont les garanties des prestations réalisées par
            l&apos;atelier Colibrille ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Les prestations de nettoyage intérieur et extérieur, ainsi que les
            travaux de polissage et de lustrage, sont réalisées entièrement à la
            main. En raison de la nature artisanale de ces interventions et des
            conditions d&apos;utilisation ultérieures du véhicule, elles ne font
            pas l&apos;objet d&apos;une garantie dans le temps. Il appartient
            ensuite au client d&apos;assurer un entretien adapté et régulier de
            son véhicule afin de préserver la qualité du résultat obtenu.
          </p>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Le traitement céramique bénéficie d&apos;une durée de vie estimée à
            plus ou moins trois ans, sous réserve du respect des conditions
            d&apos;entretien. Pour maintenir son efficacité, un contrôle annuel
            obligatoire doit être effectué dans notre atelier. Lors de la
            restitution du véhicule, les consignes d&apos;entretien et de lavage
            sont expliquées au client. Leur respect conditionne la validité du
            suivi. Nous proposons une garantie satisfaction sur les prestations
            de céramique, de cire et de lustrage. Si après la prestation un
            défaut lié à notre intervention est constaté, un ajustement pourra
            être réalisé. Cette demande devra être formulée dans un délai
            maximum de 7 jours suivant la restitution du véhicule.
          </p>
        </FullWidthSection>

        {/* FAQ 9 */}
        <FullWidthSection withCallToAction ctaLabel="En savoir plus" ctaHref={CTA_HREF}>
          <h6 className="w-full pb-16 font-display font-bold text-md tracking-[1px]">
            Votre atelier est-il facilement accessible ?
          </h6>
          <p className="w-full pb-16 font-content font-normal text-xs">
            Nous avons choisi d&apos;implanter notre atelier dans la zone de
            Belle Aire, d&apos;Aytré afin de vous garantir un accès simple et
            rapide. Situé à quelques minutes de La Rochelle, l&apos;atelier est
            directement accessible par la rocade reliant La Rochelle à Rochefort
            RN237. Pour plus de confort, vous pouvez également utiliser les
            réseaux de bus si vous résidez à La Rochelle (ligne Illico 1).
          </p>
        </FullWidthSection>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
