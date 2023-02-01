<template>
  <main class="w-3/4 h-full mx-auto">
    <header
      class="flex flex-row justify-between items-center py-6 border-b-2 border-gray-200"
    >
      <h1 class="font-bold text-xl">
        <UserAvatar path="" name="" class="inline mr-2" /> {{ organisationId }}
        <button>
          <PincelSquareIcon class="align-middle ml-2" />
        </button>
      </h1>
      <div>
        <SearchBar />
        <RouterLink
          to="new"
          class="py-3 px-4 border-2 border-gray-700 hover:bg-emerald-400 hover:border-emerald-400 rounded"
        >
          Add member
        </RouterLink>
      </div>
    </header>
    <section class="mt-8">
      <UserGroupDataGrid class="w-full" />
    </section>
  </main>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import PincelSquareIcon from "../components/icons/PincelSquareIcon.vue";
import UserGroupDataGrid from "../components/UserGroupDataGrid.vue";
import UserAvatar from "../components/UserAvatar.vue";
import SearchBar from "../components/SearchBar.vue";

const route = useRoute();
const organisationId = ref(route.params.organisationId);
</script>
