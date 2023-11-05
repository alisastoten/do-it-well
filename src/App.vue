<template>
  <nav class="border-b-3 border-yellow nav-shadow">
    <div class="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-18 items-center justify-between gap-7">
        <img src="./assets/logo.svg" alt="" class="h-12">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="custom-yellow-bg text-dark-900"
                aria-current="page"
                >Avaleht</router-link
              >
              <router-link
                to="/teenused"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="custom-yellow-bg text-dark-900"
                aria-current="page"
                >Teenused</router-link
              >
              <!-- <router-link
                to="/tehtud-tood"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="custom-yellow-bg text-dark-900"
                aria-current="page"
                >Tehtud tööd</router-link
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />

  <div class="mx-auto max-w-10xl px-2 flex justify-center text-white my-20">
    <div class="flex items-center justify-between gap-10 flex-col lg:flex-row">
      <img src="./assets/logo.svg" alt="" class="h-12">
      <div class="flex gap-13 flex-col items-center md:flex-row">
        <p>info@doitwell.ee</p>
        <p>+372 5823 1125</p>
        <p>© Copyright 2023 Do IT Well</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>