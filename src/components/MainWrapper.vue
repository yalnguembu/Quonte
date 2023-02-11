<template>
  <div class="w-full">
    <TheNavbar />
    <RouterView class="pt-[68px] h-full w-full absolute" />
  </div>
</template>
<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
</script>
