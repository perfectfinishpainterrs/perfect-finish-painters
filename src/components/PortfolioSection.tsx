"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    src: "/project-1.jpg",
    alt: "Shed exterior transformation",
    category: "Exterior Painting",
    title: "Shed Transformation",
  },
  {
    src: "/project-2.jpg",
    alt: "Room renovation with flooring",
    category: "Interior + Flooring",
    title: "Complete Room Renovation",
  },
  {
    src: "/project-3.jpg",
    alt: "Commercial ceiling painting",
    category: "Commercial",
    title: "Exposed Ceiling Finish",
  },
  {
    src: "/project-4.jpg",
    alt: "Radiator refinishing",
    category: "Specialty",
    title: "Radiator Refinishing",
  },
  {
    src: "/project-5.jpg",
    alt: "Basement floor coating",
    category: "Flooring",
    title: "Basement Floor Coating",
  },
  {
    src: "/project-6.jpg",
    alt: "Whole house interior painting",
    category: "Interior Painting",
    title: "Whole House Interior",
  },
  {
    src: "/project-7.jpg",
    alt: "Ceiling repair before and after",
    category: "Drywall Repair",
    title: "Ceiling Restoration",
  },
];

export default function PortfolioSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % projects.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + projects.length) % projects.length : null
    );
  }, []);

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Focus trap
  useEffect(() => {
    if (lightboxIndex === null) return;
    const overlay = document.getElementById("portfolio-lightbox");
    overlay?.focus();
  }, [lightboxIndex]);

  return (
    <>
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Our Work
          </h2>
          <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
            See the transformations we&apos;ve created for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3] cursor-pointer text-left"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#60a5fa] text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${projects[lightboxIndex].title} - ${projects[lightboxIndex].category}`}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white p-2 cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-6 z-10 text-white/80 hover:text-white p-2 cursor-pointer"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-2 sm:right-6 z-10 text-white/80 hover:text-white p-2 cursor-pointer"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image + caption */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[70vh]">
              <Image
                src={projects[lightboxIndex].src}
                alt={projects[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-[#60a5fa] text-sm font-medium">
                {projects[lightboxIndex].category}
              </span>
              <h3 className="text-white font-semibold text-xl">
                {projects[lightboxIndex].title}
              </h3>
              <p className="text-white/50 text-sm mt-1">
                {lightboxIndex + 1} / {projects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
