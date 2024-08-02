<template>
    <div>
      <!-- Filter and Sort Controls -->
      <div class="controls">
        <select v-model="selectedCategory" @change="filterProducts">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <select v-model="sortOrder" @change="applySorting">
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div class="grid justify-center">
          <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden"
            >
            <img class="object-contain h-48 mt-3" :src="product.image" :alt="product.title" />
              <div class="flex-1 flex flex-col p-6">
                <header class="mb-2 flex-2">
                  <h2 class="text-lg line-clamp-2 font-extrabold leading-snug text-slate-600">
                    {{ product.title }}
                  </h2>
                </header>
                <div class="flex items-left -ml-2 mb-2">
                  <svg
                    v-for="index in Math.round(product.rating.rate)"
                    :key="index"
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  ></svg>
                  <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  <svg
                    v-for="index in 5 - Math.round(product.rating.rate)"
                    :key="index"
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                  <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                </svg>
                </div>
                <div class="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug">
                  <h2>$ {{ product.price }}</h2>
                </div>
                <div class="flex mt-1 space-x-2 my-3">
                  <div class="justify-start flex-1">
                    <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {{ product.category }}
                    </span>
                  </div>
                  <div class="justify-end space-x-2">
                    <button aria-label="Add to Favourites">
                      <svg
                        class="me-1.5 h-5 w-5 hover:fill-red-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        transform="scale(1.6)"
                      ></svg>
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                    </button>
                  </div>
                </div>
                <button
                  class="inline-flex justify-center whitespace-nowrap rounded-lg  bg-cyan-700 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                  @click="addToCart(product)"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      categories: [],
      selectedCategory: '',
      sortOrder: 'default', 
      loading: true,
      error: null,
    };
  },
  methods: {
      async getProducts() {
        try {
          let response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          this.products = await response.json();
          this.filteredProducts = [...this.products];
          this.getCategories();
        } catch (err) {
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      },
      getCategories() {
        this.categories = [...new Set(this.products.map((product) => product.category))];
      },
      filterProducts() {
        if (this.selectedCategory === '') {
          this.filteredProducts = [...this.products];
        } else {
          this.filteredProducts = this.products.filter(
            (product) => product.category === this.selectedCategory
          );
        }
        this.applySorting(); 
      },
      applySorting() {
        switch (this.sortOrder) {
          case "asc":
            this.filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case "desc":
            this.filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case "default":
          default:
            
            this.filteredProducts = [...this.products]; 
            break;
        }
    },
      resetFiltersAndSorting() {
        this.selectedCategory = '';
        this.sortOrder = 'default';
        this.filteredProducts = [...this.products];
      },
      addToCart(product) {
        console.log('Add to cart:', product);
      },
    },
    mounted() {
      this.getProducts();
    },
  };
  </script>

<style scoped>
.controls {
  margin-bottom: 20px;
}
select {
  margin-right: 10px;
  padding: 5px;
}
button {
  margin-left: 10px;
}
</style>