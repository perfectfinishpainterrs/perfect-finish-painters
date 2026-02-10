import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutOwner from "@/components/AboutOwner";
import ReviewsSection from "@/components/ReviewsSection";

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
            alt="Professional painting work"
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Our Services
          </h2>
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            From interior walls to exterior siding, we handle all your painting and home improvement needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Interior Painting */}
            <div className="bg-[#f1f5f9] rounded-2xl p-6 hover:bg-[#e2e8f0] transition-colors group">
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563eb]/20 transition-colors">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Interior Painting</h3>
              <p className="text-[#64748b] text-sm">
                Transform any room with fresh, vibrant colors. Walls, ceilings, trim, and more.
              </p>
            </div>

            {/* Exterior Painting */}
            <div className="bg-[#f1f5f9] rounded-2xl p-6 hover:bg-[#e2e8f0] transition-colors group">
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563eb]/20 transition-colors">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Exterior Painting</h3>
              <p className="text-[#64748b] text-sm">
                Boost curb appeal and protect your home from the elements with quality exterior paint.
              </p>
            </div>

            {/* Drywall Repairs */}
            <div className="bg-[#f1f5f9] rounded-2xl p-6 hover:bg-[#e2e8f0] transition-colors group">
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563eb]/20 transition-colors">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Drywall Repairs</h3>
              <p className="text-[#64748b] text-sm">
                Fix holes, cracks, and damage. We restore your walls to a smooth, paint-ready finish.
              </p>
            </div>

            {/* Flooring */}
            <div className="bg-[#f1f5f9] rounded-2xl p-6 hover:bg-[#e2e8f0] transition-colors group">
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563eb]/20 transition-colors">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">Flooring</h3>
              <p className="text-[#64748b] text-sm">
                Complete your renovation with professional flooring installation and refinishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          </div>
        </div>
      </section>

      <AboutOwner />

      {/* Our Work / Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Our Work
          </h2>
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            See the transformations we&apos;ve created for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 - Shed */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-1.jpg"
                alt="Shed exterior transformation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Exterior Painting</span>
                <h3 className="text-white font-semibold text-lg">Shed Transformation</h3>
              </div>
            </div>

            {/* Project 2 - Room Renovation */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-2.jpg"
                alt="Room renovation with flooring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Interior + Flooring</span>
                <h3 className="text-white font-semibold text-lg">Complete Room Renovation</h3>
              </div>
            </div>

            {/* Project 3 - Commercial Ceiling */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-3.jpg"
                alt="Commercial ceiling painting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Commercial</span>
                <h3 className="text-white font-semibold text-lg">Exposed Ceiling Finish</h3>
              </div>
            </div>

            {/* Project 4 - Radiators */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-4.jpg"
                alt="Radiator refinishing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Specialty</span>
                <h3 className="text-white font-semibold text-lg">Radiator Refinishing</h3>
              </div>
            </div>

            {/* Project 5 - Basement Floor */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-5.jpg"
                alt="Basement floor coating"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Flooring</span>
                <h3 className="text-white font-semibold text-lg">Basement Floor Coating</h3>
              </div>
            </div>

            {/* Project 6 - Whole House */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-6.jpg"
                alt="Whole house interior painting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Interior Painting</span>
                <h3 className="text-white font-semibold text-lg">Whole House Interior</h3>
              </div>
            </div>

            {/* Project 7 - Ceiling Repair */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3]">
              <Image
                src="/project-7.jpg"
                alt="Ceiling repair before and after"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#60a5fa] text-sm font-medium">Drywall Repair</span>
                <h3 className="text-white font-semibold text-lg">Ceiling Restoration</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Reels Section */}
      <section id="reels" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Watch Us Work
          </h2>
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            Check out our latest project videos and transformations on Facebook.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Reel 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F842594715448570%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            {/* Reel 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F784802237928184%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            {/* Reel 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2538592819873891%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
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
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            How It Works
          </h2>
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            Getting your project started is simple. Just three easy steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                1
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Take the Quiz</h3>
              <p className="text-[#64748b]">
                Answer a few quick questions about your project — room size, paint type, timeline, and more.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                2
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Get Your Estimate</h3>
              <p className="text-[#64748b]">
                Receive a personalized estimate within 24 hours. No obligation, no pressure.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                3
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Schedule & Relax</h3>
              <p className="text-[#64748b]">
                If you love the estimate, we schedule your project and handle everything from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            We believe everyone deserves a space meant solely for them, at an affordable price.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Efficient */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
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

            {/* Reliable */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
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

            {/* Clean */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
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
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-[#64748b] text-lg mb-8">
            Take our 60-second quiz and get a free, no-obligation estimate for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://www.facebook.com/PerfectFinishPainters"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#e2e8f0] hover:border-[#2563eb] text-[#1e3a5f] px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Message Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
