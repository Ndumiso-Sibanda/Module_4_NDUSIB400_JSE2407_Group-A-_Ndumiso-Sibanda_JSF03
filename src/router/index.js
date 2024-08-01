import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Header.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Header',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
  });

export default router
