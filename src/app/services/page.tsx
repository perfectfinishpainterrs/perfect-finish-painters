import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import { serviceAreas } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Painting Services in South Jersey | Perfect Finish Painters — Mays Landing NJ",
  description: "Interior & exterior painting, drywall repair, flooring, and deck staining in Mays Landing NJ and South Jersey. Free estimates — call (609) 377-4226.",
  alternates: {
    canonical: "https://perfectfinishpainters.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
              Painting Services in South Jersey
            </h1>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              From interior walls to exterior siding, Perfect Finish Painters handles all your painting and home improvement needs in Mays Landing and throughout Atlantic County.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Services Section */}
      <ServicesSection />

      {/* Detailed Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
              What to Expect from Perfect Finish Painters
            </h2>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              For interior painting, most rooms in the Mays Landing area cost between $500 and $1,000 depending on room size, wall condition, and paint quality. A single room typically takes one day to complete, while a full interior takes 3 to 5 days. We use premium paints from trusted brands and always include proper surface preparation — filling holes, sanding, taping, and priming — before applying paint.
            </p>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              For exterior painting in South Jersey, we recommend 100% acrylic latex paints with UV and mildew resistance to stand up to the coastal humidity, salt air, and seasonal weather changes common in the Atlantic County area. We power wash surfaces, scrape and sand loose paint, apply primer to bare wood, and caulk gaps before painting. Exterior projects are quoted after a free on-site or photo-based assessment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">
              How It Works
            </h2>
            <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
              Getting your project started is simple. Just three easy steps.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                  1
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Take the Quiz</h3>
                <p className="text-[#64748b]">
                  Answer a few quick questions about your project — room size, paint type, timeline, and more.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                  2
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Get Your Estimate</h3>
                <p className="text-[#64748b]">
                  Receive a personalized estimate within 24 hours. No obligation, no pressure.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                  3
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Schedule &amp; Relax</h3>
                <p className="text-[#64748b]">
                  If you love the estimate, we schedule your project and handle everything from there.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Areas We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="bg-[#f1f5f9] text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors"
              >
                {area.name}, NJ
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
