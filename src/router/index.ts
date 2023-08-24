import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: () => import('../views/DishPage.vue'),
      meta: {
        title: 'Dish Page'
      }
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../views/RestaurantPage.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Page'}`
  next()
})
export default router
