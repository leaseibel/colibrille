import { Footer, SectionHeading } from "@/components/layout";

export default function APropos() {
  return (
    <>
      <div className="pt-[var(--layout-header-height)] bg-primary-base">
        <div className="max-w-container mx-auto px-24 py-40 flex flex-col items-center gap-32">
          <SectionHeading title="À propos" />
          <p className="text-sm text-primary-foreground opacity-70 text-center max-w-[600px]">
            Apprenez-en plus sur Colibrille et notre passion pour
            l&apos;esthétique automobile.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
