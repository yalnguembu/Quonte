<template>
  <div class="md:px-16 mt-2">
    <header
      class="flex flex-row justify-between items-center py-4 border-b-2 border-gray-200"
    >
      <h1 class="font-bold text-xl">Groups</h1>
      <RouterLink
        to="group/new"
        class="py-2 px-4 border border-black hover:bg-emerald-400 hover:border-emerald-400 rounded"
      >
        New group
      </RouterLink>
    </header>
    <main>
      <div class="flex flex-row items-center justify-center h-96" v-if="false">
        <div class="w-1/2 p-8 text-center mt-4">
          <h1 class="font-bold text-xl">
            A group is a collection of several projects
          </h1>
          <p>
            You can manage your group member’s permissions and access to each
            project in the group.
          </p>
        </div>
      </div>
      <div v-else class="grid gap-8 md:grids-col-2 lg:grid-cols-3">
        <RouterLink
          v-for="project in 4"
          :key="project"
          :to="`group/${project}`"
        >
          <ProjectItem title="Team Front End" />
        </RouterLink>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";
</script>
