'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HeaderSession() {
  const { data: session, status } = useSession();

  return session ? (
    <Link
      href="/dashboard"
      className="text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b"
    >
      Dashboard
    </Link>
  ) : (
    <Link
      href="/signin"
      className="text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b"
    >
      Login
    </Link>
  );
}
