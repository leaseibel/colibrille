import { cn } from "@/lib/utils";

type H3Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H3({ children, className }: H3Props) {
  return (
    <h3
      className={cn(
        "font-display font-bold text-sm text-primary-foreground pb-8 max-w-content w-full tracking-[0.8px]",
        className,
      )}
    >
      {children}
    </h3>
  );
}
