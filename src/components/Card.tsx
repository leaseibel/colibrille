import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  variant?: "raised" | "glass";
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

const variantStyles = {
  raised: "bg-primary-raised shadow-card",
  glass: "bg-glass",
};

export default function Card<T extends ElementType = "div">({
  variant = "raised",
  as,
  className,
  children,
  ...props
}: CardProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={cn("flex flex-col rounded-container", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
