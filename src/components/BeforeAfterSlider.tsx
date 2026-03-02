"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  title: string;
  category: string;
  alt: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  title,
  category,
  alt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 2;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] select-none group"
      style={{ touchAction: "none" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* After image (base layer) */}
      <Image
        src={afterSrc}
        alt={`After: ${alt}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 50vw"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`Before: ${alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="bg-[#1e3a5f]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          Before
        </span>
      </div>
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="bg-[#2563eb]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          After
        </span>
      </div>

      {/* Bottom overlay with title & category */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/40 to-transparent p-4 pt-10 pointer-events-none">
        <span className="inline-block bg-[#2563eb]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">
          {category}
        </span>
        <h3 className="text-white font-bold text-base">{title}</h3>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-20"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Vertical line */}
        <div className="w-0.5 h-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.4)]" />

        {/* Circle handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[#1e3a5f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l-3 3 3 3m8-6l3 3-3 3"
            />
          </svg>
        </div>
      </div>

      {/* Keyboard-accessible slider control */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Before and after comparison for ${title}. Use left and right arrow keys to adjust.`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% before, ${Math.round(100 - position)}% after`}
        onKeyDown={handleKeyDown}
        className="absolute inset-0 z-30 cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 rounded-2xl"
      />
    </div>
  );
}
