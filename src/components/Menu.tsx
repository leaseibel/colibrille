import { cn } from "@/lib/utils";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";

type MenuProps = {
  variant?: "large" | "medium";
  className?: string;
};

export default function Menu({ variant = "large", className }: MenuProps) {
  const isLarge = variant === "large";

  return (
    <div
      className={cn(
        "flex",
        isLarge ? "flex-row items-center gap-24" : "flex-col gap-16 w-full",
        className,
      )}
    >
      <Tabs />
      <Button
        variant="secondary"
        pill={isLarge}
        href="tel:+33611489861"
        className={cn(!isLarge && "w-full")}
      >
        06 11 48 98 61
      </Button>
    </div>
  );
}
