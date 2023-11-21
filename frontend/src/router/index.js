import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      // {
      //   path: '/',
      //   redirect: () => ({ name: 'system' })
      // },
      // ...dashboardRoutes,
      // ...devRoutes,
      // ...opsRoutes,
      // ...adminRoutes,
      ...setupLayouts(routes),
    ],
  })

export default router
