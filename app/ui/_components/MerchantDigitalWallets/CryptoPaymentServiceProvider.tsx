import dataSliderCryptoPaymentServiceProvider from '@/app/ui/_data/MerchantDigitalWallets/SliderCryptoPaymentServiceProvider.json';
import SliderCryptoPaymentServiceProvider from '@/app/ui/_components/MerchantDigitalWallets/SliderCryptoPaymentServiceProvider';

const CryptoPaymentServiceProvider = () => {
  return (
    <section className="block_textbox_slider white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full w-full max-w-[1356px] px-4">
        <div className="section_top_parth mb-[56px] w-full max-w-[580px] md:mb-[90px]">
          <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
            Crypto Payment Service Provider
          </h2>
          <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-gray-700 dark:text-gray-300">
            Send, Receive, Store, Exchange and Accept cryptocurrencies
            in&nbsp;minutes with an industry-leading payments provider.
          </p>
        </div>
      </div>
      <SliderCryptoPaymentServiceProvider
        data={dataSliderCryptoPaymentServiceProvider}
      />
    </section>
  );
};

export default CryptoPaymentServiceProvider;
