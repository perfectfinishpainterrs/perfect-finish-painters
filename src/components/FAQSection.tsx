"use client";

import { useState } from "react";

interface FaqItem {
  name: string;
  acceptedAnswer: { text: string };
}

interface FAQSectionProps {
  items: readonly FaqItem[];
  heading?: string;
  description?: string;
}

export default function FAQSection({
  items,
  heading = "Frequently Asked Questions",
  description,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
          {heading}
        </h2>
        {description ? (
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        ) : (
          <div className="mb-12" />
        )}
        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.name}
                className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4 speakable-q">
                    {faq.name}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#2563eb] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[#64748b] leading-relaxed speakable-a">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
