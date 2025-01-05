import { NextRequest, NextResponse } from "next/server";

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
}

/* The `export const config` object is defining configuration settings for the middleware function. In
this case, the `matcher` property is an array of route paths that the middleware function should be
applied to. The middleware function will be executed for requests to any of the specified routes
("/", "/login", "/signup", "/dashboard"). This configuration helps specify where the middleware
logic should be applied within the application. */
export const config = {
  matcher: ["/login", "/signup", "/dashboard"],
};
