<template>
  <main class="mx-auto max-w-screen-xl xl:pt-6">
    <div class="text-center py-8">
      <div>
        <img
          src="@/assets/images/me.png"
          alt=""
          class="rounded-full bg-gray-500 object-cover h-28 w-28 mx-auto"
        />
      </div>
      <h1 class="text-2xl font-bold mt-4">{{ organisationId }}</h1>
      <p class="text-gray-500 mt-2">Like a nova we make more powerfull</p>
    </div>
    <div
      class="p-4 mt-8 w-full flex flex-row flex-wrap justify-between items-center md:mx-auto md:w-4/5 lg:w-1/2"
    >
      <RouterLink
        :to="`${organisationId}/project`"
        class="w-full mb-4 lg:w-2/5"
      >
        <div
          class="w-full border-2 p-10 text-center rounded hover:border-emerald-500"
        >
          <img
            src="@/assets/images/ticket-alt.svg"
            class="w-16 h-16 mt-4 inline-block"
          />
          <p class="font-black text-xl mt-4">Projects</p>
        </div>
      </RouterLink>
      <RouterLink :to="`${organisationId}/group`" class="w-full mb-4 lg:w-2/5">
        <div
          class="w-full border-2 p-10 text-center rounded hover:border-emerald-500"
        >
          <img
            src="@/assets/images/user.svg"
            class="w-16 h-16 mt-4 inline-block"
          />
          <p class="font-black text-xl mt-4">Groups</p>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const organisationId = ref(route.params.organisationId);
</script>
