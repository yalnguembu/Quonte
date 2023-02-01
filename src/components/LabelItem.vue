<template>
  <button
    class="border-2 text-center flex flex-col items-center p-4 rounded-lg hover:border-emerald-500"
  >
    <ProjectIcon class="w-14 h-14" />
    <span class="mt-4 text-xl">{{ props.title }}</span>
    <span class="mt-2 text-gray-500">6 task(s)</span>
  </button>
</template>
<script setup lang="ts">
import ProjectIcon from "./icons/ProjectIcon.vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>
