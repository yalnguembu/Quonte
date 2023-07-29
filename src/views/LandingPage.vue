<template>
  <div class="w-full bg-white dark:bg-gray-900 text-center lg:text-left">
    <div class="w-full h-fit">
      <header
        class="min-h-[95vh] w-full flex flex-col justify-around px-2 py-4 sm:px-4 md:min-h-fit lg:min-h-[95vh] lg:flex-row-reverse lg:w-4/5 lg:justify-between mx-auto"
      >
        <section
          class="p-8 flex justify-center items-center md:py-12 lg:w-full lg:h-[85vh] lg:p-0"
        >
          <AnimeOnScroll>
            <div
              class="w-4/5 mx-auto flex justify-center items-center relative lg:w-full"
            >
              <img
                src="@/assets/images/logo.svg"
                class="w-full -rotate-45 opacity-60 blur-xl dark:blur-2xl border"
              />
              <div class="w-full flex justify-center items-center absolute">
                <img
                  src="@/assets/images/logo.svg"
                  class="w-full drop-shadow-3xl w-4/5 rotate-45"
                  alt="Quonte logo"
                />
              </div>
            </div>
          </AnimeOnScroll>
        </section>
        <section
          class="h-1/2 px-2 py-6 flex flex-col justify-center sm:mt-12 sm:px-4 md:px-24 md:py-12 lg:p-12 lg:py-16 lg:w-full lg:h-[85vh] lg:pl-0 lg:mt-0"
        >
          <AnimeOnScroll>
            <h2
              class="text-5xl font-bold text-green-900 dark:text-green-200 mt-4 lg:text-7xl"
            >
              Take note of useful tips
            </h2>
            <p class="text-lg text-gray-800 dark:text-gray-300 mt-4 lg:text-xl">
              An app that lets you keep track of everything that pops into your
              head, even the most trivial stuff!
            </p>
            <div class="mt-6 grid md:block">
              <BaseButton
                title="Get started"
                theme="w-full px-8 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
              />
              <a
                target="_blank"
                href="https://twitter.com/yalnguembu"
                class="w-full px-8 py-2 mt-4 rounded border dark:border-green-300 bg-transparent text-green-900 dark:text-green-200 text-center text-lg hover:text:green-800 hover:bg-gray-800 dark:hover:border-transparent md:ml-4 md:mt-0 md:w-fit"
              >
                <TwitterIconVue
                  class="align-middle mr-3 w-5 h-5 dark:fill-green-200"
                />
                Follow us
              </a>
            </div>
          </AnimeOnScroll>
        </section>
      </header>
    </div>
    <main class="min-h-screen max-w-screen-lg mx-auto block">
      <div class="h-full grid gap-x-8 lg:grid-cols-2">
        <AnimeOnScroll>
          <section class="h-full flex items-center justify-center py-8 lg:py-4">
            <img
              src="@/assets/images/not-board.svg"
              class="w-1/2 lg:w-full"
              alt=""
            />
          </section>
        </AnimeOnScroll>
        <AnimeOnScroll>
          <section class="py-12 px-6 sm:px-12">
            <h3 class="font-bold text-3xl dark:text-green-100">
              Let'us try something amazing
            </h3>
            <p class="text-gray-500 dark:text-gray-300 text-lg my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sequi consequatur cumque nisi. Officia deserunt quibusdam
              aspernatur corporis. Repudiandae sunt ab nesciunt eum, tenetur
              repellat iste provident mollitia nulla consequatur.
            </p>
            <BaseButton title="Create note" />
          </section>
        </AnimeOnScroll>
      </div>
      <section class="py-8">
        <AnimeOnScroll>
          <h3
            class="font-bold text-3xl text-green-800 dark:text-green-100 text-center my-24"
          >
            Those who give us power
          </h3>
        </AnimeOnScroll>
        <div class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-4">
          <AnimeOnScroll>
            <div class="p-4 flex items-center justify-center">
              <img
                src="@/assets/images/Vue.js_Logo.svg"
                class="w-1/2 grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          </AnimeOnScroll>
          <AnimeOnScroll>
            <div class="p-4 flex items-center justify-center">
              <img
                src="@/assets/images/Tailwind_CSS_Logo.svg"
                class="w-1/2 grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          </AnimeOnScroll>
          <AnimeOnScroll>
            <div class="p-4 flex items-center justify-center">
              <img
                src="@/assets/images/Unofficial_JavaScript_logo.svg"
                class="w-1/2 grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          </AnimeOnScroll>
          <AnimeOnScroll>
            <div class="p-4 flex items-center justify-center">
              <img
                src="@/assets/images/vite_logo.svg"
                class="w-1/2 grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          </AnimeOnScroll>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts" setup>
import BaseButton from "@/components/button/BaseButton.vue";
import TwitterIconVue from "@/components/icons/TwitterIcon.vue";
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
</script>
