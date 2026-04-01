import { cn } from "@/lib/utils";

type PageHeadingProps = {
  title: string;
  epigraph?: string;
  className?: string;
};

export default function PageHeading({
  title,
  epigraph,
  className,
}: PageHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 py-40 text-center text-ghost-inverted-fg-neutral",
        className,
      )}
    >
      <h1 className="w-full max-w-content font-display font-medium text-lg tracking-[1.2px] uppercase">
        {title}
      </h1>
      {epigraph && (
        <p className="w-full font-epigraph font-normal italic text-xl">
          {epigraph}
        </p>
      )}
    </div>
  );
}
