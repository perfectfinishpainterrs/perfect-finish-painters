import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
  metadataBase: new URL("https://perfectfinishpainter.com"),
  title: "Painters in Atlantic County NJ | Perfect Finish Painters — Mays Landing",
  description: "Licensed painting contractor serving Atlantic County NJ. Interior painting, exterior painting, drywall repair, and flooring. Based in Mays Landing. Free estimates — 609-377-4226.",
  keywords: "painters in Mays Landing NJ, South Jersey painting company, Mays Landing painters, interior painting South Jersey, exterior painting NJ, drywall repair Mays Landing, house painters near me, painting contractors Atlantic County",
  openGraph: {
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com",
    images: [
      {
        url: "/logo.png",
        width: 1970,
        height: 748,
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
    canonical: "https://perfectfinishpainter.com",
  },
  verification: {
    google: "q8waW2HZ8B6WKuz42YYlJb6WWh9y7kP3mELR_6FX_qM",
  },
  other: {
    "fb:app_id": "2982905135253221",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: "Perfect Finish Painters",
    description: "Professional interior & exterior painting, drywall repair, and flooring services in Mays Landing and South Jersey.",
    url: "https://perfectfinishpainter.com",
    telephone: "+1-609-377-4226",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mays Landing",
      addressLocality: "Mays Landing",
      addressRegion: "NJ",
      postalCode: "08330",
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
    image: "https://perfectfinishpainter.com/logo.png",
    sameAs: [
      "https://www.facebook.com/PerfectFinishPainters",
      "https://www.instagram.com/perfectfinishpainter/",
      "https://www.yelp.com/biz/perfect-finish-painters-mays-landing",
      "https://g.page/r/CYlKM00sLEMiEAI",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "19",
      reviewCount: "19",
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
      "5-Star Rated on Google",
      "5-Star Rated on Facebook",
      "Top Rated Painter on Yelp — Mays Landing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shed Restoration & Painting" } } },
      ],
    },
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: "Get Free Estimate",
        target: "https://perfectfinishpainter.com/quiz",
      },
      {
        "@type": "CommunicateAction",
        name: "Call for Estimate",
        target: "tel:+16093774226",
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
        item: "https://perfectfinishpainter.com",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Perfect Finish Painters",
    url: "https://perfectfinishpainter.com",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Perfect Finish Painters",
    url: "https://perfectfinishpainter.com",
    logo: "https://perfectfinishpainter.com/logo.png",
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
      "https://g.page/r/CYlKM00sLEMiEAI",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="google" content="nositelinkssearchbox" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-822VB2RDNH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-822VB2RDNH');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3251744804997418');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3251744804997418&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <div id="google_translate_element" style={{ display: "none" }} />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
