<template>
    <MainPage :msg="msg" />
  </template>
  
  <script setup lang="ts">
  import MainPage from '../components/Mainpage.vue';
  defineProps<{ msg: String }>();
  </script>