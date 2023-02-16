<template>
  <main
    class="w-full h-full bg-gray-100 flex flex-col justify-center items-center mx-auto xl:pt-6"
  >
    <div class="py-4 w-full lg:w-2/5">
      <h1 class="text-3xl font-bold mt-4">You are welcome</h1>
      <p class="text-gray-600 mt-2">
        Select an organisation to start working with
      </p>
    </div>
    <div v-if="organisations" class="w-full lg:w-2/5 mt-4">
      <RouterLink
        v-for="organisation in organisations"
        :key="organisation.id"
        :to="`/organisations/${organisation.id}`"
      >
        <OrganisationItem class="w-full mt-4" :name="organisation.name" />
      </RouterLink>
    </div>
    <div
      v-else
      class="h-full w-1/2 mx-auto flex flex-col justify-center items-center"
    >
      <img
        class="mx-auto md:w-2/3 lg:w-full"
        src="@/assets/images/succes_project_isometric_illustration-04.jpg"
        alt="welcom"
      />
      <p class="text-gray-500 text-xl text-center">
        It seems that you are not part of any organization
      </p>
      <RouterLink to="organisation/new" class="block my-4">
        <BorderButton title="Create organisation" position="left">
          <template #iconLeft>
            <img
              class="mx-auto md:w-2/3 lg:w-full"
              src="@/assets/images/succes_project_isometric_illustration-04.jpg"
              alt="welcom"
            />
          </template>
        </BorderButton>
      </RouterLink>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useOrganisationStore } from "@/stores/organisation";
import OrganisationItem from "@/components/organisations/OrganisationItem.vue";

const organisations = ref(useOrganisationStore().organisations);
</script>
