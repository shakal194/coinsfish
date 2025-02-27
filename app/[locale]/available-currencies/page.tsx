'use client';

import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRightIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';

const AvailableCurrenciesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number, hash: string) => {
    setActiveTab(tabIndex);

    window.history.pushState(null, '', hash);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#currency_table_1') {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, []);

  return (
    <>
      <Header />
      <section className="block__available-currencies white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block__available-currencies__heading mb-8 lg:text-center">
            <h1 className="text-3xl font-semibold">
              Available Cryptocurrencies
            </h1>
          </div>
          <div className="block__available-currencies__tabs">
            <div className="block__available-currencies__tabs__header mb-20 flex cursor-pointer">
              <div
                className={`block__available-currencies__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[14px_20px] text-[12px] font-normal leading-[20px] text-gray-400 no-underline transition ease-out md:p-[20px_32px] md:text-[18px] md:leading-[22px] ${activeTab === 0 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-gray-700 dark:text-blue-300' : ''}`}
                data-model="0"
                onClick={() => handleTabClick(0, '#currency_table_0')}
                id="currency_table_0"
              >
                Merchant Digital Wallets
              </div>
              <div
                className={`block__available-currencies__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[14px_20px] text-[12px] font-normal leading-[20px] text-gray-400 no-underline transition ease-out md:p-[20px_32px] md:text-[18px] md:leading-[22px] ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-gray-700 dark:text-blue-300' : ''}`}
                data-model="1"
                onClick={() => handleTabClick(1, '#currency_table_1')}
                id="currency_table_1"
              >
                Enterprise Blockchain Wallets
              </div>
            </div>
            <div className="block__available-currencies__tabs__content">
              {activeTab === 0 && (
                <div
                  className="block__available-currencies__tabs__content__table active"
                  data-model="0"
                  data-license="0"
                >
                  <div className="block__available-currencies__tabs__content__table__group__title mb-14 flex w-full max-w-full flex-col lg:flex-row">
                    <h4 className="block__available-currencies__tabs__content__table__group__title flex w-full justify-between text-xl font-semibold md:max-w-[197px] lg:pr-[36px]">
                      Coins
                      <span className="mobile__text flex items-center text-[14px] text-gray-400 md:hidden">
                        Swipe <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                      </span>
                    </h4>
                    <div className="crypto_table_main flex w-full max-w-full flex-col">
                      <div className="block__available-currencies__tabs__content__table__group__rows mx-[-16px] my-0 overflow-x-auto px-[16px] py-0 scrollbar-hide lg:overflow-x-hidden">
                        <div className="block__available-currencies__tabs__content__table__group__rows_scroller min-w-[600px] max-w-[1124px]">
                          <div className="row first_row flex w-[760px] flex-nowrap justify-start border-b border-t-0 border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              №
                            </div>
                            <div className="row__col octopus hidden">
                              coin_id
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Alpha
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Alias
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Name
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Blockchain
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Type
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              1
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-row justify-start text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/bitcoin_dashboard.svg"
                                alt="btc"
                                className="mr-[8px] h-[17px] w-[17px] lg:mr-[20px]"
                              />
                              BTC
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              –
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Bitcoin
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Bitcoin
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Coin
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              2
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-row justify-start text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/etherium_dashboard.svg"
                                alt="eth"
                                className="mr-[8px] h-[17px] w-[17px] lg:mr-[20px]"
                              />
                              ETH
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              –
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Etherium
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Etherium
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Coin
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              3
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-row justify-start text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/tether_dashboard.svg"
                                alt="usdt"
                                className="mr-[8px] h-[17px] w-[17px] lg:mr-[20px]"
                              />
                              USDT
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              –
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Tether
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Tether
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Coin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div
                  className="block__available-currencies__tabs__content__table active"
                  data-model="1"
                  data-license="1"
                >
                  <div className="block__available-currencies__tabs__content__table__group__title mb-14 flex w-full max-w-full flex-col lg:flex-row ">
                    <h4 className="block__available-currencies__tabs__content__table__group__title flex w-full justify-between text-xl font-semibold md:max-w-[197px] lg:pr-[36px]">
                      Coins
                      <span className="mobile__text flex items-center text-[14px] text-gray-400 md:hidden">
                        Swipe <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                      </span>
                    </h4>
                    <div className="crypto_table_main flex w-full max-w-full flex-col">
                      <div className="block__available-currencies__tabs__content__table__group__rows mx-[-16px] my-0 overflow-x-auto px-[16px] py-0 scrollbar-hide lg:overflow-x-hidden">
                        <div className="block__available-currencies__tabs__content__table__group__rows_scroller min-w-[600px] max-w-[1124px]">
                          <div className="row first_row flex w-[760px] flex-nowrap justify-start border-b border-t-0 border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              №
                            </div>
                            <div className="row__col octopus hidden">
                              coin_id
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Alpha
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Alias
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Name
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Blockchain
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[10px] font-normal leading-[18px] text-gray-400 lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Type
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              1
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-row justify-start text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/bitcoin_dashboard.svg"
                                alt="btc"
                                className="mr-[8px] h-[17px] w-[17px] lg:mr-[20px]"
                              />
                              BTC
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              –
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Bitcoin
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Bitcoin
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Coin
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              2
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-row justify-start text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/etherium_dashboard.svg"
                                alt="eth"
                                className="mr-[8px] h-[17px] w-[17px] lg:mr-[20px]"
                              />
                              ETH
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              –
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Etherium
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Etherium
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Coin
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] py-[12px] md:w-full md:max-w-full md:py-3">
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              3
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-row justify-start text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/tether_dashboard.svg"
                                alt="usdt"
                                className="mr-[8px] h-[17px] w-[17px] lg:mr-[20px]"
                              />
                              USDT
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              –
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Tether
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Tether
                            </div>
                            <div className="row__col octopus mr-[16px] flex max-w-[126px] flex-[0_1_144px] shrink-0 flex-col justify-start gap-2 text-[12px] font-normal leading-[18px] lg:mr-[20px] lg:max-w-full lg:shrink lg:text-[12px]">
                              Coin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="block_linksbox_section white_section pb-[70px] pt-0 md:pb-[150px]">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-col justify-start gap-9 lg:flex-row">
            <Link
              href="/minimum-deposits-withdrawals"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-400">
                Minimum Deposits
              </h4>
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/crypto-processing-solutions-comparison"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-400">
                Solutions Comparison
              </h4>
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/fees-pricing"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-400">
                Fees &amp; Pricing
              </h4>
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AvailableCurrenciesSection;
