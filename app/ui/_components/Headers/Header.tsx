'use client';

import Link from 'next/link';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import HeaderSession from '@/app/ui/_components/Session/HeaderSession';
import MobileMenu from '@/app/ui/_components/MobileMenu';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('home.nav');

  useEffect(() => {
    let lastScrollY = window.scrollY; // Переменная для отслеживания последнего положения скролла
    const headerNav = document.getElementById('header-nav'); // Получаем элемент, который нужно скрывать

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Скролл вниз, скрываем элемент
        headerNav?.classList.add('-translate-y-full', 'opacity-0');
        headerNav?.classList.remove('translate-y-0', 'opacity-100');
      } else {
        // Скролл вверх, показываем элемент
        headerNav?.classList.remove('-translate-y-full', 'opacity-0');
        headerNav?.classList.add('translate-y-0', 'opacity-100');
      }

      // Обновляем последнее значение скролла
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Очищаем обработчик скролла при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="fixed top-0 z-20 flex h-20 w-full shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>

        <div className="flex items-center justify-center gap-2 p-6">
          <Link
            href="/about-us"
            className="hidden text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:block"
          >
            {t('aboutus')}
          </Link>
          <Link
            href="/contacts"
            className="hidden text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:block"
          >
            {t('contact')}
          </Link>
          <Link
            href="/fees-pricing"
            className="hidden text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:block"
          >
            {t('fee')}
          </Link>
          <HeaderSession />
          <ThemeButton />
          <MobileMenu />
        </div>
      </div>
      <div
        id="header-nav"
        className="fixed top-20 z-10 flex w-full justify-between rounded-lg bg-gray-100 p-4 duration-500 ease-in-out dark:border dark:bg-black lg:flex"
      >
        <ul className="flex gap-4">
          <li className="group relative hover:cursor-pointer">
            <Link
              href="#"
              className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
            >
              Merchant Digital Wallets
            </Link>
            <ul className="invisible absolute -left-4 min-w-[calc(100%+90px)] rounded-lg bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_16px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] transition delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
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
            <Link
              href="#"
              className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
            >
              Enterprise Blockchain Wallets
            </Link>
            <ul className="invisible absolute -left-4 min-w-[calc(100%+90px)] rounded-lg bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_46px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] transition delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
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
          {/*<li className="group relative hover:cursor-pointer">
             <Link
              href="/swap-wallets"
              className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
            >
              Swap Wallets
            </Link>
          </li>*/}
        </ul>
        <div>
          <div className="group relative hover:cursor-pointer">
            <Link
              href="#"
              className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
            >
              Support
            </Link>
            <ul className="bg-opacity-98 invisible absolute right-0 min-w-[calc(100%+70px)] rounded-lg bg-white p-4 opacity-0 shadow-lg backdrop-blur-[115px] transition-all delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
