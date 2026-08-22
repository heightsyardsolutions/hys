export const panels = [
  { id: "home", label: "Home" },
  { id: "gallery", label: "Gallery" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "estimate", label: "Estimate" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

export type PanelId = (typeof panels)[number]["id"];
