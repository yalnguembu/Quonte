<template>
  <ul class="w-full h-full pt-6 border-r">
    <TheSidebarItem
      v-for="sideBarMenuItem in sideBarMenuItems"
      :key="sideBarMenuItem.title"
      :title="sideBarMenuItem.title"
      :path="sideBarMenuItem.path"
      :isActive="activeTab === `${sideBarMenuItem.path}`"
    >
      <template #iconLeft>
        <component :is="sideBarMenuItem.icon" class="w-6 h-6" />
      </template>
    </TheSidebarItem>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import TheSidebarItem from "./TheSidebarItem.vue";
import { sideBarMenuItems } from "@/utils/data";

const route = useRoute();
const activeTab = computed<string>(() => route.name as string);
</script>
