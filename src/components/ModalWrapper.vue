<template>
  <main
    class="fixed top-0 left-0 w-full h-full z-40 flex flex-row items-center justify-center bg-gray-500/25 backdrop-blur-[2px] transition duration-500 transalate-100"
  >
    <div
      ref="modal"
      class="shadow-lg bg-white rounded-lg p-4 md:p-8 md:2/3 lg:w-1/2 xl:w-2/5"
    >
      <slot @close="emit('close')" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useOutClickDetect } from "../utils/useOutClickDetect";

const modal = ref<HTMLDivElement>();

const emit = defineEmits(["close"]);

useOutClickDetect(modal, () => {
  console.log("test");
  // emit("close");
});
</script>
