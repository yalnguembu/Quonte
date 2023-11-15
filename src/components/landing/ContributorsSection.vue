<template>
  <div class="py-8 px-4">
    <AnimeOnScroll>
      <h3
        class="font-bold text-3xl text-green-800 dark:text-green-100 text-center my-8 lg:my-24"
      >
        <span class="relative">
          Those who give us power
          <img
            src="@/assets/images/Group 5601.svg"
            alt=""
            class="absolute w-12 -top-14 -left-5 -rotate-90 lg:-left-12 lg:-rotate-90"
          />
        </span>
      </h3>
    </AnimeOnScroll>
    <div class="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
      <AnimeOnScroll>
        <div class="p-4 flex items-center justify-center">
          <img
            src="@/assets/images/Vue.js_Logo.svg"
            class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2"
            alt=""
          />
        </div>
      </AnimeOnScroll>
      <AnimeOnScroll>
        <div class="p-4 flex items-center justify-center">
          <img
            src="@/assets/images/Tailwind_CSS_Logo.svg"
            class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2"
            alt=""
          />
        </div>
      </AnimeOnScroll>
      <AnimeOnScroll>
        <div class="p-4 flex items-center justify-center">
          <img
            src="@/assets/images/Unofficial_JavaScript_logo.svg"
            class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2"
            alt=""
          />
        </div>
      </AnimeOnScroll>
      <AnimeOnScroll>
        <div class="p-4 flex items-center justify-center">
          <img
            src="@/assets/images/vite_logo.svg"
            class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2"
            alt=""
          />
        </div>
      </AnimeOnScroll>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
</script>
