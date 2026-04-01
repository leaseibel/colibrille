import { cn } from "@/lib/utils";

type EpigraphBannerProps = {
  className?: string;
};

export default function EpigraphBanner({ className }: EpigraphBannerProps) {
  return (
    <div
      className={cn(
        "w-full bg-primary-raised p-24 flex flex-wrap items-center justify-center gap-8",
        className,
      )}
    >
      <span className="font-epigraph font-normal italic text-xl text-primary-foreground">
        Chaque voiture a sa propre histoire.
      </span>
      <span className="font-epigraph font-bold italic text-xl text-primary-foreground">
        Chaque détail en est la signature.
      </span>
    </div>
  );
}
