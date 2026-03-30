import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "accent" | "inset";

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
    "bg-secondary text-deep-green-900 hover:brightness-95",
  inset:
    "bg-deep-green-inset text-white hover:brightness-110",
};

export default function Button({
  variant = "accent",
  pill,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-8 px-24 py-12 font-display font-bold text-sm transition-all",
    pill ? "rounded-pill" : "rounded-atom",
    variantStyles[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    return <a className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
