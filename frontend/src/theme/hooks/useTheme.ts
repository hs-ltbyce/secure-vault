import { useTheme as useEvaTheme } from '@ui-kitten/components';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProviderEva';

const useTheme = () => {
  const context = useContext(ThemeContext);
  const theme = useEvaTheme();

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return { ...context, token: theme };
};

export default useTheme;
