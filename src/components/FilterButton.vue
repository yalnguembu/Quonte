<template>
  <div class="w-full relative">
    <ButtonWrapper @click="toggleModalVisibility">
      <div class="flex items-center py-1">
        <FilterIcon class="dark:stroke-none fill-gray-100" />
        <p class="dark:text-gray-100 ml-4">Filter</p>
        <ChevronDownIcon class="w-3.5 h-3.5 dark:stroke-gray-300 ml-2" />
      </div>
    </ButtonWrapper>
    <FilterModal v-if="isModadalVisible" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ButtonWrapper from "./ButtonWrapper.vue";
import FilterModal from "./FilterModal.vue";
import FilterIcon from "./icons/FilterIcon.vue";
import ChevronDownIcon from "./icons/ChevronDownIcon.vue";

const isModadalVisible = ref<boolean>(false);

const toggleModalVisibility = () =>
  (isModadalVisible.value = !isModadalVisible.value);
</script>
