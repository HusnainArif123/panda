import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isPublicPath = ["/login", "/signup"].includes(pathname);
  const tokenValue = request.cookies.get("token")?.value;

  if (isPublicPath && tokenValue) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to home
  }

  if (!isPublicPath && !tokenValue) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login
  }

  return NextResponse.next(); // Proceed normally if no redirection
}

// Apply middleware to selected routes
export const config = {
  matcher: ["/", "/profile", "/logout", "/login", "/signup"],
};
