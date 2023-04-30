<template>
  <div
    ref="actionMenu"
    class="border shadow-lg bg-white dark:border-gray-700 dark:bg-gray-800 absolute top-12 right-0 w-[20rem] z-10 p-4 rounded lg:max-h-[28rem] overflow-y-auto"
  >
    <h4 class="font-bold dark:text-gray-200 text-lg mb-2">Filter</h4>
    <div class="mb-4">
      <h5
        class="font-lg dark:text-gray-200 text-md border-b dark:border-b-gray-700 py-1.5 my-2 mb-3"
      >
        Tags
      </h5>
      <div>
        <TagInput v-model="tags" :tags="tagsList" placeholder="Choose a tag" />
      </div>
    </div>
    <div>
      <h5
        class="font-lg dark:text-gray-200 text-md border-b dark:border-b-gray-700 py-1.5 mb-2"
      >
        Creation date
      </h5>
      <div>
        <div data-test="start-date-input" class="mb-2">
          <DateInput
            label="Start"
            v-model="startDate"
            placeholder="Select a date"
          />
        </div>
        <div data-test="end-date-input" class="mb-2">
          <DateInput
            label="End"
            v-model="endDate"
            placeholder="Select a date"
          />
        </div>
      </div>
    </div>
    <BaseButton
      title="Filter"
      data-test="submit-button"
      :type="ButtonType.submit"
      class="w-full mt-4 sticky bottom-0"
      theme="w-full py-1 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
      @click="filter"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from "vue";
import { useDetectOutsideClick } from "@/utils/outsideClick";
import DateInput from "./form/DateInput.vue";
import TagInput from "./form/TagInput.vue";
import { ButtonType, type Tag } from "@/utils/type";
import BaseButton from "./button/BaseButton.vue";

const emit = defineEmits(["close", "filter"]);

const tagsList = [
  {
    id: "1234-4321-5678-abcd",
    title: "e2e tests",
  },
  {
    id: "4321-4321-5678-abcd",
    title: "cypress",
  },
  {
    id: "abcd-4321-5678-abcd",
    title: "testing",
  },
];

const tags = shallowRef<Tag[]>([]);
const startDate = shallowRef("");
const endDate = shallowRef("");
const actionMenu = ref<HTMLDivElement | undefined>();

const filter = () => {
  emit("filter", {
    tags,
    startDate,
    endDate,
  });
};

useDetectOutsideClick(actionMenu, () => {
  emit("close");
});
</script>
