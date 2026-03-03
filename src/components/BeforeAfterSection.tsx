"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const projects = [
  {
    id: 1,
    title: "Shed Transformation",
    category: "Exterior",
    alt: "Shed exterior transformation by Perfect Finish Painters",
  },
  {
    id: 2,
    title: "Complete Room Renovation",
    category: "Interior",
    alt: "Room renovation with new flooring and paint",
  },
  {
    id: 3,
    title: "Exposed Ceiling Finish",
    category: "Commercial",
    alt: "Commercial exposed ceiling painting",
  },
  {
    id: 4,
    title: "Radiator Refinishing",
    category: "Specialty",
    alt: "Radiator refinishing and specialty painting",
  },
  {
    id: 5,
    title: "Basement Floor Coating",
    category: "Flooring",
    alt: "Basement floor coating and finishing",
  },
  {
    id: 6,
    title: "Whole House Interior",
    category: "Interior",
    alt: "Whole house interior painting project",
  },
  {
    id: 7,
    title: "Ceiling Restoration",
    category: "Drywall",
    alt: "Ceiling drywall repair and restoration",
  },
  {
    id: 8,
    title: "Exterior Door Repaint",
    category: "Exterior",
    alt: "A black six-panel exterior door with white trim set against beige horizontal siding, decorated with string lights above.",
  },
  {
    id: 9,
    title: "Exterior Fence Painting",
    category: "Exterior",
    alt: "A black painted wooden fence with pointed pickets and lattice base enclosing a small outdoor area beside a house.",
  },
  {
    id: 10,
    title: "Vaulted Ceiling Repair",
    category: "Drywall",
    alt: "Before-and-after view of a vaulted ceiling with visible seams on the left repaired to a smooth finish with recessed lights and a ceiling fan on the right.",
  },
  {
    id: 11,
    title: "Paneled Wall Transformation",
    category: "Interior",
    alt: "Before-and-after view of a room with paneled walls, showing unfinished beige panels on the left and freshly painted deep maroon panels on the right, with protective coverings on the floor and counter.",
  },
  {
    id: 12,
    title: "Bathroom Wall Refresh",
    category: "Interior",
    alt: "Before-and-after split image of a small bathroom with walls painted from white to light blue, showing cluttered before and clean after with visible wood flooring.",
  },
  {
    id: 13,
    title: "Bathroom Paint Transformation",
    category: "Interior",
    alt: "Before-and-after view of a bathroom showing the change from floral wallpaper and beige ceiling to white walls and black ceiling with black tile accents.",
  },
  {
    id: 14,
    title: "Bathroom Wall Refresh",
    category: "Interior",
    alt: "Before-and-after image of a bathroom with walls repainted from white to light blue, showing a cluttered state on the left and a clean, updated space on the right with an octagonal window and white vanity.",
  },
  {
    id: 15,
    title: "Kitchen Cabinet Update",
    category: "Interior",
    alt: "Split image showing white painted kitchen cabinets, light gray walls, and marble-patterned countertops with electrical outlets and a built-in microwave.",
  },
  {
    id: 16,
    title: "Ceiling Vent Repair",
    category: "Drywall",
    alt: "Before and after images of a room's ceiling with a vent pipe, showing the left side with a hole and plastic sheeting, and the right side with the hole patched, painted white, and light fixture installed.",
  },
  {
    id: 17,
    title: "Basement Stairwell remodel",
    category: "Exterior",
    alt: "Before-and-after image of a basement staircase showing old green walls and worn wooden steps transformed to white walls and refinished steps.",
  },
];

export default function BeforeAfterSection() {
  const [available, setAvailable] = useState<typeof projects>([]);

  useEffect(() => {
    let cancelled = false;

    async function checkImages() {
      const results = await Promise.all(
        projects.map(
          (project) =>
            new Promise<(typeof projects)[0] | null>((resolve) => {
              const img = new window.Image();
              img.onload = () => resolve(project);
              img.onerror = () => resolve(null);
              img.src = `/before/project-${project.id}.jpg`;
            })
        )
      );
      if (!cancelled) {
        setAvailable(results.filter((r): r is (typeof projects)[0] => r !== null));
      }
    }

    checkImages();
    return () => {
      cancelled = true;
    };
  }, []);

  if (available.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Before &amp; After
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              See the Difference
            </h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              Drag the slider to compare before and after on real projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {available.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <BeforeAfterSlider
                beforeSrc={`/before/project-${project.id}.jpg`}
                afterSrc={`/project-${project.id}.jpg`}
                title={project.title}
                category={project.category}
                alt={project.alt}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
