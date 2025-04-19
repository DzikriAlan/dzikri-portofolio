/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { i18n } from './plugins/i18n'

// Plugins
import { registerPlugins } from '@/plugins'
import Vue3Marquee from 'vue3-marquee'
import 'vue-image-zoomer/dist/style.css';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
// Import Tailwind CSS - this needs to be added
// Impor Tailwind CSS - ini perlu ditambahkan
import './assets/tailwind.css'
import './assets/main.css'
import router from './router'

const app = createApp(App)

registerPlugins(app)
app.use(Vue3Marquee, { name: 'MarqueeAnimation' }) // use in template <MarqueeAnimation />
app.use(i18n)
app.use(router)

app.mount('#app')