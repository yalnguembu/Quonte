<template>
  <li class="p-2 dark:hover:bg-gray-700 hover:bg-gray-100 rounded">
    <component v-if="icon" :is="icon" class="inline dark:stroke-gray-100" />
    <span class="ml-4">{{ label }}</span>
  </li>
</template>
<script lang="ts" setup>
import type { PropType, VueElement } from "vue";

defineProps({
  label: {
    type: String,
  },
  icon: {
    type: Object as PropType<VueElement>,
  },
});
</script>
