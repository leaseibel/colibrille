export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import { Footer, SectionHeading } from "@/components/layout";
import { EpigraphBanner, FeedbackButton, PrestationSummary, Testimonial } from "@/components/specific";
import { reader } from "@/lib/keystatic-reader";

export const metadata: Metadata = {
  title: "Colibrille | Detailing Automobile à Aytré",
  description:
    "Atelier de detailing automobile professionnel à Aytré. Nettoyage, polissage, protection céramique et rénovation de cuirs. Devis gratuit sur rendez-vous.",
};

const defaultPrestations = [
  {
    title: "Nettoyage intérieur/extérieur",
    description:
      "Redonnez de l'éclat et un confort durable à votre véhicule grâce à nos prestations complètes de nettoyage. Nous traitons chaque recoin avec minutie pour vous offrir un habitacle sain et une carrosserie parfaitement propre.",
    href: "/nos-prestations#nettoyage",
    imageSrc: "/assets/images/prestations/nettoyage.jpg",
  },
  {
    title: "Rénovation de la carrosserie",
    description:
      "Valorisez votre patrimoine automobile en lui redonnant une apparence proche du neuf. Grâce à nos techniques de polissage professionnel, nous supprimons les micro-rayures pour raviver la brillance de votre peinture.",
    href: "/nos-prestations#carrosserie",
    imageSrc: "/assets/images/prestations/carrosserie.jpg",
  },
  {
    title: "Rénovation des cuirs",
    description:
      "Le nettoyage en profondeur et la réparation des imperfections permettent de prolonger la durée de vie de votre intérieur. Nous nourrissons vos selleries pour leur redonner souplesse et couleur, tout en gagnant en confort.",
    href: "/nos-prestations#cuirs",
    imageSrc: "/assets/images/prestations/cuirs.jpg",
  },
  {
    title: "Protection céramique",
    description:
      "Protégez durablement votre carrosserie contre les agressions extérieures, les UV et contaminants. Cette barrière hydrophobe renforce la brillance de votre véhicule, préserve sa peinture et facilite ses futurs entretiens réguliers.",
    href: "/nos-prestations#ceramique",
    imageSrc: "/assets/images/prestations/ceramique.jpg",
  },
];

const defaultTestimonials = [
  {
    author: "Laeticia",
    quote:
      "La minutie de Corentin et sa passion pour les automobiles se sentent dès le premier contact. Je n'ai pas hésité à lui laisser mon véhicule pour un nettoyage intérieur et extérieur. J'ai été bluffée par le résultat! Je recommande les yeux fermés.",
  },
  {
    author: "Bastien",
    quote:
      "Corentin est très professionnel et a été très à l'écoute de ma demande pour le polissage de mon véhicule. Je reviendrai.",
  },
  {
    author: "Jean-Jacques",
    quote:
      "J'ai confié mon véhicule à l'entreprise Colibrille, que j'ai récemment découverte. Située à côté de chez moi, ce fut très pratique de déposer mon véhicule le matin pour le récupérer le soir. J'ai été très surpris par la qualité de la prestation. Merci au gérant pour son accueil chaleureux.",
  },
];

