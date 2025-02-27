import { BanknotesIcon } from '@heroicons/react/24/outline';
import { fetchBtcBalance } from '@/app/lib/data';

const iconMap = {
  balance: BanknotesIcon,
};

export default async function BalanceWrapper() {
  const { balanceInUsdBinance } = await fetchBtcBalance();
  return (
    <>
      <Balance title="Balance" value={balanceInUsdBinance} type="balance" />
    </>
  );
}

export function Balance({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'balance';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-sky-100 dark:bg-gray-800">
      <div className="flex">
        {Icon ? (
          <Icon className="h-5 w-5 text-gray-700 dark:text-white" />
        ) : null}
        <h3 className="ml-2 text-sm font-medium">Available {title}</h3>
      </div>
      <p className="truncate rounded-xl py-8 text-2xl">
        {typeof value === 'number' ? `$${value}` : value}
      </p>
    </div>
  );
}
