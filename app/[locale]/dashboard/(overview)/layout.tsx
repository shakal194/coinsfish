import SideNav from '@/app/ui/dashboard/sidenav';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import SettingsButton from '@/app/ui/_components/SettingsButton';
import HeaderDashboard from '@/app/ui/_components/Headers/HeaderDashboard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderDashboard />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 scrollbar-hide md:overflow-y-auto md:p-12">
          {/*<div className="flex justify-end">
            <ThemeButton />
            <SettingsButton />
          </div>*/}
          {children}
        </div>
      </div>
    </>
  );
}
