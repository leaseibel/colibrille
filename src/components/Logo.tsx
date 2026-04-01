import { cn } from "@/lib/utils";
import { LogoWithBaseline, LogoWithoutBaseline } from "./LogoSVG";

type LogoProps = {
  withBaseline?: boolean;
  className?: string;
  width?: number;
};

export default function Logo({
  withBaseline = true,
  className,
  width = 180,
}: LogoProps) {
  return (
    <div
      className={cn(className)}
      style={{
        width,
        color: "var(--color-surface-shape-accent)",
        display: "inline-flex",
        flexShrink: 0,
      }}
      role="img"
      aria-label="Colibrille — Esthétique Automobile"
    >
      {withBaseline ? <LogoWithBaseline /> : <LogoWithoutBaseline />}
    </div>
  );
}
