import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // If user is authenticated and trying to access login, redirect to dashboard
    if (req.nextUrl.pathname === "/login" && req.nextauth.token) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to login page without token
        if (req.nextUrl.pathname === "/login") {
          return true
        }
        // Require token for dashboard routes
        if (req.nextUrl.pathname.startsWith("/dashboard")) {
          return !!token
        }
        // Allow all other routes
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
