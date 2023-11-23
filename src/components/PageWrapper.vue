<template>
  <HomePage v-if="useSessionStore().isSigned" />
  <LandingPage v-else />
</template>

<script lang="ts" setup>
import { useSessionStore } from "@/stores/session";
import {defineAsyncComponent} from "vue";

const HomePage = defineAsyncComponent(() => import("@/views/HomePage.vue"));
const LandingPage = defineAsyncComponent(() => import("@/views/LandingPage.vue"));
</script>