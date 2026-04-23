import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Get Your Free Estimate | Perfect Finish Painters",
  description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
  openGraph: {
    title: "Get Your Free Estimate | Perfect Finish Painters",
    description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/quiz",
    images: [{ url: "/logo.webp", width: 1970, height: 748, alt: "Perfect Finish Painters logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Free Estimate | Perfect Finish Painters",
    description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
    images: ["/logo.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/quiz" },
};

export default function QuizPage() {
  redirect("https://estimate-app-liart.vercel.app/quiz/perfect-finish-painters");
}
