"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.85 6.32 6.9.68-5.2 4.68 1.55 6.82L12 17.77l-6.1 3.23 1.55-6.82-5.2-4.68 6.9-.68L12 2.5z" />
    </svg>
  );
}

export default function ReviewCTA() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink px-6 py-24 sm:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-2xl border border-white/10 bg-ink-950 p-10 text-center sm:p-14"
      >
        <div className="flex justify-center gap-1.5 text-volt">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-6 w-6" />
          ))}
        </div>

        <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
          Love The Results?
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
          Leave Us A Review
        </h2>
        <p className="mx-auto mt-5 max-w-md text-white/60">
          If we&apos;ve worked on your property, we&apos;d love to hear about
          it. A quick review on Google helps other homeowners in the area
          find us — and helps us keep raising the bar.
        </p>

        <a
          href={site.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-3 bg-volt px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-ink shadow-volt-sm transition-all hover:shadow-volt hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Leave a Google Review
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </a>
      </motion.div>
    </section>
  );
}
