<template>
  <div>
    <div
      class="rounded-lg p-4 border dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50"
    >
      <div
        :class="[
          'h-28 w-full rounded-md flex items-center justify-center',
          getColor(),
        ]"
      >
        <span class="text-4xl">@</span>
      </div>
      <h5
        class="text-bold text-xl text-green-800 dark:text-green-100 border-b-2 border-b-gray-200 dark:border-b-gray-800 py-4"
      >
        {{ title }}
      </h5>
      <p class="text-gray-500 py-3">{{ description }}</p>
      <LinkWrapper
        :path="link"
        :title="`Write us on ${title}`"
        is-external
        class="px-3 py-2 block text-sm text-center rounded-lg border w-full mt-2 border-gray-800 dark:border-gray-100 text-green-800 dark:text-green-100 hover:border-transparent hover:bg-green-800 hover:text-white dark:hover:bg-green-200 dark:hover:text-black hover:shadow-md"
      >
        Send message
      </LinkWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { THEME } from "@/utils/enum";
import LinkWrapper from "./LinkWrapper.vue";
import type { PropType } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  theme: {
    type: String as PropType<THEME>,
    required: true,
  },
});
const getColor = () => {
  switch (props.theme) {
    case THEME.GREEN:
      return "bg-green-200 dark:bg-green-800/50 text-green-800 dark:text-green-100";
    case THEME.BLUE:
      return "bg-blue-200 dark:bg-blue-500/25 text-blue-800 dark:text-blue-100";
    case THEME.YELLOW:
      return "bg-yellow-200 dark:bg-yellow-400/25 text-yellow-800 dark:text-yellow-100";
    default:
      return "";
  }
};
</script>
