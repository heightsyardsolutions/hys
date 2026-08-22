export const site = {
  phoneDisplay: "(734) 377-2934",
  phoneHref: "tel:+17343772934",
  email: "heightsyardsolutions@gmail.com",
  instagramHandle: "@heightsyardsolutions",
  instagramUrl: "https://instagram.com/heightsyardsolutions",
  serviceArea: "Dearborn Heights & Surrounding Cities",
  googleReviewUrl: "https://share.google/nLPO55XwhY9Ka16JH",
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

const showcaseCaptions = [
  "Foundation Bed — Releveled with New Brick & Starlite Black Rock",
  "Porch Bed — Releveled with New Brick & Starlite Black Rock",
  "Evergreen Bed — Releveled with New Brick & Starlite Black Rock",
  "Flower Bed — Releveled with New Brick & Starlite Black Rock",
  "Light Pole Upgrade — New Brick & Starlite Black Rock",
  "Tree Ring Rebuild — Regraded with Fill Dirt & New Brick",
];

export const projectShowcase = [1, 2, 3, 4, 5, 6].map((n) => ({
  before: `/images/projects/before-${n}.jpg`,
  after: `/images/projects/after-${n}.jpg`,
  caption: showcaseCaptions[n - 1],
}));

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
