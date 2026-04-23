"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function toggleSpanish() {
  const frame = document.querySelector<HTMLIFrameElement>(".goog-te-menu-frame");
  if (frame) {
    const items = frame.contentDocument?.querySelectorAll<HTMLAnchorElement>(
      ".goog-te-menu2-item a"
    );
    if (items) {
      // Check if already translated to Spanish
      const cookie = document.cookie;
      if (cookie.includes("googtrans=/en/es")) {
        // Switch back to English
        const enItem = Array.from(items).find((a) =>
          a.textContent?.includes("English")
        );
        enItem?.click();
      } else {
        // Switch to Spanish
        const esItem = Array.from(items).find((a) =>
          a.textContent?.includes("Spanish")
        );
        esItem?.click();
      }
    }
  } else {
    // Fallback: trigger the select element
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      const cookie = document.cookie;
      if (cookie.includes("googtrans=/en/es")) {
        select.value = "en";
      } else {
        select.value = "es";
      }
      select.dispatchEvent(new Event("change"));
    }
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On inner pages (not home), always use the solid white header
  const useSolidHeader = !isHome || scrolled;

  const headerBg = useSolidHeader
    ? "bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm"
    : "bg-transparent border-b border-transparent";

  const textColor = useSolidHeader ? "text-[#64748b]" : "text-white/90";
  const textHover = useSolidHeader ? "hover:text-[#1e3a5f]" : "hover:text-white";
  const brandColor = useSolidHeader ? "text-[#1e3a5f]" : "text-white";
  const phoneColor = useSolidHeader ? "text-[#64748b]" : "text-white/80";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Perfect Finish Painters"
              width={320}
              height={80}
              className={`h-16 sm:h-20 w-auto transition-all duration-300 ${
                useSolidHeader ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`${textColor} ${textHover} transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${textColor} ${textHover} transition-colors`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${textColor} ${textHover} transition-colors`}
            >
              Services
            </Link>
            <Link
              href="/our-work"
              className={`${textColor} ${textHover} transition-colors`}
            >
              Our Work
            </Link>
            <Link
              href="/reviews"
              className={`${textColor} ${textHover} transition-colors`}
            >
              Reviews
            </Link>
            <Link
              href="/blog"
              className={`${textColor} ${textHover} transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className={`${textColor} ${textHover} transition-colors`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`${textColor} ${textHover} transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSpanish}
              className={`flex items-center gap-1.5 ${phoneColor} ${textHover} transition-colors text-sm font-medium`}
              aria-label="Translate to Spanish"
              title="Traducir al Español"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              ES
            </button>
            <a
              href="tel:+16093774226"
              className={`hidden sm:flex items-center gap-2 ${phoneColor} ${textHover} transition-colors`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">(609) 377-4226</span>
            </a>
            <a
              href="https://wa.me/16093774226?text=Hola%2C%20me%20interesa%20un%20estimado%20de%20pintura"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
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
            className={`md:hidden p-2 ${brandColor} transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e2e8f0] bg-white rounded-b-xl">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/our-work"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="/reviews"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/blog"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+16093774226"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
              >
                (609) 377-4226
              </a>
              <a
                href="https://wa.me/16093774226?text=Hola%2C%20me%20interesa%20un%20estimado%20de%20pintura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#1da851] transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <button
                onClick={toggleSpanish}
                className="flex items-center gap-2 text-[#64748b] hover:text-[#1e3a5f] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Traducir al Español
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
