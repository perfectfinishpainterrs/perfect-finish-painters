import Link from "next/link";

export default function SherwinWilliamsBanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0b2240] to-[#1e3a5f] p-6 sm:p-8 shadow-xl border border-[#2563eb]/20">
          {/* Decorative paint stroke accent */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* SW Paint Icon */}
            <div className="shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 text-[#60a5fa] text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sherwin-Williams Exclusive
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                We Only Use Sherwin-Williams Designer Paint
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Every project gets the best — we exclusively use Sherwin-Williams premium lines including{" "}
                <span className="text-[#60a5fa] font-semibold">Duration</span> for long-lasting exterior protection and{" "}
                <span className="text-[#60a5fa] font-semibold">Emerald</span> for a flawless interior finish.
                Designer-grade paint means richer color, better coverage, and a finish that lasts for years.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0 flex flex-col gap-3 items-center">
              <a
                href="https://www.sherwin-williams.com/en-us/color/color-wall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1e3a5f] px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Browse SW Colors
              </a>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Get Free Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Paint line badges */}
          <div className="relative z-10 flex flex-wrap justify-center lg:justify-start gap-3 mt-6 lg:ml-[6.5rem]">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#60a5fa]"></span>
              SW Duration
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              SW Emerald
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Low-VOC Formulas
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Designer Color Matching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
