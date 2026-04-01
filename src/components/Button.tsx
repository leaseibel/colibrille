import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "inset" | "secondary";

type BaseProps = {
  variant?: Variant;
  pill?: boolean;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  accent:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hovered active:bg-secondary-active",
  inset:
    "bg-brand-inset text-brand-fg-neutral hover:bg-brand-inset-hovered active:bg-brand-inset-active",
  secondary:
    "bg-primary-raised text-primary-foreground border border-primary-stroke hover:bg-primary-base active:bg-primary-base",
};

export default function Button({
  variant = "accent",
  pill,
  className = "",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-16 py-8 font-content font-medium text-sm whitespace-nowrap cursor-pointer transition-colors duration-150 ease-in-out",
    pill ? "rounded-pill" : "rounded-atom",
    variantStyles[variant],
    className,
  );

  if ("href" in props && props.href) {
    return <a className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
