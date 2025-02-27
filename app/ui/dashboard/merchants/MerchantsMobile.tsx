'use client';

import { useState, useEffect, useRef } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export function MerchantsMobile() {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        'flex h-[48px] grow items-center justify-between rounded-md border border-x-0 border-y-slate-300 bg-gray-100 p-3 text-sm font-bold hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-600 dark:hover:bg-gray-400 md:p-2 md:px-3',
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

/*export function MobileMerchants({ onClose }) {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [merchantName, setMerchantName] = useState('');

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
    if (!isModalOpen) {
      setMerchantName('');
    }
  }, [isModalOpen, setMerchantName, setIsModalOpen]);

  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };

    const handleClickOutsideModal = (e) => {
      if (e.target.classList.contains('bg-opacity-50')) {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);
    document.addEventListener('click', handleClickOutsideModal);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [toggleModal]);

  return (
    <div className="flex grow md:hidden ">
      <Link
        href="/dashboard/merchants"
        className={clsx(
          'flex h-[48px] grow items-center justify-between rounded-md border border-x-0 border-y-slate-300 bg-gray-100 p-3 text-sm font-bold hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3',
          {
            'bg-sky-100 text-blue-600': pathname === '/dashboard/merchants',
          },
        )}
        onClick={onClose}
      >
        Merchants
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleModal();
          }}
        >
          <PlusIcon className="w-6" />
        </Button>
      </Link>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing parent modal
          }}
        >
          <div
            className="relative w-96 rounded-md bg-white p-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing current modal
          >
            <div className="mb-4 border border-x-0 border-t-0 border-b-slate-300">
              <XMarkIcon
                className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-700"
                onClick={toggleModal}
              />
              <h2 className="mb-4 text-xl font-bold">Create new merchant</h2>
            </div>
            <MerchantForm />
          </div>
        </div>
      )}
    </div>
  );
}
*/
