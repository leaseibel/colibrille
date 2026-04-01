import Image from "next/image";
import { cn } from "@/lib/utils";
import Tag from "@/components/Tag";

type SectionHeadingProps = {
  title: string;
  inverted?: boolean;
  withTag?: boolean;
  tagLabel?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  inverted = false,
  withTag = false,
  tagLabel,
  className,
}: SectionHeadingProps) {
  const strokeSrc = inverted
    ? "/assets/shapes/section-heading-stroke-inverted.svg"
    : "/assets/shapes/section-heading-stroke.svg";

  return (
    <div
      className={cn(
        "relative flex w-full max-w-container items-center gap-16 pb-32",
        className,
      )}
    >
      {/* Left stroke */}
      <div className="relative flex-1 h-[1px] min-h-[1px]">
        <Image
          src={strokeSrc}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <span
        className={cn(
          "shrink-0 whitespace-nowrap text-center font-display font-bold text-md tracking-[1px]",
          inverted
            ? "text-ghost-inverted-fg-neutral"
            : "text-ghost-foreground",
        )}
      >
        {title}
      </span>

      {/* Right stroke */}
      <div className="relative flex-1 h-[1px] min-h-[1px]">
        <Image
          src={strokeSrc}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Tag */}
      {withTag && tagLabel && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Tag>{tagLabel}</Tag>
        </div>
      )}
    </div>
  );
}
