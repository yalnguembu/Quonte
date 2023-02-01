<template>
  <section
    class="fixed top-0 w-full flex flex-row align-center z-10 justify-between px-2 py-3 bg-gray-100 z-index-10 lg:px-4"
  >
    <div class="flex p-0">
      <MenuButton />
      <RouterLink to="/" class="ml-2 w-10">
        <img src="../assets/logo.png" alt="bespace logo" class="w-full" />
      </RouterLink>
      <TheBreadcrumbs class="hidden lg:flex" />
    </div>
    <div class="flex">
      <button class="px-2 text-gray-500 hover:bg-gray-100">
        <Notification />
      </button>
      <NavabarAccount />
    </div>
  </section>
</template>
<script setup>
import Notification from "./icons/NotificationIcon.vue";
import MenuButton from "../components/MenuButton.vue";
import TheBreadcrumbs from "../components/TheBreadcrumbs.vue";
import NavabarAccount from "../components/NavabarAccount.vue";
</script>
