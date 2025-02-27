import NextAuth from 'next-auth';
import withAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
//import { Session } from 'inspector';
//import { JWT } from 'next-auth/jwt';

/*interface JWT {
  name: string;
  email: string;
  picture?: string;
  sub: string;
  id?: string | null;
  iat: number;
  exp: number;
  jti: string;
}*/

/*interface User {
    name: string;
    image: string;
    email: string;
    id: string;
  }

interface Session {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
  expires?: string;
  error?: string;
}*/

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

//export const { handlers, auth, signIn, signOut } = NextAuth(
const config = {
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60, // How long until an idle session expires and is no longer valid.
  },
  /*jwt: {
    secret: process.env.AUTH_SECRET,
  },*/
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user.id = token.id;
      //session.locale = token.locale || 'en';
      return session;
    },
  },
};
//);

export const { handlers, auth, signIn, signOut } = NextAuth(config);
