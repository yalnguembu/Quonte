<template>
  <div>
    <button
      v-bind="$attrs"
      class="rounded-md py-2 px-4 bg-green-400 float-right"
    >
      <slot name="icon" />
      {{ props.title }}
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
