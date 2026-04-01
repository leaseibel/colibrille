import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import Paragraph from "./Paragraph";

const components = {
  h1: H1 as React.ComponentType<React.ComponentPropsWithoutRef<"h1">>,
  h2: H2 as React.ComponentType<React.ComponentPropsWithoutRef<"h2">>,
  h3: H3 as React.ComponentType<React.ComponentPropsWithoutRef<"h3">>,
  h4: H4 as React.ComponentType<React.ComponentPropsWithoutRef<"h4">>,
  p: Paragraph as React.ComponentType<React.ComponentPropsWithoutRef<"p">>,
};

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

export default function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={cn(className)}>
      <MDXRemote source={content} components={components} />
    </div>
  );
}
