"use client";

import { motion } from "framer-motion";
import EstimateFormFields from "@/components/sections/EstimateFormFields";

export default function HeroEstimateCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className={`border border-white/10 bg-ink-950/90 p-6 shadow-2xl backdrop-blur-md sm:p-7 ${className}`}
    >
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-volt">
        Free Estimate
      </p>
      <h2 className="mt-2 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl">
        Get A Quote
      </h2>
      <p className="mt-2 text-sm text-white/60">
        Tell us about your project — we&apos;ll follow up to schedule your
        walkthrough.
      </p>
      <div className="mt-6">
        <EstimateFormFields compact />
      </div>
    </motion.div>
  );
}
