<template>
  <div class="px-4 md:px-16 mt-12 mx-auto max-w-screen-xl xl:pt-6">
    <header
      class="flex flex-row justify-between items-center py-4 border-b-2 border-gray-200"
    >
      <h1 class="font-bold text-xl">Projects</h1>
      <RouterLink :to="{ name: 'newProject' }">
        <BaseButton title="New project" />
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
          v-for="project in projects"
          :key="project.name"
          :to="{ name: 'tabOverview', params: { id: project.name } }"
        >
          <ProjectItem
            :title="project.name"
            description="application web de gestion des conge"
          />
        </RouterLink>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";
import BaseButton from "../components/BaseButton.vue";
const projects = [
  {
    name: "Gestion des conges",
  },
  {
    name: "Gestion des creservations des billets de voyage",
  },
];
</script>
