"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, customerReviews } from "@/lib/site";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.85 6.32 6.9.68-5.2 4.68 1.55 6.82L12 17.77l-6.1 3.23 1.55-6.82-5.2-4.68 6.9-.68L12 2.5z" />
    </svg>
  );
}

const PAGE_SIZE = 6;
const pages = Array.from(
  { length: Math.ceil(customerReviews.length / PAGE_SIZE) },
  (_, i) => customerReviews.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE),
);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ReviewCTA() {
  const [page, setPage] = useState(0);
  const totalPages = pages.length;

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

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
          <div className="flex justify-center gap-1.5 text-volt">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            5-Star Rated · {customerReviews.length} Reviews
          </p>
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pages[page].map((review) => (
                <motion.div
                  key={review.name}
                  variants={item}
                  className="flex flex-col border border-white/10 bg-ink-950 p-6 transition-colors duration-300 hover:border-volt/30"
                >
                  <div className="flex gap-1 text-volt">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                    {review.text ? (
                      <>&ldquo;{review.text}&rdquo;</>
                    ) : (
                      <span className="italic text-white/40">
                        Left a 5-star rating, no written review.
                      </span>
                    )}
                  </p>
                  <p className="mt-5 font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    {review.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous reviews"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:border-volt hover:text-volt"
              >
                <span aria-hidden="true">&larr;</span>
              </button>

              <div className="flex items-center gap-2.5">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    aria-label={`Show reviews page ${i + 1}`}
                    className={`h-2 transition-all duration-300 ${
                      i === page
                        ? "w-6 bg-volt"
                        : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next reviews"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:border-volt hover:text-volt"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-16 w-full max-w-2xl border border-white/10 bg-ink-950 p-10 text-center sm:p-12"
        >
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            Love The Results?
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
            Leave Us A Review
          </h3>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            If we&apos;ve worked on your property, we&apos;d love to hear
            about it. A quick review on Google or Yelp helps other
            homeowners in the area find us.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-volt px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-ink shadow-volt-sm transition-all hover:shadow-volt hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Google Review
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>

            <a
              href={site.yelpReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-heading text-base font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-volt hover:text-volt active:scale-[0.98]"
            >
              Yelp Review
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
