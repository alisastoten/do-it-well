<template>
    <MainPage :msg="msg" />
  </template>
  
  <script setup lang="ts">
  import MainPage from '../components/Services.vue';
  defineProps<{ msg: String }>();
  </script>