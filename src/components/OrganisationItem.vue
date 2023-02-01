<template>
  <button
    class="w-full h-full border-2 border-gray-200 hover:border-emerald-500 hover:border-2 rounded px-8 py-4 flex flex-row flex-wrap mt-8 items-center"
  >
    <div class="w-full lg:w-1/4">
      <slot name="icon">
        <FolderIcon class="text-gray-600" />
      </slot>
    </div>
    <div class="w-full lg:w-3/4 text-left lg:p-4">
      <h2 class="font-bold text-xl">{{ props.title }}</h2>
    </div>
  </button>
</template>
<script setup lang="ts">
import FolderIcon from "./icons/FolderIcon.vue";

interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>
