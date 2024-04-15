<template>
  <div class="w-full relative">
    <ButtonWrapper @click.stop="toggleModalVisibility">
      <div class="flex items-center py-1">
        <FilterIcon class="dark:stroke-none dark:fill-gray-100" />
      </div>
    </ButtonWrapper>
    <KeepAlive>
      <FilterModal
        v-if="isModadalVisible"
        @close="() => isModadalVisible && toggleModalVisibility()"
      />
    </KeepAlive>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ButtonWrapper from "./ButtonWrapper.vue";
import FilterModal from "../modal/FilterModal.vue";
import FilterIcon from "../icons/FilterIcon.vue";

const isModadalVisible = ref<boolean>(false);

const toggleModalVisibility = () =>
  (isModadalVisible.value = !isModadalVisible.value);
</script>
