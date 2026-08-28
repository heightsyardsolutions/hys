import type { SVGProps } from "react";

type AvatarProps = SVGProps<SVGSVGElement>;

export function PatrickAvatar(props: AvatarProps) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <circle cx="100" cy="100" r="100" fill="#181818" />
      <path d="M32 202 Q100 148 168 202 L168 210 L32 210 Z" fill="#111111" />
      <path
        d="M62 150 Q100 168 138 150 L142 176 Q100 194 58 176 Z"
        fill="#C6FF00"
      />
      <ellipse cx="66" cy="108" rx="7" ry="9" fill="#D99A6C" />
      <ellipse cx="134" cy="108" rx="7" ry="9" fill="#D99A6C" />
      <ellipse cx="100" cy="104" rx="42" ry="46" fill="#E7AD7A" />
      <path
        d="M58 92 Q56 46 100 40 Q144 46 142 92 Q140 66 122 56 Q100 46 78 56 Q60 66 58 92 Z"
        fill="#231a15"
      />
      <path
        d="M58 92 Q56 78 62 66 Q57 80 60 100 Z"
        fill="#231a15"
        opacity="0.85"
      />
      <path
        d="M142 92 Q144 78 138 66 Q143 80 140 100 Z"
        fill="#231a15"
        opacity="0.85"
      />
      <ellipse cx="83" cy="104" rx="3.4" ry="4.2" fill="#2a1c14" />
      <ellipse cx="117" cy="104" rx="3.4" ry="4.2" fill="#2a1c14" />
      <path
        d="M84 124 Q100 132 116 124"
        stroke="#a5673f"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function HaiderAvatar(props: AvatarProps) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <circle cx="100" cy="100" r="100" fill="#181818" />
      <path d="M32 202 Q100 148 168 202 L168 210 L32 210 Z" fill="#111111" />
      <path
        d="M62 150 Q100 168 138 150 L142 176 Q100 194 58 176 Z"
        fill="#C6FF00"
      />
      <path
        d="M46 96c-6 34 4 60 4 60l14-6c-8-18-10-40-6-56Z"
        fill="#241a14"
      />
      <path
        d="M154 96c6 34-4 60-4 60l-14-6c8-18 10-40 6-56Z"
        fill="#241a14"
      />
      <ellipse cx="64" cy="106" rx="7" ry="9" fill="#B97A4C" />
      <ellipse cx="136" cy="106" rx="7" ry="9" fill="#B97A4C" />
      <ellipse cx="100" cy="102" rx="42" ry="46" fill="#C6885A" />
      <path
        d="M56 88c-2-30 18-52 44-52s46 22 44 52c-6-8-8-20-8-20s-6 10-16 12c2-8-2-16-2-16s-8 12-22 12-22-12-22-12-4 8-2 16c-10-2-16-12-16-12s-2 12-8 20Z"
        fill="#241a14"
      />
      <circle cx="66" cy="52" r="9" fill="#241a14" />
      <circle cx="80" cy="42" r="10" fill="#241a14" />
      <circle cx="97" cy="38" r="10" fill="#241a14" />
      <circle cx="114" cy="42" r="10" fill="#241a14" />
      <circle cx="129" cy="52" r="9" fill="#241a14" />
      <circle cx="72" cy="64" r="8" fill="#241a14" />
      <circle cx="90" cy="58" r="8" fill="#241a14" />
      <circle cx="110" cy="58" r="8" fill="#241a14" />
      <circle cx="128" cy="64" r="8" fill="#241a14" />
      <ellipse cx="82" cy="104" rx="3.4" ry="4.2" fill="#2a1c14" />
      <ellipse cx="118" cy="104" rx="3.4" ry="4.2" fill="#2a1c14" />
      <path
        d="M84 122 Q100 130 116 122"
        stroke="#8a5230"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
