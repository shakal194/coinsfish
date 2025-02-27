import Image from 'next/image';
import Link from 'next/link';
import {
  UserIcon,
  UserPlusIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const HaveAQuestion = () => {
  return (
    <section className="hquestion py-[72px] lg:py-[150px]">
      <div className="hquestion__container container mx-auto flex w-full max-w-[1356px] flex-col gap-20 lg:flex-row">
        <div className="hquestion__head flex-100 md:flex-none lg:w-[464px]">
          <h2 className="hquestion__title m-0 p-0 text-3xl font-semibold leading-[135%]">
            Have a question?
          </h2>
          <div className="hquestion__subtitle mt-8 text-base leading-[160%]">
            Explore our solutions or you can contact us through ticket system
            and contact form. Feel free to get in touch.
          </div>
        </div>
        <div className="hquestion__list flex flex-col gap-20 md:flex-none lg:w-[740px]">
          <div className="hquestion__list__item flex flex-none flex-col lg:w-[312px]">
            <div className="icon mb-[31px]">
              <UserIcon className="h-[50px] w-[50px] text-yellow-600" />
            </div>
            <div className="title pt-1 text-lg font-semibold leading-[150%] text-gray-700 dark:text-gray-300">
              For existing clients
            </div>
            <div className="text pt-2 text-sm leading-[160%] text-gray-400 dark:text-gray-300">
              If you already have an account please use our ticket system.
            </div>
            <Link
              href="/registration"
              className="b2b_link external_links_checked group mt-4 flex items-center text-blue-500 transition-transform duration-300 ease-in-out hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get 24/7 Support
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="hquestion__list__item flex flex-none flex-col lg:w-[312px]">
            <div className="icon mb-[31px]">
              <UserPlusIcon className="h-[50px] w-[50px] text-blue-600" />
            </div>
            <div className="title pt-1 text-lg font-semibold leading-[150%] text-gray-700 dark:text-gray-300">
              For new clients or partners
            </div>
            <div className="text pt-2 text-sm leading-[160%] text-gray-400 dark:text-gray-300">
              Please leave your inquiry and our Business Development Team will
              contact you shortly.
            </div>
            <Link
              href="/signup"
              className="b2b_link js-popup-open group mt-4 flex items-center text-blue-500 transition-transform duration-300 ease-in-out hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
            >
              Contact BD Team
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveAQuestion;
