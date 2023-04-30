<template>
  <div
    class="animate-pulse border dark:border-gray-700 w-full p-4"
    v-if="randomNumber === 2"
  >
    <div class="rounded mt-8 w-5/6 h-5 bg-gray-100 dark:bg-gray-700" />
    <div class="flex flex-wrap mt-6 max-h-20">
      <div
        class="rounded-full w-52 h-7 bg-gray-100 dark:bg-gray-700 inline mr-3"
      />
      <div
        class="rounded-full w-28 h-7 bg-gray-100 dark:bg-gray-700 inline mr-3"
      />
    </div>
    <div class="rounded w-5/6 h-4 bg-gray-100 dark:bg-gray-700 mt-6" />
    <div class="rounded w-full h-4 bg-gray-100 dark:bg-gray-700 mt-4" />
    <div class="rounded w-1/2 h-4 bg-gray-100 dark:bg-gray-700 mt-4" />

    <div class="rounded w-2/5 h-4 bg-gray-100 dark:bg-gray-700 mt-10" />
  </div>
  <div
    class="border animate-pulse dark:border-gray-700 w-full p-4"
    v-else-if="randomNumber === 1"
  >
    <div class="rounded mt-8 w-3/5 h-5 bg-gray-100 dark:bg-gray-700" />
    <div class="rounded w-5/6 h-4 bg-gray-100 dark:bg-gray-700 mt-6" />
    <div class="rounded w-1/2 h-4 bg-gray-100 dark:bg-gray-700 mt-4" />

    <div class="rounded w-2/5 h-4 bg-gray-100 dark:bg-gray-700 mt-10" />
  </div>
  <div class="border animate-pulse dark:border-gray-700 w-full p-4" v-else>
    <div class="rounded mt-8 w-4/5 h-5 bg-gray-100 dark:bg-gray-700" />
    <div class="flex flex-wrap mt-6 max-h-20">
      <div
        class="rounded-full w-28 h-7 bg-gray-100 dark:bg-gray-700 inline mr-3"
      />
      <div
        class="rounded-full w-40 h-7 bg-gray-100 dark:bg-gray-700 inline mr-3 mt-2"
      />
    </div>
    <div class="rounded w-2/5 h-4 bg-gray-100 dark:bg-gray-700 mt-10" />
  </div>
</template>

<script lang="ts" setup>
const randomNumber: number = Math.round(Math.random() * 3);
</script>
