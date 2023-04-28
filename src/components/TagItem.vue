<template>
  <div class="max-w-full truncate mr-2 mt-2">
    <a
      :href="`/tags/${id}`"
      class="block rounded-full relative px-4 py-1 hover:font-700 hover:text-gray-100 hover:bg-gray-500 bg-gray-200 dark:text-gray-100 dark:bg-gray-700 dark:hover:text-gray-900 dark:hover:bg-gray-400 w-full text-ellipsis overflow-hidden"
    >
      {{ title }}
    </a>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
