<template>
  <div class="flex items-center py-0" data-tes="user-avatar">
    <div
      class="rounded-full w-10 h-10 bg-gray-200 border dark:border-gray-500 dark:bg-gray-700 flex items-center justify-center"
    >
      <img
        v-if="picture"
        :src="picture"
        :alt="`${username}'s picture`"
        title="user picture"
        class="rounded-full w-full object-cover"
      />
      <p
        v-else
        class="text-2xl text-green-400 dark:text-green-200"
        data-test="user-avatar-letter"
      >
        {{ username.toUpperCase().substring(0, 1) }}
      </p>
    </div>
    <p
      class="text-gray-700 dark:text-gray-300 text-lg ml-3 hidden lg:inline xl:ml-6"
      data-test="user-avatar-name"
    >
      {{ username }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  username: {
    type: String,
    required: true,
    default: "",
  },
  picture: {
    type: String,
  },
});
</script>
