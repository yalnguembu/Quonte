<template>
  <div>
    <div
      :class="[
        'bg-white dark:bg-gray-900 w-full bg-white dark:bg-gray-900',
        { 'lg:flex': sessionStore.isSigned },
      ]"
    >
      <TheSidebar
        v-if="sessionStore.isSigned"
        :user="{
          name: sessionStore.session.username,
          picture: sessionStore.session.picture,
        }"
        :items="sideBarItems"
      />
      <TheNavbarVue v-else :navBarItems="navBarItems" />
      <RouterView
        :class="sessionStore.isSigned && 'lg:w-4/5 h-full overflow-hidden'"
      />
    </div>
    <TheFooter :isUserSign="sessionStore.isSigned" />
  </div>
</template>
<script lang="ts" setup>
import TheNavbarVue from "./TheNavbar.vue";
import TheFooter from "./TheFooter.vue";
import { navBarItems, sideBarItems } from "@/utils/data";
import { useSessionStore } from "@/stores/session";
import TheSidebar from "./TheSidebar.vue";
const sessionStore = useSessionStore();
</script>
