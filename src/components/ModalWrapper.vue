<template>
  <main
    class="animate-fadeIn fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center z-40 bg-gray-500/25 backdrop-blur-[2px]"
  >
    <div ref="modal">
      <slot @close="emit('close')" />
    </div>
  </main>
</template>
<style>
.animate-fadeIn {
  animation-name: fadeIn;
  animation-duration: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { useOnClickOutSide } from "../utils/useOnClickOutside";

const modal = ref<HTMLDivElement>();

const emit = defineEmits(["close"]);

useOnClickOutSide(modal, () => {
  emit("close");
});
</script>
