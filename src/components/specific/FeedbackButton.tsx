import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

type FeedbackButtonProps = {
  href?: string;
  className?: string;
};

export default function FeedbackButton({
  href = "#",
  className,
}: FeedbackButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-12 rounded-pill bg-secondary px-16 py-8 font-content font-medium text-sm text-secondary-foreground",
        className,
      )}
    >
      <Icon name="car" size="large" />
      Donnez-nous votre avis
      <Icon name="car" size="large" />
    </a>
  );
}
