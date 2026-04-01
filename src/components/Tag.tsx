import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center bg-accent text-accent-foreground font-content font-bold text-xxs py-2 px-8 rounded-pill uppercase whitespace-nowrap",
        className,
      )}
    >
      {children}
    </span>
  );
}
