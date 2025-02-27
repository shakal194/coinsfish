import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="block_contact_us pb-72px] pt-[32px] lg:py-40">
        <div className="container mx-auto px-4">
          <div className="block_contact_us__inner flex flex-wrap md:gap-[36px] lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-y-9">
            <div className="block_contact_us__inner__left flex-100 lg:mb-0 lg:mb-8 lg:w-1/2 lg:flex-38">
              <h1 className="mb-4 text-2xl font-semibold md:text-4xl">
                Have specific questions, or&nbsp;want a&nbsp;guided tour of our
                services?
              </h1>
              <p className="text-lg">Contact us for more information.</p>
            </div>
            <div className="block_contact_us__inner__right flex flex-wrap md:flex-100 md:gap-4 lg:flex-62%">
              <div className="block_contact_us__inner__right__box flex flex-100 flex-col justify-center p-[32px] md:mb-8 md:flex-50% md:gap-4">
                <p className="mb-2 text-center text-lg">Reach out through</p>
                <a
                  href="mailto:sales@Coinsfish.com"
                  className="mb-2 block text-center text-gray-600 dark:text-gray-300"
                >
                  sales@Coinsfish.com
                </a>
                <a
                  href="tel:+442045388142"
                  className="block text-center text-gray-600 dark:text-gray-300"
                >
                  +44 204 538 8142
                </a>
              </div>
              <div className="block_contact_us__inner__right__box flex flex-100 flex-col justify-center gap-4 p-[32px] md:flex-50%">
                <p className="mb-2 text-center text-lg ">Or fill the form</p>
                <Link
                  href="#popup-form"
                  className="b2b_link js-popup-open group flex items-center justify-center text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500"
                >
                  Contact BD Team
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
