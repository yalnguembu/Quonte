<template>
  <li class="px-2 lg:px-[10px] xl:px-4">
    <RouterLink
      :to="{ name: props.path }"
      :alt="props.title"
      :class="[
        'w-full block px-4 py-3 mb-2 rounded-lg cursor-pointer text-gray-500 hover:bg-emerald-400 hover:text-black lg:px-2',
        {
          'font-600 bg-emerald-200 text-black': props.isActive,
        },
      ]"
    >
      <span class="align-middle mr-3">
        <slot name="iconLeft" />
      </span>
      <span class="ml-4 text-xl align-middle hidden xl:inline">
        {{ props.title }}</span
      >
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
interface Props {
  path: string;
  title: string;
  isActive?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isActive: false,
});
</script>
