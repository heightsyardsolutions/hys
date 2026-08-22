"use client";

import { motion } from "framer-motion";
import EstimateFormFields from "@/components/sections/EstimateFormFields";

export default function EstimateForm() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            Get Started
          </p>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Request an Estimate
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            Tell us about your project. We&apos;ll review the details and
            follow up to schedule an in-person walkthrough and quote — no
            pricing is generated here.
          </p>
        </motion.div>

        <div className="mt-10">
          <EstimateFormFields />
        </div>
      </div>
    </section>
  );
}
