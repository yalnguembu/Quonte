<template>
  <div class="overflow-y-auto min-h-screen z-0">
    <div class="flex">
      <h1 class="text-xl font-bold">Annual</h1>

    </div>
    <section class="w-full mt-4">
      <div class="w-full mt-8 bg-white">
        <ProjectStatistics />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ProjectStatistics from "@/components/projects/ProjectStatistics.vue";
</script>
