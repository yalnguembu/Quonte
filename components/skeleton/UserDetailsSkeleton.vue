<template>
  <div class="animate-pulse p-4">
    <div
      class="rounded-full h-32 w-32 mx-auto my-8 bg-gray-100 dark:bg-gray-800"
    />
    <div
      v-for="index in 3"
      :key="index"
      class="border-b border-b-gray-500 pt-2 pb-3 mb-3"
    >
      <div class="h-2 w-24 rounded bg-gray-100 dark:bg-gray-600" />
      <div class="h-4 w-full rounded bg-gray-100 dark:bg-gray-600 mt-4" />
    </div>
  </div>
</template>
