/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import 'vue-image-zoomer/dist/style.css';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
