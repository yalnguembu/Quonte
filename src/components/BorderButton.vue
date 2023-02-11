<template>
  <button
    class="w-full border-2 border-gray-300 rounded p-8 text-center flex flex-row items-center justify-center flex-wrap mt-8 hover:border-emerald-600"
  >
    <div class="w-full items-center" v-if="position === 'top'">
      <slot name="icon" />
    </div>
    <div class="w-1/3" v-if="position === 'left'">
      <slot name="iconLeft" />
    </div>
    <div class="text-left mt-4 lg:mt-0 lg:p-4 lg:w-2/3">
      <h2 class="font-bold text-xl">{{ props.title }}</h2>
      <p>{{ props.description }}</p>
    </div>
    <div class="w-1/3" v-if="position === 'rigth'">
      <slot name="iconLeft" />
    </div>
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description?: string;
    position?: string;
  }>(),
  { position: "top" }
);
</script>
