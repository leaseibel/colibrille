import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureItemProps = {
  title: string;
  className?: string;
};

export default function FeatureItem({ title, className }: FeatureItemProps) {
  return (
    <div
      className={cn(
        "flex min-w-[200px] max-w-[200px] flex-col items-center justify-end gap-8",
        className,
      )}
    >
      <Image
        src="/assets/shapes/feature-item-pictogram.svg"
        alt=""
        width={60}
        height={81}
        aria-hidden="true"
      />
      <span className="font-content font-bold text-sm text-ghost-foreground text-center">
        {title}
      </span>
    </div>
  );
}
