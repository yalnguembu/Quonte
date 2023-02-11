<template>
  <div class="p-4 h-full bg-gray-100 md:p-8 mt-14">
    <h1 class="text-gray-700 text-lg">Organisations</h1>

    <div class="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      <OrganisationItem
        @click="toggleCreationFormVisibility"
        class="w-full mt-4"
        name="new organisation"
      >
        <template #icon>
          <PlusIcon class="text-gray-600 w-12 h-12" />
        </template>
      </OrganisationItem>
      <RouterLink
        v-for="organisation in organisations"
        :key="organisation.id"
        :to="`/organisations/${organisation.id}`"
      >
        <OrganisationItem class="w-full mt-4" :name="organisation.name" />
      </RouterLink>
    </div>
    <OrganisationCreationForm v-if="isCreationFormVisible" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useOrganisationStore } from "@/stores/organisation";
import OrganisationItem from "@/components/organisations/OrganisationItem.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import OrganisationCreationForm from "@/components/organisations/OrganisationCreationForm.vue";

const organisations = ref(useOrganisationStore().organisations);
const isCreationFormVisible = ref<boolean>(false);
const toggleCreationFormVisibility = (): void => {
  isCreationFormVisible.value = !isCreationFormVisible.value;
};
</script>
