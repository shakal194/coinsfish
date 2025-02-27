'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  XCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import MobileMenuSession from '@/app/ui/_components/MobileMenuSession';
import AccordionMobileMenu from '@/app/ui/_components/AccordionMobileMenu';

type Submenus = {
  submenu1: boolean;
  submenu2: boolean;
  submenu3: boolean;
};

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenus, setSubmenus] = useState<Submenus>({
    submenu1: false,
    submenu2: false,
    submenu3: false,
  });

  const resetSubmenus = () => {
    setSubmenus({
      submenu1: false,
      submenu2: false,
      submenu3: false,
    });
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      resetSubmenus();
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (submenu: keyof Submenus) => {
    setSubmenus((prevSubmenus) => ({
      ...prevSubmenus,
      [submenu]: !prevSubmenus[submenu],
    }));
  };

  const blockBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unblockBodyScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      blockBodyScroll();
    } else {
      unblockBodyScroll();
    }

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        resetSubmenus();
        unblockBodyScroll();
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      unblockBodyScroll();
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="flex justify-end lg:hidden">
        <Bars3Icon
          className="h-6 w-6 text-white dark:text-gray-200"
          onClick={toggleMobileMenu}
        />
      </div>

      <div
        className={`fixed inset-0 flex flex-col overflow-y-auto bg-white p-4 transition-transform delay-200 duration-300 ease-in-out dark:bg-gray-800 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="self-end focus:outline-none"
        >
          <XCircleIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
        <AccordionMobileMenu />
        {/*<ul className="mt-4 flex flex-col gap-4">

          <li className="group relative hover:cursor-pointer">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleSubmenu('submenu1')}
            >
              <Link
                href="#"
                className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
              >
                Merchant Digital Wallets
              </Link>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-800 transition-transform delay-200 duration-300 ease-in-out dark:text-gray-200 ${
                  submenus.submenu1 ? 'rotate-180 transform' : ''
                }`}
              />
            </div>
            <ul
              className={`origin-top transform overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-in-out dark:bg-gray-800 ${
                submenus.submenu1
                  ? 'max-h-96 scale-y-100 opacity-100'
                  : 'max-h-0 scale-y-0 opacity-0'
              }`}
            >
              <li>
                <Link
                  href="/cryptocurrency-payment-gateway"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Merchant Digital Wallet Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/available-currencies"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Available Currencies
                </Link>
              </li>
              <li>
                <Link
                  href="/fees-pricing"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Fees & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/crypto-processing-solutions-comparison"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Solution Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/minimum-deposits-withdrawals"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Minimum Deposits and Withdrawals
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative hover:cursor-pointer">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleSubmenu('submenu2')}
            >
              <Link
                href="#"
                className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
              >
                Enterprise Blockchain Wallets
              </Link>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-800 transition-transform delay-200 duration-300 ease-in-out dark:text-gray-200 ${
                  submenus.submenu2 ? 'rotate-180 transform' : ''
                }`}
              />
            </div>
            <ul
              className={`relative origin-top transform overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-in-out dark:bg-gray-800 ${
                submenus.submenu2
                  ? 'max-h-96 scale-y-100 opacity-100'
                  : 'max-h-0 scale-y-0 opacity-0'
              }`}
            >
              <li>
                <Link
                  href="/cryptocurrency-wallets"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Enterprise Blockchain Wallets Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/available-currencies"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Available Currencies
                </Link>
              </li>
              <li>
                <Link
                  href="/fees-pricing"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Fees & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/crypto-processing-solutions-comparison"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Solution Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/minimum-deposits-withdrawals"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Minimum Deposits and Withdrawals
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative hover:cursor-pointer">
            <Link
              href="/swap-wallets"
              className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
            >
              Swap Wallets
            </Link>
          </li>
          <li>
            <div className="group relative hover:cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleSubmenu('submenu3')}
              >
                <Link
                  href="#"
                  className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                >
                  Support
                </Link>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-800 transition-transform duration-300 ease-in-out dark:text-gray-200 ${
                    submenus.submenu3 ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <ul
                className={`relative origin-top transform overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-in-out dark:bg-gray-800 ${
                  submenus.submenu3
                    ? 'max-h-96 scale-y-100 opacity-100'
                    : 'max-h-0 scale-y-0 opacity-0'
                }`}
              >
                <li>
                  <Link
                    href="/api"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="/release-notes"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                  >
                    Release Notes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
                  >
                    Guides (How To)
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>*/}
        <div className="flex flex-col items-end items-center justify-center gap-4 p-6">
          <MobileMenuSession />
          <Link
            href="/about-us"
            className=" transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:hidden"
          >
            About Us
          </Link>
          <Link
            href="/contacts"
            className="transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:hidden"
          >
            Contacts
          </Link>
          <Link
            href="/fees-pricing"
            className="transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:hidden"
          >
            Pricing
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
