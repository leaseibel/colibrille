import { cn } from "@/lib/utils";

type FullWidthSectionProps = {
  children: React.ReactNode;
  withTopPicture?: boolean;
  withLeadingPicture?: boolean;
  withTrailingPicture?: boolean;
  withCallToAction?: boolean;
  topPicture?: React.ReactNode;
  leadingPicture?: React.ReactNode;
  trailingPicture?: React.ReactNode;
  callToAction?: React.ReactNode;
  className?: string;
};

export default function FullWidthSection({
  children,
  withTopPicture = false,
  withLeadingPicture = false,
  withTrailingPicture = false,
  withCallToAction = false,
  topPicture,
  leadingPicture,
  trailingPicture,
  callToAction,
  className,
}: FullWidthSectionProps) {
  return (
    <div className={cn("flex justify-center px-24", className)}>
      <div className="flex flex-1 max-w-container flex-col items-center bg-primary-raised rounded-container shadow-card">
        {/* Top picture slot */}
        {withTopPicture && topPicture && (
          <div className="w-full max-w-[320px] aspect-[320/90] overflow-hidden rounded-b-pill">
            {topPicture}
          </div>
        )}

        {/* Body */}
        <div className="flex w-full flex-col items-stretch lg:flex-row">
          {/* Leading picture slot */}
          {withLeadingPicture && leadingPicture && (
            <div className="hidden lg:flex w-[180px] shrink-0 items-end">
              {leadingPicture}
            </div>
          )}

          {/* Main content */}
          <div className="flex min-w-0 flex-1 max-w-content flex-col items-start py-32">
            {children}
            {withCallToAction && callToAction && (
              <div className="mt-16">{callToAction}</div>
            )}
          </div>

          {/* Trailing picture slot */}
          {withTrailingPicture && trailingPicture && (
            <div className="hidden lg:flex w-[180px] shrink-0 items-end">
              {trailingPicture}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
