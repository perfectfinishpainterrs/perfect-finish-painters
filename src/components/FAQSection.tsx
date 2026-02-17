"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to hire a painter in Mays Landing NJ?",
    answer:
      "Painting costs in Mays Landing vary based on room size, condition, and paint quality. Most interior rooms cost between $200\u2013$500. Take our free 60-second quiz for a personalized estimate \u2014 no obligation.",
  },
  {
    question: "What areas in South Jersey do you serve?",
    answer:
      "We serve Mays Landing, Egg Harbor Township, Hammonton, Vineland, Galloway, Somers Point, Northfield, Linwood, Absecon, Pleasantville, Atlantic City, and the greater Atlantic County area.",
  },
  {
    question: "Do you offer free painting estimates?",
    answer:
      "Yes! We offer free estimates with no obligation. Take our 60-second online quiz or call us at (609) 377-4226 to get a personalized quote within 24 hours.",
  },
  {
    question: "What painting services do you offer?",
    answer:
      "We offer interior painting, exterior painting, drywall repair, flooring installation, and deck & fence staining. We handle both residential and commercial projects throughout South Jersey.",
  },
  {
    question: "How long does it take to paint a house?",
    answer:
      "A single room typically takes 1 day. A full interior can take 3\u20135 days depending on size and prep work needed. We\u2019ll give you a timeline with your estimate so there are no surprises.",
  },
  {
    question: "What is the best paint for exterior in South Jersey?",
    answer:
      "For South Jersey exteriors, we recommend 100% acrylic latex paint with built-in UV and mildew resistance. Brands like Benjamin Moore Aura Exterior and Sherwin-Williams Duration hold up well against coastal humidity, salt air, and seasonal temperature swings. We always apply a quality primer first for maximum adhesion and longevity.",
  },
  {
    question: "How do I prepare my house for painting?",
    answer:
      "For interior painting, move furniture to the center of the room or out of it, remove wall decorations and outlet covers, and fill small nail holes with spackle. For exterior painting, power wash the siding, scrape loose paint, and trim back bushes touching the house. Our team at Perfect Finish Painters handles most prep work as part of the job.",
  },
  {
    question: "Do painters move furniture?",
    answer:
      "Yes, Perfect Finish Painters moves furniture as part of our service. We shift furniture to the center of the room and cover it with drop cloths to protect it from paint. For larger or fragile items, we may ask you to move them before we arrive. We always leave the room clean and put furniture back when we\u2019re done.",
  },
  {
    question: "What\u2019s the difference between interior and exterior paint?",
    answer:
      "Exterior paint is formulated to resist UV rays, moisture, mildew, and temperature changes. It contains more flexible resins that expand and contract with the weather. Interior paint prioritizes low odor, easy cleanup, stain resistance, and a smooth finish. Using the wrong type can lead to peeling, fading, or poor indoor air quality.",
  },
  {
    question: "How often should you repaint your house in NJ?",
    answer:
      "In New Jersey, exterior paint typically lasts 5\u20137 years depending on sun exposure, weather conditions, and paint quality. Homes closer to the shore may need repainting sooner due to salt air. Interior paint lasts 5\u201310 years in most rooms, though high-traffic areas like hallways and kitchens may need refreshing sooner.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
          Got questions? We&apos;ve got answers.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">
                    {faq.question}
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
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[#64748b] leading-relaxed">
                      {faq.answer}
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
