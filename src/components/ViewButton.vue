<template>
  <div class="relative">
    <button
      class="outline-2 rounded flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <GridIcon
        v-if="view === NOTE_ITEM.CARD"
        class="inline dark:stroke-gray-100"
      />
      <ListIcon
        v-if="view === NOTE_ITEM.LIST"
        class="inline dark:stroke-gray-100"
      />
      <ChevronDownIcon
        class="w-3 h-3 transition inline stroke-0 fill-gray-500 dark:fill-gray-100"
      />
    </button>
    <div
      v-if="false"
      class="bg-gray-100 dark:bg-gray-800 w-40 rounded absolute left-0 top-8 dark:text-gray-100 hover:cursor-pointer"
    >
      <ul>
        <li
          @click="emit('change', NOTE_ITEM.CARD)"
          class="p-2 px-4 hover:bg-gray-700 rounded"
        >
          <GridIcon class="inline dark:stroke-gray-100" />
          <span class="ml-4">Card</span>
        </li>
        <li
          @click="emit('change', NOTE_ITEM.SUMMARY)"
          class="p-2 px-4 hover:bg-gray-700 rounded"
        >
          <GridIcon class="inline dark:stroke-gray-100" />
          <span class="ml-4">Summary</span>
        </li>
        <li
          @click="emit('change', NOTE_ITEM.LIST)"
          class="p-2 px-4 hover:bg-gray-700 rounded"
        >
          <ListIcon class="inline dark:stroke-gray-100" />
          <span class="ml-4">List</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NOTE_ITEM } from "@/utils/enum";
import GridIcon from "./icons/SquaresIcon.vue";
import ListIcon from "./icons/ListIcon.vue";
import ChevronDownIcon from "./icons/ChevronDownIcon.vue";

const emit = defineEmits(["change"]);
defineProps({
  view: {
    type: String,
    required: true,
  },
});
// const emit = defineEmits({
//   change: () => {
//     view: NOTE_ITEM;
//   },
// });
</script>
