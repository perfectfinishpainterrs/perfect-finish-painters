"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("scroll-reveal-visible");
      return;
    }

    // threshold:0 + negative rootMargin fires as soon as the element starts to enter
    // the viewport. A positive threshold like 0.15 silently breaks for any element
    // taller than ~6x the viewport height, leaving it stuck at opacity:0 forever.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("scroll-reveal-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal scroll-reveal-${direction} ${className}`}>
      {children}
    </div>
  );
}
