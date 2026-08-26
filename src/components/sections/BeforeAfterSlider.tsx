"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  before,
  after,
  caption,
}: {
  before: string;
  after: string;
  caption: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden border border-white/10 bg-ink">
      <Image
        src={after}
        alt={`${caption} — after, by Heights Yard Solutions`}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <span className="pointer-events-none absolute right-4 top-4 z-10 border border-volt/60 bg-ink-950/80 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-volt backdrop-blur-sm">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${caption} — before, by Heights Yard Solutions`}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />
        <span className="absolute left-4 top-4 border border-white/30 bg-black/60 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          Before
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)]"
        style={{ left: `${pos}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-volt bg-ink-950 text-volt shadow-volt-sm"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M8 7 4 12l4 5M16 7l4 5-4 5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Drag to compare before and after: ${caption}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
