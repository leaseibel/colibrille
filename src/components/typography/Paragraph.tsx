import { cn } from "@/lib/utils";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={cn(
        "font-content font-normal text-xs text-primary-foreground pb-16 max-w-content w-full",
        className,
      )}
    >
      {children}
    </p>
  );
}
