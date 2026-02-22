import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Interior Painting in Mays Landing NJ | Perfect Finish Painters",
  description:
    "Professional interior painting in Mays Landing and South Jersey. Walls, ceilings, trim, accent walls, and more. Most rooms done in 1 day, starting at $500. Free estimates — call (609) 377-4226.",
  openGraph: {
    title: "Interior Painting in Mays Landing NJ | Perfect Finish Painters",
    description:
      "Professional interior painting in Mays Landing and South Jersey. Walls, ceilings, trim, and more. Starting at $500.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/interior-painting",
    images: [{ url: "/logo.png", width: 800, height: 200, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Painting in Mays Landing NJ | Perfect Finish Painters",
    description:
      "Professional interior painting in Mays Landing and South Jersey. Walls, ceilings, trim, and more. Starting at $500.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com/interior-painting",
  },
};

export default function InteriorPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Interior Painting", item: "https://perfectfinishpainter.com/interior-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Painting",
    description: "Professional interior painting for walls, ceilings, trim, baseboards, doors, and accent walls. Includes surface prep, priming, and premium paint application. Most rooms completed in 1 day.",
    provider: { "@type": "HousePainter", name: "Perfect Finish Painters", url: "https://perfectfinishpainter.com" },
    areaServed: { "@type": "State", name: "New Jersey" },
    url: "https://perfectfinishpainter.com/interior-painting",
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

      {/* Breadcrumb */}
      <div className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Interior Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
                Interior Painting in South Jersey
              </h1>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                Whether it&apos;s a single room refresh or a whole-home makeover, Perfect Finish Painters delivers clean, professional interior painting throughout Mays Landing and South Jersey. We handle walls, ceilings, trim, baseboards, doors, and accent walls — all with proper prep and premium paint.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                Most rooms in the Mays Landing area cost between <strong className="text-[#1e3a5f]">$500 and $1,000</strong> depending on room size, wall condition, and paint quality. A single room typically takes one day to complete, while a full interior takes 3 to 5 days.
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
                <Image src="/project-2.jpg" alt="Interior painting project by Perfect Finish Painters in South Jersey" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Living rooms, bedrooms, kitchens, bathrooms & hallways",
              "Accent walls & custom color matching",
              "Ceiling and crown molding painting",
              "Trim, baseboards, doors & window frames",
              "Proper prep: sanding, patching, priming & taping",
              "Drop cloths and furniture protection",
              "Premium paints from trusted brands",
              "Final walkthrough and touch-ups",
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

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Our Interior Painting Process</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { step: "1", title: "Surface Preparation", desc: "We fill holes, sand rough spots, tape edges, and prime bare surfaces. Good prep is what separates a lasting paint job from one that peels." },
              { step: "2", title: "Paint Application", desc: "We apply two coats of premium paint using brushes and rollers for a smooth, even finish. We use low-VOC paints for better indoor air quality." },
              { step: "3", title: "Detail Work", desc: "Trim, baseboards, doors, and window frames get careful attention with angled brushes for crisp, clean lines." },
              { step: "4", title: "Cleanup & Walkthrough", desc: "We remove all tape and drop cloths, clean up completely, and do a final walkthrough with you to make sure everything looks perfect." },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-[#1e3a5f] font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#64748b] mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
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
