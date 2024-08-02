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