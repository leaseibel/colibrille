import Image from "next/image";
import { cn } from "@/lib/utils";
import PageHeading from "./PageHeading";

type PageHeroProps = {
  title: string;
  epigraph: string;
  tag?: string;
  className?: string;
};

export default function PageHero({
  title,
  epigraph,
  tag,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-[var(--layout-header-height)]",
        className,
      )}
      style={{
        background:
          "linear-gradient(to top, var(--color-primitive-deep-green-900), var(--color-primitive-deep-green-800))",
      }}
    >
      {/* Decorative background shape */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[523px] w-[803px] overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div
          style={{
            transform: "scaleY(-1) rotate(180deg)",
            transformOrigin: "center center",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/assets/shapes/shape-hero-bg.svg"
            alt=""
            fill
            style={{ objectFit: "fill" }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[1] mx-auto flex w-full max-w-container items-center justify-center px-16 lg:px-24">
        <div className="relative flex-1">
          <PageHeading title={title} epigraph={epigraph} />
          {tag && (
            <span className="absolute right-0 bottom-24 rounded-pill bg-accent px-8 py-2 font-content font-bold text-xxs text-accent-foreground uppercase whitespace-nowrap">
              {tag}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
