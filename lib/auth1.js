import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { dbConnect } from "./db";
import User from "../models/User"; // Adjust the path as needed
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          // //////
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          return null;
        }
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordCorrect) {
          return null;
        }
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          // role: user.role,
        };
        // ///////
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
        
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        // token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        // session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
};



// const { NextAuthOptions } = require("next-auth");
// // const Credentials = require("next-auth/providers/credentials");
// import CredentialsProvider from "next-auth/providers/credentials";

// exports.authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Add your own logic here to validate credentials
//         // This is just an example
//         if (credentials?.username === "user" && credentials?.password === "pass") {
//           return { id: "1", name: "User", email: "user@example.com" };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/",
//   },
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     session: async ({ session, token }) => {
//       if (token) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
// };
