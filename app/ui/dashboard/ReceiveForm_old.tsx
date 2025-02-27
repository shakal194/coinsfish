'use client';

import React, { useState, useEffect, useRef } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import coins from '@/app/ui/_data/coin_slider-data.json';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function ReceiveForm({
  walletAddress,
}: {
  walletAddress: string[];
}) {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCoinChange = async (e: any) => {
    setSelectedCoin(e.target.value);
    setSelectedNetwork('');
    //setAddress('');
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

  // Находим объект монеты по выбранному значению
  const selectedCoinData = coins.find(
    (coin: any) => coin.title === selectedCoin,
  );

  return (
    <div>
      <form>
        <div className="flex flex-col">
          <label htmlFor="coin">
            <strong>Select Wallet:</strong>
          </label>
          <select id="coin" value={selectedCoin} onChange={handleCoinChange}>
            <option value="" disabled>
              Select Wallet
            </option>
            {coins.map((coin: any) => (
              <option key={coin.id} value={coin.title}>
                {coin.title}
              </option>
            ))}
          </select>
        </div>
        {selectedCoinData && (
          <div className="mt-4 flex flex-col">
            <label htmlFor="network">
              <strong>Select Network:</strong>
            </label>
            <p className="mb-2">
              Available network for{' '}
              <span className="rounded-md bg-blue-200 p-1">{selectedCoin}</span>{' '}
              wallet
            </p>
            <select
              id="network"
              value={selectedNetwork}
              onChange={handleNetworkChange}
            >
              <option value="" disabled>
                Select Network
              </option>
              {/* Проходимся по массиву сетей выбранной монеты */}
              {selectedCoinData.network.map((network: any) => (
                <option key={network.id} value={network.name}>
                  {network.name}{' '}
                  {network.description && `${network.description}`}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedNetwork && (
          <div className="mt-4 flex flex-col">
            <label htmlFor="walletAddress">
              <strong>Wallet Address:</strong>
            </label>
            <select
              id="walletAddress"
              value={selectedAddress}
              onChange={handleAddressChange}
              className="mb-4 rounded border p-2"
            >
              <option value="" disabled>
                Select an address
              </option>
              {walletAddress.map((address, index) => (
                <option key={index} value={address}>
                  {address}
                </option>
              ))}
            </select>
            {selectedAddress && (
              <CopyToClipboard
                text={selectedAddress}
                onCopy={handleCopySuccess}
              >
                <div className="flex rounded border bg-white p-2 hover:cursor-pointer hover:text-blue-600">
                  <DocumentDuplicateIcon className="mr-2 w-5 md:w-6" />
                  Copy to clipboard
                </div>
              </CopyToClipboard>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
