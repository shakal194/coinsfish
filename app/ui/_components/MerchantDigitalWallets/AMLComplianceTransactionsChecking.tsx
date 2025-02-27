'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

const AMLComplianceTransactionsChecking = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="block_box_with_tabs white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_box_with_tabs_row align-center flex w-full max-w-full flex-col justify-between md:flex-row">
          <div className="block_box_with_tabs_row_left w-full md:max-w-[45%]">
            <div className="section_top_parth mb-12 w-full max-w-[580px]">
              <h2 className="mb-8 text-3xl font-semibold leading-[48px]">
                AML/Compliance transactions checking
              </h2>
              <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
                KYT compliance technology makes sure your business ticks all the
                boxes when it comes to&nbsp;anti-money laundering requirements.
              </p>
              <p className="section_top_parth_description mt-4 text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
                Comprehensive data-centric information relating to transactions
                helps crypto businesses adhere to both local and global
                regulations.
              </p>
            </div>
          </div>
          <div className="block_box_with_tabs_row_right w-full md:max-w-[45%]">
            <div className="block_box_with_tabs_row_right_tab_head box-tabs-body-js relative mb-[51px] flex border-b border-gray-300 pb-4 pt-4">
              <div
                className={`tab relative flex w-full max-w-[50%] cursor-pointer items-center justify-center px-1 text-base font-medium leading-[25px] text-gray-800 opacity-100 transition duration-400 ease-in-out dark:text-gray-400 ${activeTab === 1 ? 'active content-none after:absolute after:-bottom-[17px] after:left-0 after:w-full after:max-w-full after:-translate-y-1/2 after:transform after:border-b after:border-[#ee0064]' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                <XMarkIcon className="mr-[13px] w-5 text-pink-400" />
                <p className="">Suspicious Transaction</p>{' '}
              </div>
              <div
                className={`tab relative flex w-full max-w-[50%] cursor-pointer items-center justify-center px-1 text-base font-medium leading-[25px] text-gray-800 opacity-100 transition duration-400 ease-in-out dark:text-gray-400 ${activeTab === 2 ? 'active content-none after:absolute after:-bottom-[17px] after:left-0 after:w-full after:max-w-full after:-translate-y-1/2 after:transform after:border-b after:border-[#00b790] dark:after:border-[#05edbc]' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                <CheckIcon className="mr-[13px] w-5 text-teal-400" />

                <p className="">Approved Transaction</p>
              </div>
            </div>
            <div className="block_box_with_tabs_row_right_tab_body">
              <div
                className={`tab-content ${activeTab === 1 ? 'active' : 'hidden'}`}
              >
                <div className="svg_scheme">
                  <div className="svg_scheme_container resize-v2-wrapper">
                    <Image
                      className="lazy resize-v2 w-full"
                      decoding="async"
                      loading="lazy"
                      src="/svg/Merchants-Suspicious-Transaction-1.svg"
                      alt="Merchants Suspicious Transaction"
                      width={0}
                      height={0}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`tab-content ${activeTab === 2 ? 'active' : 'hidden'}`}
              >
                <div className="svg_scheme">
                  <div className="svg_scheme_container resize-v2-wrapper">
                    <Image
                      className="lazy resize-v2 w-full"
                      decoding="async"
                      loading="lazy"
                      src="/svg/Enterprise-Approved-Transaction-1.svg"
                      alt="Enterprise Approved Transaction"
                      width={0}
                      height={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMLComplianceTransactionsChecking;
