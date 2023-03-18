import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsViewVue from '../views/ProductsView.vue'
import PricingView from '../views/PricingView.vue'
import PlansView from '../views/PlansView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsViewVue
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView
    },
  ]
})

export default router
