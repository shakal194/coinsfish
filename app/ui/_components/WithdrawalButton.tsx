'use client';

import { useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import WithdrawalForm from '@/app/ui/dashboard/WithdrawalForm';

export default function WithdrawalButton() {
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
        <ArrowUpIcon className="w-5 md:w-6" />
        Withdrawal
      </button>

      {/* Если showCoinForm равно true, отображаем CoinForm */}
      {showCoinForm && <WithdrawalForm />}
    </div>
  );
}
