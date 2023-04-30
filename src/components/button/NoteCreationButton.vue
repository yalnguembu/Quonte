<template>
  <BaseButton
    title="New note"
    class="fixed bottom-7 right-5 xl:right-20 shadow-xl"
  >
    <template #icon-left>
      <PlusIcon class="dark:stroke-gray-800 mr-4 mb-1 align-middle" />
    </template>
  </BaseButton>
</template>
<script lang="ts" setup>
import PlusIcon from "../icons/PlusIcon.vue";
import BaseButton from "./BaseButton.vue";
</script>
