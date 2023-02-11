<template>
  <div class="flex flex-row">
    <div class="w-[65px] h-full xl:w-1/6">
      <TheSidebar />
    </div>
    <div class="w-[calc(100%-65px)] xl:w-5/6">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import TheSidebar from "@/components/TheSidebar.vue";
</script>
