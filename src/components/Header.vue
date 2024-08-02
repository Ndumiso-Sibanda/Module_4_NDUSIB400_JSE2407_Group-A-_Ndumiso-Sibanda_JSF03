<template>
  <div id="app">
    <header class="bg-gray-800 shadow-md">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <router-link to="/">
          <button class="flex items-center">
            <img src="/online-shop.png" class="h-8 w-8" alt="SwiftCart Logo" />
            <span class="ml-2 text-xl font-bold text-white">SwiftCart</span>
          </button>
        </router-link>
        <button
          @click="toggleNavbar"
          class="lg:hidden text-white focus:outline-none"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >