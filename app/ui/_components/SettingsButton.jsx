'use client';
import Link from 'next/link';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';

const SettingsRedirect = () => {
  return (
    <Link
      href="/dashboard/settings/security"
      className="flex items-center justify-center rounded-lg bg-gray-100 p-3 text-sm font-medium transition-colors hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-800 dark:hover:bg-gray-400 md:hidden"
    >
      <AdjustmentsHorizontalIcon className="w-6" />
    </Link>
  );
};

export default SettingsRedirect;
