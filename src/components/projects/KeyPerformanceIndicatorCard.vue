<template>
  <div class="p-6 rounded-lg font-bold bg-white border border-gray-200">
    <h1 class="text-3xl mb-4 mt-2">
      <span>
        <component class="w-8 h-8 text-emerald-500" :is="props.icon" />
      </span>
      <span class="align-middle ml-2">{{ props.value }}</span>
    </h1>
    <p class="ml-1 text-gray-500">{{ props.title }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  value: number | string;
  icon: any;
}
const props = defineProps<Props>();
</script>
