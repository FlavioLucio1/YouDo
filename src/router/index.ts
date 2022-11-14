import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Tarefas from '../views/TarefasView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/sobre',
    name: 'Sobre',

    //abaixo uma outra forma de importar uma rota
    component: () => import('../views/SobreView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
