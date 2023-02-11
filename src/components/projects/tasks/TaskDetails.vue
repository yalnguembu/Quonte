<template>
  <ModalWrapper @close="emit('close')">
    <h1 class="font-bold text-2xl">Details</h1>
    <div class="mt-2">
      <div class="">
        <p>
          <span class="text-gray-500 mr-3">Title :</span>
          <span class="w-full bg-transparent text-lg font-700 outline-gray-400">
            {{ props.task.title }}
          </span>
        </p>
        <p class="mt-3">
          <span class="text-gray-500 mr-3">Category :</span>
          <span
            :class="[
              'ttext-lg font-700 outline-gray-400 mr-3 w-full bg-transparent',
              catColor,
            ]"
          >
            {{ props.task.category }}
          </span>
        </p>
        <p class="mt-3">
          <span class="text-gray-500 mr-3">Priority :</span>
          <span
            :class="[
              'text-lg font-700 outline-gray-400 mr-3 w-full bg-transparent',
              catColor,
            ]"
          >
            {{ props.task.priority }}
          </span>
        </p>
        <p class="mt-3">
          <span class="text-gray-500 mr-3">Summary :</span>
          <span
            class="text-lg font-700 outline-gray-400 mr-3 w-full bg-transparent mt-2"
          >
            {{ props.task.summary }}
          </span>
        </p>
        <p class="mt-3">
          <span class="text-gray-500 mr-3">Assignee :</span>
          <span
            class="'text-gray-500 text-lg font-700 outline-gray-400 mr-3 w-full bg-transparent',"
          >
            {{ props.task.assignee || `-` }}
          </span>
        </p>
        <p class="mt-3">
          <span class="text-gray-500 mr-3">Subs tasks :</span>
          <span>
            {{ props.task.subTasks?.length }}
          </span>
        </p>
        <ul class="pl-4 text-gray-500 mt-3">
          <li
            class="p-1 hover:text-blue-400 cursor-pointer"
            v-for="(task, index) in props.task.subTasks"
            :key="index"
          >
            <ChevronRightIcon class="mr-2 align-middle h-2 w-2" />
            <span>{{ task.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import { computed } from "vue";
import ChevronRightIcon from "../../icons/ChevronRightIcon.vue";
import ModalWrapper from "../../ModalWrapper.vue";
import { TASK_CATEGORIES, TASK_PRIORITY, TASK_STATUS } from "@/utils/enum";

const props = defineProps<{
  task: {
    id: number;
    title: string;
    summary: string;
    status: TASK_STATUS;
    category: TASK_CATEGORIES;
    priority: TASK_PRIORITY;
    reporter: string;
    assignee: string;
    subTasks: Array<{
      id: number;
      title: string;
      summary: string;
      status: TASK_STATUS;
      reporter: string;
      assignee: string;
    }>;
  };
}>();
const emit = defineEmits(["close"]);
const catColor = computed<string>(() => {
  switch (props.task.category) {
    case TASK_CATEGORIES.STORY:
      return "text-pink-700";
    case TASK_CATEGORIES.ENHANCEMENT:
      return "text-emerald-400";
    case TASK_CATEGORIES.BUG:
      return "text-red-600";
    case TASK_CATEGORIES.EPIC:
      return "text-blue-600";
    default:
      return "text-gray-500";
  }
});
</script>
