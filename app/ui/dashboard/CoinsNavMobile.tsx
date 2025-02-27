import Image from 'next/image';
import { fetchBtcBalance } from '@/app/lib/data';
import coins from '@/app/ui/_data/coin_slider-data.json';
import React, { useEffect, useState } from 'react';

export async function CoinsNavMobile() {
  const { balanceInUsdBinance, balanceInCurrency } = await fetchBtcBalance();

  return (
    <div className="">
      {coins.map((coin) => (
        <div
          key={coin.title}
          className="my-4 flex cursor-pointer items-center justify-between rounded-md bg-gray-100 p-3 hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-600 dark:hover:bg-gray-400 md:px-3"
        >
          <div className="flex items-center">
            <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl">
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
          <div className="flex flex-col">
            <div className="">{balanceInCurrency}</div>
            <div>
              {typeof balanceInUsdBinance === 'number'
                ? `$${balanceInUsdBinance}`
                : balanceInUsdBinance}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/*export async function CoinsNavMobile({ onClose }) {
  const { balanceInUsdBinance, balanceInCurrency } = await fetchBtcBalance();

  return (
    <div className="md:hidden">
      {coins.map((coin) => (
        <div
          key={coin.title}
          className="flex cursor-pointer items-center justify-between hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3"
          onClick={onClose}
        >
          <div className="flex items-center">
            <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl">
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
          <div className="flex flex-col">
            <div>
              {balanceInCurrency !== null ? balanceInCurrency : 'Loading...'}
            </div>
            <div>
              {typeof balanceInUsdBinance === 'number'
                ? `$${balanceInUsdBinance}`
                : balanceInUsdBinance}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}*/
