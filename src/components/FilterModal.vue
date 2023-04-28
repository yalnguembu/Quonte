<template>
  <div
    class="bg-white dark:bg-gray-800 absolute top-12 right-0 w-[16rem] p-4 rounded max-h-2/3"
  >
    <h4 class="font-bold dark:text-gray-200 text-lg mb-2">Filter</h4>
    <h5
      class="font-lg dark:text-gray-200 text-md border-b border-b-gray-700 py-1.5 mb-2"
    >
      Creation date
    </h5>
    <div>
      <button
        class="flex justify-between items-center w-full p-1 rounded hover:bg-gray-900"
      >
        <span class="font-sm text-gray-500">Date</span>
        <ChevronDownIcon
          class="w-3.5 h-3.5 dark:stroke-gray-300 ml-2 rotate-180"
        />
      </button>
      <button
        class="flex justify-between items-center w-full p-1 rounded hover:bg-gray-900"
      >
        <span class="font-sm text-gray-500">Date</span>
        <ChevronDownIcon class="w-3.5 h-3.5 dark:stroke-gray-300 ml-2" />
      </button>
    </div>

    <h5
      class="font-lg dark:text-gray-200 text-md border-b border-b-gray-700 py-1.5 my-2"
    >
      Tags
    </h5>
    <div>
      <TextInput label="tags" v-model="tags" placeholder="Select tags..." />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TextInput from "./form/TextInput.vue";
import ChevronDownIcon from "./icons/ChevronDownIcon.vue";

const tags = ref("");
</script>
