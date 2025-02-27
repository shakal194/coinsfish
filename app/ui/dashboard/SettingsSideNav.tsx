import Link from 'next/link';
import SettingsNavLinks from '@/app/ui/dashboard/SettingsNav-links';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import HeaderDashboard from '@/app/ui/_components/Headers/HeaderDashboard';

export default function SettingsSideNav() {
  return (
    <>
      {/*<HeaderDashboard />
      <Link
        className="mb-2 flex hidden h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40 lg:flex"
        href="/"
      >
        <div className="flex items-center text-white">
          <CoinsFishLogo />
        </div>
      </Link>*/}

      <div className="flex flex-col px-3 py-4 md:px-2">
        <div className="flex grow flex-wrap items-center space-x-2 md:flex-col md:items-stretch md:space-x-0 md:space-y-2 md:overflow-y-auto">
          <SettingsNavLinks />
        </div>
      </div>
    </>
  );
  /* return (
    <>
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="flex items-center text-white">
          <CoinsFishLogo />
        </div>
      </Link>

      <div className="flex flex-col px-3 py-4 md:px-2">
        <div className="flex justify-end">
          <ThemeButton />
        </div>
        <div className="flex grow flex-wrap items-center space-x-2 md:flex-col md:items-stretch md:space-x-0 md:space-y-2 md:overflow-y-auto">
          <SettingsNavLinks />
        </div>
      </div>
    </>
  );*/
}
