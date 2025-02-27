import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="title-descr white_section pb-72px] pt-[32px] lg:py-40">
          <div className="container mx-auto px-4">
            <div className="title-descr__inner mx-auto max-w-2xl text-left">
              <h1 className="title-descr__title text-3xl font-semibold md:text-4xl">
                <span className="text-blue-600 dark:text-blue-300">
                  Coinsfish
                </span>{' '}
                is a crypto processing solution that enables you to Accept,
                Store, Receive, Send and Exchange crypto payments.
              </h1>
            </div>
          </div>
        </section>

        <section className="block__large-banner">
          <picture>
            <source srcSet="/Athletic.png.webp" type="image/webp" />
            <source srcSet="/Athletic.png" type="image/png" />
            <img
              className="lazy"
              decoding="async"
              loading="lazy"
              fetchPriority="low"
              src="/Athletic.png"
              alt="Athletic"
              title="Athletic"
            />
          </picture>
        </section>

        <section className="new-standard white_section pb-72px] pt-[32px] lg:py-40">
          <div className="container mx-auto px-4">
            <div className="new-standard__inner flex max-w-7xl flex-wrap justify-between lg:flex-nowrap">
              <div className="new-standard__box mb-8">
                <span className="new-standard__subtitle text-base font-medium text-blue-600 dark:text-blue-300">
                  Our main goal
                </span>
                <h2 className="new-standard__title mt-2 text-3xl font-semibold md:text-4xl">
                  The New Standard in Crypto Processing
                </h2>
              </div>
              <div className="new-standard__box lg:w-1/2">
                <div className="new-standard__descr text-lg">
                  <p className="mb-4 text-slate-500 dark:text-slate-300">
                    Coinsfish is designed to fulfill all the crypto needs of
                    Merchant Digital Wallet and Enterprise Blockchain Wallet
                    clients with a range of benefits that are not available with
                    traditional payment methods, such as low processing fees,
                    real-time balance/transaction history, downloadable reports,
                    secure checkout and much more.
                  </p>
                  <p className="text-slate-500 dark:text-slate-300">
                    Our ecosystem has everything you need for managing your
                    Digital Assets!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
