'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { ReactNode } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export function NextUIProviders({ children }: { children: ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
