import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

export default function NosTarifs() {
  return (
    <>
      <Header />
      <main className="bg-surface-base">
        <div className="max-w-container mx-auto px-24 py-40 flex flex-col items-center gap-32">
          <SectionHeading title="Nos Tarifs" />
          <p className="text-sm text-deep-green-900/70 text-center max-w-[600px]">
            Consultez nos tarifs pour chaque prestation.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
