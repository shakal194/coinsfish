'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { WalletSkeleton } from '@/app/ui/skeletons';
import { createWallet } from '@/app/lib/actions';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import coins from '@/app/ui/_data/coin_slider-data.json';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'next/navigation';

export default function CreateWalletForm({ id }: { id: string }) {
  const { data: session, status } = useSession();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  const [nameWallet, setNameWallet] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const nameWalletParam = searchParams.get('nameWallet');
    if (nameWalletParam) {
      setNameWallet(nameWalletParam);
    }
  }, [searchParams]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (session && session.user && selectedCoin && nameWallet) {
      const result = await createWallet(nameWallet, selectedCoin);

      if (result.status === 200) {
        Notify.init({ distance: '30px' });
        Notify.success(result.message);
        setTimeout(() => {
          window.location.href = `/dashboard/merchants/${id}`;
        }, 2000);
      } else if (result.status === 400) {
        setErrorMessage(result.message);
        Notify.init({ distance: '30px' });
        Notify.failure(result.message);
      } else {
        console.error(result.message);
      }
    } else {
      console.error('Session, user ID, or nameWallet not found.');
    }
  };

  const handleCoinSelection = (coinTitle: string) => {
    setSelectedCoin(coinTitle);
    setErrorMessage(null); // Очищаем сообщение об ошибке при смене монеты
  };

  return status === 'loading' ? (
    <WalletSkeleton />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row">
        {coins.map((coin) => (
          <div
            key={coin.title}
            className={`mb-4 flex cursor-pointer items-center justify-between rounded-lg border-2 p-2 px-3 last:mr-0 md:mb-0 md:mr-4 ${
              selectedCoin === coin.coin
                ? 'bg-sky-100 text-blue-600'
                : 'hover:bg-sky-100 hover:text-blue-600'
            }`}
            onClick={() => handleCoinSelection(coin.coin)}
          >
            <div className="flex items-center">
              <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl ">
                <Image
                  className="h-11 w-11"
                  width="44"
                  height="44"
                  src={coin.image_dashboard}
                  alt={coin.title}
                />
              </div>
              <div>{coin.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href={`/dashboard/merchants/${id}`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        {selectedCoin && <Button type="submit">Create Wallet</Button>}
      </div>
    </form>
  );
}
