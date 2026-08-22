export const panels = [
  { id: "home", label: "Home" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "estimate", label: "Estimate" },
  { id: "contact", label: "Contact" },
] as const;

export type PanelId = (typeof panels)[number]["id"];
