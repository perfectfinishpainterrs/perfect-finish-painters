export default function AboutOwner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#2563eb]/10 rounded-2xl p-8 flex items-center justify-center">
              {/* Placeholder — replace with owner photo */}
              <div className="w-full aspect-[4/3] bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 text-[#2563eb]/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-[#64748b] text-sm">Owner photo coming soon</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
              Meet the Owner
            </h2>
            <h3 className="text-xl font-semibold text-[#2563eb] mb-4">Brandon</h3>
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
        </div>
      </div>
    </section>
  );
}
