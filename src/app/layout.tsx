import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Painters in Mays Landing NJ | Perfect Finish Painters — South Jersey Painting Company",
  description: "Looking for painters in Mays Landing NJ? Perfect Finish Painters is a trusted South Jersey painting company offering interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds — call (609) 377-4226.",
  keywords: "painters in Mays Landing NJ, South Jersey painting company, Mays Landing painters, interior painting South Jersey, exterior painting NJ, drywall repair Mays Landing, house painters near me, painting contractors Atlantic County",
  openGraph: {
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
  },
  alternates: {
    canonical: "https://perfectfinishpainters.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    name: "Perfect Finish Painters",
    description: "Professional interior & exterior painting, drywall repair, and flooring services in Mays Landing and South Jersey.",
    url: "https://perfectfinishpainters.com",
    telephone: "+1-609-377-4226",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mays Landing",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.45,
      longitude: -74.73,
    },
    areaServed: [
      { "@type": "City", name: "Mays Landing, NJ" },
      { "@type": "City", name: "Egg Harbor Township, NJ" },
      { "@type": "City", name: "Hammonton, NJ" },
      { "@type": "City", name: "Vineland, NJ" },
      { "@type": "City", name: "Galloway, NJ" },
      { "@type": "City", name: "Somers Point, NJ" },
      { "@type": "City", name: "Northfield, NJ" },
      { "@type": "City", name: "Linwood, NJ" },
      { "@type": "City", name: "Absecon, NJ" },
      { "@type": "City", name: "Pleasantville, NJ" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
    ],
    priceRange: "$$",
    image: "https://perfectfinishpainters.com/logo.png",
    sameAs: [
      "https://www.facebook.com/PerfectFinishPainters",
      "https://www.instagram.com/perfectfinishpainter/",
      "https://www.yelp.com/biz/perfect-finish-painters-mays-landing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck & Fence Staining" } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
