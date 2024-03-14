import NextAuth from "next-auth";
import { authOptions } from "./allAuthOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
