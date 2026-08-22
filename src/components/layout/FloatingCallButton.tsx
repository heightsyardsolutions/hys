"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function FloatingCallButton({ hidden }: { hidden: boolean }) {
  return (
    <motion.a
      href={site.phoneHref}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: hidden ? 0 : 1,
        y: hidden ? 20 : 0,
        pointerEvents: hidden ? "none" : "auto",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 bg-volt px-5 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-ink shadow-volt transition-shadow sm:bottom-6 sm:right-6"
      aria-label={`Call Heights Yard Solutions at ${site.phoneDisplay}`}
    >
      <span className="absolute inset-0 -z-10 animate-ping bg-volt/50 [animation-duration:2.5s]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 shrink-0"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
      </svg>
      <span className="hidden sm:inline">Call {site.phoneDisplay}</span>
      <span className="sm:hidden">Call Now</span>
    </motion.a>
  );
}
