import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle?: string;
  inverted?: boolean;
  viewport?: "large" | "small";
  withTag?: boolean;
  tagLabel?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  inverted = false,
  viewport,
  withTag = false,
  tagLabel,
  className,
}: SectionHeadingProps) {
  const strokeSrc = inverted
    ? "/assets/shapes/section-heading-stroke-inverted.svg"
    : "/assets/shapes/section-heading-stroke.svg";

  const isSmall = viewport === "small";
  const colorClass = inverted
    ? "text-ghost-inverted-fg-neutral"
    : "text-ghost-foreground";

  const titleContent = subtitle ? (
    <div
      className={cn(
        "section-heading-title text-center font-display text-md tracking-[1px]",
        isSmall ? "w-full" : "shrink-0 whitespace-nowrap",
        colorClass,
      )}
    >
      <p className="font-medium">{title}</p>
      <p className="font-bold">{subtitle}</p>
    </div>
  ) : (
    <span
      className={cn(
        "section-heading-title text-center font-display font-bold text-md tracking-[1px]",
        isSmall ? "w-full" : "shrink-0 whitespace-nowrap",
        colorClass,
      )}
    >
      {title}
    </span>
  );

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center gap-16 pb-32",
        isSmall ? "flex-col" : "flex-row",
        !viewport && "section-heading-auto",
        className,
      )}
    >
      {/* Left / Top stroke */}
      <div
        className={cn(
          "section-heading-stroke-left relative",
          isSmall
            ? "h-0 min-h-[1px] w-[120px] shrink-0"
            : "h-0 min-h-[1px] min-w-0 flex-[1_1_0]",
        )}
      >
        <Image
          src={strokeSrc}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      {titleContent}

      {/* Right stroke (large only) */}
      {!isSmall && (
        <div className="section-heading-stroke-right relative h-0 min-h-[1px] min-w-0 flex-[1_1_0]">
          <Image
            src={strokeSrc}
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Tag */}
      {withTag && tagLabel && (
        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-accent px-8 py-2 font-content font-bold text-xxs text-accent-foreground uppercase">
          {tagLabel}
        </span>
      )}
    </div>
  );
}
