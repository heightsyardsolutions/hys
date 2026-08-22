export const site = {
  phoneDisplay: "(734) 377-2934",
  phoneHref: "tel:+17343772934",
  email: "heightsyardsolutions@gmail.com",
  instagramHandle: "@heightsyardsolutions",
  instagramUrl: "https://instagram.com/heightsyardsolutions",
  serviceArea: "Dearborn Heights & Surrounding Cities",
};

export const coreServices = [
  {
    name: "Lawn Care",
    description:
      "Weekly mowing, edging, and trimming to keep your grass sharp and consistent all season.",
  },
  {
    name: "Landscaping",
    description:
      "Bed design and installation — plants, shrubs, and clean lines that reshape your property.",
  },
  {
    name: "Mulching",
    description:
      "Fresh mulch installs that lock in a crisp, defined look and protect your beds.",
  },
  {
    name: "Cleanups",
    description:
      "Spring and fall cleanups — leaves, debris, and overgrowth cleared out fast.",
  },
] as const;

export const projectServices = [
  "Bricklaying",
  "Garden Bed Installation",
  "Hedge Trimming/Brush Trimming & Demolition",
  "Yard Leveling & Grading",
  "Overgrown Weed Trimming/Demolition",
] as const;

export const estimateCategoryGroups = [
  {
    label: "Lawn Care Services",
    options: coreServices.map((s) => s.name),
  },
  {
    label: "Project & Hardscape Services",
    options: [...projectServices],
  },
  {
    label: "Other",
    options: ["Custom Outdoor Living (Coming Soon)", "Not Sure / Other"],
  },
] as const;
