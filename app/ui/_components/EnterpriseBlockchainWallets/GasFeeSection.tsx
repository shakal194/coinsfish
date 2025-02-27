import Image from 'next/image';

const GasFeeSection = () => {
  return (
    <section className="block_sticky white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_box_with_list_row flex flex-wrap items-center justify-between">
          <div className="block_box_with_list_row_left w-full md:w-1/2">
            <div className="section_top_parth mb-[56px] w-full max-w-[580px] md:mb-[90px]">
              <h2 className="mb-8 text-[34px] font-bold leading-[44px] md:text-[36px] md:leading-[48px]">
                – 50% of gas fee
              </h2>
              <p className="section_top_parth_description text-[20px] text-base font-normal leading-6 leading-[30px] text-gray-700 dark:text-gray-400 md:text-[24px] md:leading-[36px]">
                <span className="uniq_text mb-8 block font-normal  text-gray-700 dark:text-gray-400">
                  Smart Token Collection <b>decreases commission</b> and{' '}
                  <b>increases transaction speed</b>. Therefore,{' '}
                  <b>commission is paid only once</b>.
                </span>
              </p>
              <hr className="my-4 border border-solid border-[#204bdb]" />
              <p className="mt-8 text-[20px] text-base font-normal leading-6 leading-[30px] text-gray-700 dark:text-gray-400 md:text-[24px] md:leading-[36px]">
                The commission in ETH, BNB (BSC), TRX, ERC20, BEP20 and TRC20
                tokens is debited from the global wallet.
              </p>
            </div>
          </div>
          <div className="block_box_with_list_row_right w-full md:max-w-[45%]">
            <div className="svg_scheme">
              <div className="svg_scheme_container resize-v2-wrapper relative w-full">
                <Image
                  className="lazy resize-v2 w-full max-w-full"
                  decoding="async"
                  loading="lazy"
                  src="/svg/–-50-of-gas-fee.png"
                  alt="– 50% of gas fee"
                  title="– 50% of gas fee"
                  width={560}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GasFeeSection;
