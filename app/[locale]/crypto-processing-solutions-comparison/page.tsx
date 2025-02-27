import Image from 'next/image';
import Link from 'next/link';
import {
  CheckIcon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';

import React from 'react';

const CompareSection: React.FC = () => {
  return (
    <>
      <Header />
      <section className="block_compar ewhite_section pb-72px] pt-[32px] lg:py-40">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block_compare_top mb-[52px] flex flex-col items-start lg:mb-[90px] lg:mt-8 lg:flex-row lg:items-center">
            <h2 className="mb-0 mr-[48px] text-[38px] font-semibold leading-[48px]">
              Compare our Solutions
            </h2>
            <div className="block_compare_top_right mt-4 flex gap-[16px]">
              <p className="block_compare_top_right_info">Get help choosing.</p>
              <Link
                className="b2b_link group flex items-center text-blue-600 dark:text-blue-400"
                href="/contact-us/"
              >
                Contact a Specialist
                <ChevronRightIcon className="ml-2 h-4 w-4 transform text-blue-600 transition-transform duration-300 ease-in-out group-hover:translate-x-2 dark:text-blue-400" />
              </Link>
            </div>
          </div>
          <div className="block_compare_head flex w-full max-w-full pb-[8px] md:pb-[20px]">
            <div className="block_compare_head_items block_compare_head_item-1 w-full max-w-[122px] pl-0 text-[10px] font-normal leading-[16px] md:max-w-[232px] md:pl-[10px] md:text-[13px] md:leading-[16px] lg:text-[16px] lg:leading-[24px]">
              <p>Features</p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-2 hidden w-full max-w-[276px] pl-0 text-[10px] font-normal leading-[16px] md:block md:leading-[24px] lg:pl-[10px] lg:text-[16px]">
              <p> </p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-3 w-full max-w-[57px] pl-0 text-center text-[10px] font-normal leading-[16px] md:max-w-[57px] md:max-w-[70px] md:pl-[10px] md:text-[13px] md:leading-[16px] lg:max-w-[152px] lg:text-[16px] lg:leading-[24px]">
              <p>Merchant Wallet</p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-4 w-full max-w-[57px] pl-0 text-center text-[10px] font-normal leading-[16px] md:pl-[10px] md:text-[13px] md:leading-[16px] lg:max-w-[152px] lg:text-[16px] lg:leading-[24px]">
              <p>Enterprise Wallet</p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-5 w-full max-w-full pl-0 text-[10px] font-normal leading-[16px] md:pl-[10px] md:text-[13px] md:leading-[16px] lg:text-[16px] lg:leading-[24px]">
              <p className="pl-[9px] md:pl-[15px] lg:pl-0">Comments</p>
            </div>
          </div>
          <div className="block_compare_table pl-0 md:pl-[10px]">
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Client Type
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Personal
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Account Type for individuals
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[12px] lg:py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Business
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Corporate Account Type
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Models
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Crypto/Crypto
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Crypto exchanged to crypto model
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Settlements
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Crypto
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Settlement currency – crypto: coin, stableсoin or token
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Cryptocurrencies
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Coins
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Major Coins available on the market today{' '}
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Stablecoins
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Major Stablecoins available on the market today
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Tokens
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Major tokens taken by Capitalisation, Trading Volume,
                      number of Transactions & more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Smart Token Collection
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Tokens Smart Funds Collection system
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      STC system used to collect tokens from deposit addresses
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Coins Smart Funds Collection system
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      STC system used to collect coins from deposit addresses
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Services
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Accept
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Accept сryptoсurrency payments
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Send
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Send сryptoсurrency payments
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Hold
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Save/Hold сryptoсurrency
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Exchange
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Instant exchange сryptoсurrency of deposits/payouts
                      to/from the wallet
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      On-Chain Exchange
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Actual exchange, two blockchain transfers (send and
                      receive) involved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Payouts
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Automatic payouts
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Automatic payouts using API
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Payouts with Approval
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Payouts that should be triggered only after approval
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Payouts Custom Speed
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Fast, Medium, Low & Custom speed configurable payouts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Features
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Multilingual Interface
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      System interface translated into multiple languages
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Role-Based System Access
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      System access based on roles/groups
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Detailed statistics & Reports
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Detailed transactions statistics & downloadable reports in
                      XLSX or CSV formats
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Custom Minimum Transfer Amount
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Ability to set minimum accepted/collected amount per
                      currency
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Email Wallets Events Notifications
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Email notifications in regards to deposits or payouts
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Wallets Access Rights
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Role-based access per wallet
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Real-time exchange rates
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Exchange rates in real-time using api or directly from
                      admin area
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Dark & Light Themes
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Dark or light admin theme switch
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Alerts system
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      System Alerts
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Address Book
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Address Book for saving addresses for later use
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Custom Labels
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Ability to set custom labels per wallet, per currency
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Direct Wallet Deposits
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Direct depositing option into the wallet to avoid creating
                      invoices
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Tracking IDs
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Tracking IDs to identify payer
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Customised number of confirmations
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Ability set custom number of confirmations to trigger
                      callbacks
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Customised minimum deposit amount
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Ability set custom amount for deposits
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Customised Callbacks
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Callback URLs with additional parameters
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Release notes & updates
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Latest updates & releases feed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Security
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      2FA
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Two Factor Authentication option
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      DDos Protection
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Protection against DDos attacks
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Notification System
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Events/Notification system when some action needed to be
                      taken
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Wallet activity monitoring
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Operation list history under the wallet
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Authorisation logging
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Authorisation logging list
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      AML/KYT
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Know Your Transaction check to identify fraudulent
                      transactions
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Secure fund storage
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Secure crypto storage/cold storage
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Security Patches & Updates
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Frequent nodes updates and monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Invoices
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Coinsfish Payment Page/Invoice
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Invoice generated on Coinsfish side
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Custom Payment Page/Invoice
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Invoice generated on client’s side
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Real-time transaction monitor
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Real-time check for transactions statuses
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Select payment currency from the list
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Possibility to select payment currencies on the Coinsfish
                      payment page
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Integration
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      API
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Feature-reach API
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Guides & Documentation
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Guides on how the system works, integration examples
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Full white-label integration
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Integration made on client side without even showing
                      Coinsfish branding
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Sandbox Account
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <XMarkIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Test account to play with before going live
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full flex-col border-t border-[#ecedf2] pt-[20px] md:flex-row">
              <div className="block_compare_table_title mb-[16px] w-full max-w-full md:max-w-[232px] lg:mb-0">
                <h4 className="m-0 text-base font-medium leading-6 text-gray-800 dark:text-gray-300">
                  Support
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start  pb-[12px] lg:pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      24/7 Technical Support
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Technical support available 24/7
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-t border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[122px] md:max-w-[276px]">
                    <p className="text-[14px] font-normal leading-6 text-gray-700 dark:text-gray-300 md:text-base lg:pl-4">
                      Personal Account Manager
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[57px] justify-center  md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[57px] justify-center md:max-w-[70px] lg:max-w-[152px]">
                    <CheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-[9px] text-[12px] font-normal leading-[21px] text-gray-700 dark:text-gray-300 md:pl-[15px] md:text-sm lg:pl-4">
                      Personal account manager who will guide you through all
                      the processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block_linksbox_section white_section pb-[70px] pt-0 md:pb-[150px]">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-col justify-start gap-9 lg:flex-row lg:justify-center">
            <Link
              href="/available-currencies"
              className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Available Currencies
              </h4>
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-[12px] text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200 md:text-sm">
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
              <p className="b2b_link mb-0 mt-6 flex transform items-center text-[12px] text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200 md:text-sm">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareSection;
