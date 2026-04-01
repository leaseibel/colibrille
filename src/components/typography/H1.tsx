import { cn } from "@/lib/utils";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        "font-display font-bold text-lg text-primary-foreground pb-16 max-w-content w-full tracking-[1.2px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
