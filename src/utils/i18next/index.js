import { initReactI18next } from 'react-i18next'
import moment from 'moment'
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend'

import es from './languages/es.json'
import en from './languages/en.json'

/* I18n, the brain behind translations 
* For more useful packages and plugins: https://www.i18next.com/overview/plugins-and-utils
* For more general config options: https://www.i18next.com/overview/configuration-options
* Using I18n inside of React: https://react.i18next.com/guides/quick-start
* I18n api https://www.i18next.com/overview/api
* To scrape all your translation keys to send to a backend, use 'npm run extract-translation-keys'
* This will generate a masterTranslations.json file inside of the languages folder.
*/

i18n.on('languageChanged', (lng) => {
  // The user's language has changed.
  // It might be important to do something with your app once this happened.
  // Locale keys should change automatically, but moment and other packages won't.
  moment.locale(lng)
})

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [
        LocalStorageBackend
      ],
      backendOptions: [{
        expirationTime: 7*24*60*60*1000,
        store: window.localStorage
      }]
    },
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if (value instanceof Date) return moment(value).format(format)
        return value
      }
    },
    resources: {
      es: {
        ...es
      },
      en: {
        ...en
      }
    },
    fallbackLng: 'en', // If the language isn't supported, this will be used by default.
    ns: ['common', 'login'], // Namespaces, make sure you define namespaces before adding resource bundles to them!
    fallbackNS: ['common'], // If you use an undefined namespace, this is the namespace that will be used instead
    react: {
      useSuspense: true
    },
    debug: process.env.NODE_ENV !== 'production',
  }).then(() => {
      // Can use i18next.language to see what the current language is here.
      // In order for moment to actually change the locale, the locale version of moment must be imported!
      // require('moment/locale/es.js'); would allow for moment to use both english and spanish
    moment.locale(i18n.language)
  })

export default i18n