"use client";

import { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  src: string;
  width: string;
  height: string;
  title?: string;
}

export default function LazyIframe({ src, width, height, title }: LazyIframeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width, height }} className="flex items-center justify-center bg-[#f1f5f9] rounded-2xl">
      {loaded ? (
        <iframe
          src={src}
          width={width}
          height={height}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title={title}
        />
      ) : (
        <div className="text-[#94a3b8] text-sm flex flex-col items-center gap-2">
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Loading video...
        </div>
      )}
    </div>
  );
}
