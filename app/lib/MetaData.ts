// lib/metadata.ts
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server'; // серверная функция для получения переводов

export async function generateMetadata(): Promise<Metadata> {
  // Передаем только имя пространства переводов
  const t = await getTranslations('metadata');

  return {
    //metadataBase: new URL('https://btc-x-pro.vercel.app/'),
    metadataBase: new URL('https://btc-x.pro'),
    title: t('title'), // например, ключ "title" должен быть определён в ваших переводах
    description: t('description'),
    /*openGraph: {
      title: t('title'),
      description: t('description'),
      //url: 'https://btc-x-pro.vercel.app/',
      url: 'https://btc-x.pro',
      type: 'website',
      images: [
        {
          //url: 'https://btc-x-pro.vercel.app/btcx_og_image.png',
          url: '/btcx_og_image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [
        {
          //url: 'https://btc-x-pro.vercel.app/btcx_og_image.png',
          url: '/btcx_og_image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    icons: {
      icon: '/favicon.png',
      apple: '/icon_btcx_256_256.png',
    },*/
  };
}
