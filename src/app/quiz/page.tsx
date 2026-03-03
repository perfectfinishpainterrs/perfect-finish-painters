import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Get Your Free Estimate | Perfect Finish Painters",
  description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
  alternates: { canonical: "https://perfectfinishpainter.com/quiz" },
};

export default function QuizPage() {
  redirect("https://estimate-app-liart.vercel.app/quiz/perfect-finish-painters");
}
