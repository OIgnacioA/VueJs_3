import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Calculadora from '../views/CalculadoraView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Calculadora',
    name: 'Calculadora',
    component : Calculadora
    //component: () => import(/* webpackChunkName: "about" */ '../views/Profecion.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
