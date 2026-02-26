"use client";

import { useEffect } from "react";

export default function QuizPage() {
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
    window.location.href =
      "https://estimate-app-liart.vercel.app/quiz/perfect-finish-painters";
  }, []);

  return null;
}
