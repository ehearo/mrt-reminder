import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zhTW from '../locales/zh-TW.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-TW': zhTW,
    ja,
    ko
  }
})

export default i18n 