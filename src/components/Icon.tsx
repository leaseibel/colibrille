import {
  ArrowUpRight,
  Mail,
  FacebookTag,
  Instagram,
  StarSolid,
  Car,
  Menu,
  Xmark,
  InfoCircle,
} from "iconoir-react";
import { cn } from "@/lib/utils";

const iconMap = {
  "external-link": ArrowUpRight,
  mail: Mail,
  facebook: FacebookTag,
  instagram: Instagram,
  star: StarSolid,
  car: Car,
  menu: Menu,
  "x-mark": Xmark,
  info: InfoCircle,
} as const;

const sizeMap = {
  small: { className: "w-icon-sm h-icon-sm", px: 16 },
  medium: { className: "w-icon-md h-icon-md", px: 20 },
  large: { className: "w-icon-lg h-icon-lg", px: 24 },
  "x-large": { className: "w-icon-xl h-icon-xl", px: 36 },
} as const;

type IconName = keyof typeof iconMap;
type IconSize = keyof typeof sizeMap;

type IconProps = {
  name: IconName;
  size?: IconSize;
  className?: string;
};

export default function Icon({ name, size = "large", className }: IconProps) {
  const IconComponent = iconMap[name];
  const { className: sizeClass, px } = sizeMap[size];

  return (
    <IconComponent
      width={px}
      height={px}
      strokeWidth={1.5}
      className={cn(sizeClass, className)}
      aria-hidden="true"
    />
  );
}
