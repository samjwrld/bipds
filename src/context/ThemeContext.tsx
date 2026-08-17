import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isSystem: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  resetToSystem: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isSystem, setIsSystem] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme_user_override') !== 'true';
    }
    return true;
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const userOverride = localStorage.getItem('theme_user_override') === 'true';
      const savedTheme = localStorage.getItem('theme') as Theme | null;

      if (userOverride && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme;
      }

      // Automatically detect OS/device theme preference (Phone, Tablet, PC)
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Listen to live OS/System theme changes (phone, tablet, desktop OS preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const userOverride = localStorage.getItem('theme_user_override') === 'true';
      if (!userOverride) {
        setThemeState(e.matches ? 'dark' : 'light');
        setIsSystem(true);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
      mediaQuery.addListener(handleSystemThemeChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  // Sync DOM document root and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme_user_override', 'true');
      setIsSystem(false);
      return next;
    });
  };

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('theme_user_override', 'true');
    setIsSystem(false);
    setThemeState(newTheme);
  };

  const resetToSystem = () => {
    localStorage.removeItem('theme_user_override');
    setIsSystem(true);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setThemeState(systemDark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, isSystem, toggleTheme, setTheme, resetToSystem }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
