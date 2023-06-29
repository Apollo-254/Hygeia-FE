import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "phone", type: "string" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        if (!credentials?.phone || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = {
          phone: credentials?.phone,
          password: credentials?.password,
        };
        var returnedUser = { access: "test" };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        };

        await fetch(
          "https://ef02-41-139-168-163.ngrok-free.app/auth/v1/signin",
          requestOptions
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            returnedUser = data;
            console.log("while login ----------> ", returnedUser);

            return {
              id: "i",
              email: data?.access,
            };
          })
          .catch((error) => {
            console.error("----------> Error:", error);
          });
        return {
          id: "i",
          email: returnedUser?.access,
        };
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
