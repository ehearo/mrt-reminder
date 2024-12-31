import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zhTW from '../locales/zh-TW.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'

// Get browser language
const getBrowserLocale = (): string => {
  const navigatorLang = navigator.language.toLowerCase()
  
  // Map browser language codes to our supported locales
  const languageMap: { [key: string]: string } = {
    'zh-tw': 'zh-TW',
    'zh-hk': 'zh-TW',
    'zh': 'zh-TW',
    'en': 'en',
    'en-us': 'en',
    'en-gb': 'en',
    'ja': 'ja',
    'ja-jp': 'ja',
    'ko': 'ko',
    'ko-kr': 'ko'
  }

  // Check if we support the browser language
  const browserLocale = languageMap[navigatorLang] || 
                       languageMap[navigatorLang.split('-')[0]]

  // Return supported language or default to zh-TW
  return browserLocale || 'zh-TW'
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-TW': zhTW,
    ja,
    ko
  }
})

export default i18n 