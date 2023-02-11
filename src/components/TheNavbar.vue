<template>
  <section
    class="fixed top-0 w-full border-b flex flex-row align-center z-20 justify-between bg-white px-2 py-3 xl:px-4"
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
      <button class="px-2 text-gray-500 hover:bg-gray-100 mr-3">
        <Notification />
      </button>
      <NavabarAccount />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import Notification from "./icons/NotificationIcon.vue";
import MenuButton from "./menus/MenuButton.vue";
import NavabarAccount from "./NavabarAccount.vue";
import TheBreadcrumbs from "./TheBreadcrumbs.vue";
</script>
