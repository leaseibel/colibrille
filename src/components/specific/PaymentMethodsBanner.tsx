import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

type PaymentMethodsBannerProps = {
  className?: string;
};

export default function PaymentMethodsBanner({
  className,
}: PaymentMethodsBannerProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 rounded-atom bg-brand-inset px-24 py-16",
        className,
      )}
    >
      <Icon name="info" size="large" className="text-brand-fg-accent" />
      <p className="text-center font-display font-bold text-sm tracking-[0.8px] text-brand-fg-accent">
        Moyens de paiements acceptés :
      </p>
      <p className="text-center font-content font-normal text-xs text-brand-fg-accent">
        Chèque • Virement • Carte banquaire
      </p>
    </div>
  );
}
