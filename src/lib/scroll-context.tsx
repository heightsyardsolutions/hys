"use client";

import { createContext, useContext } from "react";
import type { PanelId } from "@/lib/panels";

type ScrollExperienceContextValue = {
  goToPanel: (id: PanelId) => void;
};

export const ScrollExperienceContext =
  createContext<ScrollExperienceContextValue>({
    goToPanel: () => {},
  });

export function useScrollExperience() {
  return useContext(ScrollExperienceContext);
}
