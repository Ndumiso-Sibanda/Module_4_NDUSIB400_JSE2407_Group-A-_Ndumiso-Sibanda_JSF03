<template>
  <div class="container mx-auto p-4">
    <button @click="goBack" class="back-button mb-4">Back</button>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <h1 class="text-2xl">{{ product.title }}</h1>
      <img :src="product.image" alt="Product image" class="w-full max-w-sm" />
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      loading: true,
    };
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => {
          this.product = data;
          this.loading = false;
        });
    },
    goBack() {
      this.$router.push('/');
    },
  },
  created() {
    this.fetchProduct();
  },
  };
  </script>

<style scoped>
.back-button {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.back-button:hover {
  background-color: lightblue;
}
</style>