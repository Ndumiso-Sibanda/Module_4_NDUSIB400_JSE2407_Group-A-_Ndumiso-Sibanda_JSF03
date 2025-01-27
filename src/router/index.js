// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; 
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../pages/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/product/:id',
    name: '',
    component: ProductDetail,
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
