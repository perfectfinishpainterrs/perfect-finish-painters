"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    src: "/project-1.jpg",
    alt: "Shed exterior transformation by Perfect Finish Painters",
    category: "Exterior",
    title: "Shed Transformation",
    desc: "Complete exterior repaint with weather-resistant finish.",
  },
  {
    src: "/project-2.jpg",
    alt: "Room renovation with new flooring and paint",
    category: "Interior",
    title: "Complete Room Renovation",
    desc: "Fresh interior paint paired with new flooring installation.",
  },
  {
    src: "/project-3.jpg",
    alt: "Commercial exposed ceiling painting",
    category: "Commercial",
    title: "Exposed Ceiling Finish",
    desc: "Commercial space with professional exposed ceiling treatment.",
  },
  {
    src: "/project-4.jpg",
    alt: "Radiator refinishing and specialty painting",
    category: "Specialty",
    title: "Radiator Refinishing",
    desc: "Specialty refinishing bringing old radiators back to life.",
  },
  {
    src: "/project-5.jpg",
    alt: "Basement floor coating and finishing",
    category: "Flooring",
    title: "Basement Floor Coating",
    desc: "Durable epoxy-style floor coating for a clean, finished basement.",
  },
  {
    src: "/project-6.jpg",
    alt: "Whole house interior painting project",
    category: "Interior",
    title: "Whole House Interior",
    desc: "Full home interior — every room painted top to bottom.",
  },
  {
    src: "/project-7.jpg",
    alt: "Ceiling drywall repair and restoration",
    category: "Drywall",
    title: "Ceiling Restoration",
    desc: "Damaged ceiling repaired and restored to a smooth, clean finish.",
  },
];

const categories = ["All", "Interior", "Exterior", "Drywall", "Flooring", "Commercial", "Specialty"];

export default function OurWorkGallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

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

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Project Gallery
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-lg">
              Click any project to see it up close. Filter by category to find what you&apos;re looking for.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#1e3a5f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <button
                key={project.src + filter}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3] cursor-pointer text-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both`,
                }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2563eb]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.desc}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#64748b]">
              <p className="text-lg">No projects in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${filtered[lightboxIndex].title}`}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white p-2 cursor-pointer transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-6 z-10 text-white/60 hover:text-white p-3 cursor-pointer transition-colors bg-white/5 hover:bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 sm:right-6 z-10 text-white/60 hover:text-white p-3 cursor-pointer transition-colors bg-white/5 hover:bg-white/10 rounded-full"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[75vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <div className="text-center mt-6">
              <span className="inline-block bg-[#2563eb]/20 text-[#60a5fa] text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {filtered[lightboxIndex].category}
              </span>
              <h3 className="text-white font-bold text-xl">
                {filtered[lightboxIndex].title}
              </h3>
              <p className="text-white/50 text-sm mt-1">
                {filtered[lightboxIndex].desc}
              </p>
              <p className="text-white/30 text-xs mt-3">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframe */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
