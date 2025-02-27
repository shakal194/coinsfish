import Image from 'next/image';

const PerfectlyWorks = () => {
  return (
    <section className="block_scheme_list white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <h2 className="mb-4 text-4xl font-bold">Perfectly works with</h2>
        <div className="block_scheme_list_items -mx-4 mb-[89px] flex flex-col justify-between md:flex-row md:flex-wrap md:justify-start">
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300 dark:before:bg-blue-300">
            Forex &amp; Crypto Brokers
          </p>
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300">
            Marketplaces
          </p>
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300">
            Service Providers
          </p>
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300">
            Gaming
          </p>
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300">
            Regulated Gambling
          </p>
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300">
            Consulting
          </p>
          <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4] dark:before:bg-blue-300">
            E-commerce
          </p>
        </div>
        <div className="svg_scheme flex justify-center">
          <div className="svg_scheme_container resize-v2-wrapper">
            <Image
              className="lazy resize-v2 w-full max-w-full"
              decoding="async"
              loading="lazy"
              priority={false}
              sizes="100vw"
              src="/svg/Perfectly-works-with_merchants-1.svg"
              alt="Perfectly works with merchants"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectlyWorks;
