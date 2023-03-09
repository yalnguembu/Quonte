<template>
  <div class="w-full">
    <TheNavbar v-if="sessionStore.isSigned()" />
    <RouterView
      :class="[
        { 'pt-[68px]': sessionStore.isSigned() },
        ' h-full w-full absolute',
      ]"
    />
  </div>
</template>
<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import { useSessionStore } from "@/stores/auth

const sessionStore = useSessionStore();
</script>
