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
        <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden lg:flex items-center space-x-4" id="navbar-dropdown">
  
  <router-link to="/wishlist" class="text-gray-300 hover:text-teal-300">Wishlist</router-link>
  <router-link to="/cart" class="relative flex items-center text-gray-300 hover:text-teal-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
    <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div class="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-3 h-3 flex items-center justify-center">2</div>

          </router-link>
          <router-link to="/login" class="text-gray-300 hover:text-teal-300">Login</router-link>
        </div>
      </nav>
    </header>
  </div>
</template>
