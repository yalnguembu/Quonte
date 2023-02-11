<template>
  <section class="grid grid-cols-3 gap-x-4">
    <div
      class="border-r pr-4"
      @drop.prevent="dropToTodo"
      @dragover.prevent="() => {}"
    >
      <h1 class="text-xl text-gray-500">Todos</h1>
      <div class="mt-4">
        <TaskItem
          v-for="task in todosTasks"
          :task="task"
          :key="task.id"
          @dragstart="onDrag($event, task.id)"
        />
      </div>
    </div>
    <div
      class="border-r pr-4"
      @drop.prevent="dropToInProgress"
      @dragover.prevent="() => {}"
    >
      <h1 class="text-xl text-gray-500">In progress</h1>
      <div class="mt-4">
        <TaskItem
          v-for="task in inProgressTasks"
          :task="task"
          :key="task.id"
          @dragstart="onDrag($event, task.id)"
        />
      </div>
    </div>
    <div @drop.prevent="dropToDone" @dragover.prevent="() => {}">
      <h1 class="text-xl text-gray-500">Done</h1>
      <div class="mt-4">
        <TaskItem
          v-for="task in donesTasks"
          :task="task"
          :key="task.id"
          @dragstart="onDrag($event, task.id)"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TaskItem from "./TaskItem.vue";
import { useTaskStore } from "@/stores/task";
import { TASK_CATEGORIES, TASK_PRIORITY, TASK_STATUS } from "@/utils/enum";

interface Task {
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
}

const taskStore = useTaskStore();
const props = defineProps<{
  tasks: {
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
  }[];
}>();

const todosTasks = computed<Task[]>(() =>
  props.tasks.filter((task: Task) => task.status === TASK_STATUS.TODO)
);
const inProgressTasks = computed<Task[]>(() =>
  props.tasks.filter((task: Task) => task.status === TASK_STATUS.IN_PROGRESS)
);
const donesTasks = computed<Task[]>(() =>
  props.tasks.filter((task: Task) => task.status === TASK_STATUS.DONE)
);

const onDrag = (event: any, taskId: number | string) => {
  event.dataTransfer.setData("taskId", taskId);
};

const dropToTodo = (event: any) =>
  taskStore.update(event.dataTransfer.getData("taskId"), {
    status: "TODO",
  });
const dropToInProgress = (event: any) =>
  taskStore.update(event.dataTransfer.getData("taskId"), {
    status: "IN_PROGRESS",
  });
const dropToDone = (event: any) =>
  taskStore.update(event.dataTransfer.getData("taskId"), {
    status: "DONE",
  });
// console.log(props.tasks);
</script>
