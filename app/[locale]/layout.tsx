import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import Providers from '@/app/[locale]/providers';
import { HeroUIProvider } from '@heroui/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SessionProvider } from 'next-auth/react';
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
    <html lang={locale} suppressHydrationWarning>
      {/*<body className={`${lusitana.className} antialiased`}>*/}
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <HeroUIProvider>
              <SessionProvider>
                {/*<Header />*/}
                {children}
                {/*<Footer />*/}
              </SessionProvider>
            </HeroUIProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
