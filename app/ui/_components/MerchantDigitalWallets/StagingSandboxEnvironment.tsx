import Link from 'next/link';
import {
  ArrowLongRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const StagingSandboxEnvironment = () => {
  return (
    <section className="block_box_with_list right_down white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_box_with_list_row flex flex-col justify-between md:flex-row">
          <div className="block_box_with_list_row_left w-full md:max-w-[45%]">
            <div className="section_top_parth">
              <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                Staging / Sandbox Environment for your integration
              </h2>
              <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
                Testing is a major part of the Coinsfish integration process
                which helps eliminate any potential problems before going live.
              </p>
            </div>
          </div>
          <div className="block_box_with_list_row_right flex w-full flex-col gap-4 pt-[32px] md:max-w-[50%]">
            <div className="block_box_with_list_row_right_top flex flex-col justify-between lg:flex-row">
              <div className="block_box_with_list_row_right_top_left mb-[40px]">
                <h3 className="mb-[4px] text-[24px] font-semibold leading-[36px] text-gray-700 dark:text-gray-300">
                  Sandbox
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-[22.5px] text-gray-700 dark:text-gray-300">
                  Get quick access to our solutions.
                </p>
              </div>
              <div className="block_box_with_list_row_right_top_right mb-[32px]">
                <Link
                  className="flex w-full max-w-full items-center justify-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/registration"
                >
                  Register &amp; Try
                  <ArrowRightIcon className="w-5" />
                </Link>
              </div>
            </div>
            <div className="block_box_with_list_row_right_item flex items-center gap-2">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-base">
                Our solution comes with a staging environment for all your
                testing needs.
              </p>
            </div>
            <div className="block_box_with_list_row_right_item flex items-center gap-2">
              <ArrowLongRightIcon className="w-10 text-blue-500" />
              <p className="ml-[15px] text-base">
                Test any new integrations or functionality on a staging
                environment before publishing the changes to a production one.
              </p>
            </div>
            <div className="block_box_with_list_row_right_item flex items-center gap-2">
              <ArrowLongRightIcon className="w-10 text-blue-500" />
              <p className="ml-[15px] text-base">
                Test any financial operations on a staging environment before
                doing them on production with real financial instruments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagingSandboxEnvironment;
