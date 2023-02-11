<template>
  <div
    class="rounded-lg border-2 p-4 bg-white flex flex-row items-center hover:shadow-xl"
  >
    <slot name="icon">
      <FolderIcon class="w-8 h-8" />
    </slot>
    <p class="font-bold text-xl py-2 ml-8">{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import FolderIcon from "../icons/FolderIcon.vue";

const props = defineProps<{
  name: string;
}>();
</script>
