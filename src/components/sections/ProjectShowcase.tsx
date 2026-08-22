"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projectShowcase } from "@/lib/site";

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projectShowcase.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const current = projectShowcase[index];

  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            Real Results
          </p>
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Before &amp; After
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Real work from one of our recent jobs — beds releveled with new
            brick edging, landscape fabric underneath to keep weeds from
            coming back, and Starlite black rock throughout. We also
            releveled the tree ring and built a small matching bed around
            the light pole.
          </p>
        </motion.div>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`before-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-ink"
              >
                <Image
                  src={current.before}
                  alt={`${current.caption} — before, by Heights Yard Solutions`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 border border-white/30 bg-black/60 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  Before
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`after-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
                className="relative aspect-[4/3] w-full overflow-hidden border border-volt/40 bg-ink"
              >
                <Image
                  src={current.after}
                  alt={`${current.caption} — after, by Heights Yard Solutions`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 border border-volt/60 bg-ink-950/80 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-volt backdrop-blur-sm">
                  After
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`caption-${index}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-6 flex items-center justify-center gap-2.5 text-center font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
              {current.caption}
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:border-volt hover:text-volt"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div className="flex items-center gap-2.5">
              {projectShowcase.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show project ${i + 1}`}
                  className={`h-2 transition-all duration-300 ${
                    i === index ? "w-6 bg-volt" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:border-volt hover:text-volt"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
