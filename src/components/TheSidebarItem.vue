<template>
  <li class="px-2 lg:px-[10px] xl:px-4">
    <RouterLink
      :to="{ name: props.path }"
      :alt="props.title"
      :class="[
        'w-full block py-3 mb-2 rounded-xl cursor-pointer text-gray-500 hover:bg-green-200 hover:text-green-150 lg:px-2',
        {
          'font-bold text-green-150': props.isActive,
        },
      ]"
    >
      <span class="align-middle xl:px-2">
        <slot name="iconLeft" />
      </span>
      <span class="ml-3 text-lg align-middle hidden xl:inline">
        {{ props.title }}</span
      >
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    path: string;
    title: string;
    isActive?: boolean;
  }>(),
  {
    isActive: false,
  }
);
</script>
