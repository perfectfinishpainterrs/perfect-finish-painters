import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import FloatingCTA from "@/components/FloatingCTA";
import SherwinWilliamsBanner from "@/components/SherwinWilliamsBanner";

import { serviceAreas } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Painters in Atlantic County NJ | Perfect Finish Painters",
  description: "Licensed Atlantic County NJ painters. Interior & exterior painting, drywall repair, and flooring from Mays Landing. Free quote — 609-377-4226.",
  openGraph: {
    title: "Painters in Atlantic County NJ | Perfect Finish Painters",
    description: "Licensed Atlantic County NJ painters. Interior & exterior painting, drywall repair, and flooring from Mays Landing. Free quote — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com",
    images: [{ url: "/logo.webp", width: 1970, height: 748, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters in Atlantic County NJ | Perfect Finish Painters",
    description: "Licensed Atlantic County NJ painters. Interior & exterior painting, drywall repair, and flooring from Mays Landing. Free quote — 609-377-4226.",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com",
    languages: {
      en: "/",
      es: "/pintores-cerca-de-mi",
    },
  },
};

const services = [
  {
    title: "Interior Painting",
    desc: "Walls, ceilings, trim, and accent walls.",
    image: "/basement-room-painting-flooring-before-after-egg-harbor-township-nj.webp",
    href: "/interior-painting",
  },
  {
    title: "Exterior Painting",
    desc: "Siding, shutters, doors, and trim.",
    image: "/shed-exterior-painting-before-after-mays-landing-nj.webp",
    href: "/exterior-painting",
  },
  {
    title: "Drywall Repairs",
    desc: "Holes, cracks, and surface restoration.",
    image: "/drywall-ceiling-repair-before-after-mays-landing-nj.webp",
    href: "/drywall-repair",
  },
  {
    title: "Flooring",
    desc: "Hardwood, laminate, vinyl, and tile.",
    image: "/radiator-painting-before-after-somers-point-nj.webp",
    href: "/flooring",
  },
];

// aggregateRating + review live here (not in the root layout) because ReviewsSection
// renders the review cards on this page. Same @id as the HousePainter in layout.tsx so
// the rating merges into that entity instead of creating a duplicate.
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": "https://perfectfinishpainter.com/#business",
  name: "Perfect Finish Painters",
  url: "https://perfectfinishpainter.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to hire a painter in Mays Landing NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Painting costs in Mays Landing vary based on room size, condition, and paint quality. Most interior rooms cost between $500–$1,000. Take our free 60-second quiz for a personalized estimate — no obligation.",
      },
    },
    {
      "@type": "Question",
      name: "What areas in South Jersey do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Mays Landing, Egg Harbor Township, Hammonton, Vineland, Galloway, Somers Point, Northfield, Linwood, Absecon, Pleasantville, Atlantic City, and the greater Atlantic County area.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free painting estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer free estimates with no obligation. Take our 60-second online quiz or call us at (609) 377-4226 to get a personalized quote within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What painting services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer interior painting, exterior painting, drywall repair, flooring installation, and shed restoration & painting. We handle both residential and commercial projects throughout South Jersey.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to paint a house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single room typically takes 1 day. A full interior can take 3–5 days depending on size and prep work needed. We'll give you a timeline with your estimate so there are no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best paint for exterior in South Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For South Jersey exteriors, we recommend 100% acrylic latex paint with built-in UV and mildew resistance. Brands like Benjamin Moore Aura Exterior and Sherwin-Williams Duration hold up well against coastal humidity, salt air, and seasonal temperature swings. We always apply a quality primer first for maximum adhesion and longevity.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prepare my house for painting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For interior painting, move furniture to the center of the room or out of it, remove wall decorations and outlet covers, and fill small nail holes with spackle. For exterior painting, power wash the siding, scrape loose paint, and trim back bushes touching the house. Our team handles most prep work as part of the job, so just let us know your timeline and we'll guide you through what's needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do painters move furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Perfect Finish Painters moves furniture as part of our service. We shift furniture to the center of the room and cover it with drop cloths to protect it from paint. For larger or fragile items, we may ask you to move them before we arrive. We always leave the room clean and put furniture back when we're done.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between interior and exterior paint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exterior paint is formulated to resist UV rays, moisture, mildew, and temperature changes. It contains more flexible resins that expand and contract with the weather. Interior paint prioritizes low odor, easy cleanup, stain resistance, and a smooth finish. Using the wrong type can lead to peeling, fading, or poor indoor air quality. Our team always uses the right product for the job.",
      },
    },
    {
      "@type": "Question",
      name: "How often should you repaint your house in NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In New Jersey, exterior paint typically lasts 5–7 years depending on sun exposure, weather conditions, and paint quality. Homes closer to the shore may need repainting sooner due to salt air. Interior paint lasts 5–10 years in most rooms, though high-traffic areas like hallways and kitchens may need refreshing sooner. Regular maintenance and quality paint extend the life of any paint job.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shed-exterior-painting-before-after-mays-landing-nj.webp"
            alt="Professional interior and exterior painting by Perfect Finish Painters in Mays Landing NJ"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/70" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Painters in Mays Landing, NJ
            <br />
            <span className="text-[#60a5fa]">Get Your Free Estimate in 60 Seconds</span>
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

      {/* Sherwin-Williams Designer Paint Banner */}
      <div className="pt-12">
        <ScrollReveal>
          <SherwinWilliamsBanner />
        </ScrollReveal>
      </div>

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
                <Link href={s.href} className="group block">
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
