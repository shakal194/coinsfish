import Link from 'next/link';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';

const HeaderDashboard = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>

        <div className="flex items-end items-center justify-center gap-2 p-6">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
