"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Interior Painting",
    image: "/project-2.jpg",
    shortDesc: "Transform any room with fresh, vibrant colors. Walls, ceilings, trim, and more.",
    details: [
      "Living rooms, bedrooms, kitchens, bathrooms & hallways",
      "Accent walls & custom color matching",
      "Ceiling and crown molding painting",
      "Trim, baseboards, doors & window frames",
      "Proper prep: sanding, patching, priming & taping",
      "Most rooms completed in 1 day — starting at $500",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    image: "/project-1.jpg",
    shortDesc: "Boost curb appeal and protect your home from the elements with quality exterior paint.",
    details: [
      "Siding, stucco, brick & vinyl surfaces",
      "Shutters, doors, trim & fascia boards",
      "Power washing & surface preparation included",
      "Weather-resistant acrylic latex paints",
      "UV & mildew protection for South Jersey climate",
      "Full exterior projects quoted after free assessment",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Drywall Repairs",
    image: "/project-7.jpg",
    shortDesc: "Fix holes, cracks, and damage. We restore your walls to a smooth, paint-ready finish.",
    details: [
      "Small nail holes to large patch repairs",
      "Crack repair & joint compound finishing",
      "Water damage restoration & texture matching",
      "Smooth, seamless finish ready for paint",
      "Often combined with interior painting for best results",
      "Same-day repairs available for small jobs",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Flooring",
    image: "/project-4.jpg",
    shortDesc: "Complete your renovation with professional flooring installation and refinishing.",
    details: [
      "Hardwood, laminate & vinyl plank installation",
      "Tile flooring for kitchens & bathrooms",
      "Subfloor preparation & leveling",
      "Baseboard & transition strip installation",
      "Pairs perfectly with a fresh paint job",
      "Free estimates — take our 60-second quiz",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
          Interior &amp; Exterior Painting Services in South Jersey
        </h2>
        <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
          From interior walls to exterior siding, Perfect Finish Painters handles all your painting and home improvement needs in Mays Landing and throughout Atlantic County.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-md border border-[#e2e8f0] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} by Perfect Finish Painters in South Jersey`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-md flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-base drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-[#64748b] text-sm mb-3">
                    {service.shortDesc}
                  </p>

                  {/* Expand button */}
                  <button
                    onClick={() => toggle(i)}
                    className="inline-flex items-center gap-1.5 text-[#2563eb] font-semibold text-xs hover:text-[#1d4ed8] transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show less" : "What\u2019s included"}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown details */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-3 space-y-1.5 border-t border-[#e2e8f0] pt-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-1.5 text-[#64748b] text-xs">
                            <svg className="w-3.5 h-3.5 text-[#2563eb] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/quiz"
                        className="mt-3 inline-flex items-center gap-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                      >
                        Get Free Estimate
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
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
