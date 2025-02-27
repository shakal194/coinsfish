import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const FullyCompliant = () => {
  return (
    <section className="pb-72px] flex w-full max-w-full flex-col pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_box_with_list_row align-center flex flex-col justify-between md:flex-row">
          <div className="block_box_with_list_row_left w-full md:max-w-[45%]">
            <div className="section_top_parth mb-12 w-full max-w-[580px]">
              <h2 className="mb-8 text-3xl font-semibold leading-[48px]">
                Fully Compliant with Your Regulator!
              </h2>
              <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
                Stay compliant by tracking the legitimacy of your crypto funds.
                Crypto analytics enhance due diligence and AML compliance
                procedures for every business dealing in cryptocurrency.
              </p>
            </div>
            <div className="block_box_with_list_row_left_images mt-12">
              <h5 className="mb-6 text-base font-medium leading-[25px] text-gray-500 dark:text-gray-300">
                Integrated with:
              </h5>
              <div className="align-center mb-[58px] flex gap-[28px] md:mb-0">
                <Image
                  className="lazy w-[178px]"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Chainalysis-logo-1.svg"
                  alt="Chainalysis-logo 1"
                  title="Chainalysis-logo 1"
                />
                <Image
                  className="lazy w-[178px]"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Group-48095601.svg"
                  alt="Group 48095601"
                  title="Group 48095601"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[50%]">
            <div className="mb-[26px] flex items-center">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                Сomply with CTF regulations
              </p>
            </div>
            <div className="mb-[26px] flex items-center">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                In-depth case by case investigations
              </p>
            </div>
            <div className="mb-[26px] flex items-center">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                Monitor and control over risky transactions
              </p>
            </div>
            <div className="mb-[26px] flex items-center">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                Identify high-risk activities automatically
              </p>
            </div>
            <div className="mb-[26px] flex items-center">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                Identify all criminal activity on the blockchain
              </p>
            </div>
            <div className="mb-[26px] flex items-center">
              <ArrowLongRightIcon className="w-7 text-blue-500" />
              <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                Track ransomware payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullyCompliant;
