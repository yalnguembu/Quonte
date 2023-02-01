<template>
  <div class="w-full">
    <TheNavbar />
    <RouterView class="mt-[4.5em]" />
  </div>
</template>
<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
</script>
