<template>
  <section class="w-full h-fit absolute flex flex-row justify-between">
    <div class="hidden fixed h-screen top-17 w-16 md:block lg:w-1/4">
      <ProjectSideBar />
    </div>
    <main class="w-full h-fit absolute right-0 px-4 z-0 md:w-[93%] lg:w-3/4">
      <RouterView class="mx-auto max-w-screen-lg" />
    </main>
  </section>
</template>
<script setup lang="ts">
import ProjectSideBar from "../components/ProjectSideBar.vue";
</script>
