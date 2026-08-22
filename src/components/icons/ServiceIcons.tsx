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

export function LawnmowerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="17" r="2" />
      <circle cx="16" cy="17" r="2" />
      <path d="M5 17H4a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3h9a2 2 0 0 1 2 2v2.5" />
      <path d="M10 11V6l6-2" />
    </svg>
  );
}

export function ShovelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17 3 7 13" />
      <path d="M14.5 5.5 18.5 9.5" />
      <path d="M7 13c-2 1-3 3-3 5a3 3 0 0 0 3 3c2 0 4-1 5-3" />
    </svg>
  );
}

export function WeedRemovalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20v-7c0-2 1-4 3-4" />
      <path d="M9 20V10c0-3 2-6 5-6" />
      <path d="M15 20v-9c0-2.5 1.5-5 4-5" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function RakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v13" />
      <path d="M5 16h14" />
      <path d="M6 16l1 5" />
      <path d="M9.5 16l.5 5" />
      <path d="M14 16l.5 5" />
      <path d="M18 16l-1 5" />
    </svg>
  );
}
