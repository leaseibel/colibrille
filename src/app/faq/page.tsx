import { Footer, PageHero } from "@/components/layout";
import { ContactCTASection } from "@/components/specific";

export default function FAQ() {
  return (
    <>
      <PageHero
        title="FAQ"
        epigraph="Toutes vos questions, nos réponses"
      />
      <ContactCTASection />
      <Footer />
    </>
  );
}
