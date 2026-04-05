import { cn } from "@/lib/utils";
import Button from "@/components/Button";

type PrestationSummaryProps = {
  title: string;
  description: string;
  image?: React.ReactNode;
  href?: string;
  className?: string;
};

export default function PrestationSummary({
  title,
  description,
  image,
  href = "#",
  className,
}: PrestationSummaryProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {/* Heading */}
      <div className="overflow-hidden rounded-atom">
        {/* Image slot */}
        <div className="h-[80px] w-full">
          {image ?? <div className="h-full w-full bg-primary-stroke" />}
        </div>

        {/* Title bar */}
        <div className="flex min-h-[48px] items-center justify-center bg-brand p-16">
          <span className="font-display font-bold text-sm tracking-[0.8px] text-brand-fg-neutral text-center">
            {title}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col items-center gap-24 p-16">
        <p className="font-content font-normal text-xs text-primary-foreground text-center">
          {description}
        </p>
        <Button variant="primary" href={href}>
          En savoir +
        </Button>
      </div>
    </div>
  );
}
