import { cn } from "@/lib/utils";

type PaymentMethodsBannerProps = {
  className?: string;
};

export default function PaymentMethodsBanner({
  className,
}: PaymentMethodsBannerProps) {
  return (
    <div
      className={cn(
        "w-full rounded-atom bg-brand-inset px-24 py-12 text-center",
        className,
      )}
    >
      <span className="font-content font-normal text-xs text-brand-fg-accent">
        Moyens de paiements acceptés :{" "}
      </span>
      <span className="font-content font-bold text-xs text-brand-fg-accent">
        chèque, virement, carte bancaire
      </span>
    </div>
  );
}
