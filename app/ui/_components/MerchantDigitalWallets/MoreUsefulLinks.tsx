import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const MoreUsefulLinks = () => {
  return (
    <section className="block_linksbox_section white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <h2 className="mb-[84px] text-[36px] font-bold leading-[48px]">
          More useful links
        </h2>
        <div className="block_linksbox block_linksbox_alignstart flex w-full flex-col flex-wrap justify-start gap-9 md:flex-row">
          <Link
            href="/available-currencies"
            className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
          >
            <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
              Available Currencies
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
            href="/minimum-deposits-withdrawals"
            className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-800 lg:max-w-33%"
          >
            <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
              Minimum Deposits
            </h4>
            <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-gray-400 transition-all delay-200 duration-300 ease-in-out group-hover:text-gray-700 dark:text-blue-300 dark:group-hover:text-blue-200">
              Explore
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreUsefulLinks;
