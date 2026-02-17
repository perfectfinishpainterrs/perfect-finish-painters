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
  metadataBase: new URL("https://perfectfinishpainters.com"),
  title: "Painters in Mays Landing NJ | Perfect Finish Painters — South Jersey Painting Company",
  description: "Looking for painters in Mays Landing NJ? Perfect Finish Painters is a trusted South Jersey painting company offering interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds — call (609) 377-4226.",
  keywords: "painters in Mays Landing NJ, South Jersey painting company, Mays Landing painters, interior painting South Jersey, exterior painting NJ, drywall repair Mays Landing, house painters near me, painting contractors Atlantic County",
  openGraph: {
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainters.com",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 200,
        alt: "Perfect Finish Painters logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    images: ["/logo.png"],
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
      { "@type": "City", name: "Atlantic City, NJ" },
      { "@type": "City", name: "Margate, NJ" },
      { "@type": "City", name: "Ventnor, NJ" },
      { "@type": "City", name: "Brigantine, NJ" },
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "5",
      reviewCount: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ryan J." },
        datePublished: "2024-11-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Has helped me numerous times with painting. Truly a professional!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sean P." },
        datePublished: "2024-10-22",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "They show up on time, do what they promise, at a fair price.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Audie M." },
        datePublished: "2024-11-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "They came out quickly and touched up my house.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mandy D." },
        datePublished: "2024-12-03",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "I recommend Perfect Finish Painters! Quality work at an affordable price.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sean D." },
        datePublished: "2024-12-10",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Brandon came out and touched up painting my house after other painters stopped contacting me.",
      },
    ],
    award: [
      "5-Star Rated on Facebook",
      "Top Rated Painter on Yelp — Mays Landing",
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
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: "Get Free Estimate",
        target: "https://perfectfinishpainters.com/quiz",
      },
      {
        "@type": "CommunicateAction",
        name: "Call for Estimate",
        target: "tel:+16093774226",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to hire a painter in Mays Landing NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Painting costs in Mays Landing vary based on room size, condition, and paint quality. Most interior rooms cost between $500–$1,000. Take our free 60-second quiz for a personalized estimate — no obligation.",
        },
      },
      {
        "@type": "Question",
        name: "What areas in South Jersey do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Mays Landing, Egg Harbor Township, Hammonton, Vineland, Galloway, Somers Point, Northfield, Linwood, Absecon, Pleasantville, Atlantic City, and the greater Atlantic County area.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free painting estimates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer free estimates with no obligation. Take our 60-second online quiz or call us at (609) 377-4226 to get a personalized quote within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What painting services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer interior painting, exterior painting, drywall repair, flooring installation, and deck & fence staining. We handle both residential and commercial projects throughout South Jersey.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to paint a house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A single room typically takes 1 day. A full interior can take 3–5 days depending on size and prep work needed. We'll give you a timeline with your estimate so there are no surprises.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best paint for exterior in South Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For South Jersey exteriors, we recommend 100% acrylic latex paint with built-in UV and mildew resistance. Brands like Benjamin Moore Aura Exterior and Sherwin-Williams Duration hold up well against coastal humidity, salt air, and seasonal temperature swings. We always apply a quality primer first for maximum adhesion and longevity.",
        },
      },
      {
        "@type": "Question",
        name: "How do I prepare my house for painting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For interior painting, move furniture to the center of the room or out of it, remove wall decorations and outlet covers, and fill small nail holes with spackle. For exterior painting, power wash the siding, scrape loose paint, and trim back bushes touching the house. Our team handles most prep work as part of the job, so just let us know your timeline and we'll guide you through what's needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do painters move furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Perfect Finish Painters moves furniture as part of our service. We shift furniture to the center of the room and cover it with drop cloths to protect it from paint. For larger or fragile items, we may ask you to move them before we arrive. We always leave the room clean and put furniture back when we're done.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between interior and exterior paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Exterior paint is formulated to resist UV rays, moisture, mildew, and temperature changes. It contains more flexible resins that expand and contract with the weather. Interior paint prioritizes low odor, easy cleanup, stain resistance, and a smooth finish. Using the wrong type can lead to peeling, fading, or poor indoor air quality. Our team always uses the right product for the job.",
        },
      },
      {
        "@type": "Question",
        name: "How often should you repaint your house in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In New Jersey, exterior paint typically lasts 5–7 years depending on sun exposure, weather conditions, and paint quality. Homes closer to the shore may need repainting sooner due to salt air. Interior paint lasts 5–10 years in most rooms, though high-traffic areas like hallways and kitchens may need refreshing sooner. Regular maintenance and quality paint extend the life of any paint job.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perfectfinishpainters.com",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Perfect Finish Painters",
    url: "https://perfectfinishpainters.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://perfectfinishpainters.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Perfect Finish Painters",
    url: "https://perfectfinishpainters.com",
    logo: "https://perfectfinishpainters.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-609-377-4226",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/PerfectFinishPainters",
      "https://www.instagram.com/perfectfinishpainter/",
      "https://www.yelp.com/biz/perfect-finish-painters-mays-landing",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
