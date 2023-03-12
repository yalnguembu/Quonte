<template>
  <section
    class="fixed shadow top-0 w-full flex flex-row align-center z-20 justify-between bg-white px-2 py-3 xl:px-4"
  >
    <div class="flex p-0">
      <MenuButton />
      <RouterLink to="/" class="ml-2">
        <img src="../assets/logo.png" alt="bespace logo" class="w-10 inline" />
        <span class="text-2xl font-bold align-middle">Bespace</span>
      </RouterLink>
      <TheBreadcrumbs class="hidden lg:flex" />
    </div>
    <div class="flex">
      <button
        class="p-2 rounded mr-2 border border-transparent hover:border-gray-200"
      >
        <Notification class="stroke-gray-500" />
      </button>
      <NavabarAccount email="email" />
    </div>
  </section>
</template>
<script setup lang="ts">
import Notification from "./icons/NotificationIcon.vue";
import MenuButton from "./menus/MenuButton.vue";
import NavabarAccount from "./NavabarAccount.vue";
import TheBreadcrumbs from "./TheBreadcrumbs.vue";
import { useUserStore } from "@/stores/user";
import { useSessionStore } from "@/stores/session";

const sessionStore = useSessionStore();
const userStore = useUserStore();

// const email =
//   sessionStore.session !== null
//     ? await userStore.getAllInformations(sessionStore.session?.id)
//     : "";
</script>
