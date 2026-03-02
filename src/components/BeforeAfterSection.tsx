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
