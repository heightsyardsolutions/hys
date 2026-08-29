"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gardeningShowcase } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GardeningShowcase() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            Fresh Starts
          </p>
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Gardening &amp; Planting
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Old, dead flowers and overgrown trees pulled out and replaced
            with fresh flowers, shrubs, and perennials — a full reset for
            beds that have seen better days.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {gardeningShowcase.map((photo) => (
            <motion.div
              key={photo.image}
              variants={item}
              className="group overflow-hidden border border-white/10 bg-ink-950 transition-all duration-300 hover:-translate-y-1 hover:border-volt/40"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={photo.image}
                  alt={`${photo.caption}, by Heights Yard Solutions`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="flex items-center gap-2 px-4 py-4 font-heading text-xs font-semibold uppercase tracking-widest text-white/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
