<template>
  <div class="w-full">
    <TheNavbar v-if="isUserSigned" />
    <RouterView
      :class="[{ 'pt-[68px]': isUserSigned }, ' h-full w-full absolute']"
    />
  </div>
</template>
<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import { ref } from "vue";
import { useSessionStore } from "@/stores/session";
const isUserSigned = ref(useSessionStore().isSigned());
</script>
