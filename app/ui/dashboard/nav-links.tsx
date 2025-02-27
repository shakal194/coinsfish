'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {
  const pathname = usePathname();
  const t = useTranslations('dashboard.nav');

  const links = [
    { name: `${t('home')}`, href: '/dashboard', icon: HomeIcon },
    {
      name: `${t('invoices')}`,
      href: '/dashboard/invoices',
      icon: DocumentDuplicateIcon,
    },
    {
      name: `${t('customers')}`,
      href: '/dashboard/customers',
      icon: UserGroupIcon,
    },
    {
      name: `${t('settings')}`,
      href: '/dashboard/settings/security',
      icon: AdjustmentsHorizontalIcon,
    },
  ];

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
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
