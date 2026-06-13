"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toughJobs } from "@/data/tough-jobs";

// Hero showcase card — the "tough jobs we tackle" before/after, sitting next to the
// brand headline. Rotates automatically when there's more than one featured job.
export default function ToughJobsCard() {
  const [i, setI] = useState(0);
  const job = toughJobs[i];

  useEffect(() => {
    if (toughJobs.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % toughJobs.length), 5000);
    return () => clearInterval(t);
  }, []);

  if (!job) return null;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto lg:ml-auto">
      <div className="flex items-center gap-2 bg-[#0f2438] text-white px-5 py-3">
        <span className="text-[#fbbf24] text-base leading-none">★</span>
        <span className="text-sm font-bold tracking-wide uppercase">The Tough Jobs We Tackle</span>
      </div>

      <div className="grid grid-cols-2">
        <div className="relative aspect-square">
          <Image
            src={job.before}
            alt={`Before — ${job.title} in ${job.location}`}
            fill
            sizes="(max-width: 1024px) 50vw, 230px"
            className="object-cover"
            priority
          />
          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            Before
          </span>
        </div>
        <div className="relative aspect-square border-l-2 border-white">
          <Image
            src={job.after}
            alt={`After — ${job.title} in ${job.location}`}
            fill
            sizes="(max-width: 1024px) 50vw, 230px"
            className="object-cover"
            priority
          />
          <span className="absolute bottom-2 left-2 bg-[#2563eb] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            After
          </span>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-[#1e3a5f]">
          {job.title} <span className="text-[#64748b] font-normal text-sm">— {job.location}</span>
        </h2>
        <p className="text-[#64748b] text-sm mt-1 mb-3 leading-relaxed">{job.blurb}</p>
        <Link
          href={job.href}
          className="text-[#2563eb] font-semibold text-sm hover:underline inline-flex items-center gap-1"
        >
          See how we did it
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {toughJobs.length > 1 && (
          <div className="flex gap-1.5 mt-4">
            {toughJobs.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show tough job ${idx + 1} of ${toughJobs.length}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-5 bg-[#2563eb]" : "w-2 bg-[#cbd5e1]"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
