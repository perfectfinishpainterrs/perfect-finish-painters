import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  // www.perfectfinishpainter.com → perfectfinishpainter.com (apex is canonical)
  if (host.startsWith("www.")) {
    const apex = request.nextUrl.clone();
    apex.host = host.slice(4);
    return NextResponse.redirect(apex, 301);
  }

  // Strip query params from pages (not API routes or _next assets) — kills /?q={search_term_string} stragglers from old SearchAction schema
  if (search && !pathname.startsWith("/api") && !pathname.startsWith("/_next")) {
    const cleanUrl = new URL(pathname, request.url);
    return NextResponse.redirect(cleanUrl, 301);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
