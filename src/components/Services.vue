<template>
  <div class="min-h-screen flex flex-col items-center mt-20 text-white text-center">
    <h1 class="font-extrabold my-line-height text-6xl">{{ msg }}</h1>
    <div class="w-10/12 mt-15">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="service in services" :key="service.name" class="rounded rounded-3xl services-bg">
          <h2 class="p-4 mb-5 text-xl text-black font-extrabold rounded rounded-3xl custom-yellow-bg">{{ service.name }}</h2>
          <ul>
            <li v-for="point in service.description" :key="point" class="text-left px-7 mb-5">{{ point }}</li>
          </ul>
          <p class="font-semibold text-xl pt-2 my-3">{{ service.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from '../models/services';

defineProps<{ msg: String }>();
</script>