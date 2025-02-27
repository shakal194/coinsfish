import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';
import Image from 'next/image';
import { Metadata } from 'next';
import HomeSession from '@/app/ui/_components/Session/HomeSession';
import HomeOurProducts from '@/app/ui/_components/HomeOurProducts';
import HomeUseCasesSection from '@/app/ui/_components/HomeUseCasesSection';
import HaveAQuestion from '@/app/ui/_components/HaveAQuestion';
import HeaderNavMenu from '@/app/ui/_components/HeaderNavMenu';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'CoinsFish Home Page',
  description:
    'Welcome to CoinsFish. Helps You Receive Payments From Anyone In The World.',
};

export default function Page() {
  const t = useTranslations('home');
  return (
    <div className="relative">
      <Header />
      <HeaderNavMenu />
      <main className="flex flex-col p-6">
        <div className="container mx-auto px-4">
          <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
            <div className="flex flex-col rounded-lg bg-gray-100 dark:bg-inherit">
              <p className="mb-8 hidden text-[15px] font-medium leading-[150%] text-gray-400 dark:text-gray-300 md:block">
                Digital Assets Processing
              </p>
              <p className="text-3xl text-gray-800 dark:text-white md:text-3xl md:leading-normal">
                <strong>{t('title')}</strong>
              </p>
              <p className="mt-4 text-[24px] font-medium leading-[32px] text-gray-700 dark:text-gray-300">
                Send, Store, Exchange and Accept Cryptocurrency.
              </p>
              <div className="flex justify-center lg:justify-start">
                <HomeSession />
              </div>
            </div>
            <div className="flex items-center justify-center md:block">
              <Image
                src="/Main-picture-1-1000x748.png"
                priority={true}
                width={1000}
                height={748}
                className="hidden lg:block"
                alt="DesctopMain picture"
                sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
              />
              <Image
                src="/Main-picture-1-800x599.png"
                priority={true}
                width={800}
                height={599}
                className="hidden md:block lg:hidden"
                alt="Tablet picture"
                sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
              />
              <Image
                src="/Main-picture-1-500x374.png"
                priority={true}
                width={500}
                height={374}
                className="block md:hidden"
                alt="Mobile picture"
                sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-100 flex-wrap gap-[20px] md:flex-none md:flex-col md:items-center">
              <Image
                className="lazy h-[50px] w-[50px]"
                src="/svg/Icons-2.svg"
                alt="All types of crypto"
                width={0}
                height={0}
              />
              <h3 className="mt-4 text-lg font-semibold">
                All types of crypto
              </h3>
              <p className="md:text-center">
                Coins, StableCoins, Tokens are supported.
              </p>
            </div>
            <div className="flex flex-100 flex-wrap gap-[20px] md:flex-none md:flex-col md:items-center">
              <Image
                className="lazy h-[50px] w-[50px]"
                src="/svg/Icons-3.svg"
                alt="Major Blockchains"
                width={0}
                height={0}
              />
              <h3 className="mt-4 text-lg font-semibold">Major Blockchains</h3>
              <p className="md:text-center">
                Bitcoin, Ethereum, Solana, Binance Smart Chain, Ripple, etc.
              </p>
            </div>
            <div className="flex flex-100 flex-wrap gap-[20px] md:flex-none md:flex-col md:items-center">
              <Image
                className="lazy h-[50px] w-[50px]"
                src="/svg/Group.svg"
                alt="Free of Charge"
                width={50}
                height={50}
              />
              <h3 className="mt-4 text-lg font-semibold">Free of Charge</h3>
              <p className="md:text-center">
                All outgoing transactions, transfers and payouts in crypto are
                free of charge.
              </p>
            </div>
          </section>
          <HomeOurProducts />
          <HomeUseCasesSection />
          <HaveAQuestion />
        </div>
        <Footer />
      </main>
    </div>
  );
}
