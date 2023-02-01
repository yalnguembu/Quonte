<template>
  <aside
    class="h-full w-full bg-white overflow-x-hidden border-r-2 py-4 text-gray-500"
  >
    <ul>
      <li class="px-1 lg:px-4">
        <RouterLink
          :to="{ name: 'tabOverview' }"
          class="block px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-emerald-200 font-bold text-align-center hover:text-black lg:px-2"
        >
          <HomeIcon class="align-middle mr-3" />
          <span class="align-middle hidden lg:inline"> Overview</span>
        </RouterLink>
      </li>
      <li class="px-1 lg:px-4">
        <RouterLink
          :to="{ name: 'tabLabels' }"
          class="block px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-green-200 lg:px-2"
        >
          <TagIcon class="align-middle mr-3" />
          <span class="align-middle hidden lg:inline">Labels</span>
        </RouterLink>
      </li>
      <li class="px-1 lg:px-4">
        <RouterLink
          :to="{ name: 'tabTasks' }"
          class="block px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-green-200 lg:px-2"
        >
          <TaskIcon class="align-middle mr-3" />
          <span class="hidden lg:inline">Tasks</span>
        </RouterLink>
      </li>
      <li class="px-1 lg:px-4">
        <RouterLink
          :to="{ name: 'tabMembers' }"
          class="block px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-green-200 lg:px-2"
        >
          <UserGroupIcon class="align-middle mr-3" />
          <span class="hidden lg:inline">Members</span>
        </RouterLink>
      </li>
      <li class="px-1 lg:px-4">
        <RouterLink
          :to="{ name: 'tabStatistics' }"
          class="block px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-green-200 lg:px-2"
        >
          <PieChartIcon class="align-middle mr-3" />
          <span class="hidden lg:inline">Statistics</span>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import TagIcon from "./icons/TagIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import TaskIcon from "./icons/TaskIcon.vue";
import UserGroupIcon from "./icons/UserGroupIcon.vue";
import PieChartIcon from "./icons/PieChartIcon.vue";
</script>
