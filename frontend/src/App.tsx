import { ThemeProvider } from '@/theme';
import * as eva from '@eva-design/eva';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import 'react-native-gesture-handler';
import { AssetIconsPack } from './components/icons/asset-icon';
import ApplicationNavigator from './navigators/Application';
import { storage } from './storage/storage';
import i18n, { defaultNS } from './translations';
import I18Provider from './translations/I18Provider';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storage={storage}>
        <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
        <I18Provider i18n={i18n} defaultNS={defaultNS}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <ApplicationNavigator />
          </ApplicationProvider>
        </I18Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
