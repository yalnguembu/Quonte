<template>
  <Transition class="">
    <ModalWrapper @close="emit('close')">
      <h1 class="font-bold text-2xl">Delete</h1>
      <p class="text-gray-500">
        You are going to delete this task form the projects.Continue Deleting?
      </p>
      <div class="flex justify-end mt-4">
        <button
          class="px-4 py-2 bg-gray-200 rounded-lg"
          type="reset"
          @click="emit('close')"
        >
          Cancel
        </button>
        <BaseButton class="ml-2" title="Delete" @click="remove" />
      </div>
    </ModalWrapper>
  </Transition>
</template>
<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import { useTaskStore } from "@/stores/task";
import type { TASK_CATEGORIES, TASK_PRIORITY, TASK_STATUS } from "@/utils/enum";

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
const tastsStore = useTaskStore();

const remove = (): void => {
  tastsStore.remove(props.task.id);
  emit("close");
};
</script>
