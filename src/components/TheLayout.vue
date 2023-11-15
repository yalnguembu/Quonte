<template>
  <div>
    <div
      :class="[
        'w-full bg-white dark:bg-gray-900 h-screen',
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
        :class="{
          'h-full overflow-hidden lg:w-5/6 xl:w-4/5': sessionStore.isSigned,
        }"
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
