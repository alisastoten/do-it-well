<template>
    <div class="flex flex-col md:flex-row items-center justify-center mt-10">
      <img :src="job.img" alt="Job Image" class="w-5/6 md:w-2/10 rounded-lg" />
      <div class="mx-10 mt-5 text-white w-5/6 md:w-4/10">
        <h1 class="text-3xl mb-5">{{ job.name }}</h1>
        <p class="text-lg">{{ job.desciptionLong }}</p>
      </div>
    </div>
    <div class="text-white text-center mt-20 text-3xl mb-30">
      <p>Siia tuleb info varsti juurde...</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { jobs } from '../models/Portfolio';
  
  const route = useRoute();
  const jobId = route.params.jobId; 
  
  const job = ref(jobs.find(job => job.id === Number(jobId)));
  </script>
  