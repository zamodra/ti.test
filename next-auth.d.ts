import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
    };
    accessToken: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    phone: string;
    accessToken: string;
  }
}
