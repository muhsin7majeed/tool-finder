import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authConfig from "@/auth.config";

// declare module "next-auth" {
//   interface Session {
//     user: { id: string; name: string };
//   }
// }

export const {
  auth,
  handlers: { GET, POST },
  signIn,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com", password: "password" };

        if (user.password === credentials.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    ...authConfig.callbacks,
    session({ token, user, ...rest }) {
      return {
        user: {
          id: token.sub!,
        },
        expires: rest.session.expires,
      };
    },
  },
  secret: "some_random_secret",
});
