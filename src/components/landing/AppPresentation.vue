<template>
  <div class="items-center flex flex-col py-16 pb-24">
    <div class="p-4">
      <img src="@/assets//images/Group 5604.svg" class="w-14" alt="" />
    </div>
    <h3
      class="font-bold text-3xl text-green-800 dark:text-green-100 text-center p-8 pb-12"
    >
      More thant a book note!
    </h3>
    <AnimeOnScroll class="w-3/4">
      <div class="flex">
        <img
          src="@/assets/images/desktop-dark.png"
          class="border-4 rounded-xl w-4/5 transition hover:scale-125 hover:shadow-lg hover:z-10"
          alt=""
        />
        <img
          src="@/assets/images/mobile-dark.png"
          class="border-4 rounded-xl w-1/5 -rotate-12 transition hover:rotate-0 hover:scale-125 hover:shadow-lg"
          alt=""
        />
      </div>
    </AnimeOnScroll>
  </div>
</template>
<script lang="ts" setup>
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
</script>
