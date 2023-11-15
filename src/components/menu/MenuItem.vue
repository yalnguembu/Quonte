<template>
  <li
    :data-test="`menu-item-${replaceSpaceBySlashToLowercase(title ?? '')}`"
    class="relative"
  >
    <RouterLink :to="path" :title="title" :class="theme.item">
      <div
        v-if="actived"
        class="absolute transition duration-300 w-12 left-2.5 rounded-full h-4 -bottom-2 bg-green-700 dark:bg-green-200 lg:top-4 lg:-left-2.5 lg:w-4 lg:bottom-0 lg:h-1/2"
      />
      <component
        data-test="menu-item-icon"
        :is="icon"
        v-if="icon"
        :class="[theme.icon]"
      />
      <span :class="[theme.label, { 'font-bold': actived }]">{{ label }}</span>
    </RouterLink>
  </li>
</template>
<script lang="ts" setup>
import type { VueElement, PropType } from "vue";
import { replaceSpaceBySlashToLowercase } from "@/utils/string";

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
      icon: "align-middle h-3 w-3",
      label: "px-4",
      item: "block text-md text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200 text-center",
    }),
  },
});
</script>
