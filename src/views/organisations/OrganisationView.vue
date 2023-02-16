<template>
  <div class="flex flex-row">
    <div class="hidden lg:block w-[65px] h-full xl:w-1/6">
      <TheSidebar />
    </div>
    <div class="w-full lg:w-[calc(100%-65px)] xl:w-5/6">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import TheSidebar from "@/components/TheSidebar.vue";
</script>
