import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import dataSliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_data/MerchantDigitalWallets/SliderCryptocurrencyMerchantDigitalWallets.json';
import SliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_components/MerchantDigitalWallets/SliderCryptocurrencyMerchantDigitalWallets';

const MerchantDigitalWallets = () => {
  return (
    <section className="block_hero white_section flex w-full max-w-full flex-col pb-[72px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_hero_row z-2 relative flex flex-col-reverse justify-between lg:flex-row lg:items-center">
          <div className="block_hero_row_text_box w-full max-w-full lg:max-w-[544px]">
            <h1 className="mb-[24px] text-[36px] font-bold leading-[50px] lg:mb-8 lg:text-[48px] lg:leading-[69px]">
              Merchant Digital Wallets
            </h1>
            <h4 className="section_description mt-4 text-[20px] leading-[32px]">
              A solution enabling businesses to accept crypto payments in all
              major coins and exchange it all into Coins or Stablecoins.
            </h4>
            <Link
              href="/registration"
              className="mt-[56px] flex w-full max-w-full items-center justify-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors delay-200 duration-300 ease-in-out hover:bg-blue-400 md:max-w-[201px] md:justify-start md:text-base"
            >
              Open account
              <ArrowRightIcon className="w-5" />
            </Link>
          </div>
          <div className="block_hero_row_image_box w-full max-w-full lg:max-w-[660px]">
            <Image
              className="lazy aspect-[413/269] w-full max-w-full lg:max-w-[660px]"
              decoding="async"
              priority={true}
              src="/svg/Main-Screen_Merchants.svg"
              alt="Main Screen Merchants"
              title="Main Screen Merchants"
              width={0}
              height={0}
            />
          </div>
        </div>
        <SliderCryptocurrencyMerchantDigitalWallets
          data={dataSliderCryptocurrencyMerchantDigitalWallets}
        />
      </div>
    </section>
  );
};

export default MerchantDigitalWallets;
