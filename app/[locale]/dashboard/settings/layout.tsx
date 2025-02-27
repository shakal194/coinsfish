import SettingsSideNav from '@/app/ui/dashboard/SettingsSideNav';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import HeaderSettings from '@/app/ui/_components/Headers/HeaderSettings';
import HeaderDashboard from '@/app/ui/_components/Headers/HeaderDashboard';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderDashboard />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SettingsSideNav />
        </div>
        <div className="flex-grow p-6 scrollbar-hide md:overflow-y-auto md:p-12">
          {/*<div className="flex justify-end">
            <ThemeButton />
          </div>*/}
          {children}
        </div>
      </div>
    </>
  );
}
