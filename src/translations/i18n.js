import i18n from 'i18next'
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'



import { TRANSLATIONS_EN } from './en/translations'
import { TRANSLATIONS_ES } from './es/translations'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: TRANSLATIONS_ES
            },
            en: {
                translation: TRANSLATIONS_EN
            }
        }
    });

i18n.changeLanguage("en");

export default i18n;



