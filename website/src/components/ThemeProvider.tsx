'use client';

import { MantineProvider } from '@mantine/core';
import { useEffect, useState, ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | 'auto'>('auto');

  useEffect(() => {
    setMounted(true);

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <MantineProvider defaultColorScheme={colorScheme}>
      {children}
    </MantineProvider>
  );
} 