import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/dishes',
            name: 'dishes',
            component: () => import('../views/DishPage.vue'),
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: () => import('../views/RestaurantPage.vue'),
        }
    ]
})

export default router
