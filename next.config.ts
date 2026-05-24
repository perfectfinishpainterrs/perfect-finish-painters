import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: "/quiz",
        destination: "https://estimate-app-liart.vercel.app/quiz/perfect-finish-painters",
        permanent: false,
      },
      {
        source: "/deck-fence-staining",
        destination: "/shed-restoration",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Content-Security-Policy listing the actual third parties we use:
    // - Google Tag Manager / Analytics (GA4)
    // - Facebook Pixel
    // - Vercel Analytics
    // - Google Maps iframe (on /contact)
    // 'unsafe-inline' on script-src + style-src is required because Next.js
    // emits inline hydration scripts and Tailwind injects inline styles.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://va.vercel-scripts.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://*.google-analytics.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.facebook.com https://connect.facebook.net https://vitals.vercel-insights.com https://*.google-analytics.com",
      "frame-src https://www.google.com https://www.facebook.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
