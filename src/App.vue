<template>
  <nav class="border-b-3 border-yellow nav-shadow">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <img src="./assets/logo-doitwell.png" alt="do it well OÜ logo" class="h-12">
      </a>
      
      <button @click="toggleMobileMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-100 rounded-lg md:hidden hover:bg-dark-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" id="navbar-default" :class="{ 'hidden': !mobileMenuOpen }">
        <ul class="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-3">
          <router-link
            to="/"
            class="nav-button text-white rounded-md px-3 py-2 text-md font-medium"
            active-class="custom-yellow-bg text-dark-900"
            aria-current="page"
            @click.native="closeMobileMenu"
            >Avaleht</router-link
            >
            <router-link
            to="/teenused"
            class="nav-button text-white rounded-md px-3 py-2 text-md font-medium"
            active-class="custom-yellow-bg text-dark-900"
            aria-current="page"
            @click.native="closeMobileMenu"
            >Teenused</router-link
            >
            <router-link
            to="/tehtud-tood"
            class="nav-button text-white rounded-md px-3 py-2 text-md font-medium"
            active-class="custom-yellow-bg text-dark-900"
            aria-current="page"
            @click.native="closeMobileMenu"
            >Tehtud tööd</router-link
          >
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
  
  <div class="mx-auto max-w-10xl px-2 flex justify-center text-white mt-20 mb-10">
    <div class="flex items-center justify-between gap-10 flex-col lg:flex-row">
      <img src="./assets/logo-doitwell.png" alt="" class="h-12">
      <div class="flex gap-4 md:gap-13 flex-col items-center md:flex-row">
        <p>info@doitwell.ee</p>
        <p>+372 5823 1125</p>
        <p>© Copyright 2024 Do IT Well OÜ</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};



</script>