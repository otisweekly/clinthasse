import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// The password hash for "clinthasse2026"
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH ||
  "$2b$10$esxpP7I74Cf4H9OfEQ4zYu9CgG3xDOve8fwWJxr4m4it2j4WKsWom";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Password",
      credentials: {
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          ADMIN_PASSWORD_HASH
        );

        if (isValid) {
          return {
            id: "1",
            name: "Clint Hasse",
            email: "admin@clinthasse.com"
          };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
});

export { handler as GET, handler as POST };
