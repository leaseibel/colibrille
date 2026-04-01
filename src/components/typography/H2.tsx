import { cn } from "@/lib/utils";

type H2Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H2({ children, className }: H2Props) {
  return (
    <h2
      className={cn(
        "font-display font-bold text-md text-primary-foreground pb-16 max-w-content w-full tracking-[1px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
