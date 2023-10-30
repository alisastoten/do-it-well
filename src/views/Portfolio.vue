<template>
  <Portfolio :msg="msg" />
</template>

<script setup lang="ts">
import Portfolio from '../components/Portfolio.vue';
defineProps<{ msg: String }>();

</script>