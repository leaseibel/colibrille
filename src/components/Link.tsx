import NextLink from "next/link";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

type LinkVariant = "inverted" | "secondary" | "default";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: LinkVariant;
  external?: boolean;
  className?: string;
};

const variantStyles: Record<LinkVariant, string> = {
  inverted: "text-ghost-inverted-fg-neutral",
  secondary: "text-ghost-inverted-fg-accent",
  default: "text-ghost-foreground",
};

export default function Link({
  href,
  children,
  variant = "inverted",
  external = false,
  className,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        "inline-flex items-center gap-4 font-content font-normal text-xs underline whitespace-nowrap transition-opacity duration-150 ease-in-out hover:opacity-80",
        variantStyles[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <Icon name="external-link" size="small" />}
    </NextLink>
  );
}
