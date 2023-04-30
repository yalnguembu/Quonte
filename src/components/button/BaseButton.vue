<template>
  <div class="inline-block">
    <button :class="theme" :type="type">
      <slot name="icon-left" data-test="base-button-icon-left" />
      <span data-test="base-button-title">{{ title }}</span>
      <slot name="icon-rigth" data-test="base-button-icon-rigth" />
    </button>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import { ButtonType } from "@/utils/type";

defineProps({
  title: {
    type: String,
    require: true,
  },
  theme: {
    type: String,
    default:
      "px-6 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg",
  },
  type: {
    type: String as PropType<ButtonType>,
    default: ButtonType.button,
  },
});
</script>
