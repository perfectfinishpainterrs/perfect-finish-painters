"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Perfect Finish Painters"
              width={320}
              height={80}
              className="h-16 sm:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors">
              About
            </Link>
            <Link href="/#services" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors">
              Services
            </Link>
            <Link href="/#portfolio" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors">
              Our Work
            </Link>
            <Link href="/#reels" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors">
              Videos
            </Link>
            <Link href="/#contact" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+16093774226"
              className="hidden sm:flex items-center gap-2 text-[#64748b] hover:text-[#1e3a5f] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">(609) 377-4226</span>
            </a>
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1e3a5f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e2e8f0]">
            <nav className="flex flex-col gap-4">
              <Link href="/#about" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/#services" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/#portfolio" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Our Work
              </Link>
              <Link href="/#reels" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Videos
              </Link>
              <Link href="/#contact" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <a href="tel:+16093774226" className="text-[#64748b] hover:text-[#1e3a5f] transition-colors">
                (609) 377-4226
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
