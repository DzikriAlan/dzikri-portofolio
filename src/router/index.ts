import { createRouter, createWebHistory } from 'vue-router'
import V1 from '@/views/V1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'V1',
      component: V1
    },
  ]
})

export default router