"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/data/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#f59e0b]" : "text-[#d1d5db]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85 + 16; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, reviews.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
          Don&apos;t just take our word for it — hear from our satisfied customers.
        </p>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0] flex flex-col"
            >
              <Stars count={review.rating} />
              <p className="text-[#374151] mt-4 mb-6 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1e3a5f]">{review.name}</span>
                <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[85%] bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0] flex flex-col"
              >
                <Stars count={review.rating} />
                <p className="text-[#374151] mt-4 mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1e3a5f]">
                    {review.name}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? "bg-[#2563eb]" : "bg-[#cbd5e1]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.facebook.com/PerfectFinishPainters/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-medium transition-colors"
          >
            See all reviews on Facebook
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
