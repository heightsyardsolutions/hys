"use client";

import { motion } from "framer-motion";
import { projectServices } from "@/lib/site";
import { projectServiceIcons } from "@/components/icons/ProjectIcons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectServices() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            Beyond The Lawn
          </p>
          <h2 className="max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Project &amp; Hardscape Services
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            Bigger jobs, quoted on-site. Scope varies too much property to
            property for a flat rate, so we walk the site with you before
            pricing anything.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectServices.map((name) => {
            const Icon = projectServiceIcons[name];
            return (
              <motion.li
                key={name}
                variants={item}
                className="group flex items-center gap-4 border border-white/10 bg-ink px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-volt/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-volt/30 bg-volt/[0.06] text-volt transition-colors duration-300 group-hover:bg-volt/10">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-base font-medium uppercase tracking-wide text-white">
                  {name}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-16 border border-volt/30 bg-gradient-to-r from-volt/[0.07] to-transparent p-8 sm:p-10"
        >
          <span className="inline-block border border-volt/40 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-volt">
            Coming Soon
          </span>
          <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
            Custom Outdoor Living
          </h3>
          <p className="mt-3 max-w-xl text-white/60">
            We&apos;re expanding into custom fire pits and fireplace
            installations. Reach out to get on the list as we roll this
            service out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
