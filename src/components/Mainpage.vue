
<template>
  <div class="min-h-screen md:pt-40 text-white text-center">
    <div class="m-10">
      <h1 class="font-extrabold my-line-height lg:text-7xl md:text-lg">{{ msg }}</h1>
      <p class="mt-8 lg:text-3xl my-line-height ">
        Sinu ettevõte imago ühtsus nii sotsiaalmeedias, veebilehel, e-poes kui ka prinditud materjalil.
      </p>
    </div>
    <div class="flex flex-row justify-center gap-8">
      <a href="./teenused"><button class="button-y">Teenused</button></a>
      <a href="./tehtud-tööd"><button class="button-y">Tehtud tööd</button></a>
    </div>
      
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: String }>();

</script>