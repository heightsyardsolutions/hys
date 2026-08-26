"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/site";

type Project = (typeof projects)[number];

function ProjectCarousel({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = project.pairs.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next, total]);

  const current = project.pairs[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
        {project.title}
      </h3>

      <div className="mt-6 mx-auto max-w-4xl">
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`before-${project.title}-${index}`}
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
              key={`after-${project.title}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
              className="relative aspect-[4/3] w-full overflow-hidden border-2 border-volt bg-ink shadow-volt-sm"
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
            key={`caption-${project.title}-${index}`}
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

        {total > 1 && (
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label={`Previous photo in ${project.title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:border-volt hover:text-volt"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div className="flex items-center gap-2.5">
              {project.pairs.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1} of ${project.title}`}
                  className={`h-2 transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-volt"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label={`Next photo in ${project.title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:border-volt hover:text-volt"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
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
            Real jobs, straight from our crew — see the transformation for
            yourself.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <ProjectCarousel project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
