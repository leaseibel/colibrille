type SectionHeadingProps = {
  title: string;
  inverted?: boolean;
};

export default function SectionHeading({
  title,
  inverted = false,
}: SectionHeadingProps) {
  const lineColor = inverted
    ? "border-ghost-inverted-stroke"
    : "border-primary-stroke";
  const textColor = inverted ? "text-brand-fg-neutral" : "text-primary-foreground";

  return (
    <div className="flex items-center gap-24 w-full">
      <div className={`flex-1 border-t ${lineColor}`} />
      <h2
        className={`font-display font-bold text-lg whitespace-nowrap ${textColor}`}
      >
        {title}
      </h2>
      <div className={`flex-1 border-t ${lineColor}`} />
    </div>
  );
}
