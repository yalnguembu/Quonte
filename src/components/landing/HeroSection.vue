<template>
  <div class="h-full grid gap-x-8 lg:grid-cols-2 lg:w-4/5 mx-auto items-center">
    <AnimeOnScroll>
      <section class="h-full flex items-center justify-center py-8 lg:py-4">
        <img
          src="@/assets/images/not-board.svg"
          class="w-1/2 lg:w-full hover:scale-125 hover:drop-shadow-md hero-image"
          alt=""
        />
      </section>
    </AnimeOnScroll>
    <AnimeOnScroll>
      <section class="py-12 px-6 sm:px-12 lg:px-4">
        <h3
          class="font-bold text-green-800 text-4xl dark:text-gray-100 relative"
        >
          Let'us try something amazing
          <img
            src="@/assets/images/Group 5597.svg"
            alt=""
            class="absolute w-20 h-20 -top-20 -right-5 lg:-right-12 lg:-top-10"
          />
        </h3>
        <p class="text-gray-500 dark:text-gray-300 text-lg my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          sequi consequatur cumque nisi. Officia deserunt quibusdam aspernatur
          corporis. Repudiandae sunt ab nesciunt eum, tenetur repellat iste
          provident mollitia nulla consequatur.
        </p>
        <BaseButton title="Create note" />
      </section>
    </AnimeOnScroll>
  </div>
</template>
<style scoped>
.hero-image:hover {
  transform: rotateY(180deg);
  transition: all;
  transition-duration: 500ms;
}
</style>
<script lang="ts" setup>
import BaseButton from "@/components/button/BaseButton.vue";
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
</script>
