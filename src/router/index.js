import { createRouter, createWebHistory } from 'vue-router'
import Header from '../views/Header.vue'
import ProductList from '../views/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'Header',
    component: Header
  },
  {
    path: '/productlist',
    name: 'PriductList',
    component: ProductList
  }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
  });

export default router
