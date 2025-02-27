'use client';

import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const AvailableCurrenciesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <section className="block__deposits white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block__deposits__heading mb-8 md:text-center">
            <h1 className="text-3xl font-semibold">Know Your Fees</h1>
          </div>
          <div className="block_deposits">
            <div className="block_deposits_first_row mb-20 flex w-full max-w-full flex-wrap border-b border-gray-200 pb-5">
              <h2 className="heading_h3 mb-[32px] w-full max-w-full pr-9 text-[20px] font-semibold leading-[32px] md:mb-[-20px] md:max-w-[197px]">
                One-time fee
              </h2>
              <p className="block_deposits_first_row_element block_deposits_first_row_element-2 mb-[24px] flex w-full max-w-full items-center pr-4 text-[16px] font-medium leading-[25px] text-gray-800 dark:text-gray-300 md:max-w-[340px] ">
                One fee including all types of the wallets supported
              </p>
              <p className="block_deposits_first_row_element block_deposits_first_row_element-3 flex w-full max-w-[160px] items-center pr-4 text-[14px] font-normal leading-[22px] text-gray-700 dark:text-gray-300 md:max-w-[391px]">
                Onboarding Fee (Compliance + Screening + Setup)
              </p>
              <p className="block_deposits_first_row_element block_deposits_first_row_element-4 flex w-full max-w-[130px] items-center text-[14px] font-bold leading-[22px] text-gray-700 dark:text-gray-300 md:max-w-[100px]">
                $ 500
              </p>
            </div>
            <div className="block__deposits__tabs">
              <div className="block__deposits__tabs__header mb-20 flex cursor-pointer">
                <div
                  className={`block__deposits__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[14px_20px] text-[12px] font-normal leading-[20px] text-gray-400 no-underline transition ease-out md:p-[20px_32px] md:text-[18px] md:leading-[22px] ${activeTab === 0 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-gray-700 dark:text-blue-300' : ''}`}
                  data-model="0"
                  onClick={() => setActiveTab(0)}
                >
                  Merchant Digital Wallets
                </div>
                <div
                  className={`block__deposits__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[14px_20px] text-[12px] font-normal leading-[20px] text-gray-400 no-underline transition ease-out md:p-[20px_32px] md:text-[18px] md:leading-[22px] ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-gray-700 dark:text-blue-300' : ''}`}
                  data-model="1"
                  onClick={() => setActiveTab(1)}
                >
                  Enterprise Blockchain Wallets
                </div>
              </div>
              <div className="block__deposits__tabs__content">
                {activeTab === 0 && (
                  <div
                    className="block__deposits__tabs__content__table active"
                    data-model="0"
                    data-license="0"
                  >
                    <div className="tab-content__item_table mb-[40px] flex w-full max-w-full flex-col lg:mb-20">
                      <div className="tab-content__item_table_title mb-[32px] mt-[16px] w-full max-w-full md:my-auto md:mr-9 md:max-w-[197px]">
                        <h5 className="heading_h3 text-[20px] font-semibold leading-[32px]">
                          Digital Wallet Accounts*
                        </h5>
                      </div>
                      <div className="tab-content__item_table_body w-full max-w-[1124px] border-b border-gray-200">
                        <div className="tab-content__item_table_body_row flex w-full max-w-full flex-wrap justify-between md:flex-nowrap">
                          <div className="firs-coll w-full max-w-full px-0 py-[16px] text-[16px] font-medium md:max-w-[340px]">
                            <p className="block_deposits_first_row_element block_deposits_first_row_element-2 flex w-full max-w-[340px] items-center pr-4 text-[16px] font-medium leading-[25px] text-gray-800 dark:text-gray-300">
                              Open your account in
                            </p>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex w-full">
                              <div className="line w-full">
                                <div className="cell min-h[21px] -mb-1 flex h-full flex-col px-0 py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    USD, EUR USDT, USDC, TUSD, EURC, BTC
                                  </div>
                                </div>
                              </div>
                              <div className="line w-full">
                                <div className="cell min-h[21px] -mb-1 flex h-full flex-col px-0 py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full flex-col lg:flex-row">
                      <div className="tab-content__item_table_title m-w-full mb-[32px] mt-[16px] w-full md:mr-[36px] md:max-w-[197px]">
                        <h5 className="text-[20px] font-semibold leading-[32px]">
                          Processing Fee**
                        </h5>
                      </div>
                      <div className="tab-content__item_table_body flex w-full max-w-full flex-col md:max-w-[1124px]">
                        <div className="row-title md:pb-auto pb-[24px]">
                          <span className="text-[18px] font-semibold leading-[150%] text-gray-700 dark:text-blue-300">
                            For Coins
                          </span>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap lg:before:absolute lg:before:left-0 lg:before:top-[20%] lg:before:h-[1px] lg:before:w-full lg:before:bg-[#ededed] lg:before:content-['']">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300 md:pt-[74px]">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Incoming Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="titles_row flex">
                              <div className="titles_row_item w-full max-w-[462px] py-[16px] text-[14px] font-normal leading-[22px] text-gray-700 dark:text-gray-300 md:max-w-[391px]">
                                Turnover
                              </div>
                              <div className="titles_row_item w-full max-w-[30%] py-[16px] text-[14px] font-normal leading-[22px] text-gray-700 dark:text-gray-300 md:max-w-[391px]">
                                Commission
                              </div>
                            </div>
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    &gt; $ 5 mln
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 3 – 5 mln
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 1 – 3 mln
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    &lt; $ 1 mln
                                  </div>
                                </div>
                              </div>
                              <div className="line flex w-full max-w-[30%] flex-col md:max-w-full">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.25%
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.3%
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.35%
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.4%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row flex flex-wrap justify-between border-b border-[#ededed] md:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Outgoing Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    Free of Charge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Crypto Settlement
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] font-bold leading-[155%] text-gray-700 dark:text-gray-300">
                                    Immediate
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] md:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Fiat Settlement
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] font-bold leading-[155%] text-gray-700 dark:text-gray-300">
                                    T+1
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full ">
                      <div className="tab-content__item_table_title hidden w-full max-w-full lg:mr-[36px] lg:block lg:max-w-[197px]"></div>
                      <div className="tab-content__item_table_body flex w-full max-w-full flex-col md:max-w-[1124px]">
                        <div className="row-title">
                          <span className="text-[18px] font-semibold leading-[150%] text-gray-700 dark:text-blue-300">
                            For StableCoins & Tokens
                          </span>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap lg:before:absolute lg:before:left-0 lg:before:top-[20%] lg:before:h-[1px] lg:before:w-full lg:before:bg-[#ededed] lg:before:content-['']">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300 md:pt-[74px]">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Incoming Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="titles_row flex">
                              <div className="titles_row_item w-full max-w-[462px] py-[16px] text-[14px] font-normal leading-[22px] text-gray-700 dark:text-gray-300 lg:max-w-[391px]">
                                Turnover
                              </div>
                              <div className="titles_row_item w-full max-w-[100%] py-[16px] text-[14px] font-normal leading-[22px] text-gray-700 dark:text-gray-300 lg:max-w-[391px]">
                                Commission
                              </div>
                            </div>
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    &gt; $ 5 mln
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 3 – 5 mln
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 1 – 3 mln
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    &lt; $ 1 mln
                                  </div>
                                </div>
                              </div>
                              <div className="line flex w-full flex-col lg:max-w-[30%]">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.25%
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.3%
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.35%
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.4%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Outgoing Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    Free of Charge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Crypto Settlement
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] font-bold leading-[155%] text-gray-700 dark:text-gray-300">
                                    Immediate
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Fiat Settlement
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] font-bold leading-[155%] text-gray-700 dark:text-gray-300">
                                    T+1
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full">
                      <div className="tab-content__item_table_title hidden w-full lg:mr-[36px] lg:block lg:max-w-[197px]"></div>
                      <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                        <div className="row-title">
                          <span className="text-[18px] font-semibold leading-[150%] text-gray-700 dark:text-blue-300">
                            Minimum Commissions
                          </span>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Per blockchain
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    ETH
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    BTC
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    Tether
                                  </div>
                                </div>
                              </div>
                              <div className="line flex w-full flex-col text-right lg:max-w-[30%]">
                                <div className="cell mb-[-1px] h-full min-h-[21px] border-b border-[#ededed] py-[16px] md:flex">
                                  <div className="item text-[14px] leading-[155%]">
                                    8$
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] h-full min-h-[21px] border-b border-[#ededed] py-[16px] md:flex">
                                  <div className="item text-[14px] leading-[155%]">
                                    0,1$
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] h-full min-h-[21px] border-b border-[#ededed] py-[16px] md:flex">
                                  <div className="item text-[14px] leading-[155%]">
                                    ???
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content__item_table mb-[72px]">
                      <div className="tab-content__item_table_body mx-auto max-w-[800px] lg:ml-[197px]">
                        <div className="tab-content__item_table_body_descr">
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            * Digital Wallet accounts are functional for
                            deposits and withdrawals with conversion, meaning
                            that the Sender can process BTC and it will be
                            settled in USDT, which can be subsequently sent in
                            the corresponding currency.
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            ** Active Commission Ladder makes our services even
                            more cost effective. The higher the processing
                            volume*, the lesser the commission is applied
                            according to the ladder. Active ladder is comprised
                            of tiers which are calculated by volume* per
                            calendar month. For example the initial default
                            commission is set at 0.4% on all the incoming coin
                            deposits according to the first tier. Once the
                            deposits exceed $1 million, the processing
                            commission decreases to 0.35% and so on, as per the
                            ladder. In the beginning of the next month the
                            default commission is set again and the volume needs
                            to be calculated from the beginning.
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            The volume itself is comprised of all the deposits
                            and is calculated in USD at the moment of each
                            transaction confirmation by the blockchain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div
                    className="block__deposits__tabs__content__table active"
                    data-model="0"
                    data-license="0"
                  >
                    <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full flex-col lg:flex-row">
                      <div className="tab-content__item_table_title m-w-full mb-[32px] mt-[16px] w-full md:mr-[36px] md:max-w-[197px]">
                        <h5 className="text-[20px] font-semibold leading-[32px]">
                          Processing Fee**
                        </h5>
                      </div>
                      <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                        <div className="row-title pb-[8px] lg:border-b lg:border-[#ededed] lg:pb-[33px]">
                          <span className="text-[18px] font-semibold leading-[150%] text-gray-700 dark:text-blue-300">
                            For Coins, Stableсoins & Liquid Tokens
                          </span>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Outgoing Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="titles_row flex"></div>
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.025%
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.03%
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.035%
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.04%
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.045%
                                  </div>
                                </div>
                                <div className="cell md:pr-auto mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] pr-[25px] font-bold">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.05%
                                  </div>
                                </div>
                              </div>
                              <div className="line flex w-full max-w-[30%] flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    &gt; $ 20 mln
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 10 – 20 mln
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 5 – 10 mln
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 3 – 5 mln
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    $ 1 – 3 mln
                                  </div>
                                </div>
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    &lt; $ 1 mln
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-full py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300 md:max-w-[340px]">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Incoming Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    Free of Charge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300 lg:max-w-[340px]">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Settlement
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] font-bold leading-[155%] text-gray-700 dark:text-gray-300">
                                    Immediate
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full ">
                      <div className="tab-content__item_table_title hidden w-full max-w-full lg:mr-[36px] lg:block lg:max-w-[197px]"></div>
                      <div className="tab-content__item_table_body flex w-full max-w-full flex-col md:max-w-[1124px] ">
                        <div className="row-title border-b border-[#ededed] pb-[33px]">
                          <span className="text-[18px] font-semibold leading-[150%] text-gray-700 dark:text-blue-300">
                            For Illiquid Tokens
                          </span>
                        </div>
                        <div className="tab-content__item_table_body_row flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300 lg:max-w-[340px]">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Outgoing Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] leading-[155%]">
                                    0.15%
                                  </div>
                                </div>
                              </div>
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    No tiers
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300 lg:max-w-[340px]">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Incoming Transactions
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                  <div className="item text-[14px] leading-[155%] text-gray-700 dark:text-gray-300">
                                    Free of Charge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content__item_table_body_row uniq_table relative flex flex-wrap justify-between border-b border-[#ededed] lg:flex-nowrap">
                          <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-gray-800 dark:text-gray-300">
                            <span className="font-inter text-[18px] font-semibold leading-[150%]">
                              Settlement
                            </span>
                          </div>
                          <div className="colls flex w-full flex-col">
                            <div className="linews_row flex">
                              <div className="line flex w-full flex-col">
                                <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                  <div className="item text-[14px] font-bold leading-[155%] text-gray-700 dark:text-gray-300">
                                    Immediate
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content__item_table mb-[72px]">
                      <div className="tab-content__item_table_body mx-auto max-w-[800px] lg:ml-[197px]">
                        <div className="tab-content__item_table_body_descr">
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            ** Active Commission Ladder makes our services even
                            more cost effective. The higher the processing
                            volume*, the lesser the commission is applied
                            according to the ladder. Active ladder is comprised
                            of tiers which are calculated by volume* per
                            calendar month. For example the initial default
                            commission is set at 0.3% on all the incoming
                            deposits according to the first tier. Once the
                            transaction volume* exceeds $1 million, the
                            processing commission decreases to 0.25% and so on,
                            as per the ladder.In the beginning of the next month
                            the default commission is set again and the volume
                            needs to be calculated from the beginning.Please be
                            aware that blockchain aggregation fee for every
                            cryptocurrency is on the client side!
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            The volume itself is comprised of all the deposits
                            and is calculated in USD at the moment of each
                            transaction confirmation by the blockchain.
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            * Smart Token Collection (STC) For tokens based on
                            ERC20, Bep-20, TRC20 you are able to generate
                            unlimited number of deposit addresses. Whenever you
                            receive an incoming transaction on any of these
                            addresses the funds must be collected on the main
                            wallet address from which all the withdrawals are
                            done otherwise token balance will be spread among
                            multiple deposit addresses and you won’t be able to
                            do anything with them. The aggregation of tokens
                            requires payment of a blockchain fee in the parent
                            currency (ETH, BSC, TRX) making the whole process
                            cumbersome and ineffective. Luckily thanks to our
                            STC you don’t need to worry about depositing parent
                            currency on a deposit address. The aggregation fee
                            is paid from the Smart Contract that is deployed on
                            the main address during wallet activation. Thus you
                            don’t need to pay the blockchain fees twice and your
                            deposit addresses will have only token balances with
                            zero balance in parent coin. However you need to
                            keep an eye on parent currency balance you have on
                            your main wallet address.
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            Currencies like Ripple, Stellar etc. requires
                            activation fee for every newly created wallet
                            address.
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            STC – is our unique feature – Smart Contract that
                            generates deposit addresses (salt addresses) based
                            on the main wallet and automatically aggregates all
                            incoming deposits from deposit addresses to the main
                            wallet address where the Smart Contract is
                            installed.
                          </p>
                          <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                            We use the onboarding fee for wallet activation.
                            That includes setting up the Smart Contract for ETH,
                            BSC and TRX. Few other currencies (i.e. XRP, XLM and
                            BNB) require activation fee based on the blockchain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block_linksbox_section white_section pb-[70px] pt-0 md:pb-[150px]">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-col justify-start gap-9 lg:flex-row">
            <Link
              href="/available-currencies#currency_table_0"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Available Currencies for Digital Wallet Solution
              </h4>
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/available-currencies#currency_table_1"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Available Currencies for Blockchain Wallet Solution
              </h4>
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/minimum-deposits-withdrawals"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Minimum Deposits recommendations per currency
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
