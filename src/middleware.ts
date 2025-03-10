import NextAuth from "next-auth";
import { authConfig } from "./lib/auth/auth-config";

export const middleware = NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
