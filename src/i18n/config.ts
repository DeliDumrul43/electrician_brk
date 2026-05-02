// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// We'll create these files shortly in src/i18n/locales/
import translationTR from './locales/tr.json';
import translationEN from './locales/en.json';

const resources = {
  tr: { translation: translationTR },
  en: { translation: translationEN },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // Default language
    fallbackLng: 'en', // If translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    // Important: We will manually switch the i18n language 
    // when the React Router detects a URL change.
  });

export default i18n;