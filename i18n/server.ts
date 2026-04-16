import {createInstance} from 'i18next';
import {resources} from './resources';
import {fallbackLng} from './config';

export async function createI18nServer(lng: string) {
  const i18n = createInstance();

  await i18n.init({
    resources,
    lng,
    fallbackLng,
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n.t;
}
