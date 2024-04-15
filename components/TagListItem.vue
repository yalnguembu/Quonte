<template>
  <RouterLink
    :to="`/tags/${id}`"
    :data-test="`tag-item-${id}`"
    class="'bg-white w-full h-full hover:shadow-lg rounded-lg border dark:border-gray-700 hover:bg-gray-100/50 dark:bg-gray-900/50 dark:hover:bg-gray-800 flex flex-col justify-between',"
  >
    <div
      class="w-full p-4 flex-col justify-center overflow-hidden truncate max-h-24 border-b dark:border-b-gray-700 max-h-40"
    >
      <h4
        data-test="tag-title"
        class="font-bold dark:text-gray-100 text-lg mt-2 w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
      >
        {{ title }}
      </h4>
    </div>
    <div class="p-4 mb-3 max-h-40">
      <p
        data-test="tag-description"
        class="font-sm dark:text-gray-300 text-gray-500 break-word text-lg mt-2 w-full text-ellipsis whitespace-pre-all overflow-hidden"
      >
        {{ description }}
      </p>
    </div>
  </RouterLink>
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
  description: {
    type: String,
  },
});
</script>
