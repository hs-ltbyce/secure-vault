import type { i18n } from 'i18next';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MMKV, useMMKVString } from 'react-native-mmkv';

function I18Provider({
  i18n,
  defaultNS,
  children,
  storage,
}: {
  i18n: i18n;
  children?: React.ReactNode;
  defaultNS?: string | string[];
  storage?: MMKV;
}) {
  const [language] = useMMKVString('language', storage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <I18nextProvider i18n={i18n} defaultNS={defaultNS}>
      {children}
    </I18nextProvider>
  );
}

export default I18Provider;
