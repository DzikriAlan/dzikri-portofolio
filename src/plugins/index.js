/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import VueImageZoomer from 'vue-image-zoomer'
import InnerImageZoom from 'vue-inner-image-zoom'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueImageZoomer)
    .use(InnerImageZoom)
}
