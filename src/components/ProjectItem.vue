<template>
  <button
    class="w-full h-full border-2 border-gray-200 hover:border-emerald-500 hover:border-2 rounded px-8 py-2 flex flex-row flex-wrap mt-8 items-center"
  >
    <div class="w-full text-center md:w-1/4 lg:w-full lg:text-center">
      <slot name="icon">
        <FolderIcon class="text-gray-600 w-16 h-16 md:w-16 md:h-16" />
      </slot>
    </div>
    <div
      class="w-full md:w-3/4 text-center md:text-left lg:text-center lg:w-full lg:p-4"
    >
      <h2 class="font-bold text-xl">{{ props.title }}</h2>
    </div>
  </button>
</template>
<script setup lang="ts">
import FolderIcon from "./icons/FolderIcon.vue";

interface Props {
  title: string;
  description?: string;
}
const props = defineProps<Props>();
</script>
