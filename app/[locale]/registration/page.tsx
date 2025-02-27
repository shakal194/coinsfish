import RegistrationForm from '@/app/ui/_components/Forms/register-form';
import Link from 'next/link';
import HeaderSettings from '@/app/ui/_components/Headers/HeaderSettings';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Sign up to CoinsFish.',
};

export default function RegistrationPage() {
  return (
    <>
      <HeaderSettings />
      <main className="flex flex-col p-6">
        <div className="flex justify-center">
          <RegistrationForm />
        </div>
        <div className="mt-2 flex justify-center">
          <Link href="/recovery">
            <span className="text-center text-black underline transition-all delay-200 duration-300 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400">
              Forgot your password?
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
