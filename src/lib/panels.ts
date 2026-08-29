export const panels = [
  { id: "home", label: "Home" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "planting", label: "Planting" },
  { id: "estimate", label: "Estimate" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

export type PanelId = (typeof panels)[number]["id"];
