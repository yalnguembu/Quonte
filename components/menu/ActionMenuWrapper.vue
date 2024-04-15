<template>
  <div
    ref="actionMenu"
    class="shadow-lg bg-white border dark:border-gray-700 dark:bg-gray-800 w-40 rounded absolute right-0 top-12 dark:text-gray-100 hover:cursor-pointer"
  >
    <ul class="p-2">
      <slot />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useDetectOutsideClick } from "@/utils/outsideClick";
import { ref } from "vue";

const actionMenu = ref<HTMLDivElement | undefined>();

const emit = defineEmits(["close"]);

useDetectOutsideClick(actionMenu, () => {
  emit("close");
});
</script>
