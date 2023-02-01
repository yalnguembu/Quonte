<template>
  <main class="w-full flex flex-row flex-wrap mx-auto max-w-screen-xl xl:pt-6">
    <section class="w-full text-center lg:w-1/2">
      <h1 class="text-2xl font-bold mt-4">Welcom to Bespace</h1>
      <p class="text-gray-700 mt-2">
        Project management made easy, better project
      </p>
      <img
        class="mx-auto md:w-2/3 lg:w-full"
        src="@/assets/images/succes_project_isometric_illustration-04.jpg"
        alt="welcom"
      />
    </section>
    <section class="w-full lg:w-1/2 lg:border-l pt-4">
      <div
        v-if="false"
        class="h-full w-1/2 mx-auto flex flex-col justify-center items-center"
      >
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
      <div v-else class="w-full px-4 lg:mx-auto lg:w-4/5">
        <h1 class="text-xl font-bold">Organisations</h1>
        <HomeOrganisationsList :projects="[]" />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import BorderButton from "../components/BorderButton.vue";
import HomeOrganisationsList from "../components/HomeOrganisationsList.vue";
</script>
