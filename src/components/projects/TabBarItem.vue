<template>
  <li class="">
    <button
      :class="[
        'block py-2 px-3',
        {
          'font-bold text-black border-b-2 border-gray-400': props.isActive,
        },
      ]"
    >
      <span>
        <component :is="props.icon" />
      </span>
      <span class="ml-3 hidden xl:inline align-middle"> {{ props.title }}</span>
    </button>
  </li>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  icon: any;
  isActive: Boolean;
}>();
</script>
