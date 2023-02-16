<template>
  <div
    class="w-full shadow bg-white rounded-xl p-4 flex flex-row flex-wrap hover:border-emerald-300 hover:shadow-lg"
  >
    <div class="w-full text-center lg:w-full lg:text-center p-4">
      <slot name="icon">
        <FolderIcon class="text-gray-600 w-12 h-12" />
      </slot>
    </div>
    <div class="w-full text-center lg:py-4">
      <h2 class="font-bold text-lg">{{ props.name }}</h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import FolderIcon from "../icons/FolderIcon.vue";

const props = defineProps<{
  name: string;
  description?: string;
}>();
</script>
