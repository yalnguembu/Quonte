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
      </div>
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import ModalWrapper from "../../ModalWrapper.vue";
import type { TASK_STATUS } from "@/utils/enum";

const props = defineProps<{
  task: {
    id: number;
    title: string;
    summary: string;
    status: TASK_STATUS;
    reporter: string;
    assignee: string;
  };
}>();
const emit = defineEmits(["close"]);
</script>
