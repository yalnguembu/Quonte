<template>
  <div>
    <ul
      ref="menu"
      class="absolute z-10 rounded-lg shadow-2xl bg-white text-gray-500 top-12 right-5 pt-2"
    >
      <TaskMenuItem
        v-for="item in tasks"
        :key="item.label"
        :item="item"
        @click="emit('call', item.emit)"
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useOnClickOutSide } from "@/utils/useOnClickOutside"
import PencilIcon from "@/components/icons/PencilIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import SquareStackIcon from "@/components/icons/SquareStackIcon.vue";
import InformationIcon from "@/components/icons/InformationIcon.vue";
import TaskMenuItem from "./TaskMenuItem.vue";

const tasks = [
  {
    label: "Add sub task",
    icon: SquareStackIcon,
    emit: "addSubTask",
  },
  {
    label: "Details",
    icon: InformationIcon,
    emit: "showDetails",
  },
  {
    label: "Edit",
    icon: PencilIcon,
    emit: "edit",
  },
  {
    label: "Delete",
    icon: TrashIcon,
    emit: "delete",
  },
];

const emit = defineEmits<{
  (e: "call", value: string): void;
  (e: "closeTaskMenu"): void;
}>();
const menu = ref<HTMLElement>();

useOnClickOutSide(menu, () => {
  emit("closeTaskMenu");
});
</script>
