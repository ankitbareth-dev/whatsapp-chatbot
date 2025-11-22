import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  const isLoggedIn = token === "valid-user";

  // Protected routes
  const protectedRoutes = [
    "/dashboard",
    "/agents",
    "/bulk",
    "/pricing",
    "/chats",
  ];

  // If not logged in → redirect to login
  if (!isLoggedIn && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If logged in → prevent access to login
  if (isLoggedIn && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/agents", "/bulk", "/pricing", "/chats", "/"],
};
