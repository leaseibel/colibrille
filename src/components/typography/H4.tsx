import { cn } from "@/lib/utils";

type H4Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H4({ children, className }: H4Props) {
  return (
    <h4
      className={cn(
        "font-display font-bold text-xs text-primary-foreground pb-4 max-w-content w-full tracking-[0.7px]",
        className,
      )}
    >
      {children}
    </h4>
  );
}
