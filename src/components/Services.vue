<template>
  <div class="min-h-screen flex flex-col items-center mt-20 text-white">
    <h1 class="font-extrabold my-line-height text-5xl">{{ msg }}</h1>
    <div class="w-10/12 mt-15">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        <div v-for="service in services" :key="service.name" class="rounded rounded-2xl services-bg p-7">
          <h2 class="mb-5 text-3xl text-white font-extrabold border-b-2 pb-2 border-yellow-200">{{ service.name }}</h2>
          <p class="mb-2 text-gray-300">Eeldatav hind</p>
          <p class="font-semibold text-4xl mb-6">{{ service.price }}</p>
          <ul class="list-disc">
            <li v-for="point in service.description" :key="point" class="text-left text-md ml-6 mb-3">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from '../models/services';

defineProps<{ msg: String }>();
</script>