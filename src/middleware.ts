import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Strip query params from pages (not API routes or _next assets)
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
