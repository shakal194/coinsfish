'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export function Merchants() {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        'my-2 flex hidden h-[48px] items-center rounded-md border border-x-0 border-y-slate-300 bg-gray-100 p-3 text-sm font-bold hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-600 dark:hover:bg-gray-400 md:flex md:p-2 md:px-3',
        {
          'bg-sky-100 text-blue-600': pathname === '/dashboard/merchants',
        },
      )}
    >
      <Link href="/dashboard/merchants" className="w-[75%]">
        Merchants
      </Link>
      <Link
        href="/dashboard/merchants/create"
        className={clsx(
          'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors delay-200 duration-300 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        )}
      >
        <PlusIcon className="w-6" />
      </Link>

      {/*{isModalOpen('createMerchant') && (
        <div
          className="fixed inset-0 z-50 flex h-full items-center justify-center bg-gray-400 bg-opacity-50"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing parent modal
          }}
        >
          <div className="relative w-96 rounded-md bg-white p-8 dark:border dark:bg-gray-800">
            <div className="mb-4 border border-x-0 border-t-0 border-b-slate-300">
              <XCircleIcon
                className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-700 dark:text-gray-300"
                onClick={() => closeModal('createMerchant')}
              />
              <h2 className="mb-4 text-xl font-bold">Create new merchant</h2>
            </div>
            <MerchantForm />
          </div>
        </div>
      )}*/}
    </div>
  );
}
