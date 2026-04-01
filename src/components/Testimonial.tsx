type TestimonialProps = {
  rating: number;
  quote: string;
  author: string;
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-4 text-brand-fg-accent">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonial({
  rating,
  quote,
  author,
}: TestimonialProps) {
  return (
    <div className="flex flex-col gap-12">
      <Stars count={rating} />
      <p className="text-sm text-brand-fg-neutral opacity-90 italic">&ldquo;{quote}&rdquo;</p>
      <p className="text-xs text-brand-fg-neutral opacity-60 font-medium">— {author}</p>
    </div>
  );
}
