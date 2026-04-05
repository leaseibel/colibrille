import { cn } from "@/lib/utils";

type StepProps = {
  number: string;
  title: string;
  description: string;
  className?: string;
};

export default function Step({
  number,
  title,
  description,
  className,
}: StepProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Step container — 48px tall, number pill overflows top */}
      <div className="flex h-[48px] w-full shrink-0 items-end justify-center">
        <div className="flex h-[64px] w-[48px] items-center justify-center rounded-pill bg-brand">
          <span className="whitespace-nowrap text-center font-display font-bold text-[32px] leading-[48px] text-brand-fg-accent">
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col items-center gap-12 px-16 py-20 text-center">
        <p className="whitespace-nowrap font-display font-bold text-sm tracking-[0.8px] text-brand">
          {title}
        </p>
        <p className="w-full font-content font-normal text-xs text-ghost-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
