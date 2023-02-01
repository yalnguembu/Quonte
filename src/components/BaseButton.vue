<template>
  <div class="w-full block h-8">
    <button class="rounded-md py-2 px-4 bg-green-400 float-right">
      <slot name="icon" />
      {{ props.title }}
    </button>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>
