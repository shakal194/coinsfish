import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

import { getMessages } from 'next-intl/server';
import { SessionProvider } from 'next-auth/react';
import Providers from '@/app/[locale]/providers';
import { NextUIProvider } from '@nextui-org/react';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang="en" suppressHydrationWarning>
      {/*<body className={`${lusitana.className} antialiased`}>*/}
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NextUIProvider>
              <SessionProvider>
                {/*<Header />*/}
                {children}
                {/*<Footer />*/}
              </SessionProvider>
            </NextUIProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
