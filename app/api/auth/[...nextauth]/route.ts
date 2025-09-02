// app/api/auth/[...nextauth]/route.ts
import { findUserByEmail } from '@/lib/db'; // Adjust path to your simulated DB
import bcrypt from 'bcryptjs';
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

type UserSession = Session & {
  user: {
    id: string;
    email: string;
  };
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<'email' | 'password', string> | undefined): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Simulate a database call to find the user
        const user = findUserByEmail(credentials.email);

        // If user not found or password does not match, return null
        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          return null;
        }

        // Return minimal user data
        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Use JWT to manage the session
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }) {
      if (user) {
        token.id = String(user.id);
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: UserSession, token: JWT }) {
      session.user = {
        id: String(token.id),
        email: token.email || '',
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

