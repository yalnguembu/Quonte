<template>
  <div>
    <div
        :class="[
        'w-full bg-white dark:bg-gray-900 min-h-screen block',
        { 'lg:flex': false },
      ]"
    >
<!--      <TheSidebar-->
<!--          v-if="false"-->
<!--          :user="{-->
<!--          name: 'sessionStore.session.username',-->
<!--          picture: 'sessionStore.session.picture',-->
<!--        }"-->
<!--          :items="sideBarItems"-->
<!--      />-->
      <ClientOnly>
        <TheNavbarVue :navBarItems="navBarItems" />
      </ClientOnly>
<!--      <TheNavbarVue v-else :navBarItems="navBarItems" />-->
      <RouterView
          :class="{
          'h-full overflow-hidden border lg:w-5/6 xl:w-4/5': false,
        }"
      />
    </div>
    <TheFooter />
  </div>
</template>
<script lang="ts" setup>
import TheNavbarVue from "~/components/TheNavbar.vue";
import TheFooter from "~/components/TheFooter.vue";
import { navBarItems, sideBarItems } from "@/utils/data";
// import { useSessionStore } from "@/stores/session";
// import TheSidebar from "~/components/TheSidebar.vue";
// const sessionStore = useSessionStore();
</script>
