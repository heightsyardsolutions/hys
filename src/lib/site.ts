export const site = {
  phoneDisplay: "(734) 377-2934",
  phoneHref: "tel:+17343772934",
  email: "heightsyardsolutions@gmail.com",
  instagramHandle: "@heightsyardsolutions",
  instagramUrl: "https://instagram.com/heightsyardsolutions",
  serviceArea: "Dearborn Heights & Surrounding Cities",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ1_8NL-n7x0ERYk2w8cU36NY&source=g.page.m.i.a._&laa=nmx-review-solicitation-ia2",
  yelpReviewUrl:
    "https://www.yelp.com/writeareview/biz/yKT2s0HIclY0Z843l0yj0Q?return_url=%2Fbiz%2FyKT2s0HIclY0Z843l0yj0Q&review_origin=biz-details-war-button",
};

export const serviceCategories = [
  {
    name: "Lawncare",
    items: ["Mow", "Edge", "Blow"],
  },
  {
    name: "Landscaping",
    items: [
      "Walkway Installation",
      "Solar Lighting Installation",
      "New Rock Installation",
      "Outdoor Custom Firepits Installation",
    ],
  },
  {
    name: "Overgrown Removal & Demolition",
    items: ["Weeds", "Brush", "Small Trees", "Flower Bed Cleanups"],
  },
  {
    name: "Yard Cleanup",
    items: ["Raking", "Leaf Shredding", "Blowing"],
  },
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
  ...serviceCategories.map((category) => ({
    label: category.name,
    options: [...category.items],
  })),
  {
    label: "Other",
    options: ["Have Your Own Project? We'll Measure & Quote It"],
  },
] as const;
