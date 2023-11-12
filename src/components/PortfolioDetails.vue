<template>
    <div class="flex flex-col md:flex-row items-center justify-center mt-10">
      <img :src="job.img" alt="Job Image" class="w-6/8 md:w-3/10 rounded-lg" />
      <div class="mx-10 mt-5 text-white w-6/8 md:w-4/10">
        <h1 class="text-3xl font-bold mb-5">{{ job.name }}</h1>
        <p class="text-lg">{{ job.desciptionLong }}</p>
      </div>
    </div>
    
    <component :is="jobComponent" v-if="jobComponent" />
    
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { jobs } from '../models/Portfolio';
  
  const route = useRoute();
  const jobId = route.params.jobId; 
  
  const jobComponent = ref(null);
  import(`../components/Job${jobId}.vue`).then(module => jobComponent.value = module.default);

  const job = ref(jobs.find(job => job.id === Number(jobId)));
  </script>
  