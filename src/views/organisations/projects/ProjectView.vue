<template>
  <div class="p-4 lg:p-8 bg-gray-100 min-h-full max-h-conten">
    <TabBar @change="handelTab" @navigate="handelTab" :activeTab="tab" />
    <div class="mt-4">
      <component :is="activeTab" class="p-0" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import TabBar from "@/components/projects/TabBar.vue";
import OverviewView from "./tabs/OverviewView.vue";
import LabelsView from "./tabs/LabelsView.vue";
import TasksView from "./tabs/TasksView.vue";
import StatisticsView from "./tabs/StatisticsView.vue";
import MembersView from "./tabs/MembersView.vue";

const tab = ref<string>("Overview");
const activeTab = computed(() => {
  switch (tab.value) {
    case "Labels":
      return LabelsView;
    case "Tasks":
      return TasksView;
    case "Statistics":
      return StatisticsView;
    case "Members":
      return MembersView;
    default:
      return OverviewView;
  }
});
const handelTab = (value: string) => (tab.value = value);
</script>
