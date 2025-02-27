'use client';

import React, { useState } from 'react';
import coins from '@/app/ui/_data/coin_slider-data.json';

export default function WithdrawalForm() {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleCoinChange = (e: any) => {
    setSelectedCoin(e.target.value);
    setSelectedNetwork('');
    setWalletAddress('');
    setAmount('');
  };

  const handleNetworkChange = (e: any) => {
    setSelectedNetwork(e.target.value);
  };

  const handleAddressChange = (e: any) => {
    setWalletAddress(e.target.value);
  };

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  // Находим объект монеты по выбранному значению
  const selectedCoinData = coins.find(
    (coin: any) => coin.title === selectedCoin,
  );

  return (
    <div>
      <form>
        <div className="mt-4">
          <label htmlFor="coin">
            <span className="mb-6">
              <strong>Select Wallet:</strong>
            </span>
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
          <div className="mt-4">
            <label htmlFor="network">
              <strong>Select Network:</strong>
            </label>
            <p>
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
          <div>
            <div className="mt-4">
              <label htmlFor="walletAddress">
                <strong>Wallet Address:</strong>
              </label>
              <input
                type="text"
                id="walletAddress"
                placeholder="Wallet Address"
                value={walletAddress}
                onChange={handleAddressChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="amount">
                <strong>Amount:</strong>
              </label>
              <input
                type="text"
                placeholder="Amount"
                id="amount" // исправлено
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
