<template>
  <ul class="flex flex-row text-gray-500 px-2">
    <li v-for="route in routes" :key="route">
      <RouterLink :to="`/${route}`" class="inline-block p-2">{{
        route.slice(0, 22)
      }}</RouterLink>
      <span v-if="route !== routes[routes.length - 1]">\</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const routes = computed(() => route.path.substring(1).split("/"));
</script>
