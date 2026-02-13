"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Inquiry from ${name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:perfectfinishpainterr@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Ready to transform your space?
            </h2>
            <p className="text-[#64748b] text-lg mb-8">
              Take our 60-second quiz and get a free, no-obligation estimate for
              your project. Or send us a message and we&apos;ll get back to you
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Get Your Free Estimate
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="tel:+16093774226"
                className="border-2 border-[#e2e8f0] hover:border-[#2563eb] text-[#1e3a5f] px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
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
                Call Us
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-[#f1f5f9] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[#374151] mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#cbd5e1] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-[#374151] mb-1"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#cbd5e1] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#374151] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#cbd5e1] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 rounded-xl font-semibold transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
