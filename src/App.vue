<template>
  <nav class="bg-dark-900">
    <div class="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-18 items-center justify-between gap-7">
        <img src="../img/logo.svg" alt="" class="h-12">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-yellow-300 text-dark-900"
                aria-current="page"
                >Avaleht</router-link
              >
              <router-link
                to="/liikmed"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-yellow-300 text-dark-900"
                aria-current="page"
                >Teenused</router-link
              >
              <router-link
                to="/uldkoosolekud"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-yellow-300 text-dark-900"
                aria-current="page"
                >Tehtud tööd</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg-amber-200">
    <div class="p-5">
      <MainPage msg="Welcome to the main page of this site" class="text-center"/>
    </div>    
  </div>
</template>

<script setup>

// to do router 


import MainPage from './components/Mainpage.vue'
</script>