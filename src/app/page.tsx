import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import FloatingCTA from "@/components/FloatingCTA";
import { serviceAreas } from "@/data/service-areas";

const services = [
  {
    title: "Interior Painting",
    desc: "Walls, ceilings, trim, and accent walls.",
    image: "/project-2.jpg",
  },
  {
    title: "Exterior Painting",
    desc: "Siding, shutters, doors, and trim.",
    image: "/project-1.jpg",
  },
  {
    title: "Drywall Repairs",
    desc: "Holes, cracks, and surface restoration.",
    image: "/project-7.jpg",
  },
  {
    title: "Flooring",
    desc: "Hardwood, laminate, vinyl, and tile.",
    image: "/project-4.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/project-1.jpg"
            alt="Professional interior and exterior painting by Perfect Finish Painters in Mays Landing NJ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/70" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get your perfect paint estimate
            <br />
            <span className="text-[#60a5fa]">in 60 seconds</span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Answer a few quick questions and receive a personalized estimate for your painting project.
            No spam, no pressure — just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/25"
            >
              Start 60-Second Quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+16093774226"
              className="text-white hover:text-[#60a5fa] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or call us directly
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              60-second quiz
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              24-hour response
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free estimate
            </span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
              Interior &amp; Exterior Painting Services
            </h2>
            <p className="text-[#64748b] text-center mb-10 max-w-2xl mx-auto">
              Professional painting and home improvement in Mays Landing and throughout South Jersey.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <ScrollReveal key={s.title}>
                <Link href="/services" className="group block">
                  <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden">
                    <Image
                      src={s.image}
                      alt={`${s.title} by Perfect Finish Painters`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-sm sm:text-base">{s.title}</h3>
                      <p className="text-white/80 text-xs hidden sm:block">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors"
              >
                View all services &amp; pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Perfect Finish */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                South Jersey&apos;s Trusted Painters
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
                Local First. Professional Always.
              </h2>
              <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
                We&apos;re not a franchise. We&apos;re your neighbors. Every job gets the same standard — prep it right, paint it clean, leave it perfect.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-t-4 border-[#2563eb] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-3">Proudly Local</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Born and based in Mays Landing, we know South Jersey homes inside and out. When you hire us, you&apos;re supporting a local business that genuinely cares about this community — not a call center three states away.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-t-4 border-[#2563eb] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-3">Professional Standard</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Every surface gets proper prep — sanding, patching, priming, and taping — before a single coat goes on. We use premium paints, protect your furniture and floors, and we don&apos;t cut corners. Period.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-t-4 border-[#2563eb] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-3">Spotless Every Time</h3>
                <p className="text-[#64748b] leading-relaxed">
                  We treat your home like it&apos;s our own. Drop cloths down, tape lines sharp, and when we&apos;re done, we clean up everything. You&apos;ll come home to fresh walls and zero mess — guaranteed.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors"
              >
                See our work in action
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <ScrollReveal>
        <ReviewsSection />
      </ScrollReveal>

      {/* How It Works - Condensed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-10">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="w-14 h-14 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg shadow-blue-500/25">
                  1
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Take the Quiz</h3>
                <p className="text-[#64748b] text-sm">Answer a few quick questions about your project.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-14 h-14 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg shadow-blue-500/25">
                  2
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Get Your Estimate</h3>
                <p className="text-[#64748b] text-sm">Personalized estimate within 24 hours. No obligation.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-14 h-14 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg shadow-blue-500/25">
                  3
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Schedule &amp; Relax</h3>
                <p className="text-[#64748b] text-sm">We handle everything from there.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors border border-[#e2e8f0]"
              >
                {area.name}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
