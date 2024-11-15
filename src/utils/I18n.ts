import i18n from 'i18next';
import en from '../lang/en/translate.json';
import fr from '../lang/fr/translate.json';
import ar from '../lang/ar/translate.json';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng: 'en', 
    fallbackLng: 'en',    
    interpolation: {
      escapeValue: false,   
    },
  });

export default i18n;
