import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Oswald, Inter } from "next/font/google";
import { site, serviceCategories, customerReviews } from "@/lib/site";
import { GA_MEASUREMENT_ID, GTM_CONTAINER_ID } from "@/lib/analytics";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.heightsyardsolutions.com";
const title =
  "Heights Yard Solutions — Lawn Care, Landscaping & Hardscaping in Dearborn Heights, MI";
const description =
  "Lawn care, landscaping, hardscaping & mulch installation in Dearborn Heights & nearby cities. Family-owned, fully insured — free in-person estimates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Heights Yard Solutions",
  },
  description,
  keywords: [
    "landscaping Dearborn Heights",
    "lawn care Dearborn Heights",
    "hardscaping Dearborn Heights",
    "mulch installation Michigan",
    "flower bed installation Michigan",
    "yard cleanup Michigan",
    "tree and brush removal Michigan",
    "landscaping company near me",
    "hardscape installation Michigan",
    "Heights Yard Solutions",
  ],
  applicationName: "Heights Yard Solutions",
  authors: [{ name: "Heights Yard Solutions" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Heights Yard Solutions",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Heights Yard Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Heights Yard Solutions",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image.png`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  areaServed: {
    "@type": "Place",
    name: site.serviceArea,
  },
  priceRange: "$$",
  sameAs: [
    site.instagramUrl,
    "https://www.yelp.com/biz/yKT2s0HIclY0Z843l0yj0Q",
    "https://share.google/nLPO55XwhY9Ka16JH",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: customerReviews.length,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: serviceCategories.map((category) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: category.name,
        description: category.description,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
          `}
        </Script>
      </head>
      <body className="bg-ink font-body font-normal text-white antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
