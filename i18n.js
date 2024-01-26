import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './public/locales/en/common.json';
import frTranslation from  './public/locales/fr/common.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', 
  fallbackLng: 'fr', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;