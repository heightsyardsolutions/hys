import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import { site } from "@/lib/site";
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
const title = "Heights Yard Solutions — Lawn Care & Landscaping in Dearborn Heights, MI";
const description =
  "Professional lawn care, landscaping, and hardscape services in Dearborn Heights & surrounding cities. Family-owned, fully insured, and quoted in person. Schedule your free estimate today.";

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
    "yard cleanup Michigan",
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
      </head>
      <body className="bg-ink font-body font-normal text-white antialiased">
        {children}
      </body>
    </html>
  );
}
