"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Image from "next/image";
import { panels, type PanelId } from "@/lib/panels";
import { site } from "@/lib/site";
import { ScrollExperienceContext } from "@/lib/scroll-context";
import Hero from "@/components/sections/Hero";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import GardeningShowcase from "@/components/sections/GardeningShowcase";
import EstimateForm from "@/components/sections/EstimateForm";
import ReviewCTA from "@/components/sections/ReviewCTA";
import Contact from "@/components/sections/Contact";
import FloatingCallButton from "@/components/layout/FloatingCallButton";

const PANEL_COMPONENTS = [
  Hero,
  ProjectShowcase,
  Team,
  Services,
  GardeningShowcase,
  EstimateForm,
  ReviewCTA,
  Contact,
];

export default function ScrollExperience() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(panels[0].id);
  const lenisRef = useRef<Lenis | null>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.panelId;
          if (!id) continue;
          if (
            entry.isIntersecting &&
            (!best || entry.intersectionRatio > best.ratio)
          ) {
            best = { id, ratio: entry.intersectionRatio };
          }
        }
        if (best) setActive(best.id);
      },
      { threshold: [0.3, 0.5, 0.7] },
    );

    Object.values(panelRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goToPanel = (id: PanelId) => {
    const el = panelRefs.current[id];
    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -72, duration: 1.3 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ScrollExperienceContext.Provider value={{ goToPanel }}>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 sm:px-10 lg:px-16 ${
          scrolled
            ? "bg-ink-950/85 backdrop-blur-md"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <button
          onClick={() => goToPanel("home")}
          aria-label="Heights Yard Solutions — back to top"
        >
          <Image
            src="/logo/hys-logo.png"
            alt="Heights Yard Solutions"
            width={295}
            height={162}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </button>

        <div className="hidden items-center gap-4 xl:flex">
          {panels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => goToPanel(panel.id)}
              className={`font-heading text-sm font-medium uppercase tracking-widest transition-colors ${
                active === panel.id
                  ? "text-volt"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {panel.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="hidden font-heading text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-volt sm:block"
          >
            {site.phoneDisplay}
          </a>
          <button
            onClick={() => goToPanel("estimate")}
            className="bg-volt px-4 py-2.5 font-heading text-xs font-semibold uppercase tracking-widest text-ink shadow-volt-sm transition-all hover:shadow-volt active:scale-[0.98] sm:px-5 sm:text-sm"
          >
            Estimate
          </button>
        </div>
      </nav>

      <FloatingCallButton hidden={active === "estimate" || active === "contact"} />

      {PANEL_COMPONENTS.map((PanelComponent, i) => {
        const panel = panels[i];
        return (
          <div
            key={panel.id}
            id={panel.id}
            data-panel-id={panel.id}
            ref={(el) => {
              panelRefs.current[panel.id] = el;
            }}
            className="scroll-mt-20"
          >
            <PanelComponent />
          </div>
        );
      })}
    </ScrollExperienceContext.Provider>
  );
}
