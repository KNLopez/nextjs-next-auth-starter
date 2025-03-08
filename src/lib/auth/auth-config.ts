import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        // Add your authentication logic here
        // Example:
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // call endpoint
        console.log(email, password);
        // Validate credentials
        // Return null if invalid
        // Return user object if valid
        return {
          id: "1",
          email: email,
          name: "User",
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // console.log({ auth, request });

      return true;
    },
  },
} satisfies NextAuthConfig;
