import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  variant?: "raised" | "glass";
  /* Layout of the card box itself.
     "subgrid" makes the card inherit its parent grid row tracks, so the
     matching sections of sibling cards stay aligned whatever their content.
     The caller owns the row span (e.g. className="row-span-2"). */
  layout?: "flex" | "subgrid";
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

const layoutStyles = {
  flex: "flex flex-col",
  subgrid: "grid grid-rows-subgrid",
};

const variantStyles = {
  raised: "bg-primary-raised shadow-card",
  glass: "bg-glass",
};

export default function Card<T extends ElementType = "div">({
  variant = "raised",
  layout = "flex",
  as,
  className,
  children,
  ...props
}: CardProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={cn("rounded-container", layoutStyles[layout], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
