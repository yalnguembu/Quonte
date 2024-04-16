<template>
  <div class="p-2 border-b dark:border-b-gray-700">
    <BaseButton
      v-for="item in items"
      :key="item.index"
      @click="$emit('navigate', item.index)"
      :title="item.label"
      :theme="`px-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 ${
        activeTab === item.index && 'text-green-400 dark:text-green-200'
      }`"
    />
  </div>
</template>
<script lang="ts" setup>
import BaseButton from "../button/BaseButton.vue";

withDefaults(
  defineProps<{
    items: { index: number; label: string; active?: boolean }[];
    activeTab: number;
  }>(),
  {
    items: () => [],
    activeTab: 0,
  }
);

defineEmits<{
  (event: "navigate", index: number): void;
}>();
</script>
