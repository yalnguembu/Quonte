<template>
  <ModalWrapper>
    <section
      class="p-6 shadow bg-white dark:bg-gray-900 self-center flex flex-col mx-auto justify-between items-between rounded-lg lg:w-[30rem] lg:h-[17rem]"
    >
      <h2
        class="text-3xl font-bold border-b border-b-100 dark:border-b-gray-600 dark:text-gray-100 pb-4"
      >
        Sign Out
      </h2>
      <div class="h-full">
        <p class="text-gray-500 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora
          id labore cum asperiores fuga saepe!
        </p>
      </div>
      <div class="flex justify-end">
        <ButtonWrapper class="px-0 py-0" @click="$emit('close')">
          <span
            class="bg-gray-300 dark:bg-gray-600 px-6 py-3 dark:text-gray-100 rounded"
            >Cancel</span
          >
        </ButtonWrapper>
        <ButtonWrapper class="px-0 py-0 ml-4">
          <span class="bg-red-500 dark:bg-red-600 px-6 py-3 text-white rounded"
            >Yes sign'out</span
          >
        </ButtonWrapper>
      </div>
    </section>
  </ModalWrapper>
</template>
<script setup lang="ts">
import ModalWrapper from "../ModalWrapper.vue";
import ButtonWrapper from "../button/ButtonWrapper.vue";

defineEmits<{
  (event: "close"): void;
}>();
</script>
