<template>
  <div>
    <div
      draggable="true"
      :class="[
        'relative w-full bg-white mb-4 p-3 rounded-lg border-b-4',
        borderColor,
      ]"
    >
      <TaskMenu
        v-if="isMenuVisible"
        @closeTaskMenu="toogleMenuVisibility"
        @showDetails="toogleDetailsModalVisibility"
        @edit="toogleEditModalVisibility"
        @delete="toogleDeleteModalVisibility"
        @addSubTask="toggleSubTaskCreationModalVisibility"
        @click="toogleMenuVisibility"
      />
      <div>
        <div class="flex flex-row justify-between items-start">
          <div>
            <div class="flex flex-row">
              <button class="text-gray-500 hover:text-emerald-400">
                <ArrowPointsOutIcon class="mr-2" />
              </button>
              <input
                readonly
                class="w-full bg-transparent text-lg font-700 outline-none"
                :value="props.task.title"
              />
            </div>
            <span :class="['text-sm font-500', catColor]">{{
              props.task.category
            }}</span>
          </div>
          <button @click="toogleMenuVisibility">
            <EllipsisVerticalIcon />
          </button>
        </div>
        <textarea
          readonly
          class="text-gray-500 mt-4 bg-transparent outline-none"
          :value="props.task.summary"
        />
        <div class="text-gray-500 mt-4 flex flex-row justify-between">
          <UserIcon class="align-middle" />
          <input
            readonly
            class="pl-2 w-full bg-transparent text-lg font-700 outline-none"
            :value="props.task.assignee || '-'"
          />
        </div>
        <div class="mt-2" v-if="props.task.subTasks?.length > 0">
          <div class="flex flex-row justify-between text-gray-500">
            <h3>Sub tasks</h3>
            <button title="show task" @click="toggleSubTaskListVisibility">
              <ChevronDownIcon class="align-middle ml-2" />
            </button>
          </div>
          <div class="rounded mt-2" v-if="isSubTaskListVisible">
            <SubTaskItem
              v-for="(task, index) in props.task.subTasks"
              :task="task"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
    <TaskDetails
      v-if="isDetailsModalVisible"
      :task="props.task"
      @close="toogleDetailsModalVisibility"
    />
    <TaskEditForm
      v-if="isEditModalVisible"
      :task="props.task"
      @close="toogleEditModalVisibility"
    />
    <SubTaskCreationForm
      v-if="isSubTaskCreationModalVisible"
      :parentId="props.task.id"
      @close="toggleSubTaskCreationModalVisibility"
    />
    <TaskDeleteModal
      v-if="isDeleteModalVisible"
      :task="props.task"
      @close="toogleDeleteModalVisibility"
    />
  </div>
</template>
<script setup lang="ts">
import UserIcon from "../../icons/UserIcon.vue";
import ChevronDownIcon from "../../icons/ChevronDownIcon.vue";
import EllipsisVerticalIcon from "../../icons/EllipsisVerticalIcon.vue";
import ArrowPointsOutIcon from "../../icons/ArrowPointsOutIcon.vue";
import TaskMenu from "./TaskMenu.vue";
import SubTaskItem from "./SubTaskItem.vue";
import TaskDetails from "./TaskDetails.vue";
import TaskEditForm from "./TaskEditForm.vue";
import SubTaskCreationForm from "./SubTaskCreationForm.vue";
import TaskDeleteModal from "./TaskDeleteModal.vue";
import { TASK_STATUS, TASK_CATEGORIES, TASK_PRIORITY } from "@/utils/enum";
import { computed, ref } from "vue";

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

const isMenuVisible = ref<boolean>(false);
const isDetailsModalVisible = ref<boolean>(false);
const isEditModalVisible = ref<boolean>(false);
const isDeleteModalVisible = ref<boolean>(false);
const isSubTaskCreationModalVisible = ref<boolean>(false);
const isSubTaskListVisible = ref<boolean>(false);

const borderColor = computed<string>(() => {
  switch (props.task.priority) {
    case TASK_PRIORITY.MINOR:
      return "border-amber-200";
    case TASK_PRIORITY.MAJOR:
      return "border-orange-500";
    case TASK_PRIORITY.CRITICAL:
      return "border-red-600";
    case TASK_PRIORITY.BLOCKER:
      return "border-pink-700";
    default:
      return "border-gray-200";
  }
});
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

const toogleMenuVisibility = () => (isMenuVisible.value = !isMenuVisible.value);
const toogleDetailsModalVisibility = () =>
  (isDetailsModalVisible.value = !isDetailsModalVisible.value);
const toogleEditModalVisibility = () =>
  (isEditModalVisible.value = !isEditModalVisible.value);
const toogleDeleteModalVisibility = () =>
  (isDeleteModalVisible.value = !isDeleteModalVisible.value);
const toggleSubTaskCreationModalVisibility = () =>
  (isSubTaskCreationModalVisible.value = !isSubTaskCreationModalVisible.value);
const toggleSubTaskListVisibility = () =>
  (isSubTaskListVisible.value = !isSubTaskListVisible.value);
</script>
