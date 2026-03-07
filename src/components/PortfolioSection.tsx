"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    src: "/shed-exterior-painting-before-after-mays-landing-nj.jpg",
    alt: "Shed exterior transformation",
    category: "Exterior Painting",
    title: "Shed Transformation",
  },
  {
    src: "/basement-room-painting-flooring-before-after-egg-harbor-township-nj.jpg",
    alt: "Room renovation with flooring",
    category: "Interior + Flooring",
    title: "Complete Room Renovation",
  },
  {
    src: "/basement-ceiling-painting-black-before-after-hammonton-nj.jpg",
    alt: "Commercial ceiling painting",
    category: "Commercial",
    title: "Exposed Ceiling Finish",
  },
  {
    src: "/radiator-painting-before-after-somers-point-nj.jpg",
    alt: "Radiator refinishing",
    category: "Specialty",
    title: "Radiator Refinishing",
  },
  {
    src: "/basement-floor-epoxy-coating-before-after-galloway-nj.jpg",
    alt: "Basement floor coating",
    category: "Flooring",
    title: "Basement Floor Coating",
  },
  {
    src: "/interior-ceiling-painting-living-room-kitchen-absecon-nj.jpg",
    alt: "Whole house interior painting",
    category: "Interior Painting",
    title: "Whole House Interior",
  },
  {
    src: "/drywall-ceiling-repair-before-after-mays-landing-nj.jpg",
    alt: "Ceiling repair before and after",
    category: "Drywall Repair",
    title: "Ceiling Restoration",
  },
  {
    src: "/exterior-door-painting-black-linwood-nj.jpg",
    alt: "A black six-panel exterior door with white trim set against beige horizontal siding, decorated with string lights above.",
    category: "Exterior",
    title: "Exterior Door Repaint",
  },
  {
    src: "/fence-gate-painting-black-northfield-nj.jpg",
    alt: "A black painted wooden fence with pointed pickets and lattice base enclosing a small outdoor area beside a house.",
    category: "Exterior",
    title: "Exterior Fence Painting",
  },
  {
    src: "/vaulted-ceiling-drywall-repair-before-after-pleasantville-nj.jpg",
    alt: "Before-and-after view of a vaulted ceiling with visible seams on the left repaired to a smooth finish with recessed lights and a ceiling fan on the right.",
    category: "Drywall",
    title: "Vaulted Ceiling Repair",
  },
  {
    src: "/dining-room-wainscoting-painting-before-after-egg-harbor-township-nj.jpg",
    alt: "Before-and-after view of a room with paneled walls, showing unfinished beige panels on the left and freshly painted deep maroon panels on the right, with protective coverings on the floor and counter.",
    category: "Interior",
    title: "Paneled Wall Transformation",
  },
  {
    src: "/bathroom-painting-blue-before-after-linwood-nj.jpg",
    alt: "Before-and-after split image of a small bathroom with walls painted from white to light blue, showing cluttered before and clean after with visible wood flooring.",
    category: "Interior",
    title: "Bathroom Wall Refresh",
  },
  {
    src: "/bathroom-wallpaper-removal-painting-before-after-absecon-nj.jpg",
    alt: "Before-and-after view of a bathroom showing the change from floral wallpaper and beige ceiling to white walls and black ceiling with black tile accents.",
    category: "Interior",
    title: "Bathroom Paint Transformation",
  },
  {
    src: "/bathroom-beadboard-ceiling-painting-before-after-somers-point-nj.jpg",
    alt: "Before-and-after image of a bathroom with walls repainted from white to light blue, showing a cluttered state on the left and a clean, updated space on the right with an octagonal window and white vanity.",
    category: "Interior",
    title: "Bathroom Wall Refresh",
  },
  {
    src: "/kitchen-drywall-repair-painting-before-after-northfield-nj.jpg",
    alt: "Split image showing white painted kitchen cabinets, light gray walls, and marble-patterned countertops with electrical outlets and a built-in microwave.",
    category: "Interior",
    title: "Kitchen Cabinet Update",
  },
  {
    src: "/ceiling-drywall-patch-repair-before-after-galloway-nj.jpg",
    alt: "Before and after images of a room's ceiling with a vent pipe, showing the left side with a hole and plastic sheeting, and the right side with the hole patched, painted white, and light fixture installed.",
    category: "Drywall",
    title: "Ceiling Vent Repair",
  },
  {
    src: "/basement-stairway-renovation-before-after-hammonton-nj.jpg",
    alt: "Before-and-after image of a basement staircase showing old green walls and worn wooden steps transformed to white walls and refinished steps.",
    category: "Exterior",
    title: "Basement Stairwell remodel",
  },
  {
    src: "/basement-drywall-painting-before-after-pleasantville-nj.jpg",
    alt: "Before-and-after view of a basement room with left side showing unfinished, sanded drywall and tools, and right side displaying smooth, primed white walls with a work light.",
    category: "Drywall",
    title: "Basement Drywall Finishing",
  },
  {
    src: "/bathroom-drywall-repair-painting-before-after-mays-landing-nj.jpg",
    alt: "Before-and-after photo of a bathroom showing patched and spackled walls with a ladder and tools on the left, and a cleanly painted white room with tiled floor and shower on the right.",
    category: "Drywall",
    title: "Bathroom Drywall Repair",
  },
  {
    src: "/exterior-siding-staining-before-after-egg-harbor-township-nj.jpg",
    alt: "Before-and-after image of a house's exterior siding and sliding door, showing a transition from dull orange with dark trim to fresh orange with white door frame.",
    category: "Exterior",
    title: "Exterior Siding Refresh",
  },
  {
    src: "/sunroom-ceiling-insulation-drywall-before-after-brigantine-nj.jpg",
    alt: "Before-and-after view of a room where the left side shows a ceiling covered in brown textured material with protective plastic sheeting on walls and floor, and the right side displays a smooth white painted ceiling in an empty room with green carpet and window blinds.",
    category: "Interior",
    title: "Ceiling Texture Removal",
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
