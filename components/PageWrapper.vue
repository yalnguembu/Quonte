<template>
  <Home v-if="useSessionStore().isSigned" />
  <LandingPage v-else />
</template>

<script lang="ts" setup>
import { useSessionStore } from "@/stores/session";
import LandingPage from "~/pages/index.vue";
import Home from "~/pages/HomePage.vue";
</script>
