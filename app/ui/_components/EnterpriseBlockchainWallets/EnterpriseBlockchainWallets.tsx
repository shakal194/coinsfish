import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import dataSliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_data/MerchantDigitalWallets/SliderCryptocurrencyMerchantDigitalWallets.json';
import SliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_components/MerchantDigitalWallets/SliderCryptocurrencyMerchantDigitalWallets';

const EnterpriseBlockchainWallets = () => {
  return (
    <section className="block_hero white_section flex w-full max-w-full flex-col pb-[72px] lg:pb-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_hero_row z-2 relative flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="block_hero_row_text_box w-full lg:max-w-[544px]">
            <h1 className="mb-8 text-[36px] font-bold leading-[50px] lg:text-[48px] lg:leading-[69px]">
              Enterprise Blockchain Wallets
            </h1>
            <h4 className="section_description mt-4 text-[20px] leading-[32px]">
              A payment solution that enables you to Receive, Store and Send
              digital currencies.
            </h4>
            <Link
              href="/registration"
              className="mt-[56px] flex w-full items-center justify-center gap-5 rounded-lg  bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors delay-200 duration-300 ease-in-out hover:bg-blue-400 md:max-w-[201px] md:justify-start md:text-base"
            >
              Open account
              <ArrowRightIcon className="w-5" />
            </Link>
          </div>
          <div className="block_hero_row_image_box mb-[55px] flex w-full max-w-full justify-center lg:max-w-[660px]">
            <Image
              className="lazy h-full w-[660px] max-w-full md:h-[420px] lg:max-w-[660px]"
              decoding="async"
              priority={true}
              src="/svg/block-hero-800x510.png"
              alt="Main Screen Enterprise"
              title="Main Screen Enterprise"
              width={660}
              height={420}
            />
          </div>
        </div>
      </div>
      <SliderCryptocurrencyMerchantDigitalWallets
        data={dataSliderCryptocurrencyMerchantDigitalWallets}
      />
    </section>
  );
};

export default EnterpriseBlockchainWallets;
