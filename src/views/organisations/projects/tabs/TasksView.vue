<template>
  <div class="overflow-y-auto min-h-screen z-0">
    <div class="right-0 absolute -top-16 flex">
      <SearchInput
        v-model.trim="search"
        placeholder="Filter by title"
        class="inline mr-4 align-middle bg-white"
      />
      <BaseButton
        @click="toggleFormModalVisibility"
        class="inline"
        title="New task"
      />
    </div>
    <div class="mt-2">
      <TasksList :tasks="tasks" />
    </div>
    <TaskCreationForm
      v-if="isCreationFormVisible"
      @close="toggleFormModalVisibility"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useTaskStore } from "@/stores/task";
import type { TASK_STATUS, TASK_CATEGORIES, TASK_PRIORITY } from "@/utils/enum";
import BaseButton from "@/components/BaseButton.vue";
import SearchInput from "@/components/form/SearchInput.vue";
import TasksList from "@/components/projects/tasks/TasksList.vue";
import TaskCreationForm from "@/components/projects/tasks/TaskCreationForm.vue";

interface Task {
  id: number;
  title: string;
  summary: string;
  status: TASK_STATUS;
  category: TASK_CATEGORIES;
  priority: TASK_PRIORITY;
  reporter: string;
  assignee: string;
  subTasks: object;
}

const taskStore = useTaskStore();
const search = ref<string>("");

const isCreationFormVisible = ref(false);
const tasks = ref<Task[]>(taskStore.tasks);

const filteredTaskByTitle = (title: string): Task[] =>
  taskStore.tasks.filter(
    (task: Task) => task.title.toLowerCase().search(title) !== -1
  );
const toggleFormModalVisibility = () =>
  (isCreationFormVisible.value = !isCreationFormVisible.value);

watch(search, (value) => {
  if (value && value.length > 2)
    tasks.value = filteredTaskByTitle(value.toLowerCase());
  else tasks.value = taskStore.tasks;
});
</script>
