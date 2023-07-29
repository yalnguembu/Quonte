<template>
  <div class="max-w-full truncate mr-2 mt-2" :data-test="`tag-item-${id}`">
    <span
      class="block rounded-full relative px-4 py-1 hover:font-700 hover:text-gray-100 hover:bg-gray-500 bg-gray-200 dark:text-gray-100 dark:bg-gray-700 dark:hover:text-gray-900 dark:hover:bg-gray-400 w-full text-ellipsis overflow-hidden"
    >
      {{ capitalizeWholeText(title) }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { capitalizeWholeText } from "@/utils/string";

defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>
