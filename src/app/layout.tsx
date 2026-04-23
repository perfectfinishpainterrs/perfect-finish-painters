import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { headers } from "next/headers";
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
  title: "Painters in Atlantic County NJ | Perfect Finish",
  description: "Licensed painters in Atlantic County NJ. Interior & exterior painting, drywall repair, and flooring from Mays Landing. Free estimates — 609-377-4226.",
  keywords: "painters in Mays Landing NJ, South Jersey painting company, Mays Landing painters, interior painting South Jersey, exterior painting NJ, drywall repair Mays Landing, house painters near me, painting contractors Atlantic County",
  openGraph: {
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com",
    images: [
      {
        url: "/logo.webp",
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
    images: ["/logo.webp"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname.startsWith("/pintores-") ? "es" : "en";
  // Service-area business — no storefront, so `address` is intentionally omitted and
  // `areaServed` carries the coverage area. Reviews/aggregateRating are emitted only on
  // pages that actually render review content (home, /reviews) to avoid Google manual
  // action risk. `@id` lets those pages merge into this same entity.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": "https://perfectfinishpainter.com/#business",
    name: "Perfect Finish Painters",
    description: "Professional interior & exterior painting, drywall repair, and flooring services in Mays Landing and South Jersey.",
    url: "https://perfectfinishpainter.com",
    telephone: "+1-609-377-4226",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.45,
      longitude: -74.73,
    },
    areaServed: [
      { "@type": "City", name: "Mays Landing" },
      { "@type": "City", name: "Egg Harbor Township" },
      { "@type": "City", name: "Hammonton" },
      { "@type": "City", name: "Vineland" },
      { "@type": "City", name: "Galloway" },
      { "@type": "City", name: "Somers Point" },
      { "@type": "City", name: "Northfield" },
      { "@type": "City", name: "Linwood" },
      { "@type": "City", name: "Absecon" },
      { "@type": "City", name: "Pleasantville" },
      { "@type": "City", name: "Atlantic City" },
      { "@type": "City", name: "Margate" },
      { "@type": "City", name: "Ventnor" },
      { "@type": "City", name: "Brigantine" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
    ],
    priceRange: "$$",
    image: "https://perfectfinishpainter.com/logo.webp",
    logo: "https://perfectfinishpainter.com/logo.webp",
    sameAs: [
      "https://www.facebook.com/PerfectFinishPainters",
      "https://www.instagram.com/perfectfinishpainter/",
      "https://www.yelp.com/biz/perfect-finish-painters-mays-landing",
      "https://g.page/r/CYlKM00sLEMiEAI",
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
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shed Restoration & Painting" } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-609-377-4226",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://perfectfinishpainter.com/#website",
    name: "Perfect Finish Painters",
    url: "https://perfectfinishpainter.com",
    publisher: { "@id": "https://perfectfinishpainter.com/#business" },
    inLanguage: "en-US",
  };

  return (
    <html lang={lang}>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
