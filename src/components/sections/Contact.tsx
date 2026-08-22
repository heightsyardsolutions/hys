"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Contact() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
              Get In Touch
            </p>
            <h2 className="max-w-md font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-5 max-w-md text-white/60">
              Call us for the fastest response. For commercial or larger
              inquiries, email works too — every job is still quoted in
              person.
            </p>
            <p className="mt-8 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              Serving {site.serviceArea}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center gap-6 border-t border-white/10 pt-10 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0"
          >
            <motion.a
              variants={item}
              href={site.phoneHref}
              className="group flex items-baseline justify-between border-b border-white/10 pb-5 transition-colors hover:border-volt"
            >
              <span className="font-heading text-sm font-semibold uppercase tracking-widest text-white/50">
                Call
              </span>
              <span className="font-heading text-2xl font-semibold text-white transition-colors group-hover:text-volt sm:text-3xl">
                {site.phoneDisplay}
              </span>
            </motion.a>

            <motion.a
              variants={item}
              href={`mailto:${site.email}`}
              className="group flex items-baseline justify-between border-b border-white/10 pb-5 transition-colors hover:border-volt"
            >
              <span className="font-heading text-sm font-semibold uppercase tracking-widest text-white/50">
                Email
                <span className="ml-2 text-white/30">(Commercial)</span>
              </span>
              <span className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-volt sm:text-xl">
                {site.email}
              </span>
            </motion.a>

            <motion.a
              variants={item}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between pb-1 transition-colors"
            >
              <span className="font-heading text-sm font-semibold uppercase tracking-widest text-white/50">
                Instagram
              </span>
              <span className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-volt sm:text-xl">
                {site.instagramHandle}
              </span>
            </motion.a>
          </motion.div>
        </div>

        <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Heights Yard Solutions</span>
          <span>Keep your yard looking its best.</span>
        </div>
      </div>
    </section>
  );
}
