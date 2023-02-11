<template>
  <div>
    <div class="relative w-full bg-gray-100 mb-4 p-3 rounded-lg border-b-4">
      <SubTaskMenu
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
        <div class="mt-4 text-gray-500 flex flex-row justify-between">
          <UserIcon class="align-middle" />
          <input
            readonly
            class="pl-2 w-full bg-transparent text-lg font-700 outline-none"
            :value="props.task.assignee || '-'"
          />
        </div>
      </div>
    </div>
    <TaskDetails
      v-if="isDetailsModalVisible"
      :task="props.task"
      @close="toogleDetailsModalVisibility"
    />
    <!-- <TaskEditForm
      v-if="isEditModalVisible"
      :task="props.task"
      @close="toogleEditModalVisibility"
    />
    <TaskDeleteModal
      v-if="isDeleteModalVisible"
      :task="props.task"
      @close="toogleDeleteModalVisibility"
    /> -->
  </div>
</template>
<script setup lang="ts">
import UserIcon from "../../icons/UserIcon.vue";
import EllipsisVerticalIcon from "../../icons/EllipsisVerticalIcon.vue";
import SubTaskMenu from "./SubTaskMenu.vue";
import TaskDetails from "./TaskDetails.vue";
import TaskEditForm from "./TaskEditForm.vue";
import TaskDeleteModal from "./TaskDeleteModal.vue";
import { TASK_STATUS, TASK_CATEGORIES, TASK_PRIORITY } from "@/utils/enum";
import { computed, ref } from "vue";

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

const isMenuVisible = ref<boolean>(false);
const isDetailsModalVisible = ref<boolean>(false);
const isEditModalVisible = ref<boolean>(false);
const isDeleteModalVisible = ref<boolean>(false);
const isSubTaskCreationModalVisible = ref<boolean>(false);

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
</script>
