import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import { Providers, NextUIProviders } from '@/app/[locale]/providers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SessionProvider } from 'next-auth/react';
import { generateMetadata } from '@/app/lib/MetaData';

export { generateMetadata };

type Params = Promise<{ locale: string }>;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      {/*<body className={`${lusitana.className} antialiased`}>*/}
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NextUIProviders>
              <SessionProvider>
                {/*<Header />*/}
                {children}
                {/*<Footer />*/}
              </SessionProvider>
            </NextUIProviders>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
