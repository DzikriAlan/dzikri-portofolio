/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { App, Plugin } from 'vue'
import vuetify from './vuetify'
import router from '../router'
import VueImageZoomer from 'vue-image-zoomer'
import InnerImageZoom from 'vue-inner-image-zoom'

// Type assertion for plugins that don't have proper TypeScript definitions
const vueImageZoomerPlugin = VueImageZoomer as unknown as Plugin
const innerImageZoomPlugin = InnerImageZoom as unknown as Plugin

export function registerPlugins(app: App): void {
  app
    .use(vuetify)
    .use(router)
    .use(vueImageZoomerPlugin)
    .use(innerImageZoomPlugin)
}