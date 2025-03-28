'use client';

import { Spinner } from '@heroui/spinner';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface LoadingSpinner {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'primary';
}

const LoadingSpinner: React.FC<LoadingSpinner> = ({ size = 'lg' }) => {
  const t = useTranslations('signin');

  const { theme, resolvedTheme } = useTheme();
  const [spinnerColor, setSpinnerColor] = useState<'primary' | 'white'>(
    'primary',
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      setSpinnerColor(resolvedTheme === 'light' ? 'primary' : 'white');
    }
  }, [resolvedTheme]);

  if (!mounted) {
    // Пока компонент не смонтирован, возвращаем null
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-200 bg-opacity-50">
      <Spinner size={size} label={t('spinnerLabel')} color={spinnerColor} />
    </div>
  );
};

export default LoadingSpinner;
