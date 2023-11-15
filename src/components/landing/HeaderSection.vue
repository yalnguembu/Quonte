<template>
  <div
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
              class="drop-shadow-3xl w-4/5 rotate-45"
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
          class="text-5xl font-bold text-green-800 dark:text-green-200 mt-4 lg:text-7xl xl:mb-8"
        >
          Take note of useful tips
        </h2>
        <p
          class="text-lg text-gray-800 dark:text-gray-300 mt-4 lg:text-xl xl:mb-12"
        >
          An app that lets you keep track of everything that pops into your
          head, even the most trivial stuff!
        </p>
        <div class="mt-6 grid md:block">
          <RouterLink
            to="/auth/sign-in"
            title=""
            class="w-full px-8 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
            >Get started
          </RouterLink>
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
  </div>
</template>
<script lang="ts" setup>
import TwitterIconVue from "@/components/icons/TwitterIcon.vue";
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
</script>
