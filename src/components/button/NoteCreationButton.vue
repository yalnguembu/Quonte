<template>
  <BaseButton
    @mouseenter="toogleIsHover"
    @mouseleave="toogleIsHover"
    :title="isHover ? 'New note' : ''"
    class="fixed bottom-20 animate-bounce right-5 xl:right-20 shadow-xl lg:bottom-7"
  >
    <template #icon-left>
      <PlusIcon
        :class="['dark:stroke-gray-800 mb-1 align-middle', { 'mr-4': isHover }]"
      />
    </template>
  </BaseButton>
</template>
<script lang="ts" setup>
import { shallowRef } from "vue";
import PlusIcon from "../icons/PlusIcon.vue";
import BaseButton from "./BaseButton.vue";

const isHover = shallowRef<boolean>(false);

const toogleIsHover = () => (isHover.value = !isHover.value);
</script>
