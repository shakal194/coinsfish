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

const MinimumDepositsWithdrawals = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number, hash: string) => {
    setActiveTab(tabIndex);

    window.history.pushState(null, '', hash);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#pricing_model_1') {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, []);

  return (
    <>
      <Header />
      <section className="block__crypto-table white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
        <div className="container mx-auto px-4">
          <div className="block__crypto-table__heading mb-8 lg:text-center">
            <h1 className="text-3xl font-semibold">
              Minimum Deposits & Withdrawals
            </h1>
          </div>
          <div className="block__crypto-table__tabs mb-[72px]">
            <div className="block__crypto-table__tabs__header mb-20 flex cursor-pointer">
              <div
                className={`block__crypto-table__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[14px_20px] text-[12px] font-normal leading-[20px] text-gray-400 no-underline transition ease-out md:p-[20px_32px] md:text-[18px] md:leading-[22px] ${activeTab === 0 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-gray-700 dark:text-blue-300' : ''}`}
                data-model="0"
                onClick={() => handleTabClick(0, '#pricing_model_0')}
                id="pricing_model_0"
              >
                Merchant Digital Wallets
              </div>
              <div
                className={`block__crypto-table__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[14px_20px] text-[12px] font-normal leading-[20px] text-gray-400 no-underline transition ease-out md:p-[20px_32px] md:text-[18px] md:leading-[22px] ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-gray-700 dark:text-blue-300' : ''}`}
                data-model="1"
                onClick={() => handleTabClick(1, '#pricing_model_1')}
                id="pricing_model_1"
              >
                Enterprise Blockchain Wallets
              </div>
            </div>
            <div className="block__crypto-table__tabs__content">
              {activeTab === 0 && (
                <div
                  className="block__crypto-table__tabs__content__table active"
                  data-model="0"
                  data-license="0"
                >
                  <div className="mb-14 flex w-full max-w-full flex-col lg:flex-197px lg:flex-row">
                    <h4 className="flex w-full justify-between text-xl font-semibold md:max-w-[197px] lg:pr-[36px]">
                      Coins
                      <span className="mobile__text flex items-center text-[14px] text-gray-400 md:hidden">
                        Swipe <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                      </span>
                    </h4>
                    <div className="crypto_table_main flex w-full max-w-full flex-col">
                      <div className="block__crypto-table__tabs__content__table__group__rows">
                        <div className="block__crypto-table__tabs__content__table__group__rows_scroller overflow-x-auto scrollbar-hide lg:overflow-x-hidden">
                          <div className="row first_row flex w-[760px] flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus mr-5 max-w-[26px] flex-81px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              №
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Name
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Blockchain
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Deposit / Payout, min*
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Default** сonfirmations, min
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Message, for Payout
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus m-0 mr-5 flex max-w-[26px] flex-81px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              1
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap  justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/bitcoin_dashboard.svg"
                                alt="btc"
                                className="mr-5 h-[17px] w-[17px]"
                              />
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              0.0001
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              -
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap justify-start border-b border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus m-0 mr-5 flex max-w-[26px] flex-81px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              2
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/etherium_dashboard.svg"
                                alt="eth"
                                className="mr-5 h-[17px] w-[17px]"
                              />
                              Ethereum
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              Ethereum
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              0.002
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              -
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap justify-start border-b border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus m-0 mr-5 flex max-w-[26px] flex-81px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/tether_dashboard.svg"
                                alt="usdt"
                                className="mr-5 h-[17px] w-[17px]"
                              />
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              0.0002
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              -
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
                  className="block__crypto-table__tabs__content__table active"
                  data-model="1"
                  data-license="1"
                >
                  <div className="md: mb-14 flex w-full max-w-full flex-col overflow-x-auto scrollbar-hide lg:flex-197px lg:flex-row lg:overflow-x-hidden">
                    <h4 className="flex w-full justify-between text-xl font-semibold md:max-w-[197px] lg:pr-[36px]">
                      Coins
                      <span className="mobile__text flex items-center text-[14px] text-gray-400 md:hidden">
                        Swipe <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                      </span>
                    </h4>
                    <div className="crypto_table_main flex w-full max-w-full flex-col">
                      <div className="block__crypto-table__tabs__content__table__group__rows">
                        <div className="block__crypto-table__tabs__content__table__group__rows_scroller">
                          <div className="row first_row flex w-[760px] flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus mr-5 max-w-[26px] flex-81px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              №
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Name
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Blockchain
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Deposit / Payout, min*
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Default** сonfirmations, min
                            </div>
                            <div className="row__col octopus mr-5 flex-100px flex-col justify-start gap-2 text-xs font-normal leading-5 leading-[18px] text-gray-400 md:flex-[0_1_144px]">
                              Message, for Payout
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus m-0 mr-5 flex max-w-[26px] flex-81px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              1
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap  justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/bitcoin_dashboard.svg"
                                alt="btc"
                                className="mr-5 h-[17px] w-[17px]"
                              />
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              0.0001
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              -
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus m-0 mr-5 flex max-w-[26px] flex-81px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              2
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap  justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/etherium_dashboard.svg"
                                alt="eth"
                                className="mr-5 h-[17px] w-[17px]"
                              />
                              Ethereum
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              Ethereum
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              0.002
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              -
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-[760px] flex-nowrap items-center justify-start border-b border-[#ededed] pb-3 pt-3 md:w-[1124px] md:max-w-full">
                            <div className="row__col octopus m-0 mr-5 flex max-w-[26px] flex-81px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap  justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width={0}
                                height={0}
                                src="/svg/tether_dashboard.svg"
                                alt="usdt"
                                className="mr-5 h-[17px] w-[17px]"
                              />
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              0.0002
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-100px flex-nowrap justify-start text-xs leading-5 md:flex-[0_1_144px]">
                              -
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
          <div className="crypto-table__tables__table mb-[72px]">
            <div className="crypto-table__tables__table__text__wrap mx-auto max-w-[800px] lg:ml-[197px]">
              <div className="crypto-table__tables__table__text">
                <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                  Any deposit or payout sent by mistake on another blockchain or
                  to an incompatible address may result in the loss of funds
                  forever. If a deposit is made to the address of the smart
                  contract, then these funds cannot be returned, even for a fee.
                  When withdrawing funds sent by mistake to a deposit of another
                  blockchain, our fee can be $100 for coins and from $200 for
                  tokens.
                </p>
                <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                  * Unlike the Blockchain Wallet model, you cannot change the
                  standard values of the amounts for deposits and payouts. If an
                  amount less than this value is sent to the deposit, then such
                  a deposit will not be taken into account.
                </p>
                <p className="mb-4 text-[12px] text-gray-400 dark:text-gray-300">
                  ** For each deposit or payout, you can specify the individual
                  number of confirmations, upon reaching which the callback will
                  be sent to the URL if it was specified when creating the
                  request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block_linksbox_section white_section pb-[70px] pt-0 md:pb-[150px]">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-col justify-start gap-9 lg:flex-row">
            <Link
              href="/available-currencies"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Available Сurrencies
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
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
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
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
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

export default MinimumDepositsWithdrawals;
