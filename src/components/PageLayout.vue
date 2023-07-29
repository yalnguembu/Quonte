<template>
  <Home v-if="useSessionStore().isSigned" />
  <LandingPage v-else />
</template>

<script lang="ts" setup>
import { useSessionStore } from "@/stores/session";
import LandingPage from "@/views/LandingPage.vue";
import Home from "@/views/HomePage.vue";
</script>
