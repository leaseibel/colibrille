import { SectionHeading } from "@/components/layout";
import Button from "@/components/Button";
import { PaymentMethodsBanner } from "@/components/specific";
import { getSettings } from "@/lib/settings";

export default async function ContactCTASection() {
  const settings = await getSettings();
  const telHref = `tel:+33${settings.phone.replace(/\s/g, '').replace(/^0/, '')}`;

  return (
    <section
      id="contact-cta"
      className="section-outer flex w-full flex-col items-center py-40"
      style={{
        background:
          "linear-gradient(to top, var(--color-primitive-deep-green-900), var(--color-primitive-deep-green-800))",
      }}
    >
      <div className="mx-auto flex w-full max-w-container flex-col items-center gap-0">
        <SectionHeading
          title="Parce que votre satisfaction passe par une écoute attentive."
          subtitle="Rencontrons-nous."
          inverted
          className="pb-32"
        />

        <div className="flex w-full flex-col items-center gap-40">
          <div className="text-center font-content font-medium text-sm text-brand-fg-neutral">
            <p>
              Appelez-nous pour fixer un rendez-vous diagnostic à notre atelier
              d&apos;Aytré.
            </p>
            <p>Accueil sur rendez-vous — Diagnostic et devis gratuits.</p>
          </div>

          <Button
            variant="secondary"
            href={telHref}
            className="shrink-0"
          >
            Appelez le {settings.phone}
          </Button>

          <PaymentMethodsBanner />
        </div>
      </div>
    </section>
  );
}
