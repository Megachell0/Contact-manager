import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/ElementsList.vue') // Список контактов
  },
  {
    path: '/detail/:id',
    component: () => import('../components/Detail.vue') // Информация о контакте
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
