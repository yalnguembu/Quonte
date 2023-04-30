<template>
  <div class="bg-green-100 dark:bg-blue-900/50 p-2 rounded-lg">
    <div class="flex items-center">
      <InformationIcon
        class="dark:stroke-blue-400 stroke-blue-500 mr-2 align-middle"
      />
      <h3 class="underline font-bold text-lg text-blue-500 dark:text-blue-400">
        {{ title }}
      </h3>
    </div>
    <p class="text-gray-500 p-2">
      {{ summary }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import InformationIcon from "./icons/InformationIcon.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});
</script>
