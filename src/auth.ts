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
        console.log({ credentials, req });

        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    ...authConfig.callbacks,
    session({ token, user, ...rest }) {
      console.log({ token, user, rest });

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
