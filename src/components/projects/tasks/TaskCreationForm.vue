<template>
  <Transition class="">
    <ModalWrapper @close="emit('close')">
      <h1 class="font-bold text-2xl">New Task</h1>
      <form class="mt-6" @submit.prevent="create">
        <div class="grid grid-cols-1 gap-0 lg:gap-4 lg:grid-cols-2">
          <TextInput
            class="col-span-2"
            label="Title"
            v-model="task.title"
            placeholder="Enter the name of the project"
          />
          <SelectInput
            label="Priority"
            v-model="task.priority"
            placeholder="Choose the priority"
            :options="['Trivial', 'Minor', 'Major', 'Critical', 'Blocker']"
          />
          <SelectInput
            label="Category"
            v-model="task.category"
            placeholder="Choose the category"
            :options="['Task', 'Epic', 'Story', 'Ehancement', 'Bug']"
          />
          <TextAreaInput
            class="col-span-2"
            v-model="task.summary"
            label="Description"
            placeholder="Enter the description of the project"
          />
        </div>
        <div class="flex justify-end mt-4">
          <button
            class="px-4 py-2 bg-gray-200 rounded-lg"
            type="reset"
            @click="emit('close')"
          >
            Cancel
          </button>
          <BaseButton class="ml-2" title="Create" type="submit" />
        </div>
      </form>
    </ModalWrapper>
  </Transition>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import TextInput from "@/components/form/TextInput.vue";
import SelectInput from "@/components/form/SelectInput.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import TextAreaInput from "@/components/form/TextAreaInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useTaskStore } from "@/stores/task";
import { TASK_CATEGORIES, TASK_PRIORITY, TASK_STATUS } from "@/utils/enum";

const taskStore = useTaskStore();
const task = reactive({
  title: "",
  summary: "",
  status: TASK_STATUS.TODO,
  assignee: "",
  reporter: "",
  priority: TASK_PRIORITY.MINOR,
  category: TASK_CATEGORIES.STORY,
});

const emit = defineEmits(["close"]);

const create = (): void => {
  taskStore.create({
    id: 0,
    ...task,
    subTasks: [],
  });
  emit("close");
};
</script>