export default async function Home() {
  // Hero
  const hero = await reader.singletons.heroContent.read();
  const subtitle = hero?.subtitle ?? 'Votre nouveau centre d\u2019esthétique automobile sur Aytré (17).';

  // Testimonials
  const testimonialsData = await reader.singletons.testimonialsContent.read();
  const testimonials = testimonialsData?.items && testimonialsData.items.length > 0
    ? testimonialsData.items.map((t) => ({ author: t.author, quote: t.content }))
    : defaultTestimonials;

  // Prestation images from Keystatic
  const knownSlugs = ['nettoyage', 'carrosserie', 'cuirs', 'ceramique'] as const;
  const cmsPrestations = await Promise.all(
    knownSlugs.map((slug) => reader.collections.prestations.read(slug))
  );
  const prestationImages: Record<string, string> = {};
  knownSlugs.forEach((slug, i) => {
    const img = cmsPrestations[i]?.image;
    prestationImages[slug] = img && img !== 'null'
      ? (img.startsWith('/') ? img : `/assets/images/prestations/${img}`)
      : `/assets/images/prestations/${slug}.jpg`;
  });

  // Landing prestations (ordered)
  const orderData = await reader.singletons.prestationsOrder.read();
  const prestations = orderData?.items && orderData.items.length > 0
    ? orderData.items.map((item) => ({
        title: cmsPrestations[knownSlugs.indexOf(item.slug as typeof knownSlugs[number])]?.title ?? item.slug,
        description: item.summary,
        href: `/nos-prestations#${item.slug}`,
        imageSrc: prestationImages[item.slug] ?? `/assets/images/prestations/${item.slug}.jpg`,
      }))
    : defaultPrestations;

  return (
    <>
      {/* SECTION 1: HERO */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          paddingTop: 'var(--layout-header-height)',
          background: 'linear-gradient(to top, var(--color-primitive-deep-green-900), var(--color-primitive-deep-green-800))',
        }}
      >
        {/* Decorative background shape */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '803px',
            height: '523px',
            pointerEvents: 'none',
            zIndex: 0,
            transform: 'scaleY(-1) rotate(180deg)',
            transformOrigin: 'center center',
          }}
          aria-hidden="true"
        >
          <Image
            src="/assets/shapes/shape-hero-bg.svg"
            alt=""
            fill
            style={{ objectFit: 'fill' }}
            priority
          />
        </div>

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 1 }} className="mx-auto flex w-full max-w-container items-center justify-center px-16 lg:px-24">
          {/* Left car */}
          <div className="hero-car" style={{ position: 'relative' }}>
            <Image
              src="/assets/images/car-golf.png"
              alt="Golf"
              width={519}
              height={333}
              style={{
                position: 'absolute',
                bottom: '-18%',
                right: '-65px',
                left: 'auto',
                width: '200%',
                height: 'auto',
                maxWidth: 'none',
              }}
              priority
            />
          </div>

          {/* Center hero body */}
          <div className="hero-body flex flex-1 flex-col items-center justify-center gap-32 text-center min-h-[320px] py-40 px-16 md:px-24">
            <Logo withBaseline={true} width={200} />

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--layout-gap-100)',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              color: 'var(--color-surface-ghost-inverted-foreground-neutral)',
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-family-display)',
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--font-line-height-lg)',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                width: '100%',
                whiteSpace: 'normal',
              }}>
                <span>Nettoyage</span>
                <span>• Rénovation •</span>
                <span>protection</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-family-content)',
                fontWeight: 'var(--font-weight-regular)',
                fontSize: 'var(--font-size-xs)',
                lineHeight: 'var(--font-line-height-xs)',
                width: '100%',
              }}>
                {subtitle}
              </p>
            </div>

            <div className="hero-actions">
              <Button variant="brandInset" href="/a-propos#map">
                Nous trouver
              </Button>
              <Button variant="secondary" href="/a-propos#contact-cta">
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Right car */}
          <div className="hero-car" style={{ position: 'relative' }}>
            <Image
              src="/assets/images/car-triumph.png"
              alt="Triumph"
              width={400}
              height={218}
              style={{
                position: 'absolute',
                bottom: '-6%',
                left: '-25px',
                right: 'auto',
                width: '180%',
                height: 'auto',
                maxWidth: 'none',
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: NOS PRESTATIONS */}
      <section className="section-outer flex w-full flex-col items-center bg-primary-base py-40">
        <SectionHeading title="Nos Prestations" />

        <div className="flex w-full max-w-container flex-wrap gap-20">
          <div className="prestation-row">
            {prestations.slice(0, 2).map((item) => (
              <Card key={item.title} variant="raised" className="prestation-card p-8">
                <PrestationSummary
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  image={
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={400}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  }
                />
              </Card>
            ))}
          </div>
          <div className="prestation-row">
            {prestations.slice(2, 4).map((item) => (
              <Card key={item.title} variant="raised" className="prestation-card p-8">
                <PrestationSummary
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  image={
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={400}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  }
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EPIGRAPH BANNER */}
      <EpigraphBanner className="section-outer" />

      {/* SECTION 4: ILS NOUS RECOMMANDENT */}
      <section className="section-outer flex w-full flex-col items-center bg-gradient-to-b from-primitive-green-800 to-primitive-green-900 py-40">
        <SectionHeading title="Ils nous recommandent" inverted />

        <div className="flex w-full max-w-container flex-wrap items-start justify-center gap-20 pb-24">
          {testimonials.map((t) => (
            <Card key={t.author} variant="glass" className="min-w-[280px] max-w-full flex-[1_0_280px] p-24">
              <Testimonial author={t.author} quote={t.quote} />
            </Card>
          ))}
        </div>

        <FeedbackButton href="https://share.google/FIPqEAhNOLIaYfHUU" />
      </section>

      {/* SECTION 5: FOOTER */}
      <Footer />
    </>
  );
}
