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

export const customerReviews = [
  {
    name: "Rustam Sadiqi",
    text: "Very well done! Very respectful people and took care of my front yard very well! I will definitely call them again for fixing the yards 💯!",
  },
  {
    name: "Ali Al-Nidawi",
    text: "Excellent service — the job was done in a timely and professional manner.",
  },
  {
    name: "Umar B.",
    text: "Top-notch service from Heights Yard Solutions! They were punctual, professional, and super polite. The lawn and edging look immaculate — you can tell they take real pride in their work. I'll definitely be using them again!",
  },
  {
    name: "Batool Alibrahim",
    text: "Their work is excellent and neat.",
  },
  {
    name: "McKayla Scott",
    text: "Solid landscaping crew. They showed up, put in the work, and got the job done exactly like they were supposed to. My yard looks good and clean. No complaints at all, I'd definitely use them again.",
  },
  {
    name: "Ahmed Ramouni",
    text: "Great service! They did an excellent job cutting my lawn, were quick and professional, and left everything looking clean. Highly recommend!",
  },
  {
    name: "Adam Moha",
    text: null,
  },
] as const;

export const serviceCategories = [
  {
    name: "Lawncare",
    description:
      "Weekly mowing on a schedule you can count on, precise edging along walkways and beds, and a full blow-down when we're done — so your lawn stays sharp and consistent all season, not just after we leave.",
    items: ["Mow", "Edge", "Blow"],
  },
  {
    name: "Landscaping",
    description:
      "From walkway installation and solar lighting to fresh rock beds and custom outdoor fire pits, we handle the bigger installs that actually reshape how your property looks and lives.",
    items: [
      "Walkway Installation",
      "Solar Lighting Installation",
      "New Rock Installation",
      "Outdoor Custom Firepits Installation",
    ],
  },
  {
    name: "Overgrown Removal & Demolition",
    description:
      "Weeds, brush, small trees, and flower beds nobody's touched in years — cleared out and hauled away so the property looks cared for again instead of forgotten.",
    items: ["Weeds", "Brush", "Small Trees", "Flower Bed Cleanups"],
  },
  {
    name: "Yard Cleanup",
    description:
      "Seasonal raking, leaf shredding, and a thorough blow-out to clear everything else behind — the difference between a yard that's mowed and a yard that actually looks finished.",
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
