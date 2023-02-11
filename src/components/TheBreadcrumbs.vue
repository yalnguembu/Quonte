<template>
  <ul class="flex flex-row text-gray-500 px-2">
    <template v-for="(route, index) in routes" :key="index">
      <li>
        <RouterLink :to="route.path" class="inline-block p-2">{{
          route.label.slice(0, 22)
        }}</RouterLink>
      </li>
      <li class="p-2" v-if="index < routes.length - 1">\</li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const routes = computed(() => {
  if (route.params.organisationId) {
    if (route.params.projectId) {
      return [
        {
          label: route.params.organisationId,
          path: "../",
        },
        {
          label: route.params.projectId,
          path: {
            name: "project",
            projectId: route.params.projectId,
          },
        },
      ];
    } else if (route.params.teamId) {
      return [
        {
          label: route.params.organisationId,
          path: "../",
        },
        {
          label: route.params.teamId,
          path: {
            name: "team",
            teamId: route.params.teamId,
          },
        },
      ];
    }
    return [
      {
        label: route.params.organisationId,
        path: "./",
      },
    ];
  }
  return [];
});
</script>
