'use client';

import {
  UserGroupIcon,
  HomeIcon,
  ListBulletIcon,
  ArrowLongLeftIcon,
  UserMinusIcon,
  BuildingOfficeIcon,
  BellIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Security',
    href: '/dashboard/settings/security',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Notifications',
    href: '/dashboard/settings/notifications',
    icon: BellIcon,
  },
  {
    name: 'Whitelist management',
    href: '/dashboard/settings/whitelist',
    icon: ListBulletIcon,
  },
  {
    name: 'Referral program',
    href: '/dashboard/settings/referral',
    icon: UserGroupIcon,
  },
  {
    name: 'Promo code',
    href: '/dashboard/settings/promocode',
    icon: UserGroupIcon,
  },
  {
    name: 'KYC personal wallet',
    href: '/dashboard/settings/kyc',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Account deleting',
    href: '/dashboard/settings/account',
    icon: UserMinusIcon,
  },
  {
    name: 'To dashboard',
    href: '/dashboard',
    icon: ArrowLongLeftIcon,
  },
];

export default function SettingsNavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-800 dark:hover:bg-gray-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600 dark:bg-gray-300 dark:text-blue-700':
                  pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-4" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
