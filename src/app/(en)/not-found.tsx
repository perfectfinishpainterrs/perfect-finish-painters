import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Perfect Finish Painters",
  description: "The page you're looking for doesn't exist. Visit Perfect Finish Painters for professional painting services in Mays Landing NJ and South Jersey.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#1e3a5f] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#64748b] mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            Go Home
          </Link>
          <Link
            href="/quiz"
            className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
