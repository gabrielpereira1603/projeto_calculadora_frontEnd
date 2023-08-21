import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../Home.vue")
    },
    {
      path: '/divisao',
      name: 'divisao',
      component: () => import("../Divisao.vue")
    },
    {
      path: '/mutiplicacao',
      name: 'mutiplicacao',
      component: () => import("../Mutiplicacao.vue")
    },
    {
      path: '/adicao',
      name: 'adicao',
      component: () => import("../Soma.vue")
    },
    {
      path: '/subtracao',
      name: 'subtracao',
      component: () => import("../Subtracao.vue")
    },
    {
      path: '/potencia',
      name: 'potencia',
      component: () => import("../Potencia.vue")
    },
  ]
})

export default router
