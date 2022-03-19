import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sitesconfiaveis',
    name: 'listadesites',
    component: () => import(/* webpackChunkName: "about" */ '../views/SitesConfiaveis.vue')
  },
  {
    path: '/paginacadastro',
    name: 'cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/PaginaCadastro.vue')
  },
  {
    path: '/colaboradores',
    name: 'colaboradores',
    component: () => import(/* webpackChunkName: "about" */ '../views/PaginaColaboradores.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
