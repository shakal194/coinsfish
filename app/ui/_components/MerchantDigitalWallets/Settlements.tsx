import Image from 'next/image';

const Settlements = () => {
  return (
    <section className="block_scheme white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full w-full max-w-[1356px] px-4">
        <div className="section_top_parth mb-[56px] w-full max-w-[580px] md:mb-[90px]">
          <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
            Settlements
          </h2>
          <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-gray-700 dark:text-gray-300">
            We provide secure settlement options and statements in all the main
            cryptocurrencies and stablecoins.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full w-full max-w-[1356px] px-4">
        <div className="svg_scheme">
          <div className="svg_scheme_container resize-v2-wrapper">
            <Image
              className="lazy resize-v2 w-full max-w-full"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Avaliable-Settlements.svg"
              alt="Avaliable Settlements"
              title="Avaliable Settlements"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settlements;
