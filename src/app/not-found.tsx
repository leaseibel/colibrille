import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-surface-brand-background-base)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "80px",
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-surface-brand-foreground-accent)",
          lineHeight: 1,
        }}
      >
        404
      </span>
      <p
        style={{
          fontFamily: "var(--font-family-content)",
          fontSize: "var(--font-size-md)",
          color: "var(--color-surface-brand-foreground-neutral)",
          marginBottom: "var(--layout-gap-800)",
          marginTop: "var(--layout-gap-400)",
        }}
      >
        Page introuvable
      </p>
      <Button variant="secondary" href="/">
        Retour à l&apos;accueil
      </Button>
    </div>
  );
}
