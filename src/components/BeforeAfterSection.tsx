"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const projects = [
  {
    title: "Shed Transformation",
    category: "Exterior",
    alt: "Shed exterior transformation by Perfect Finish Painters",
    after: "/shed-exterior-painting-before-after-mays-landing-nj.webp",
    before: "/before/basement-stairway-renovation-hammonton-nj.webp",
  },
  {
    title: "Complete Room Renovation",
    category: "Interior",
    alt: "Room renovation with new flooring and paint",
    after: "/basement-room-painting-flooring-before-after-egg-harbor-township-nj.webp",
    before: "/before/ceiling-drywall-patch-repair-galloway-nj.webp",
  },
  {
    title: "Exposed Ceiling Finish",
    category: "Commercial",
    alt: "Commercial exposed ceiling painting",
    after: "/basement-ceiling-painting-black-before-after-hammonton-nj.webp",
    before: "/before/fence-painting-black-exterior-northfield-nj.webp",
  },
  {
    title: "Radiator Refinishing",
    category: "Specialty",
    alt: "Radiator refinishing and specialty painting",
    after: "/radiator-painting-before-after-somers-point-nj.webp",
    before: "/before/bathroom-wallpaper-removal-painting-absecon-nj.webp",
  },
  {
    title: "Basement Floor Coating",
    category: "Flooring",
    alt: "Basement floor coating and finishing",
    after: "/basement-floor-epoxy-coating-before-after-galloway-nj.webp",
    before: "/before/kitchen-drywall-repair-painting-northfield-nj.webp",
  },
  {
    title: "Whole House Interior",
    category: "Interior",
    alt: "Whole house interior painting project",
    after: "/interior-ceiling-painting-living-room-kitchen-absecon-nj.webp",
    before: null,
  },
  {
    title: "Ceiling Restoration",
    category: "Drywall",
    alt: "Ceiling drywall repair and restoration",
    after: "/drywall-ceiling-repair-before-after-mays-landing-nj.webp",
    before: null,
  },
  {
    title: "Exterior Door Repaint",
    category: "Exterior",
    alt: "A black six-panel exterior door with white trim set against beige horizontal siding, decorated with string lights above.",
    after: "/exterior-door-painting-black-linwood-nj.webp",
    before: null,
  },
  {
    title: "Exterior Fence Painting",
    category: "Exterior",
    alt: "A black painted wooden fence with pointed pickets and lattice base enclosing a small outdoor area beside a house.",
    after: "/fence-gate-painting-black-northfield-nj.webp",
    before: null,
  },
  {
    title: "Vaulted Ceiling Repair",
    category: "Drywall",
    alt: "Before-and-after view of a vaulted ceiling with visible seams on the left repaired to a smooth finish with recessed lights and a ceiling fan on the right.",
    after: "/vaulted-ceiling-drywall-repair-before-after-pleasantville-nj.webp",
    before: "/before/vaulted-ceiling-drywall-repair-pleasantville-nj.webp",
  },
  {
    title: "Paneled Wall Transformation",
    category: "Interior",
    alt: "Before-and-after view of a room with paneled walls, showing unfinished beige panels on the left and freshly painted deep maroon panels on the right, with protective coverings on the floor and counter.",
    after: "/dining-room-wainscoting-painting-before-after-egg-harbor-township-nj.webp",
    before: null,
  },
  {
    title: "Bathroom Wall Refresh",
    category: "Interior",
    alt: "Before-and-after split image of a small bathroom with walls painted from white to light blue, showing cluttered before and clean after with visible wood flooring.",
    after: "/bathroom-painting-blue-before-after-linwood-nj.webp",
    before: "/before/bathroom-painting-blue-linwood-nj.webp",
  },
  {
    title: "Bathroom Paint Transformation",
    category: "Interior",
    alt: "Before-and-after view of a bathroom showing the change from floral wallpaper and beige ceiling to white walls and black ceiling with black tile accents.",
    after: "/bathroom-wallpaper-removal-painting-before-after-absecon-nj.webp",
    before: null,
  },
  {
    title: "Bathroom Wall Refresh",
    category: "Interior",
    alt: "Before-and-after image of a bathroom with walls repainted from white to light blue, showing a cluttered state on the left and a clean, updated space on the right with an octagonal window and white vanity.",
    after: "/bathroom-beadboard-ceiling-painting-before-after-somers-point-nj.webp",
    before: null,
  },
  {
    title: "Kitchen Cabinet Update",
    category: "Interior",
    alt: "Split image showing white painted kitchen cabinets, light gray walls, and marble-patterned countertops with electrical outlets and a built-in microwave.",
    after: "/kitchen-drywall-repair-painting-before-after-northfield-nj.webp",
    before: null,
  },
  {
    title: "Ceiling Vent Repair",
    category: "Drywall",
    alt: "Before and after images of a room's ceiling with a vent pipe, showing the left side with a hole and plastic sheeting, and the right side with the hole patched, painted white, and light fixture installed.",
    after: "/ceiling-drywall-patch-repair-before-after-galloway-nj.webp",
    before: "/before/ceiling-drywall-repair-hallway-mays-landing-nj.webp",
  },
  {
    title: "Basement Stairwell Remodel",
    category: "Exterior",
    alt: "Before-and-after image of a basement staircase showing old green walls and worn wooden steps transformed to white walls and refinished steps.",
    after: "/basement-stairway-renovation-before-after-hammonton-nj.webp",
    before: "/before/basement-stairway-renovation-hammonton-nj.webp",
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
              if (!project.before) {
                resolve(null);
                return;
              }
              const img = new window.Image();
              img.onload = () => resolve(project);
              img.onerror = () => resolve(null);
              img.src = project.before;
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
            <ScrollReveal key={project.after} delay={i * 100}>
              <BeforeAfterSlider
                beforeSrc={project.before!}
                afterSrc={project.after}
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
