import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "secondary" | "brandInset" | "primary";

type ButtonProps = {
  variant?: Variant;
  pill?: boolean;
  href?: string;
  children?: React.ReactNode;
  buttonLabel?: string;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const variantStyles: Record<Variant, string> = {
  secondary: "btn-secondary bg-secondary text-secondary-foreground",
  brandInset: "btn-brand-inset bg-brand-inset text-brand-fg-neutral",
  primary:
    "btn-primary bg-primary-raised text-primary-foreground border border-primary-stroke",
};

export default function Button({
  variant = "secondary",
  pill,
  href,
  children,
  buttonLabel,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-16 py-8 font-content font-medium text-sm whitespace-nowrap cursor-pointer transition-colors duration-150 ease-in-out",
    pill ? "rounded-pill" : "rounded-atom",
    variantStyles[variant],
    className,
  );

  const content = children || buttonLabel;
  const isExternal = href?.startsWith("http");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
