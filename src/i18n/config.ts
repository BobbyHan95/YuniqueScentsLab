import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import zh from './translations/zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh }
    },
    lng: (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('zh')) ? 'zh' : 'en', // 自动根据浏览器语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;