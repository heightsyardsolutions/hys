"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { estimateCategoryGroups, site } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EstimateFormFields({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const fieldLabel = compact
    ? "block font-heading text-[10px] font-semibold uppercase tracking-widest text-white/50"
    : "block font-heading text-xs font-semibold uppercase tracking-widest text-white/50";
  const fieldBase = compact
    ? "mt-1.5 w-full border border-white/15 bg-ink px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-volt"
    : "mt-2 w-full border border-white/15 bg-ink px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-volt";
  const spacing = compact ? "space-y-4" : "space-y-6";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name")?.toString().trim() ?? "";
    const phone = form.get("phone")?.toString().trim() ?? "";
    const email = form.get("email")?.toString().trim() ?? "";
    const category = form.get("category")?.toString() ?? "";
    const measurements = form.get("measurements")?.toString().trim() ?? "";
    const details = form.get("details")?.toString().trim() ?? "";

    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      `Project Category: ${category}`,
      measurements && `Approximate Measurements: ${measurements}`,
      "",
      "Project Details:",
      details,
    ].filter(Boolean);

    const subject = encodeURIComponent(
      `Estimate Request — ${category || "General"}`,
    );
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border border-volt/40 bg-volt/[0.06] ${compact ? "p-5" : "p-8"}`}
      >
        <p className="font-heading text-base font-semibold uppercase tracking-wide text-volt sm:text-lg">
          Opening your email
        </p>
        <p className="mt-2 text-sm text-white/70 sm:text-base">
          We&apos;ve opened a message to {site.email} with your details
          filled in — just hit send. If nothing opened, email us directly or
          call {site.phoneDisplay}.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit}
      className={spacing}
    >
      <motion.div variants={item} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label>
          <span className={fieldLabel}>Name</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className={fieldBase}
          />
        </label>
        <label>
          <span className={fieldLabel}>Phone</span>
          <input
            required
            type="tel"
            name="phone"
            placeholder="(313) 555-0123"
            className={fieldBase}
          />
        </label>
      </motion.div>

      <motion.label variants={item} className="block">
        <span className={fieldLabel}>Email (optional)</span>
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          className={fieldBase}
        />
      </motion.label>

      <motion.label variants={item} className="block">
        <span className={fieldLabel}>Project Category</span>
        <select
          required
          name="category"
          defaultValue=""
          className={`${fieldBase} appearance-none`}
        >
          <option value="" disabled>
            Select a category
          </option>
          {estimateCategoryGroups.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </motion.label>

      <motion.label variants={item} className="block">
        <span className={fieldLabel}>
          Approximate Measurements (optional)
        </span>
        <input
          type="text"
          name="measurements"
          placeholder="e.g., 40 linear ft of garden bed"
          className={fieldBase}
        />
        {!compact && (
          <span className="mt-2 block text-xs text-white/40">
            Helpful for work priced by linear foot — garden beds, edging,
            drainage lines, and similar.
          </span>
        )}
      </motion.label>

      <motion.label variants={item} className="block">
        <span className={fieldLabel}>Project Details</span>
        <textarea
          required
          name="details"
          rows={compact ? 3 : 5}
          placeholder="Tell us what you need done and any details about your property."
          data-lenis-prevent
          className={`${fieldBase} resize-none`}
        />
      </motion.label>

      <motion.div variants={item}>
        <button
          type="submit"
          className={`group inline-flex w-full items-center justify-center gap-3 bg-volt font-heading font-semibold uppercase tracking-wide text-ink shadow-volt-sm transition-all hover:shadow-volt hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto ${
            compact ? "px-6 py-3 text-sm" : "px-8 py-4 text-base"
          }`}
        >
          Submit Request
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </button>
      </motion.div>
    </motion.form>
  );
}
