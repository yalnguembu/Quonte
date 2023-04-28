<template>
  <li data-test="menu-item">
    <RouterLink :to="path" :title="title" :class="theme.item">
      <component
        data-test="menu-item-icon"
        :is="icon"
        v-if="icon"
        :class="theme.icon"
      />
      <span :class="theme.label">{{ label }}</span>
    </RouterLink>
  </li>
</template>
<script lang="ts" setup>
import type { VueElement, PropType } from "vue";

defineProps({
  title: {
    type: String,
  },
  label: {
    type: String,
  },
  path: {
    type: String,
    required: true,
  },
  icon: {
    type: Object as PropType<VueElement>,
  },
  actived: {
    type: Boolean,
  },
  theme: {
    type: Object as PropType<{ icon?: string; label?: string; item?: string }>,
    default: () => ({
      icon: "align-middle",
      label: "",
      item: "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200",
    }),
  },
});
</script>
