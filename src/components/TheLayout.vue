<template>
  <div>
    <div
      :class="[
        'w-full bg-white dark:bg-gray-900',
        { 'lg:flex h-screen': sessionStore.isSigned },
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
      <TheNavbarVue v-else :navBarItems="navBarItems"  v-memo="[sessionStore.isSigned]" />
      <RouterView
        :class="{
          'h-full overflow-hidden lg:w-5/6 xl:w-4/5': sessionStore.isSigned,
        }"
      />
    </div>
    <TheFooter v-memo="[sessionStore.isSigned]" :isUserSign="sessionStore.isSigned" />
  </div>
</template>
<script lang="ts" setup>
import TheFooter from "./TheFooter.vue";
import { navBarItems, sideBarItems } from "@/utils/data";
import { useSessionStore } from "@/stores/session";
import {defineAsyncComponent} from "vue";

const TheSidebar = defineAsyncComponent(() => import("@/components/TheSidebar.vue"));
const TheNavbarVue = defineAsyncComponent(() => import("@/components/TheNavbar.vue"));

const sessionStore = useSessionStore();
</script>
