import Image from "next/image";
import { cn } from "@/lib/utils";
import { getSettings } from "@/lib/settings";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Link from "@/components/Link";
import Button from "@/components/Button";

type FooterProps = {
  className?: string;
};

export default async function Footer({ className }: FooterProps) {
  const settings = await getSettings();

  return (
    <footer className={cn("overflow-hidden bg-brand px-16 lg:px-24", className)}>
      <div className="mx-auto max-w-container border-t border-ghost-inverted-stroke py-40">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-40 md:grid-cols-12 md:grid-rows-2 md:gap-24 lg:grid-rows-2 lg:gap-24">
          {/* Logo + Social */}
          <div className="flex h-full flex-col justify-between md:col-span-4 md:row-span-2 lg:col-span-3 lg:row-span-2">
            <Logo withBaseline={true} width={180} />
            <div className="mt-16 flex gap-24 text-ghost-inverted-fg-neutral md:mt-0">
              <a href={`mailto:${settings.email}`} aria-label="Nous contacter par email">
                <Icon name="mail" size="x-large" />
              </a>
              <a href={settings.facebook} target="_blank" rel="noopener noreferrer" aria-label="Page Facebook Colibrille">
                <Icon name="facebook" size="x-large" />
              </a>
              <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram">
                <Icon name="instagram" size="x-large" />
              </a>
              <a href={settings.google} target="_blank" rel="noopener noreferrer" aria-label="Avis Google Colibrille">
                <div className="relative shrink-0 overflow-hidden" style={{ width: "36px", height: "36px" }}>
                  <div style={{ position: "absolute", inset: "9.38%" }}>
                    <Image
                      src="/assets/icons/icon-google.svg"
                      alt="Google"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-12 md:col-span-4 md:col-start-5 md:row-start-1 lg:col-span-2 lg:col-start-4 lg:row-start-1">
            <Link variant="inverted" href="/">Accueil</Link>
            <Link variant="inverted" href="/nos-prestations">Nos prestations</Link>
            <Link variant="inverted" href="/nos-tarifs">Nos tarifs</Link>
            <Link variant="inverted" href="/a-propos">À propos</Link>
            <Link variant="inverted" href="/faq">FAQ</Link>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-12 md:col-span-4 md:col-start-5 md:row-start-2 lg:col-span-2 lg:col-start-6 lg:row-start-1">
            <Link variant="inverted" href="/mentions-legales">Mentions Légales</Link>
            <Link variant="inverted" href="/rgpd">RGPD</Link>
            <Link variant="inverted" href="/cgv-cgu">CGV / CGU</Link>
            <Link variant="inverted" href="/plan-du-site">Plan du site</Link>
          </div>

          {/* Business info */}
          <div className="flex min-w-[240px] flex-col gap-32 md:col-span-4 md:col-start-9 md:row-span-2 lg:col-span-4 lg:col-start-9 lg:row-span-2">
            {/* Business contact */}
            <div className="flex flex-col gap-12">
              <Link variant="secondary" href={`tel:+33${settings.phone.replace(/\s/g, '').replace(/^0/, '')}`}>
                {settings.phone}
              </Link>
              <Link variant="secondary" href={`mailto:${settings.email}`}>
                {settings.email}
              </Link>
              <Link variant="secondary" href={settings.googleMapsUrl} external>
                {settings.address}
              </Link>
              <span className="whitespace-nowrap font-content font-normal text-xs text-primary-raised">
                SIRET : {settings.siret}
              </span>
            </div>

            {/* Business hours */}
            <div className="flex w-full flex-col gap-2 rounded-atom bg-brand-inset p-12">
              <p>
                <span className="font-content font-bold text-xs text-brand-fg-accent">
                  Lun - Ven :{" "}
                </span>
                <span className="font-content font-bold text-xs text-primary-raised">
                  {settings.hoursWeek}
                </span>
              </p>
              <p>
                <span className="font-content font-bold text-xs text-brand-fg-accent">
                  Sam :{" "}
                </span>
                <span className="font-content font-bold text-xs text-primary-raised">
                  {settings.hoursSat}
                </span>
              </p>
              <p>
                <span className="font-content font-bold text-xs text-brand-fg-accent">
                  Dim :{" "}
                </span>
                <span className="font-content font-bold text-xs text-primary-raised">
                  {settings.hoursSun}
                </span>
              </p>
            </div>

            {/* CTA */}
            <Button variant="secondary" href="/a-propos#contact-cta" className="w-full">
              Me contacter
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-container border-t border-ghost-inverted-stroke py-16 text-center font-content text-xs text-[rgba(255,255,255,0.4)]">
        © {new Date().getFullYear()} Colibrille – Esthétique Automobile. Tous droits réservés.
      </div>
    </footer>
  );
}
