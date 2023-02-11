<template>
  <div class="min-h-screen z-0 relative p-0 pt-4">
    <div v-if="activeLabel">
      <div class="flex flex-row justify-between items-center">
        <button
          @click="activeLabel = ''"
          class="hover:text-blue-400 text-gray-500"
        >
          <ArrowLeftIcon class="h-4 w-4 mr-3 align-middle" />
          <span class="text-lg">Go back</span>
        </button>
        <button
          class="rounded hover:ng-gray-200 text-gray-500 border border-dashed rounded border-gray-400 p-2 px-4"
        >
          <span>Add task</span>
          <PlusIcon class="h-4 w-4 align-middle" />
        </button>
      </div>
      <fieldset class="rounded-lg border mt-6 p-4">
        <legend
          :class="[
            'font-bold p-2 ml-4 rounded text-white',
            `bg-${activeLabel.color}`,
          ]"
        >
          {{ activeLabel.title }}
        </legend>
        <TasksList :tasks="labelStore.getTaskByLabel(activeLabel.id)" />
      </fieldset>
    </div>
    <div v-else>
      <div class="right-0 absolute -top-16 flex">
        <SearchInput
          v-model.trim="search"
          placeholder="Filter by title"
          class="inline mr-4 align-middle bg-white"
        />
        <BaseButton
          @click="toggleFormModalVisibility"
          class="inline"
          title="New Label"
        />
      </div>
      <section class="grid md:grid-cols-3 gap-4">
        <LabelItem
          v-for="label in labels"
          :title="label.title"
          :description="label.description"
          :color="label.color"
          :key="label.id"
          @click="activeLabel = label"
        />
      </section>
      <LabelCreationForm
        v-if="isCreationFormVisible"
        @close="toggleFormModalVisibility"
      />
      <TaskDetails v-if="false" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import type { Task } from "@/utils/type";
import { useLabelStore } from "@/stores/label";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import BaseButton from "@/components/BaseButton.vue";
import SearchInput from "@/components/form/SearchInput.vue";
import TaskDetails from "@/components/projects/tasks/TaskDetails.vue";
import TasksList from "@/components/projects/tasks/TasksList.vue";
import LabelCreationForm from "@/components/projects/labels/LabelCreationForm.vue";
import LabelItem from "@/components/projects/labels/LabelItem.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

const labelStore = useLabelStore();
const search = ref<string>("");
const activeLabel = ref<Task>(null);

const isCreationFormVisible = ref(false);
const labels = ref<Task[]>(labelStore.labels);
// const tasks = labelStore.getTaskByLabel(activeLabel.value.id) ?? [];
const filteredTaskByTitle = (title: string): Task[] =>
  labels.value.filter(
    (label: Task) => label.title.toLowerCase().search(title) !== -1
  );
const toggleFormModalVisibility = () =>
  (isCreationFormVisible.value = !isCreationFormVisible.value);

watch(search, (value) => {
  if (value && value.length > 2)
    labels.value = filteredTaskByTitle(value.toLowerCase());
  else labels.value = labelStore.labels;
});
</script>
