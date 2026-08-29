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
    name: "zeze dilly",
    text: "I highly recommend Haidar and Patrick for any landscaping needs. They recently completed a project at my home and did a fantastic job. Their attention to detail and professionalism were excellent, and I am very pleased with the final…",
  },
  {
    name: "Hector Torres",
    text: "Very professional and cute and kind and sweet and friendly",
  },
  {
    name: "layla w.",
    text: "Wonderful service with no mishaps and none of the work is lazily done.",
  },
  {
    name: "brenda henderson",
    text: "Excellent customer service. Great pricing very professional.",
  },
  {
    name: "Anshika Sharma",
    text: "great service!",
  },
  {
    name: "lil dessi",
    text: "Great landscaping company! They did an excellent job and really took their time to make everything look clean, neat, and well-maintained. The work was done professionally, and I'm very happy with how everything looks. I definitely recommend them if you're looking for quality landscaping work!",
  },
  {
    name: "chapis so based",
    text: "Amazing service from the start to finish! They did an excellent job with our landscaping and you can tell how hardworking and dedicated they are. Great communication, progessional service, and the results look AMAZING, I highly recommend them!!🙌🏻",
  },
  {
    name: "Isha Musse",
    text: "I've seen examples of their work, and the quality looks excellent. The attention to detail really stands out, and I'd feel comfortable recommending them to others.",
  },
  {
    name: "Arelle",
    text: "Amazing work",
  },
  {
    name: "danh le",
    text: "Looks very clean and affordable prices",
  },
  {
    name: "Aminah Rashid",
    text: "Great price, fast turnaround, and such friendly service. They helped make my home a home!",
  },
  {
    name: "wys",
    text: "Great work!",
  },
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
] as const;

export const serviceCategories = [
  {
    name: "Lawncare",
    description:
      "Weekly mowing on a schedule you can count on, precise edging along walkways and beds, and a full blow-down when we're done — so your lawn stays sharp and consistent all season, not just after we leave.",
    items: ["Mow, Edge & Blow"],
  },
  {
    name: "Landscaping",
    description:
      "From walkway installation and solar lighting to fresh rock beds, new flower and shrub planting, and custom outdoor fire pits, we handle the bigger installs that actually reshape how your property looks and lives.",
    items: [
      "Walkway Installation",
      "Solar Lighting Installation",
      "New Rock Installation",
      "Flower & Shrub Planting",
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

export const gardeningShowcase = [
  {
    image: "/images/gardening/planting-1.jpg",
    caption: "Fresh Planting Bed",
  },
  {
    image: "/images/gardening/planting-2.jpg",
    caption: "Perennial Planting",
  },
  {
    image: "/images/gardening/planting-3.jpg",
    caption: "Arborvitae Planting",
  },
] as const;

export const projects = [
  {
    title: "Star Black Rock & Slate Retaining Wall Revamp",
    review: null,
    pairs: [1, 2, 3, 4, 5, 6].map((n) => ({
      before: `/images/projects/project-1/before-${n}.jpg`,
      after: `/images/projects/project-1/after-${n}.jpg`,
      caption: [
        "Foundation Bed — Releveled with New Brick & Star Black Rock",
        "Porch Bed — Releveled with New Brick & Star Black Rock",
        "Evergreen Bed — Releveled with New Brick & Star Black Rock",
        "Flower Bed — Releveled with New Brick & Star Black Rock",
        "Light Pole Upgrade — New Brick & Star Black Rock",
        "Tree Ring Rebuild — Regraded with Fill Dirt & New Brick",
      ][n - 1],
    })),
  },
  {
    title: "Garden Flower Bed Installation — Marble White Rock & Rubber Mulch",
    review: {
      name: "zeze dilly",
      text: "I highly recommend Haidar and Patrick for any landscaping needs. They recently completed a project at my home and did a fantastic job. Their attention to detail and professionalism were excellent, and I am very pleased with the final…",
    },
    pairs: [1, 2, 3, 4, 5].map((n) => ({
      before: `/images/projects/project-2/before-${n}.jpg`,
      after: `/images/projects/project-2/after-${n}.jpg`,
      caption: [
        "Side Entry Bed — Marble White Rock Install",
        "Walkway Bed — Marble White Rock & Rubber Mulch",
        "Evergreen Bed — Marble White Rock Install",
        "Porch Bed — Marble White Rock Install",
        "Arborvitae Bed — Marble White Rock Install",
      ][n - 1],
    })),
  },
  {
    title: "Lawncare — Mow, Edge & Blow Service",
    review: null,
    pairs: [1, 2].map((n) => ({
      before: `/images/projects/project-3/before-${n}.jpg`,
      after: `/images/projects/project-3/after-${n}.jpg`,
      caption: "Lawncare — Mow, Edge & Blow",
    })),
  },
  {
    title: "Lawncare — Mow, Edge & Flower Bed Trim",
    review: null,
    pairs: [4, 5].map((n) => ({
      before: `/images/projects/project-3/before-${n}.jpg`,
      after: `/images/projects/project-3/after-${n}.jpg`,
      caption: "Lawncare — Mow, Edge & Blow",
    })),
  },
] as const;

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
