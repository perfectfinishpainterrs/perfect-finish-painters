import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Perfect Finish Painters | Meet Brandon — South Jersey Painting Company",
  description: "Learn about Perfect Finish Painters and owner Brandon. Family-owned painting company in Mays Landing NJ serving South Jersey with interior & exterior painting, drywall repair, and flooring.",
  alternates: {
    canonical: "https://perfectfinishpainter.com/about",
  },
};

export default function AboutPage() {
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
        name: "About",
        item: "https://perfectfinishpainter.com/about",
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
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="bg-[#2563eb]/10 rounded-2xl p-8">
                  <Image
                    src="/owner.jpg"
                    alt="Brandon - Owner of Perfect Finish Painters in Mays Landing NJ"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-lg w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-2">
                  About Perfect Finish Painters
                </h1>
                <h2 className="text-xl font-semibold text-[#2563eb] mb-6">Meet Brandon, Owner</h2>
                <p className="text-[#64748b] text-lg mb-6">
                  With a hands-on approach and a genuine passion for transforming spaces,
                  Brandon founded Perfect Finish Painters to bring quality craftsmanship
                  to every home in South Jersey — at a price that&apos;s fair and honest.
                </p>
                <p className="text-[#64748b] text-lg mb-6">
                  What started as helping out friends and family quickly grew into a
                  full-service painting business built on reliability, clean work, and
                  real results. Brandon personally oversees every project to make sure
                  it meets his standard — because your home deserves a perfect finish.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-white rounded-xl px-5 py-3 shadow-md text-center">
                    <div className="text-2xl font-bold text-[#2563eb]">100+</div>
                    <div className="text-[#64748b] text-xs">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-xl px-5 py-3 shadow-md text-center">
                    <div className="text-2xl font-bold text-[#2563eb]">5★</div>
                    <div className="text-[#64748b] text-xs">Facebook Rating</div>
                  </div>
                  <div className="bg-white rounded-xl px-5 py-3 shadow-md text-center">
                    <div className="text-2xl font-bold text-[#2563eb]">South Jersey</div>
                    <div className="text-[#64748b] text-xs">Proudly Local</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Our Story</h2>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              Perfect Finish Painters is a locally owned and operated painting company based in Mays Landing, New Jersey. We provide professional interior painting, exterior painting, drywall repair, flooring installation, and deck &amp; fence staining to homeowners and businesses throughout Atlantic County and South Jersey.
            </p>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              We believe everyone deserves a space meant solely for them, at an affordable price. Whether it&apos;s a single room refresh or a complete home makeover, we treat every project with the same attention to detail and commitment to quality.
            </p>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              Our team uses premium paints from trusted brands and always includes proper surface preparation — filling holes, sanding, taping, and priming — before applying paint. For exterior work in South Jersey, we recommend 100% acrylic latex paints with UV and mildew resistance to stand up to the coastal humidity, salt air, and seasonal weather changes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">
              Why Choose Perfect Finish Painters
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full">
                <div className="w-16 h-16 bg-[#2563eb]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">We Are Efficient</h3>
                <p className="text-[#64748b]">
                  Our skilled team completes projects quickly without compromising quality. Most rooms done in a single day.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full">
                <div className="w-16 h-16 bg-[#2563eb]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">We Are Reliable</h3>
                <p className="text-[#64748b]">
                  Our team shows up on time and will not leave until the job is complete. We do what we promise.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full">
                <div className="w-16 h-16 bg-[#2563eb]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">We Are Clean</h3>
                <p className="text-[#64748b]">
                  We ensure every job is neat, leaving no mess behind. Your home stays protected throughout the project.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Ready to Get Started?</h2>
          <p className="text-[#64748b] text-lg mb-8">
            Take our free 60-second quiz for a personalized estimate, or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
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
