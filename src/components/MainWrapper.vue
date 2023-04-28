<template>
  <div>
    <TheNavbarVue :navBarItems="navBarItems" />
    <RouterView />
    <TheFooter />
  </div>
</template>
<script lang="ts" setup>
import TheNavbarVue from "./TheNavbar.vue";
import TheFooter from "./TheFooter.vue";
import { navBarItems } from "@/utils/data";
</script>
