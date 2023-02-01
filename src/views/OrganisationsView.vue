<template>
  <div class="md:px-16 mt-16">
    <header
      class="flex flex-row justify-between items-center py-4 border-b-2 border-gray-200"
    >
      <h1 class="font-bold text-xl">Organisation</h1>
      <RouterLink
        to="new"
        class="py-2 px-4 border border-black hover:bg-emerald-400 hover:border-emerald-400 rounded"
      >
        New organisation
      </RouterLink>
    </header>
    <main>
      <div class="flex flex-row items-center justify-center" v-if="true">
        <div class="w-1/2 p-8 text-center mt-4">
          <img
            class="mx-auto md:w-2/3 lg:w-full"
            src="@/assets/images/succes_project_isometric_illustration-04.jpg"
            alt="welcom"
          />
          <p class="text-xl text-gray-700">
            It seems that you are not part of any organization.
          </p>
        </div>
      </div>
      <div v-else>
        <OrganisationsList />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import OrganisationsList from "../components/OrganisationsList.vue";
</script>
