'use client';

import Link from 'next/link';

const HeaderNavMenu = () => {
  return (
    <>
      <div className="mt-4 flex hidden justify-between rounded-lg bg-gray-100 p-4 dark:border dark:bg-transparent lg:flex">
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
            <ul className="invisible absolute -left-4 min-w-[calc(100%+90px)] rounded-lg bg-blue-500 bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_46px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] transition delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
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
    </>
  );
};

export default HeaderNavMenu;
