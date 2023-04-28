<template>
  <div class="flex items-center" data-tes="user-avatar">
    <div
      class="rounded-full w-10 h-10 bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
    >
      <img
        v-if="picture"
        :src="picture"
        :alt="`${name}'s picture`"
        title="user picture"
        class="rounded-full w-full object-cover"
      />
      <p
        v-else
        class="text-2xl text-green-400 dark:text-green-200"
        data-test="user-avatar-letter"
      >
        {{ name.toUpperCase().substring(0, 1) }}
      </p>
    </div>
    <p
      class="text-gray-500 text-lg ml-2 hidden lg:inline"
      data-test="user-avatar-name"
    >
      {{ name }}
    </p>
    <ChevronDownIconVue class="w-4 h-4 stroke-2 stroke-gray-500" />
  </div>
</template>
<script setup lang="ts">
import ChevronDownIconVue from "./icons/ChevronDownIcon.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
});
</script>
