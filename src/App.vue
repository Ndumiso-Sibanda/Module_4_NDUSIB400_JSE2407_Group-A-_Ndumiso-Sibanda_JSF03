<template>
  <div id="app">
    <Header />
    <ProductList />
  </div>
</template>

<script>
import Header from './components/Header.vue'; 
import ProductList from './components/ProductList.vue'; 
export default {
  name: 'App',
  components: {
    Header,
    ProductList,
  },
};
</script>

