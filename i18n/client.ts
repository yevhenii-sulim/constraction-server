'use client';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from './resources';
import {fallbackLng} from './config';

export function initClientI18n(lng: string) {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng,
      fallbackLng,
      interpolation: {
        escapeValue: false,
      },
    });
  } else {
    i18n.changeLanguage(lng);
  }

  return i18n;
}
