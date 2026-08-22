import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BrickIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="8" height="5" />
      <rect x="10" y="4" width="8" height="5" />
      <rect x="18" y="4" width="4" height="5" />
      <rect x="2" y="9" width="4" height="5" />
      <rect x="6" y="9" width="8" height="5" />
      <rect x="14" y="9" width="8" height="5" />
      <rect x="2" y="14" width="8" height="5" />
      <rect x="10" y="14" width="8" height="5" />
      <rect x="18" y="14" width="4" height="5" />
    </svg>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20v-7" />
      <path d="M12 13c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7z" />
      <path d="M12 13c4.5 0 7-3.5 7-8-4.5 0-7 3.5-7 8z" />
      <path d="M4 20h16" />
    </svg>
  );
}

export function ShearsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 7.5 20 19" />
      <path d="M8.5 16.5 20 5" />
    </svg>
  );
}

export function GradingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h18" />
      <path d="M3 13.5 9 8l4 3 5-6" />
      <path d="M18 5h3v3" />
    </svg>
  );
}

export function WeedsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20v-7c0-2 1-4 3-4" />
      <path d="M9 20V10c0-3 2-6 5-6" />
      <path d="M15 20v-9c0-2.5 1.5-5 4-5" />
      <path d="M2 20h20" />
    </svg>
  );
}

export const projectServiceIcons: Record<
  string,
  (props: IconProps) => JSX.Element
> = {
  Bricklaying: BrickIcon,
  "Garden Bed Installation": SproutIcon,
  "Hedge Trimming/Brush Trimming & Demolition": ShearsIcon,
  "Yard Leveling & Grading": GradingIcon,
  "Overgrown Weed Trimming/Demolition": WeedsIcon,
};
