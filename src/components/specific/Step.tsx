import { cn } from "@/lib/utils";

type StepProps = {
  stepNumber: number;
  title: string;
  description: string;
  className?: string;
};

export default function Step({
  stepNumber,
  title,
  description,
  className,
}: StepProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Badge */}
      <div className="flex h-[64px] w-[48px] items-center justify-center rounded-pill bg-brand">
        <span className="font-display font-bold text-[32px] leading-[48px] text-brand-fg-accent">
          {stepNumber}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-12 px-16 py-20 text-center">
        <span className="font-display font-bold text-sm tracking-[0.8px] text-primary-foreground">
          {title}
        </span>
        <span className="font-content font-normal text-xs text-ghost-foreground">
          {description}
        </span>
      </div>
    </div>
  );
}
