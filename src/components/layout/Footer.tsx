import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Link from "@/components/Link";
import Button from "@/components/Button";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("overflow-hidden bg-brand px-16 lg:px-24", className)}>
      <div className="mx-auto max-w-container border-t border-ghost-inverted-stroke py-40">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-40 md:grid-cols-12 md:grid-rows-2 md:gap-24 lg:grid-rows-2 lg:gap-24">
          {/* Logo + Social */}
          <div className="flex h-full flex-col justify-between md:col-span-4 md:row-span-2 lg:col-span-3 lg:row-span-2">
            <Logo withBaseline={true} width={180} />
            <div className="mt-16 flex gap-24 text-ghost-inverted-fg-neutral md:mt-0">
              <a href="mailto:atelier.colibrille.17@gmail.com" aria-label="Email">
                <Icon name="mail" size="x-large" />
              </a>
              <a href="https://www.facebook.com/people/Atelier-Colibrille/61574280063226/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size="x-large" />
              </a>
              <a href="https://www.instagram.com/ateliercolibrille?igsh=YW55dXppZmZqazAx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" size="x-large" />
              </a>
              <a href="https://share.google/a8l0b7AVYfWwomhUj" target="_blank" rel="noopener noreferrer" aria-label="Avis Google">
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
              <Link variant="secondary" href="tel:+33611489861">
                +33 6 11 48 98 61
              </Link>
              <Link variant="secondary" href="mailto:atelier.colibrille.17@gmail.com">
                atelier.colibrille.17@gmail.com
              </Link>
              <Link variant="secondary" href="https://www.google.com/maps/place/Colibrille/@46.1302288,-1.1000299,17z/data=!3m1!4b1!4m6!3m5!1s0x48014d91505b2053:0x306c9b7bd7a3e358!8m2!3d46.1302288!4d-1.097455!16s%2Fg%2F11nb6xc5td?hl=fr-FR&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" external>
                2 rue Le Verrier, 17440 Aytré
              </Link>
              <span className="whitespace-nowrap font-content font-normal text-xs text-primary-raised">
                SIRET : 100 817 677 844 48
              </span>
            </div>

            {/* Business hours */}
            <div className="flex w-full flex-col gap-2 rounded-atom bg-brand-inset p-12">
              <p>
                <span className="font-content font-bold text-xs text-brand-fg-accent">
                  Lun - Ven :{" "}
                </span>
                <span className="font-content font-bold text-xs text-primary-raised">
                  08h30 / 18h30
                </span>
              </p>
              <p>
                <span className="font-content font-bold text-xs text-brand-fg-accent">
                  Sam :{" "}
                </span>
                <span className="font-content font-bold text-xs text-primary-raised">
                  09h00 / 12h30
                </span>
              </p>
              <p>
                <span className="font-content font-bold text-xs text-brand-fg-accent">
                  Dim :{" "}
                </span>
                <span className="font-content font-bold text-xs text-primary-raised">
                  Fermé
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
    </footer>
  );
}
