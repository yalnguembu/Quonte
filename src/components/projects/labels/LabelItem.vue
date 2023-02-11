<template>
  <button
    :class="[
      'p-4 text-left text-white rounded-lg hover:opacity-80 transition',
      `bg-${props.color}`,
    ]"
  >
    <p class="mt-4 text-2xl">{{ props.title }}</p>
    <p class="mt-2 text-gray-100">{{ props.description }}</p>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  color: string;
}>();
</script>
