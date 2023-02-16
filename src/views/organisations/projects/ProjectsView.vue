<template>
  <div class="p-4 h-full bg-gray-100 md:p-8">
    <h1 class="text-gray-700">Projects</h1>

    <div class="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProjectItem
        name="new project"
        class="border-dashed hover:cursor-pointer"
        @click.stop="toggleCreationFormVisibility"
      >
        <template #icon>
          <PlusIcon class="text-gray-600 w-12 h-12" />
        </template>
      </ProjectItem>
      <RouterLink
        :to="{ name: 'project', params: { projectId: 'TRAVEL-TEXT' } }"
      >
        <ProjectItem name="young it" />
      </RouterLink>
    </div>
    <ProjectCreationForm
      v-if="isCreationFormVisible"
      @close="toggleCreationFormVisibility"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ProjectItem from "@/components/projects/ProjectItem.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import ProjectCreationForm from "@/components/projects/ProjectCreationForm.vue";

const isCreationFormVisible = ref<boolean>(false);
const toggleCreationFormVisibility = (): void => {
  isCreationFormVisible.value = !isCreationFormVisible.value;
};
</script>
