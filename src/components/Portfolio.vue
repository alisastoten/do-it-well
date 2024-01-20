<template>
  <div class="min-h-screen flex flex-col items-center mt-20 text-white text-center">
    <h1 class="font-extrabold my-line-height text-5xl">{{ msg }}</h1>
    <div class="w-11/12 mt-15">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="job in jobs" :key="job.name" class="rounded rounded-3xl jobs-bg">
          <div class="flex flex-col items-center">
            <img :src="job.img" class="rounded rounded-2xl w-19/20 mt-3 border-1 border-gray-400">
            <h2 class="p-4 mb-5 mt-2 text-xl text-white font-extrabold">{{ job.name }}</h2>
          </div>
          <div class="flex flex-wrap justify-center mb-5 mx-3">
            <div v-for="topic in job.topic" :key="topic" class="mx-2 mb-4">
              <p class="px-3 py-2 border-2 border-gray-400 rounded-2xl inline-block">{{ topic }}</p>
            </div>
          </div>
          <ul class="list-disc">
            <li v-for="point in job.description" :key="point" class="text-left text-md mx-12 mb-3">{{ point }}</li>
          </ul>
          <router-link :to="'/tehtud-tood/' + job.filename" :key="job.button"><button class="button-y my-7 mx-9">{{ job.button }}</button></router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { jobs } from '../models/Portfolio';
defineProps<{ msg: String }>();

import { useRoute } from 'vue-router';

const route = useRoute();
const jobFilename = route.params.jobFilename; 

</script>