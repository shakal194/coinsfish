import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const TechnicalSupportAndAvailability = () => {
  return (
    <section className="block_technical_support white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_technical_support_row flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="block_technical_support_row_left w-full lg:max-w-[45%]">
            <div className="section_top_parth mb-[40px] w-full max-w-[580px]">
              <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                Technical Support and Availability
              </h2>
              <p className="section_top_parth_description mb-2 text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
                Our professional customer service team is always available to
                help with any queries. Feel free to get in touch.
              </p>
            </div>
            <Link
              className="b2b_link tangerine_link group flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="/registration"
            >
              Get Support
              <ChevronRightIcon className="ml-2 h-4 w-4 transform text-blue-600 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="block_technical_support_row_right w-full text-[60px] font-semibold leading-[75px] text-blue-700 lg:max-w-[45%] lg:text-[94px] lg:leading-[135px]">
            <p>24/7/365</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupportAndAvailability;
