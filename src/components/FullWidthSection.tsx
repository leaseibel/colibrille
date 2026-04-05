import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "./Button";

type FullWidthSectionProps = {
  children: React.ReactNode;
  image?: string;
  withTopPicture?: boolean;
  withCallToAction?: boolean;
  ctaHref?: string;
  leadingPicture?: string;
  leadingPictureAlt?: string;
  trailingPicture?: string;
  trailingPictureAlt?: string;
  className?: string;
};

export default function FullWidthSection({
  children,
  image,
  withTopPicture = false,
  withCallToAction = false,
  ctaHref,
  leadingPicture,
  leadingPictureAlt = "",
  trailingPicture,
  trailingPictureAlt = "",
  className,
}: FullWidthSectionProps) {
  return (
    <div
      className={cn(
        "flex w-full items-start justify-center",
        className,
      )}
    >
      {/* Container (card) */}
      <div className="flex min-w-[280px] flex-1 flex-col items-center justify-center rounded-container bg-primary-raised px-32 shadow-card" style={{ maxWidth: "var(--layout-max-width-container)" }}>
        {/* Picture */}
        {withTopPicture && image && (
          <div className="relative aspect-[320/90] w-full max-w-[320px] max-h-[90px] shrink-0 overflow-hidden rounded-b-pill">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        )}

        {/* Body */}
        <div className="flex w-full shrink-0 items-center justify-center">
          {/* Leading picture */}
          {leadingPicture && (
            <div className="fws-leading-picture shrink-0 flex-row items-center self-stretch">
              <div className="flex h-full w-[180px] shrink-0 flex-col items-start pr-20 py-32">
                <div className="relative flex-1 w-full overflow-hidden rounded-pill">
                  <Image
                    src={leadingPicture}
                    alt={leadingPictureAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Main */}
          <div className="flex flex-1 flex-col items-center py-32" style={{ maxWidth: "var(--layout-max-width-content)" }}>
            {/* Content */}
            <div className="flex w-full max-w-content flex-col items-start">
              {children}
            </div>

            {/* CTA */}
            {withCallToAction && (
              <Button
                variant="accent"
                href={ctaHref || "mailto:atelier.colibrille.17@gmail.com"}
                className="shrink-0"
              >
                Je suis interessé•e
              </Button>
            )}
          </div>

          {/* Trailing picture */}
          {trailingPicture && (
            <div className="fws-trailing-picture shrink-0 flex-row items-center self-stretch pl-16">
              <div className="flex h-full w-[180px] flex-col items-start justify-end">
                <div className="relative h-[270px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={trailingPicture}
                    alt={trailingPictureAlt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
