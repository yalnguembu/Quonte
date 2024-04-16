<template>
  <div class="relative">
    <button
      @click.stop="toggleIsActionMenuVisible"
      class="outline-2 rounded flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <ArrowUpDown class="inline dark:stroke-gray-100 h-6 w-6" />
    </button>

    <ActionMenuWrapper
      v-if="isActionMenuVisible"
      @close="toggleIsActionMenuVisible"
    >
      <span class="block p-2 mb-2 text-bold border-b dark:border-b-gray-900"
        >Creation date</span
      >
      <li
        @click="emit('sort', SORT_TYPE.ASC)"
        class="p-2 hover:bg-gray-700 rounded flex justify-between"
      >
        <span class="text-left">Ascendant</span>
        <ChevronDownIcon
          class="inline dark:stroke-gray-100 rotate-180 h-[1.2rem] w-[1.2rem] align-middle"
        />
      </li>
      <li
        @click="emit('sort', SORT_TYPE.DESC)"
        class="p-2 hover:bg-gray-700 rounded flex justify-between"
      >
        <span class="text-left">Descendant</span>
        <ChevronDownIcon
          class="inline dark:stroke-gray-100 h-[1.2rem] w-[1.2rem] align-middle"
        />
      </li>
    </ActionMenuWrapper>
  </div>
</template>
<script lang="ts" setup>
import { shallowRef } from "vue";
import { SORT_TYPE } from "@/utils/enum";
import ChevronDownIcon from "../icons/ChevronDownIcon.vue";
import ArrowUpDown from "../icons/ArrowUpDown.vue";
import ActionMenuWrapper from "../menu/ActionMenuWrapper.vue";

const emit = defineEmits(["sort"]);
defineProps({
  sort: {
    type: String,
    required: true,
  },
});

const isActionMenuVisible = shallowRef<boolean>(false);

const toggleIsActionMenuVisible = () =>
  (isActionMenuVisible.value = !isActionMenuVisible.value);
</script>
