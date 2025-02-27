'use client';

import { Spinner } from '@nextui-org/spinner';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LoadingSpinnerRobinAPITest {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'primary';
}

const LoadingSpinnerRobinAPITest: React.FC<LoadingSpinnerRobinAPITest> = ({
  size = 'sm',
}) => {
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
    <div className="ml-4 flex items-center justify-center bg-opacity-50">
      <Spinner size={size} color={spinnerColor} />
    </div>
  );
};

export default LoadingSpinnerRobinAPITest;
