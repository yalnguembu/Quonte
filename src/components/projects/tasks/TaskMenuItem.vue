<template>
  <li>
    <button class="block text-left px-4 py-2 hover:bg-gray-100 w-full">
      <component :is="props.item.icon" class="mr-4" />
      <span class="pr-4">{{ props.item.label }}</span>
    </button>
  </li>
</template>
<script setup lang="ts">
interface Props {
  item: {
    label: string;
    icon: any;
  };
}
const props = defineProps<Props>();
</script>
