<template>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold">{Finsweet</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
            <li><router-link to="/" class="hover:text-gray-400">About us</router-link></li>
            <li><router-link to="/" class="hover:text-gray-400">Pricing</router-link></li>
            <li><router-link to="/" class="hover:text-gray-400">Work</router-link></li>
            <li><router-link to="/" class="hover:text-gray-400">Blog</router-link></li>
            <button><router-link to="/contact" class="hover:text-gray-400">Contact Us</router-link></button>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  
  </style>
  