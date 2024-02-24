import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export default {
  providers: [],
  pages: {
    signIn: "/admin/auth",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const { pathname, search } = nextUrl;
      const isLoggedIn = Boolean(auth?.user);
      const isOnAuthPage = pathname.startsWith("/admin/auth");

      const unProtectedPages: string[] = [];
      const isOnUnprotectedPage = pathname === "/" || unProtectedPages.some((page) => pathname.startsWith(page));
      const isProtectedPage = !isOnUnprotectedPage;

      if (isOnAuthPage) {
        // Redirect to /admin, if logged in and is on an auth page
        if (isLoggedIn) return NextResponse.redirect(new URL("/admin", nextUrl));
      } else if (isProtectedPage) {
        // Redirect to /admin/auth, if not logged in but is on a protected page
        if (!isLoggedIn) {
          const from = encodeURIComponent(pathname + search); // The /admin/auth page shall then use this `from` param as a `callbackUrl` upon successful sign in
          return NextResponse.redirect(new URL(`/admin/auth?from=${from}`, nextUrl));
        }
      }

      // Don't redirect if on an unprotected page, or if logged in and is on a protected page
      return true;
    },
  },
} satisfies NextAuthConfig;
