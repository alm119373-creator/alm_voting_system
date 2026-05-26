import { NextRequest, NextResponse } from "next/server"

const publicRoutes = [
  "/",
  "/login",
  "/admin/login",
  "/register",
  "/unauthorized",
  "/forgot-password",
  "/reset-password",
  "/api/auth",
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route))) {
    return NextResponse.next()
  }

  const token = request.cookies.get("alm_auth_token")?.value
  if (!token) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
