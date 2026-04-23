import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    images: [{ url: "/logo.webp", width: 1970, height: 748, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Tips & Blog | Perfect Finish Painters",
    description: "Painting tips, home improvement advice, and project guides from Perfect Finish Painters.",
    images: ["/logo.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog" },
};

const posts = [
  {
    slug: "sherwin-williams-snowbound-paint-south-jersey",
    title: "Discover the Timeless Appeal of Sherwin-Williams Snowbound Paint for South Jersey Homes",
    excerpt: "Sherwin-Williams Snowbound is a versatile, crisp white paint color that&apos;s perfect for creating bright, inviting spaces in your South Jersey home. As professional painters in Mays Landing, NJ, we&apos;ve seen how this neutral shade enhances everything from modern kitchens to cozy living rooms. Learn why Snowbound could be the ideal choice for your next painting project with Perfect Finish Painters.",
    date: "March 2026",
    image: "/images/blog/sherwin-williams-snowbound-paint-south-jersey.webp",
    alt: "Sherwin-Williams Snowbound white paint on interior walls in a South Jersey home",
  },
  {
    slug: "cedar-siding-repair-south-jersey",
    title: "Expert Cedar Siding Repair: Restoring Your South Jersey Home&apos;s Charm",
    excerpt: "Cedar siding is a popular choice for homes in South Jersey due to its natural beauty and durability, but it can suffer from wear over time. At Perfect Finish Painters, we specialize in professional cedar siding repair to protect and enhance your property. Learn about common issues, repair techniques, and why our Mays Landing-based team is your go-to for South Jersey painting services.",
    date: "March 2026",
    image: "/exterior-siding-staining-before-after-egg-harbor-township-nj.webp",
    alt: "Cedar siding staining and repair before and after in Egg Harbor Township NJ",
  },
  {
    slug: "exterior-painting-south-jersey",
    title: "Enhance Your Home&apos;s Curb Appeal with Professional Exterior Painting in South Jersey",
    excerpt: "Discover how professional exterior painting can transform your home&apos;s appearance and protect it from the elements. At Perfect Finish Painters in Mays Landing, NJ, we specialize in high-quality exterior painting services tailored for South Jersey homes. Learn tips, benefits, and why choosing local experts makes all the difference.",
    date: "March 2026",
    image: "/deck-exterior-painting-before-after-south-jersey-nj.webp",
    alt: "Exterior deck painting before and after in South Jersey NJ",
  },
  {
    slug: "difference-between-flat-and-satin-paint-finish",
    title: "Understanding the Difference Between Flat and Satin Paint Finishes",
    excerpt: "Choosing the right paint finish can make a big difference in your home&apos;s appearance and durability. Flat and satin finishes are popular options, each with unique characteristics suited to different rooms and needs. In this post, we&apos;ll break down the key differences to help you decide what&apos;s best for your South Jersey home.",
    date: "March 2026",
    image: "/basement-room-painting-flooring-before-after-egg-harbor-township-nj.webp",
    alt: "Interior room painting before and after in Egg Harbor Township NJ",
  },
  {
    slug: "best-exterior-paint-south-jersey",
    title: "Best Exterior Paint for South Jersey Homes",
    excerpt: "Coastal humidity, salt air, and seasonal temperature swings make choosing the right exterior paint critical in South Jersey. Here's what we recommend.",
    date: "February 2025",
    image: "/shed-exterior-painting-before-after-mays-landing-nj.webp",
    alt: "Exterior painting before and after in Mays Landing NJ",
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
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                    <Image src={post.image} alt={post.alt} width={1200} height={630} className="w-full h-64 object-cover" />
                    <div className="p-8">
                    <span className="text-[#94a3b8] text-sm">{post.date}</span>
                    <h2 className="text-2xl font-bold text-[#1e3a5f] mt-2 mb-3 group-hover:text-[#2563eb] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#64748b] text-lg">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[#2563eb] font-semibold mt-4">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </span>
                    </div>
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
