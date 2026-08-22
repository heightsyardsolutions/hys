"use client";

import { motion } from "framer-motion";
import { PatrickAvatar, AyhemAvatar } from "@/components/icons/TeamAvatars";

const team = [
  {
    name: "Ayhem",
    role: "Co-Owner",
    Avatar: AyhemAvatar,
    bio: "Hands-on with every crew, Ayhem keeps jobs moving with an eye for clean lines and hard, honest work.",
  },
  {
    name: "Patrick",
    role: "Co-Owner",
    Avatar: PatrickAvatar,
    bio: "Patrick keeps every job on schedule and every client in the loop, bringing precision to each property we touch.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Team() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col justify-center border-t border-white/10 bg-ink-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-volt">
            Meet The Team
          </p>
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Ayhem &amp; Patrick
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Two owners who show up on-site, not just in the office. Heights
            Yard Solutions is built on doing the work right, together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {team.map(({ name, role, Avatar, bio }) => (
            <motion.div
              key={name}
              variants={item}
              className="group flex flex-col items-center border border-white/10 bg-ink px-8 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-volt/40"
            >
              <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-volt/40 shadow-volt-sm transition-all duration-300 group-hover:border-volt">
                <Avatar className="h-full w-full" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-tight text-white">
                {name}
              </h3>
              <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-widest text-volt">
                {role}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                {bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
