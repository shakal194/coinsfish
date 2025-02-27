import Link from 'next/link';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import { CoinsNavMobile } from '@/app/ui/dashboard/CoinsNavMobile';
import { MerchantsMobile } from '@/app/ui/dashboard/merchants/MerchantsMobile';
import { MerchantsListMobile } from '@/app/ui/dashboard/merchants/MerchantsListMobile';
import MerchantsMobileMenu from '@/app/ui/dashboard/MerchantsMobileMenu';

const HeaderDashboard = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>

        <div className="flex items-end items-center justify-center gap-2 p-6">
          <ThemeButton />
          <MerchantsMobileMenu>
            <CoinsNavMobile />
            <MerchantsMobile />
            <MerchantsListMobile />
          </MerchantsMobileMenu>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
