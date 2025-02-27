'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HomeSession() {
  const { data: session, status } = useSession();

  return session ? (
    <Link
      href="/dashboard"
      className="mt-10 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors delay-200 duration-300 ease-in-out hover:bg-blue-400 md:text-base"
    >
      <span>Go to dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
    </Link>
  ) : (
    <ul className="mt-10 flex">
      <li className="mr-5">
        <Link
          href="/signin"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors delay-200 duration-300 ease-in-out hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </li>
      <li>
        <Link
          href="/registration"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors delay-200 duration-300 ease-in-out hover:bg-blue-400 md:text-base"
        >
          <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </li>
    </ul>
  );
}
