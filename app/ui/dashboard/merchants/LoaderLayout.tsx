'use client';

import { useEffect, useState } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import SettingsButton from '@/app/ui/_components/SettingsButton';
import LoadingSpinner from '@/app/ui/_components/LoadingSpinner';

const LoaderLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
      <div className="flex justify-end">
        <ThemeButton />
        <SettingsButton />
      </div>
      {children}
    </div>
  );
};

export default LoaderLayout;
