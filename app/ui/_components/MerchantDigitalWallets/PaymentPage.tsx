import Image from 'next/image';
import CryptocurrencyPaymentPage from '@/app/ui/_data/MerchantDigitalWallets/CryptocurrencyPaymentPage.json';

const PaymentPage = () => {
  return (
    <section className="block_box_opacity white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_box_opacity_row flex w-full max-w-full flex-col justify-between lg:flex-row">
          <div className="block_box_opacity_row_left w-full p-4 lg:max-w-[45%]">
            <div className="section_top_parth mb-[56px] w-full max-w-[580px] md:mb-[90px]">
              <h2 className="mb-4 text-[36px] font-semibold leading-[48px] dark:text-slate-100">
                Payment Page
              </h2>
              <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-gray-700 dark:text-gray-300">
                A highly-responsive payment page with live data. All you need is
                at your fingertips to create and send your customers detailed
                invoices.
              </p>
            </div>
            <div className="block_box_opacity_row_inner flex hidden w-full max-w-full flex-row flex-wrap justify-between lg:flex">
              {CryptocurrencyPaymentPage.map((item) => (
                <div
                  key={item.id}
                  className="block_box_opacity_row_box group relative mb-[72px] w-full max-w-[45%] cursor-pointer border-t-[1px] border-[#f0f0f0] opacity-80 transition-all delay-300 duration-300 ease-in-out hover:border-[#204bdb] hover:opacity-100 dark:border-slate-100"
                >
                  <h4 className="mb-2 mt-[25px] text-[18px] font-semibold leading-[27px] text-gray-700 dark:text-gray-300">
                    {item.title}
                  </h4>
                  <p className="text-[15px] font-normal leading-[24px] text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="block_box_opacity_row_right relative w-full p-4 lg:max-h-[779px] lg:max-w-[48.7%]">
            <div className="block_box_opacity_row_right_item full_image opacity-100">
              <Image
                src="/Currency-Selection-662x800.png"
                alt="Currency Selection"
                title="Currency Selection"
                width={662}
                height={800}
                className="rounded-md"
                sizes="(max-width: 414px) 414px, (max-width: 662px) 662px, (max-width: 828px) 828px, (max-width: 1242px) 1242px, (max-width: 1272px) 1272px"
              />
            </div>
          </div>
          <div className="block_box_opacity_row_inner flex w-full max-w-full flex-col flex-wrap items-center lg:hidden">
            {CryptocurrencyPaymentPage.map((item) => (
              <div
                key={item.id}
                className="block_box_opacity_row_box group relative mb-[72px] w-full cursor-pointer border-t-[1px] border-[#f0f0f0] opacity-80 transition-all delay-300 duration-300 ease-in-out hover:border-[#204bdb] hover:opacity-100 dark:border-slate-200 dark:focus:border-slate-200"
              >
                <h4 className="mb-2 mt-[25px] text-[18px] font-semibold leading-[27px] text-gray-700 dark:text-gray-300">
                  {item.title}
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
