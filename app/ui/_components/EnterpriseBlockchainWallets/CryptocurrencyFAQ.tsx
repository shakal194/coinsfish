'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import features from '@/app/ui/_data/EnterpriseBlockchainWallets/CryptocurrencyFAQ.json';

const CryptocurrencyFAQ = () => {
  return (
    <section className="block_sticky white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="section_top_parth mb-[56px] w-full max-w-[580px] md:mb-[90px]">
          <h2 className="mb-8 text-[36px] font-bold leading-[48px]">FAQs</h2>
          <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
            Have a question? An encyclopedia of useful information regarding our
            products and services.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_faq_row">
          <div className="mr-9 w-full hyphens-auto text-[24px] font-semibold leading-[36px]">
            {features.map((feature) => {
              const parts = feature.answer.split(
                /(<a href='\/fees-pricing\/'>here<\/a>)/g,
              );
              return (
                <div
                  key={feature.id}
                  data-number-faq={feature.id}
                  className="block_sticky_main_boxes_single js-sticky-trigger-secure-and-safe relative flex flex-col justify-between pb-[72px] pt-[24px] before:absolute before:top-0 before:h-[1px] before:w-full before:max-w-full before:bg-[#204bdb] before:content-[''] md:flex-row"
                >
                  <div className="block_faq_row_question mb-[16px] text-[22px] leading-[33px] md:mb-0 md:max-w-[47%] md:text-[24px] md:leading-[36px]">
                    <p>{feature.question}</p>
                  </div>
                  <div className="block_faq_row_answer flex w-full text-[15px] font-normal leading-[24px] tracking-normal text-gray-700 dark:text-gray-300 md:max-w-[47%]">
                    <p>
                      {parts.map((part, index) =>
                        part === "<a href='/fees-pricing/'>here</a>" ? (
                          <Link
                            key={index}
                            href="/fees-pricing"
                            className="border-b transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-blue-700 hover:text-blue-700"
                          >
                            here
                          </Link>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                    <div className="mobile_zone"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptocurrencyFAQ;
