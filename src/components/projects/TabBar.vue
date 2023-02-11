<template>
  <div class="flex flex-row">
    <ul class="flex text-gray-500 text-lg w-full border-b">
      <TabBarItem
        v-for="(tabBarItem, index) in tabBarItems"
        :key="index"
        :title="tabBarItem.title"
        :icon="tabBarItem.icon"
        :isActive="tabBarItem.title == props.activeTab"
        @click="emit('navigate', tabBarItem.title)"
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import TabBarItem from "./TabBarItem.vue";
import { tabBarItems } from "@/utils/data";

const props = defineProps<{
  activeTab: string;
}>();
const emit = defineEmits(["navigate"]);
</script>
