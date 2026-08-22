"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { useScrollExperience } from "@/lib/scroll-context";
import HeroEstimateCard from "@/components/sections/HeroEstimateCard";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { goToPanel } = useScrollExperience();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[9%] h-[118%]">
        <Image
          src="/images/hero-bg.png"
          alt="Black rock landscaping bed installed by Heights Yard Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 grid w-full flex-1 grid-cols-1 items-start gap-10 px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:pb-20 lg:pt-32"
      >
        <div className="max-w-2xl lg:col-span-7 lg:self-end">
          <motion.p
            variants={item}
            className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt"
          >
            Heights Yard Solutions
          </motion.p>
          <motion.p
            variants={item}
            className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-volt" />
            Serving {site.serviceArea}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-heading text-5xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We Transform
            <br />
            Outdoor Spaces
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-lg text-white/75 sm:text-xl"
          >
            From clean-cut lawns to bold landscape builds — we bring the
            hustle and precision your property deserves.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <button
              type="button"
              onClick={() => goToPanel("estimate")}
              className="group inline-flex items-center gap-3 bg-volt px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-ink shadow-volt-sm transition-all hover:shadow-volt hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Schedule an Estimate
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </button>
            <a
              href={site.phoneHref}
              className="font-heading text-base font-medium uppercase tracking-wide text-white/85 underline decoration-white/30 decoration-2 underline-offset-8 transition-colors hover:text-volt hover:decoration-volt sm:hidden"
            >
              {site.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <HeroEstimateCard className="w-full lg:col-span-5 lg:col-start-8 lg:self-start" />
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-volt via-volt/40 to-transparent" />
    </section>
  );
}
