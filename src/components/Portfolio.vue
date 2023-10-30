
<template>
  <div class="min-h-screen bg-dark-900 text-white text-center">
    <div class="flex">
      <div class="w-3/12 h-screen-md custom-gradient m-3 py-5 rounded-2xl">
        <h1 class="text-4xl text-xl text-yellow-200 mb-2">{{ msg }}</h1>
        <p>
          More text coming soon.
        </p>
      </div>
      <div class="w-9/12 bg-pink-900 m-3 py-5 rounded-2xl">
        <p>Some other text here</p>
      </div>
    </div>
  </div>
  

</template>

<script setup lang="ts">
defineProps<{ msg: String }>();
</script>