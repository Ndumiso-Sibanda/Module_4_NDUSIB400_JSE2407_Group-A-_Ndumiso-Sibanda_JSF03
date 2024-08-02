// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Only import once
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/pages/ProductDetails.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/product/:id',
    name: '',
    component: ProductDetails,
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
