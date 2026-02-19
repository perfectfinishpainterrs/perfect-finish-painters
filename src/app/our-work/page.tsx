import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import OurWorkGallery from "@/components/OurWorkGallery";
import LazyIframe from "@/components/LazyIframe";

export const metadata: Metadata = {
  title: "Our Work | Perfect Finish Painters — Project Gallery & Transformations",
  description:
    "See the transformations Perfect Finish Painters has created across South Jersey. Interior painting, exterior painting, drywall repair, flooring, and more. View our project gallery.",
  openGraph: {
    title: "Our Work | Perfect Finish Painters — Project Gallery",
    description: "See the transformations Perfect Finish Painters has created across South Jersey. Browse our project gallery.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/our-work",
    images: [{ url: "/logo.png", width: 800, height: 200, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Perfect Finish Painters — Project Gallery",
    description: "See the transformations Perfect Finish Painters has created across South Jersey. Browse our project gallery.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com/our-work",
  },
};

export default function OurWorkPage() {
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
        name: "Our Work",
        item: "https://perfectfinishpainter.com/our-work",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e3a5f]">
          <div className="absolute inset-0 bg-[url('/project-1.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-[#2563eb]/20 text-[#60a5fa] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#2563eb]/30">
              Portfolio & Transformations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              See What a <span className="text-[#60a5fa]">Perfect Finish</span> Looks Like
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Real projects. Real transformations. Browse our work and see why South Jersey homeowners trust us with their spaces.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-white">100+</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">Projects Done</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#60a5fa]">5.0</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">Star Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-white">0</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">Complaints</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Gallery */}
      <ScrollReveal>
        <OurWorkGallery />
      </ScrollReveal>

      {/* Before & After Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Every Project Gets the Perfect Finish Treatment
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                  Prep. Prime. Paint. Protect. We don&apos;t cut corners — we paint them. Every surface gets proper preparation, premium paint, and our signature attention to detail.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">🛡️</div>
                    <div className="text-white font-semibold text-sm">Full Surface Prep</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">🎨</div>
                    <div className="text-white font-semibold text-sm">Premium Paints</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">✨</div>
                    <div className="text-white font-semibold text-sm">Clean Edges</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">🧹</div>
                    <div className="text-white font-semibold text-sm">Spotless Cleanup</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Behind the Scenes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
                Watch Us Work
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto text-lg">
                See our process in action. From prep to final coat, every project gets the same care and precision.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-[#f1f5f9] rounded-3xl shadow-lg overflow-hidden flex justify-center p-4">
                <LazyIframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F842594715448570%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  title="Perfect Finish Painters - Project Reel 1"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-[#f1f5f9] rounded-3xl shadow-lg overflow-hidden flex justify-center p-4">
                <LazyIframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F784802237928184%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  title="Perfect Finish Painters - Project Reel 2"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#f1f5f9] rounded-3xl shadow-lg overflow-hidden flex justify-center p-4">
                <LazyIframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2538592819873891%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  title="Perfect Finish Painters - Project Reel 3"
                />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <a
                href="https://www.facebook.com/PerfectFinishPainters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-blue-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow Us on Facebook
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#60a5fa] rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get a free personalized estimate in 60 seconds. No pressure, no spam — just honest pricing for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Start 60-Second Quiz
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+16093774226"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Call (609) 377-4226
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
