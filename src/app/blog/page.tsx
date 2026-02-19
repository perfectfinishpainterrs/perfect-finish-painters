import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Painting Tips & Blog | Perfect Finish Painters — South Jersey",
  description:
    "Painting tips, home improvement advice, and project guides from Perfect Finish Painters in Mays Landing NJ. Learn about interior painting, exterior painting, and more.",
  openGraph: {
    title: "Painting Tips & Blog | Perfect Finish Painters",
    description: "Painting tips, home improvement advice, and project guides from Perfect Finish Painters.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog",
    images: [{ url: "/logo.png", width: 800, height: 200, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Tips & Blog | Perfect Finish Painters",
    description: "Painting tips, home improvement advice, and project guides from Perfect Finish Painters.",
    images: ["/logo.png"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog" },
};

const posts = [
  {
    slug: "best-exterior-paint-south-jersey",
    title: "Best Exterior Paint for South Jersey Homes",
    excerpt: "Coastal humidity, salt air, and seasonal temperature swings make choosing the right exterior paint critical in South Jersey. Here's what we recommend.",
    date: "February 2025",
  },
];

export default function BlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">Painting Tips & Blog</h1>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              Helpful guides, tips, and advice from the Perfect Finish Painters team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white rounded-2xl p-8 shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                    <span className="text-[#94a3b8] text-sm">{post.date}</span>
                    <h2 className="text-2xl font-bold text-[#1e3a5f] mt-2 mb-3 group-hover:text-[#2563eb] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#64748b] text-lg">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[#2563eb] font-semibold mt-4">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </span>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
