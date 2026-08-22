"use client";

import { motion } from "framer-motion";
import { coreServices } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center bg-ink px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            What We Do
          </p>
          <h2 className="max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Core Services
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {coreServices.map((service, i) => (
            <motion.div
              key={service.name}
              variants={item}
              className="group flex flex-col justify-between bg-ink p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-800"
            >
              <span className="font-heading text-sm font-semibold text-volt">
                0{i + 1}
              </span>
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-tight text-white">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-white/50"
        >
          Looking for hardscaping or a bigger project? Reach out and we&apos;ll
          scope it in person.
        </motion.p>
      </div>
    </section>
  );
}
