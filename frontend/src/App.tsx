import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import 'react-native-gesture-handler';
import { AssetIconsPack } from './components/icons/asset-icon';
import ApplicationNavigator from './navigators/Application';
import { storage } from './storage/storage';
import ThemeProviderEva from './theme/ThemeProvider/ThemeProviderEva';
import i18n, { defaultNS } from './translations';
import I18Provider from './translations/I18Provider';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
      <ThemeProviderEva storage={storage}>
        <I18Provider i18n={i18n} defaultNS={defaultNS}>
          <ApplicationNavigator />
        </I18Provider>
      </ThemeProviderEva>
    </QueryClientProvider>
  );
}

export default App;
