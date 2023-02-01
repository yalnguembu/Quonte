<template>
  <div class="w-full grid gap-8 md:grids-col-2 lg:grid-cols-2">
    <RouterLink
      v-for="project in 4"
      :key="project"
      :to="`novaSoftware${project}`"
    >
      <ProjectItem title="NOVA SOFTWARE" />
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
</script>
