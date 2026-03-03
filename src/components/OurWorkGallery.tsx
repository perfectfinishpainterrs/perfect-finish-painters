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
  {
    src: "/project-8.jpg",
    alt: "A black six-panel exterior door with white trim set against beige horizontal siding, decorated with string lights above.",
    category: "Exterior",
    title: "Exterior Door Repaint",
    desc: "We refreshed this home's exterior door with a glossy black paint and clean white trim for a modern look.",
  },
  {
    src: "/project-9.jpg",
    alt: "A black painted wooden fence with pointed pickets and lattice base enclosing a small outdoor area beside a house.",
    category: "Exterior",
    title: "Exterior Fence Painting",
    desc: "We refreshed this outdoor wooden fence with a durable black paint to enhance its appearance and protection against the elements.",
  },
  {
    src: "/project-10.jpg",
    alt: "Before-and-after view of a vaulted ceiling with visible seams on the left repaired to a smooth finish with recessed lights and a ceiling fan on the right.",
    category: "Drywall",
    title: "Vaulted Ceiling Repair",
    desc: "We repaired the prominent seams in this vaulted ceiling, applied a smooth drywall finish, and painted it white for a seamless appearance.",
  },
  {
    src: "/project-11.jpg",
    alt: "Before-and-after view of a room with paneled walls, showing unfinished beige panels on the left and freshly painted deep maroon panels on the right, with protective coverings on the floor and counter.",
    category: "Interior",
    title: "Paneled Wall Transformation",
    desc: "We painted the vertical paneled walls and wainscoting in a deep maroon color, updating the space from raw wood to a polished, elegant finish.",
  },
  {
    src: "/project-12.jpg",
    alt: "Before-and-after split image of a small bathroom with walls painted from white to light blue, showing cluttered before and clean after with visible wood flooring.",
    category: "Interior",
    title: "Bathroom Wall Refresh",
    desc: "We painted the bathroom walls in a soft light blue, creating a brighter and more inviting space while protecting the fixtures and floor during the process.",
  },
  {
    src: "/project-13.jpg",
    alt: "Before-and-after view of a bathroom showing the change from floral wallpaper and beige ceiling to white walls and black ceiling with black tile accents.",
    category: "Interior",
    title: "Bathroom Paint Transformation",
    desc: "Removed outdated floral wallpaper and painted the walls white and ceiling black for a sleek, modern bathroom update.",
  },
  {
    src: "/project-14.jpg",
    alt: "Before-and-after image of a bathroom with walls repainted from white to light blue, showing a cluttered state on the left and a clean, updated space on the right with an octagonal window and white vanity.",
    category: "Interior",
    title: "Bathroom Wall Refresh",
    desc: "Transformed the bathroom by painting the walls and ceiling in a soft light blue, enhancing the space around the white vanity, toilet, and octagonal window.",
  },
  {
    src: "/project-15.jpg",
    alt: "Split image showing white painted kitchen cabinets, light gray walls, and marble-patterned countertops with electrical outlets and a built-in microwave.",
    category: "Interior",
    title: "Kitchen Cabinet Update",
    desc: "The kitchen features freshly painted white cabinets and soft gray walls, complementing the stone-like countertops and modern fixtures.",
  },
  {
    src: "/project-16.jpg",
    alt: "Before and after images of a room's ceiling with a vent pipe, showing the left side with a hole and plastic sheeting, and the right side with the hole patched, painted white, and light fixture installed.",
    category: "Drywall",
    title: "Ceiling Vent Repair",
    desc: "We patched the hole in the ceiling around the vent pipe, smoothed the drywall, and painted it white for a clean, finished look.",
  },
  {
    src: "/project-17.jpg",
    alt: "Before-and-after image of a basement staircase showing old green walls and worn wooden steps transformed to white walls and refinished steps.",
    category: "Exterior",
    title: "Basement Stairwell remodel",
    desc: "Transformed a dingy basement stairwell by painting the walls white and refinishing the wooden steps for a bright, clean appearance.",
  },
  {
    src: "/project-18.jpg",
    alt: "Before-and-after view of a basement room with left side showing unfinished, sanded drywall and tools, and right side displaying smooth, primed white walls with a work light.",
    category: "Drywall",
    title: "Basement Drywall Finishing",
    desc: "We sanded and primed the basement drywall to achieve a smooth, flawless finish ready for final painting.",
  },
  {
    src: "/project-19.jpg",
    alt: "Before-and-after photo of a bathroom showing patched and spackled walls with a ladder and tools on the left, and a cleanly painted white room with tiled floor and shower on the right.",
    category: "Drywall",
    title: "Bathroom Drywall Repair",
    desc: "Transformed a bathroom by repairing drywall holes and patches, then painting the walls and ceiling white for a fresh, finished look.",
  },
  {
    src: "/project-20.jpg",
    alt: "Before-and-after image of a house's exterior siding and sliding door, showing a transition from dull orange with dark trim to fresh orange with white door frame.",
    category: "Exterior",
    title: "Exterior Siding Refresh",
    desc: "We repainted the home's exterior siding in a vibrant orange and updated the sliding door frame to crisp white for a revitalized appearance.",
  },
  {
    src: "/project-21.jpg",
    alt: "Before-and-after view of a room where the left side shows a ceiling covered in brown textured material with protective plastic sheeting on walls and floor, and the right side displays a smooth white painted ceiling in an empty room with green carpet and window blinds.",
    category: "Interior",
    title: "Ceiling Texture Removal",
    desc: "We removed the old popcorn texture from the ceiling, repaired the surface, and applied a fresh coat of white paint for a clean, modern appearance.",
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
