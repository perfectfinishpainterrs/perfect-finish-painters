import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { serviceAreas } from "@/data/service-areas";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    city: area.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: `painters in ${area.name} NJ, ${area.name} painting company, house painters ${area.name}, interior painting ${area.name} NJ, exterior painting ${area.name} NJ, drywall repair ${area.name}`,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      type: "website",
      locale: "en_US",
      url: `https://perfectfinishpainter.com/${area.slug}`,
      images: [
        {
          url: "https://perfectfinishpainter.com/logo.png",
          width: 800,
          height: 200,
          alt: "Perfect Finish Painters logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["https://perfectfinishpainter.com/logo.png"],
    },
    alternates: {
      canonical: `https://perfectfinishpainter.com/${area.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    name: "Perfect Finish Painters",
    description: area.description,
    url: `https://perfectfinishpainter.com/${area.slug}`,
    telephone: "+1-609-377-4226",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mays Landing",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.latitude,
      longitude: area.longitude,
    },
    areaServed: {
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    },
    priceRange: "$$",
    image: "https://perfectfinishpainter.com/logo.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "5",
      reviewCount: "5",
    },
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
      {
        "@type": "ListItem",
        position: 2,
        name: `Painters in ${area.name} NJ`,
        item: `https://perfectfinishpainter.com/${area.slug}`,
      },
    ],
  };

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#2563eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">
                Painters in {area.name} NJ
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Professional Painters in {area.name}, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            {area.content.intro}
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            {area.content.body}
          </p>
          <p className="text-[#64748b] text-lg mb-10 leading-relaxed">
            {area.content.closing}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-black/25"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+16093774226"
              className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-8">
            Painting Services in {area.name}, NJ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Interior Painting", desc: "Walls, ceilings, trim, and accent walls in any room." },
              { title: "Exterior Painting", desc: "Siding, shutters, doors, and trim to boost curb appeal." },
              { title: "Drywall Repair", desc: "Patch holes, fix cracks, and restore smooth surfaces." },
              { title: "Flooring Installation", desc: "Professional flooring to complete your renovation." },
              { title: "Deck & Fence Staining", desc: "Protect and beautify your outdoor wood surfaces." },
              { title: "Commercial Painting", desc: "Office, retail, and commercial property painting." },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-[#1e3a5f] font-semibold mb-1">{service.title}</h3>
                <p className="text-[#64748b] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-8">
            Why {area.name} Homeowners Choose Perfect Finish Painters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-[#2563eb] mb-2">100+</div>
              <p className="text-[#64748b]">Projects Completed in South Jersey</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-[#2563eb] mb-2">5-Star</div>
              <p className="text-[#64748b]">Rating Across All Reviews</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-[#2563eb] mb-2">24hr</div>
              <p className="text-[#64748b]">Estimate Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-6">
            We Also Serve These South Jersey Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium border border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            >
              Mays Landing, NJ
            </Link>
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium border border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                {other.name}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
