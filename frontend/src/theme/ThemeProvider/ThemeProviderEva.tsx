import * as material from '@eva-design/material';
import { ApplicationProvider } from '@ui-kitten/components';
import { createContext, useEffect, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

type Theme = 'light' | 'dark';

type Context = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<Context>({
  theme: 'light',
  changeTheme: () => {},
});

const DEFAULT_THEME = 'light';

function ThemeProviderEva({
  children = false,
  storage,
}: {
  children: React.ReactNode;
  storage: MMKV;
}) {
  const [theme, setTheme] = useState(
    (storage.getString('theme') as Theme) || DEFAULT_THEME,
  );

  // Initialize theme at DEFAULT_THEME if not defined
  useEffect(() => {
    const appHasThemeDefined = storage.contains('theme');
    if (!appHasThemeDefined) {
      storage.set('theme', DEFAULT_THEME);
      setTheme(DEFAULT_THEME);
    }
  }, []);

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    storage.set('theme', nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ApplicationProvider {...material} theme={material[theme]}>
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProviderEva;
