import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutOwner from "@/components/AboutOwner";
import ReviewsSection from "@/components/ReviewsSection";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import FloatingCTA from "@/components/FloatingCTA";
import LazyIframe from "@/components/LazyIframe";
import ServicesSection from "@/components/ServicesSection";
import { serviceAreas } from "@/data/service-areas";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
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

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
                  About Perfect Finish Painters
                </h2>
                <p className="text-[#64748b] text-lg mb-6">
                  We&apos;re a family-owned painting company serving Mays Landing and the greater South Jersey area.
                  With years of experience and a passion for transforming spaces, we take pride in every brush stroke.
                </p>
                <p className="text-[#64748b] text-lg mb-6">
                  We believe everyone deserves a space meant solely for them, at an affordable price.
                  Whether it&apos;s a single room refresh or a complete home makeover, we treat every project
                  with the same attention to detail and commitment to quality.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-[#2563eb]">100+</div>
                    <div className="text-[#64748b] text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-[#2563eb]">5★</div>
                    <div className="text-[#64748b] text-sm">Customer Rating</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="bg-[#2563eb]/10 rounded-2xl p-8">
                  <Image
                    src="/project-6.jpg"
                    alt="Perfect Finish Painters at work"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <AboutOwner />
      </ScrollReveal>

      <ScrollReveal>
        <PortfolioSection />
      </ScrollReveal>

      {/* Facebook Reels Section */}
      <section id="reels" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
              Watch Us Work
            </h2>
            <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
              Check out our latest project videos and transformations on Facebook.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
                <LazyIframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F842594715448570%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  title="Facebook Reel 1"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
                <LazyIframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F784802237928184%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  title="Facebook Reel 2"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
                <LazyIframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2538592819873891%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  title="Facebook Reel 3"
                />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="text-center mt-8">
              <a
                href="https://www.facebook.com/PerfectFinishPainters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-medium transition-colors"
              >
                See more on Facebook
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
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
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Schedule & Relax</h3>
                <p className="text-[#64748b]">
                  If you love the estimate, we schedule your project and handle everything from there.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
              We believe everyone deserves a space meant solely for them, at an affordable price.
            </p>
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
                  Our skilled team completes projects quickly without compromising quality.
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
                  Our team shows up on time and will not leave until the job is complete.
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
                  We ensure every job is neat, leaving no mess behind.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <ReviewsSection />
      </ScrollReveal>

      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* Painting Services Long-Form GEO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
              Painting Services in Mays Landing NJ &amp; South Jersey
            </h2>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              Perfect Finish Painters is a locally owned and operated painting company based in Mays Landing, New Jersey. We provide professional interior painting, exterior painting, drywall repair, flooring installation, and deck &amp; fence staining to homeowners and businesses throughout Atlantic County and South Jersey. Our team is led by Brandon, who personally oversees every project to ensure quality craftsmanship and customer satisfaction.
            </p>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              For interior painting, most rooms in the Mays Landing area cost between $200 and $500 depending on room size, wall condition, and paint quality. A single room typically takes one day to complete, while a full interior takes 3 to 5 days. We use premium paints from trusted brands and always include proper surface preparation — filling holes, sanding, taping, and priming — before applying paint.
            </p>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              For exterior painting in South Jersey, we recommend 100% acrylic latex paints with UV and mildew resistance to stand up to the coastal humidity, salt air, and seasonal weather changes common in the Atlantic County area. We power wash surfaces, scrape and sand loose paint, apply primer to bare wood, and caulk gaps before painting. Exterior projects are quoted after a free on-site or photo-based assessment.
            </p>
            <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
              Perfect Finish Painters serves Mays Landing, Egg Harbor Township, Hammonton, Vineland, Galloway, Somers Point, Northfield, Linwood, Absecon, Pleasantville, Atlantic City, and surrounding communities. We&apos;re available Monday through Friday from 9am to 6pm and Saturdays from 9am to 5pm. Call us at (609) 377-4226 or take our free 60-second online quiz to get a personalized estimate with no obligation.
            </p>
          </ScrollReveal>

          {/* Service Area Links */}
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
              Areas We Serve
            </h3>
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
          </ScrollReveal>
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
