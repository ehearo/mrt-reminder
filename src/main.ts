import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles/main.css'
import { generateMetaTags } from './seo'

const pinia = createPinia()
const app = createApp(App)
const head = createHead()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(head)

// 注入 SEO 標籤
const seoTags = generateMetaTags()
document.head.insertAdjacentHTML('beforeend', seoTags)

app.mount('#app')
