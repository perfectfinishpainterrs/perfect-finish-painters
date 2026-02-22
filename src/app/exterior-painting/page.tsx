import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Exterior Painting in Mays Landing NJ | Perfect Finish Painters",
  description:
    "Professional exterior painting in Mays Landing and South Jersey. Siding, shutters, doors, trim, and fascia. Weather-resistant paints for the Jersey Shore climate. Free estimates — call (609) 377-4226.",
  openGraph: {
    title: "Exterior Painting in Mays Landing NJ | Perfect Finish Painters",
    description: "Professional exterior painting in Mays Landing and South Jersey. Weather-resistant paints for the Shore climate.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/exterior-painting",
    images: [{ url: "/logo.png", width: 800, height: 200, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Painting in Mays Landing NJ | Perfect Finish Painters",
    description: "Professional exterior painting in Mays Landing and South Jersey. Weather-resistant paints for the Shore climate.",
    images: ["/logo.png"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/exterior-painting" },
};

export default function ExteriorPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Exterior Painting", item: "https://perfectfinishpainter.com/exterior-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Painting",
    description: "Full exterior painting for siding, stucco, brick, shutters, doors, trim, and fascia. Includes power washing, scraping, priming, and weather-resistant acrylic latex paint application.",
    provider: { "@type": "HousePainter", name: "Perfect Finish Painters", url: "https://perfectfinishpainter.com" },
    areaServed: { "@type": "State", name: "New Jersey" },
    url: "https://perfectfinishpainter.com/exterior-painting",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "5",
      reviewCount: "5",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <div className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Exterior Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Exterior Painting in South Jersey</h1>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                Boost your curb appeal and protect your home from the elements. Perfect Finish Painters provides full exterior painting for homes and businesses throughout Mays Landing and Atlantic County — from siding and shutters to doors, trim, and fascia.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                South Jersey&apos;s coastal humidity, salt air, and seasonal temperature swings demand the right paint. We use <strong className="text-[#1e3a5f]">100% acrylic latex paints</strong> with UV and mildew resistance from brands like Benjamin Moore and Sherwin-Williams. Every exterior project is quoted after a free on-site or photo-based assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
                  Get Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="tel:+16093774226" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
                  Call (609) 377-4226
                </a>
              </div>
            </div>
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/project-1.jpg" alt="Exterior painting project by Perfect Finish Painters in South Jersey" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Siding, stucco, brick & vinyl surfaces",
              "Shutters, doors, trim & fascia boards",
              "Power washing & surface preparation",
              "Scraping and sanding loose paint",
              "Primer on bare wood and problem areas",
              "Caulking gaps and sealing joints",
              "Weather-resistant acrylic latex paint",
              "UV & mildew protection for coastal climate",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#e2e8f0]">
                <svg className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#374151]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How Often Should You Repaint Your Exterior?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            In New Jersey, exterior paint typically lasts 5 to 7 years depending on sun exposure, weather conditions, and paint quality. Homes closer to the shore may need repainting sooner due to salt air. Signs it&apos;s time include fading, chalking, peeling, or visible bare wood. Regular maintenance and quality paint extend the life of any paint job. If you&apos;re not sure, we offer free assessments — just give us a call or take our quiz.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Curb Appeal?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free personalized estimate in 60 seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              Start 60-Second Quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+16093774226" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
