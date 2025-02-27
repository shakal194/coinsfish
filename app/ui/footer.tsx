import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="mt-4 rounded-lg bg-blue-500 p-4 text-white md:flex md:justify-between">
        <div className="self-center leading-none">
          <Link href="/">
            <div className="mb-2.5 flex items-center justify-center md:mb-0">
              <GlobeAltIcon className="h-8 w-8 rotate-[15deg] lg:h-12 lg:w-12" />
              <p className="text-[24px] lg:text-[44px]">CoinsFish</p>
            </div>
          </Link>
        </div>
        <div className="text-center sm:flex sm:justify-evenly sm:gap-8 sm:text-left">
          <div className="mb-3.5 sm:mb-0">
            <h3 className="mb-3.5 border-y-2 border-gray-200 font-bold md:text-[1rem] lg:text-2xl">
              Company
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="/fees-pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#">Roadmap</Link>
              </li>
              <li>
                <Link href="#">Brand guideline</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="mb-3.5 sm:mb-0">
            <h3 className="mb-3.5 border-y-2 border-gray-200 font-bold md:text-[1rem] lg:text-2xl">
              Personal use
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">Wallet</Link>
              </li>
              <li>
                <Link href="#">P2P Exchange</Link>
              </li>
              <li>
                <Link href="#">Staking</Link>
              </li>
              <li>
                <Link href="#">Converter</Link>
              </li>
              <li>
                <Link href="#">Earn</Link>
              </li>
              <li>
                <Link href="#">Explorer</Link>
              </li>
            </ul>
          </div>
          <div className="mb-3.5 sm:mb-0">
            <h3 className="mb-3.5 border-y-2 border-gray-200  font-bold md:text-[1rem] lg:text-2xl">
              Bussiness use
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">White Label</Link>
              </li>
              <li>
                <Link href="#">Crypto Processing</Link>
              </li>
              <li>
                <Link href="#">E-Commerce plugins</Link>
              </li>
              <li>
                <Link href="#">API</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3.5 border-y-2 border-gray-200  font-bold md:text-[1rem] lg:text-2xl">
              Support
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">Telegram</Link>
              </li>
              <li>
                <Link href="#">Email</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
