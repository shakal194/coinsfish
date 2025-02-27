'use client';

import { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import ReceiveForm from '@/app/ui/dashboard/ReceiveForm_old';

export default function ReceiveButton({
  walletAddress,
}: {
  walletAddress: string[];
}) {
  const [showCoinForm, setShowCoinForm] = useState(false);

  const toggleCoinForm = () => {
    setShowCoinForm((prev) => !prev); // Инвертируем текущее значение
  };

  return (
    <div>
      <button
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        onClick={toggleCoinForm}
      >
        <ArrowDownIcon className="w-5 md:w-6" />
        Receive
      </button>

      {/* Если showCoinForm равно true, отображаем CoinForm */}
      {showCoinForm && <ReceiveForm walletAddress={walletAddress} />}
    </div>
  );
}
