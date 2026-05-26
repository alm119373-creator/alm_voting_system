import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/",
  "/login",
  "/admin/login",
  "/register",
  "/unauthorized",
  "/forgot-password",
  "/reset-password",
  "/api/auth",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon.ico") || pathname.includes("/api/public")) {
    return NextResponse.next();
  }

  if (PUBLIC_PATHS.some((publicPath) => pathname === publicPath || pathname.startsWith(publicPath))) {
    return NextResponse.next();
  }

  const token = req.cookies.get("alm_auth_token")?.value;

  if (!token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = pathname.startsWith("/admin") ? "/admin/login" : "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/forgot-password",
    "/reset-password",
    "/admin/:path*",
    "/dashboard",
    "/vote/:path*",
    "/unauthorized",
    "/login",
    "/register",
    "/api/auth/:path*",
  ],
};
