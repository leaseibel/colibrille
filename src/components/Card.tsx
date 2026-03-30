import { ReactNode } from "react";

type CardProps = {
  variant?: "raised" | "glass";
  className?: string;
  children: ReactNode;
};

const variantStyles = {
  raised: "bg-surface-raised shadow-card",
  glass: "bg-glass border border-[var(--color-ghost-inverted-stroke)] backdrop-blur-sm",
};

export default function Card({
  variant = "raised",
  className = "",
  children,
}: CardProps) {
  return (
    <div className={`rounded-container p-24 ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
