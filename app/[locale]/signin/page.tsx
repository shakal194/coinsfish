'use client';

import HeaderSettings from '@/app/ui/_components/Headers/HeaderSettings';
//import SignForm from '@/app/ui/_components/Forms/signin-form';
//import Link from 'next/link';
import { Tabs, Tab, Card, CardBody, Link, CardFooter } from '@heroui/react';
import { useState } from 'react';
import SignInForm from '@/app/ui/_components/Forms/SignInForm';
import SignUpForm from '@/app/ui/_components/Forms/SignUpForm';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('signin');
  const [selected, setSelected] = useState<string | number>('signin');

  return (
    <>
      <HeaderSettings />
      <main className="flex flex-col p-6">
        <Tabs
          aria-label="Tabs colors"
          color="primary"
          radius="lg"
          variant="underlined"
          className="mx-auto rounded-lg border-1"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="signin" title={t('signin')}>
            <Card className="rounded-none bg-inherit shadow-none">
              <CardBody>
                <SignInForm />
                <CardFooter>
                  <div className="mx-auto flex flex-col">
                    <p className="text-md text-center text-white">
                      {t('create_account')}{' '}
                      <Link
                        onPress={() => setSelected('signup')}
                        className="text-md cursor-pointer text-center text-white underline transition-all delay-200 duration-300 ease-in-out hover:text-[#FD6B06] focus:text-[#FD6B06] dark:hover:text-[#FD6B06] dark:focus:text-[#FD6B06] lg:text-xl"
                      >
                        {t('signup')}
                      </Link>
                    </p>{' '}
                    <p className="text-md text-center text-white">
                      <Link href="/recovery">
                        <span className="text-md text-center text-white underline transition-all delay-200 duration-300 ease-in-out hover:text-[#FD6B06] focus:text-[#FD6B06] dark:hover:text-[#FD6B06] dark:focus:text-[#FD6B06] lg:text-xl">
                          {t('forgot')}
                        </span>
                      </Link>
                    </p>
                  </div>
                </CardFooter>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="signup" title={t('signup')}>
            <Card className="rounded-none bg-inherit shadow-none">
              <CardBody>
                <SignUpForm />
                <CardFooter>
                  <p className="text-md mx-auto text-center text-white">
                    {t('have_account')}{' '}
                    <Link
                      onPress={() => setSelected('signin')}
                      className="text-md cursor-pointer text-center text-white underline transition-all delay-200 duration-300 ease-in-out hover:text-[#FD6B06] focus:text-[#FD6B06] dark:hover:text-[#FD6B06] dark:focus:text-[#FD6B06] lg:text-xl"
                    >
                      {t('signin')}
                    </Link>
                  </p>
                </CardFooter>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </main>
    </>
  );
}
