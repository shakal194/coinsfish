'use client';

import React, { useState, useEffect, useRef } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import coins from '@/app/ui/_data/coin_slider-data.json';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSession } from 'next-auth/react';
import { fetchMerchantWallet } from '@/app/lib/actions';
import { Select, SelectItem, Avatar, Snippet } from '@nextui-org/react';
import Image from 'next/image';

export default function ReceiveForm({
  id,
  walletName,
}: {
  id: string;
  walletName: string;
}) {
  const { data: session, status } = useSession();
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCoinChange = async (e: any) => {
    const coinSelected = e.target.value;
    setSelectedCoin(coinSelected);
    setSelectedNetwork('');
    setSelectedAddress('');
    setResult([]);
    setErrorMessage(null);

    if (session && session.user && coinSelected && walletName) {
      const response = await fetchMerchantWallet(walletName, coinSelected);

      if (response.status === 200 && response.message.length > 0) {
        setResult(response.message);
      } else if (response.status === 400) {
        setErrorMessage(response.message);
        Notify.init({ distance: '30px' });
        Notify.failure(response.message);
      } else {
        console.error(response.message);
      }
    } else {
      console.error('Session, coin ID, or nameWallet not found.');
    }
  };

  const handleNetworkChange = (e: any) => {
    setSelectedNetwork(e.target.value);
  };

  const handleAddressChange = (e: any) => {
    setSelectedAddress(e.target.value);
  };

  const handleCopySuccess = () => {
    Notify.success('Address copied');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const selectedCoinData = coins.find(
    (coin: any) => coin.coin === selectedCoin,
  );

  return (
    <div className="mx-auto my-0 rounded-2xl bg-gray-200 p-3 dark:bg-gray-700">
      <form className="mx-auto my-0 h-[400px] w-full max-w-[500px]">
        <div className="flex flex-col">
          <Select
            className="max-w-sm md:max-w-md"
            label="Select coin"
            labelPlacement="outside"
            id="coin"
            radius="md"
            value={selectedCoin}
            onChange={handleCoinChange}
            items={coins}
            renderValue={(items) => {
              return items.map((item: any) => (
                <div key={item.key} className="flex items-center gap-2">
                  <Avatar
                    alt={item.data.title}
                    className="flex shrink-0"
                    size="sm"
                    src={item.data.image_dashboard}
                  />
                  <div className="flex flex-col">
                    <span>{item.data.title}</span>
                  </div>
                </div>
              ));
            }}
          >
            {(coin: any) => (
              <SelectItem
                key={coin.coin}
                value={coin.coin}
                textValue={coin.title}
              >
                <div className="flex items-center gap-2">
                  <Avatar
                    alt={coin.title}
                    className="flex shrink-0"
                    size="sm"
                    src={coin.image_dashboard}
                  />
                  {coin.title}
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
        {selectedCoinData && (
          <div className="mt-4 flex flex-col">
            <Select
              className="max-w-sm md:max-w-md"
              label="Select network"
              labelPlacement="outside"
              id="network"
              radius="md"
              value={selectedNetwork}
              onChange={handleNetworkChange}
            >
              {selectedCoinData?.network.map((network: any) => (
                <SelectItem
                  key={network.name}
                  value={network.name}
                  textValue={network.description}
                >
                  {network.name}
                  {network.description}
                </SelectItem>
              ))}
            </Select>
          </div>
        )}
        {selectedNetwork && (
          <div className="mt-4 flex flex-col">
            {result.length === 0 ? (
              <Select
                isDisabled
                className="max-w-sm md:max-w-md"
                label="Create address for this coin"
                labelPlacement="outside"
                id="walletAddress"
                radius="md"
                value=""
                onChange={handleAddressChange}
              >
                <SelectItem key="" value="">
                  Create address for this coin
                </SelectItem>
              </Select>
            ) : (
              <div>
                <Select
                  className="max-w-sm md:max-w-md"
                  label="Select address"
                  labelPlacement="outside"
                  id="walletAddress"
                  radius="md"
                  value={selectedAddress}
                  onChange={handleAddressChange}
                >
                  {result.map((address, index) => (
                    <SelectItem
                      key={address}
                      value={address}
                      textValue={address}
                    >
                      <p className="text-[10px] md:text-[14px]">{address}</p>
                    </SelectItem>
                  ))}
                </Select>
                {selectedAddress && (
                  <div className="mt-4 flex flex-col">
                    <Snippet
                      hideSymbol={true}
                      className="max-w-sm border text-[10px] md:max-w-md md:text-[14px]"
                      onCopy={handleCopySuccess}
                    >
                      {selectedAddress}
                    </Snippet>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
