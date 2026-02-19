import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Deck & Fence Staining in Mays Landing NJ | Perfect Finish Painters",
  description:
    "Professional deck and fence staining in Mays Landing and South Jersey. Protect outdoor wood from coastal weather. Starting at $2/sq ft. Free estimates — call (609) 377-4226.",
  openGraph: {
    title: "Deck & Fence Staining in Mays Landing NJ | Perfect Finish Painters",
    description: "Professional deck and fence staining in Mays Landing and South Jersey. Protect outdoor wood from coastal weather.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/deck-fence-staining",
    images: [{ url: "/logo.png", width: 800, height: 200, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck & Fence Staining in Mays Landing NJ | Perfect Finish Painters",
    description: "Professional deck and fence staining in Mays Landing and South Jersey. Protect outdoor wood from coastal weather.",
    images: ["/logo.png"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/deck-fence-staining" },
};

export default function DeckFenceStainingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Deck & Fence Staining", item: "https://perfectfinishpainter.com/deck-fence-staining" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Deck & Fence Staining</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Deck & Fence Staining in South Jersey</h1>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            South Jersey&apos;s coastal climate is tough on outdoor wood. Humidity, salt air, UV exposure, and seasonal rain break down unprotected decks and fences fast. Perfect Finish Painters provides professional staining and sealing to protect and beautify your outdoor wood surfaces.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            Deck staining starts at <strong className="text-[#1e3a5f]">$2 per square foot</strong> and fence staining starts at <strong className="text-[#1e3a5f]">$3 per linear foot</strong>, depending on size, condition, and product choice. We use weather-resistant stains designed to hold up in the Atlantic County climate.
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
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Deck staining and sealing",
              "Fence staining and sealing",
              "Power washing and surface cleaning",
              "Sanding rough or splintered boards",
              "Weather-resistant stain products",
              "UV and mildew protection",
              "Transparent, semi-transparent, and solid stain options",
              "Free on-site assessment",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How Often Should You Restain?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            In South Jersey, deck stain typically lasts 2 to 3 years depending on sun exposure and foot traffic. Fences usually go 3 to 5 years between applications. Signs it&apos;s time to restain include fading color, water no longer beading on the surface, and graying or splintering wood. Regular staining extends the life of your deck or fence and keeps it looking great.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Deck & Fence</h2>
          <p className="text-white/70 text-lg mb-8">Get a free estimate before the weather takes its toll.</p>
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
