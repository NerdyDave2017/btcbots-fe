import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";
export const intlMiddleware = createMiddleware({
  ...routing,
  // Add locale detection and persistence configuration
  localeDetection: true,
  localePrefix: "always",
});

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the route is a auth route
  const authRoutes = ["/login", "/signup"];

  const token = req.cookies.get("auth_token"); // Get the auth token from the cookies

  // Redirect to the dashboard if the user is already logged in
  if (authRoutes.includes(pathname) && token) {
    const botExplorerUrl = new URL("/dashboard", req.url);
    return NextResponse.redirect(botExplorerUrl);
  }

  // Redirect to the login page if the user is not logged in
  if (pathname === "/dashboard" && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Apply the `next-intl` middleware for locale handling
  const response = intlMiddleware(req);

  // Ensure the locale cookie is set
  if (!req.cookies.get("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", routing.defaultLocale);
  }

  return response;
}

/* The `export const config` object is defining configuration settings for the middleware function. In
this case, the `matcher` property is an array of route paths that the middleware function should be
applied to. The middleware function will be executed for requests to any of the specified routes
("/", "/login", "/signup", "/dashboard"). This configuration helps specify where the middleware
logic should be applied within the application. */
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|es)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",

    "/login",

    "/signup",

    "/dashboard",
  ],
};
