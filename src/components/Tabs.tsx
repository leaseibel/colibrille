import Tab from "./Tab";
import { cn } from "@/lib/utils";

type TabItem = {
  label: string;
  href: string;
};

type TabsProps = {
  items?: TabItem[];
  className?: string;
};

const defaultItems: TabItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Nos prestations", href: "/nos-prestations" },
  { label: "Nos tarifs", href: "/nos-tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
];

export default function Tabs({ items = defaultItems, className }: TabsProps) {
  return (
    <nav className={cn("flex flex-col lg:flex-row", className)}>
      {items.map((item) => (
        <Tab key={item.href} href={item.href} className="lg:w-auto w-full">
          {item.label}
        </Tab>
      ))}
    </nav>
  );
}
