
<template>
  <div class="min-h-screen bg-dark-900">
    <h1 class="text-4xl text-center pt-6 text-yellow-200">{{ msg }}</h1>

  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: String }>();

</script>