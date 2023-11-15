<template>
  <div
    class="w-screen h-screen bg-gray-500/25 backdrop-blur-sm flex flex-row justify-end fixed top-0 left-0 z-30 transition duration-500"
  >
    <slot ref="modal" />
  </div>
</template>
<script lang="ts" setup>
import { useDetectOutsideClick } from "@/utils/outsideClick";
import { ref } from "vue";

const emit = defineEmits(["close"]);
const modal = ref<HTMLDivElement | undefined>();

useDetectOutsideClick(modal, () => emit("close"));
</script>
