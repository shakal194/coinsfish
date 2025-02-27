'use client';

import { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import WithdrawForm from '@/app/ui/dashboard/merchants/withdraw/WithdrawForm';
import Link from 'next/link';

export default function WithdrawButton({
  id,
  walletName,
}: {
  id: string;
  walletName: string;
}) {
  const [showCoinForm, setShowCoinForm] = useState(false);

  const toggleCoinForm = () => {
    setShowCoinForm((prev) => !prev); // Инвертируем текущее значение
  };

  return (
    <div>
      <Link
        className="flex max-w-[200px] items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        href={`/dashboard/merchants/${id}/withdraw`}
      >
        <ArrowDownIcon className="w-5 md:w-6" />
        Withdraw
      </Link>

      {/* Если showCoinForm равно true, отображаем CoinForm */}
      {showCoinForm && <WithdrawForm id={id} walletName={walletName} />}
    </div>
  );
}
