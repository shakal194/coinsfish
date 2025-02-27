import Image from 'next/image';
import useCasesEnterpriseBlockchainWallets from '@/app/ui/_data/EnterpriseBlockchainWallets/CryptoWalletsTailored.json';

const CryptoWalletsTailored = () => {
  return (
    <section className="block_business_model white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="section_top_parth mb-[56px] w-full max-w-[580px] md:mb-[90px]">
          <h2 className="mb-8 text-4xl font-bold">
            Crypto Wallets Tailored for Each Type of Business
          </h2>
          <p className="section_top_parth_description">
            Set up, configure and use cryptocurrency wallets for your business
            with ease. Our crypto wallets are easy to customise. We cover
            different types of businesses including Forex/Crypto brokers,
            Exchanges and Token issuers.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        {useCasesEnterpriseBlockchainWallets.map((useCase, index) => (
          <div
            key={index}
            className={`use-cases__row row-use-cases flex-start relative mb-8 flex flex-wrap before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-[#ddd] before:content-[''] ${index !== useCasesEnterpriseBlockchainWallets.length - 1 ? 'pb-4' : ''}`}
          >
            <div className="row-use-cases__list flex flex-[74.5%] flex-wrap items-start justify-between gap-4">
              {useCase.items.map((item, idx) => (
                <div
                  key={idx}
                  className="row-use-cases__item visible flex scale-100 flex-col gap-[20px] p-4 opacity-100 transition duration-1000 md:flex-50% md:pb-8 md:pt-6 lg:flex-33% lg:flex-wrap lg:items-center"
                >
                  <div className="icon mb-[24px]">
                    <Image
                      className="lazy h-[50px] w-[50px]"
                      decoding="async"
                      loading="lazy"
                      fetchPriority="low"
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="title mb-2 text-lg font-semibold leading-[1.5] text-gray-700 dark:text-gray-300">
                    {item.title}
                  </div>
                  <div className="text text-sm leading-[1.6] text-gray-700 dark:text-gray-300">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoWalletsTailored;
