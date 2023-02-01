<template>
  <div>
    <ul class="border p-4 pt-0 mt-4 rounded">
      <RouterLink v-for="member in 4" :key="member" to="">
        <ProjectGroupMember member="Yal nguembu" />
      </RouterLink>
    </ul>
  </div>
</template>
<script setup lang="ts">
import ProjectGroupMember from "./ProjectGroupMember.vue";
</script>
