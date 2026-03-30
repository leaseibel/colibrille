import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/components/Testimonial";

const prestations = [
  {
    title: "Nettoyage intérieur",
    description: "Un nettoyage en profondeur de l'habitacle de votre véhicule.",
  },
  {
    title: "Nettoyage extérieur",
    description: "Lavage, décontamination et séchage soigné de la carrosserie.",
  },
  {
    title: "Rénovation",
    description: "Correction de la peinture et traitement des micro-rayures.",
  },
  {
    title: "Protection",
    description: "Application de céramique ou de cire pour protéger votre véhicule.",
  },
];

const testimonials = [
  {
    rating: 5,
    quote: "Un travail incroyable, ma voiture n'a jamais été aussi propre !",
    author: "Sophie M.",
  },
  {
    rating: 5,
    quote: "Très professionnel et minutieux. Je recommande vivement.",
    author: "Thomas L.",
  },
  {
    rating: 5,
    quote: "Service impeccable et résultat au-delà de mes attentes.",
    author: "Marie D.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-deep-green-800 to-deep-green-900 text-white">
          <div className="max-w-container mx-auto px-24 py-40 flex flex-col items-center text-center gap-24 min-h-[60vh] justify-center">
            <span className="font-display font-bold text-xl lg:text-[40px] lg:leading-[48px]">
              Colibrille
            </span>
            <p className="font-display font-medium text-xs tracking-[0.25em] uppercase text-white/70">
              Nettoyage &bull; Rénovation &bull; Protection
            </p>
            <p className="text-md text-white/80 max-w-[600px]">
              Votre nouveau centre d&apos;esthétique automobile sur Aytré (17).
            </p>
            <div className="flex flex-wrap gap-16 justify-center mt-16">
              <Button variant="inset" href="#nous-trouver">
                Nous trouver
              </Button>
              <Button variant="accent" href="#nous-contacter">
                Nous contacter
              </Button>
            </div>
          </div>
        </section>

        {/* Nos Prestations */}
        <section className="bg-surface-base">
          <div className="max-w-container mx-auto px-24 py-40 flex flex-col items-center gap-32">
            <SectionHeading title="Nos Prestations" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
              {prestations.map((item) => (
                <Card key={item.title} variant="raised">
                  <h3 className="font-display font-bold text-md mb-8">
                    {item.title}
                  </h3>
                  <p className="text-sm text-deep-green-900/70">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Epigraph banner */}
        <section className="bg-white">
          <div className="max-w-container mx-auto px-24 py-40 text-center">
            <p className="font-epigraph text-xl italic text-deep-green-900/80">
              Chaque voiture a sa propre histoire.
            </p>
            <p className="font-epigraph text-xl italic font-bold text-deep-green-900 mt-8">
              Chaque détail en est la signature.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-b from-deep-green-800 to-deep-green-900">
          <div className="max-w-container mx-auto px-24 py-40 flex flex-col items-center gap-32">
            <SectionHeading title="Ils nous recommandent" inverted />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full">
              {testimonials.map((t) => (
                <Card key={t.author} variant="glass">
                  <Testimonial
                    rating={t.rating}
                    quote={t.quote}
                    author={t.author}
                  />
                </Card>
              ))}
            </div>
            <Button variant="accent" pill href="#avis">
              Donnez-nous votre avis
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
