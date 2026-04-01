import Image from "next/image";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

type TestimonialProps = {
  author: string;
  quote: string;
  className?: string;
};

export default function Testimonial({
  author,
  quote,
  className,
}: TestimonialProps) {
  return (
    <div className={cn("relative w-[330px] flex flex-col gap-32", className)}>
      {/* Decorative shape */}
      <Image
        src="/assets/shapes/testimonial-shape.svg"
        alt=""
        width={140}
        height={124}
        className="pointer-events-none absolute right-0 top-0 z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[1] flex flex-col gap-32">
        {/* Star rating pill */}
        <div className="inline-flex self-start items-center gap-4 rounded-pill bg-glass-inverted p-20">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon
              key={i}
              name="star"
              size="medium"
              className="text-secondary"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="w-full font-content font-medium text-sm text-primary-raised">
          {quote}
        </p>

        {/* Author */}
        <div className="flex items-center justify-end gap-[10px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-raised"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
          </svg>
          <span className="font-display font-bold text-sm tracking-[0.8px] text-primary-raised">
            {author}
          </span>
        </div>
      </div>
    </div>
  );
}
